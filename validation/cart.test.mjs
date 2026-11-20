import assert from 'node:assert/strict';
import test from 'node:test';
import { createCartHandler } from './cart-handler.mjs';

test('SAVE10 changes the stored cart subtotal from 10000 to 9000 cents', async () => {
  const request = createCartHandler({ applyDiscount: process.env.QA_SIDEKICK_MUTATE !== '1' });
  const cartUrl = 'https://cart.example.test/cart';

  const before = request(new Request(cartUrl));
  assert.equal(before.status, 200);
  assert.equal((await before.json()).subtotalCents, 10_000);

  const apply = request(new Request(`${cartUrl}/promos/SAVE10`, { method: 'POST' }));
  assert.equal(apply.status, 200);
  assert.equal((await apply.json()).accepted, true);

  const after = request(new Request(cartUrl));
  assert.equal(after.status, 200);
  assert.equal((await after.json()).subtotalCents, 9_000, 'discounted subtotal after a fresh cart read');
});
