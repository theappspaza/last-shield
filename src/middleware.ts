import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function authMiddleware(req) {
  const token = req.cookies.token;

  if (!token) {
    return NextResponse.redirect('/login'); 
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.user = decoded; 
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect('/login');
  }
}