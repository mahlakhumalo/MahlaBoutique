document.querySelectorAll('[data-load-map]').forEach(button=>button.addEventListener('click',()=>{
  const target=button.closest('.map-shell');
  const key=MAHLA_CONFIG.googleMapsApiKey.trim();
  const query=encodeURIComponent(MAHLA_CONFIG.mapQuery);
  const frame=document.createElement('iframe');
  frame.title='Interactive Google map of Cape Town, South Africa';
  frame.src=key?`https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=${query}&zoom=${MAHLA_CONFIG.mapZoom}`:`https://maps.google.com/maps?q=${query}&z=${MAHLA_CONFIG.mapZoom}&output=embed`;
  frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';
  target.replaceChildren(frame);
}));
