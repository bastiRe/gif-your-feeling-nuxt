export default function({ store, redirect, route }) {
  // If the user is not authenticated
  if (!store.state.user.name && route.name !== 'intro') {
    return redirect('/intro')
  }
}
