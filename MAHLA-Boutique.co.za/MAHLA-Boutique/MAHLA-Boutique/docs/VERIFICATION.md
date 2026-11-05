# Verification

Passed automated checks:
- JavaScript syntax.
- Product/size validation, invalid quantities, stock limits, separate size variants, quantity changes, removal and cart clearing.
- Subtotal, delivery fee, free-delivery threshold, totals and ZAR formatting.
- Recovery from malformed stored data.
- Internal page and asset links; descriptive alternatives on meaningful images.

Observed in browser:
- Homepage renders with local editorial images and large typography.
- Dress size selection adds to bag and shows confirmation.
- Quantity changes update totals; two R1,290 dresses produce R2,580 with complimentary delivery.
- Cart persists across pages.
- Complete demo checkout using sample data produces reference/total and clears the cart.
- Search for charcoal returns the suit only.
- Women + maximum R800 + descending price returns trousers at R790 and shirt at R690.
- Mobile menu opens and closes.
- 390 px phone and 768 px tablet frames have no horizontal overflow (375/753 px content area after scrollbar).

Limits:
- Not a real payment, order, email or inventory backend.
- No real address, catalogue, contact details or Google API key supplied.
- Official keyed Google Maps route requires the owner's key and has not been live-tested.
- No full assistive-technology audit or physical-device testing performed.
