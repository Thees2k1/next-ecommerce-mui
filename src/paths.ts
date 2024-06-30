export const paths = {
    home: '/',
    auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
    products: '/products',
    cart: '/cart',
    errors: { notFound: '/errors/not-found' },
  } as const;