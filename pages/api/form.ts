export default function handler(req: any, res: any) {
  const { query } = req.body

  try {
    query ? res.redirect(307, `/search/${query}`) : res.redirect(307, '/');
  } catch {
    res.status(500).send({ error: 'Failed to fetch data' })
  }
}
