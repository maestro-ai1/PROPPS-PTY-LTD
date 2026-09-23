(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      {
        name: "search_products",
        description: "Search PROPPS PTY LTD prop money products by keyword, category, or price",
        inputSchema: { type: "object", properties: { query: { type: "string" }, category: { type: "string" }, max_price: { type: "number" } } },
        execute: async ({ query, category, max_price }) => {
          const params = new URLSearchParams();
          if (query) params.set('q', query);
          if (category) params.set('category', category);
          if (max_price) params.set('max_price', max_price);
          const res = await fetch(`https://proppsptyltd.com.au/api/search?${params}`);
          return res.json();
        }
      },
      {
        name: "browse_products",
        description: "Browse cinema props by category",
        inputSchema: { type: "object", properties: { category: { type: "string" } } },
        execute: async ({ category }) => {
          const url = category ? `https://proppsptyltd.com.au/shop/${category}/` : `https://proppsptyltd.com.au/shop/`;
          window.location.href = url;
          return { url };
        }
      },
      {
        name: "order_via_whatsapp",
        description: "Initiate a WhatsApp prop order. Minimum order $300 AUD. Human completes.",
        inputSchema: { type: "object", properties: { message: { type: "string" } } },
        execute: async ({ message }) => {
          const url = message ? `https://wa.me/61420128746?text=${encodeURIComponent(message)}` : `https://wa.me/61420128746`;
          window.open(url, '_blank');
          return { url };
        }
      },
      {
        name: "get_wholesale_info",
        description: "Get studio wholesale bulk pricing tiers",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = `https://proppsptyltd.com.au/wholesale/`;
          return { url: `https://proppsptyltd.com.au/wholesale/` };
        }
      },
      {
        name: "contact",
        description: "Contact PROPPS PTY LTD Melbourne fulfillment desk",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = `https://proppsptyltd.com.au/contact/`;
          return { url: `https://proppsptyltd.com.au/contact/` };
        }
      }
    ]
  });
})();
