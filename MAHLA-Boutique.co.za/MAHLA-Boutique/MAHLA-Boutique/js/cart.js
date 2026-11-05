/* Cart data is stored on this browser; payments and orders are not sent. */
(function () {
  const KEY = 'mahla-cart-v1';
  let memory = [];
  function product(id) { return PRODUCTS.find(p => p.id === id); }
  function clean(value) {
    if (!Array.isArray(value)) return [];
    const rows = [];
    value.forEach(row => {
      const p = product(row && row.id);
      if (!p || !p.sizes.includes(row.size) || !Number.isFinite(row.qty)) return;
      const qty = Math.min(p.stock, Math.max(0, Math.floor(row.qty)));
      if (!qty) return;
      const found = rows.find(r => r.id === p.id && r.size === row.size);
      if (found) found.qty = Math.min(p.stock, found.qty + qty);
      else rows.push({id:p.id, size:row.size, qty});
    });
    return rows;
  }
  function read() { try { return clean(JSON.parse(localStorage.getItem(KEY) || '[]')); } catch { return memory; } }
  function write(rows) {
    memory = clean(rows);
    try { localStorage.setItem(KEY, JSON.stringify(memory)); } catch { window.dispatchEvent(new Event('storage-unavailable')); }
    window.dispatchEvent(new Event('cart-updated'));
  }
  function add(id, size, qty=1) {
    const p=product(id);
    if (!p || !p.sizes.includes(size) || !Number.isInteger(qty) || qty < 1) return false;
    const rows=read(), row=rows.find(r=>r.id===id && r.size===size);
    if ((row ? row.qty : 0) + qty > p.stock) return false;
    if(row) row.qty+=qty; else rows.push({id,size,qty});
    write(rows); return true;
  }
  function update(id,size,qty) {
    const p=product(id); if(!p) return;
    write(read().map(r=>r.id===id && r.size===size? {...r,qty:Math.min(p.stock,Math.max(0,Number(qty)||0))}:r));
  }
  function totals() {
    const rows=read(), count=rows.reduce((n,r)=>n+r.qty,0);
    const subtotal=rows.reduce((n,r)=>n+product(r.id).price*r.qty,0);
    const delivery=subtotal===0 || subtotal>=MAHLA_CONFIG.freeDeliveryThreshold?0:MAHLA_CONFIG.deliveryFee;
    return {count,subtotal,delivery,total:subtotal+delivery};
  }
  window.Cart={read,add,update,totals,clear:()=>write([]),product};
  window.money=n=>'R'+Number(n).toLocaleString('en-GB',{minimumFractionDigits:2,maximumFractionDigits:2});
})();
