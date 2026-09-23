import { NextResponse } from 'next/server';
import { PRODUCTS } from '../../../config/site.js';

export async function GET() {
  return NextResponse.json(
    { products: PRODUCTS },
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  );
}
