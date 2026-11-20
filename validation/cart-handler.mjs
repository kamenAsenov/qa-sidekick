export function createCartHandler({ applyDiscount = true } = {}) {
  let subtotalCents = 10_000;

  return (request) => {
    const route = `${request.method} ${new URL(request.url).pathname}`;

    if (route === 'GET /cart') {
      return Response.json({ subtotalCents });
    }

    if (route === 'POST /cart/promos/SAVE10') {
      if (applyDiscount) subtotalCents = 9_000;
      return Response.json({ accepted: true });
    }

    return Response.json({ error: 'Route not found' }, { status: 404 });
  };
}
