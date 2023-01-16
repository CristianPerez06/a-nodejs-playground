// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getExample = async (req: any, res: any, next: any) => {
  try {
    res.status(200).send('success')
  } catch (err) {
    next(err)
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const throwError = async (req: any, res: any, next: any) => {
  try {
    throw new Error('server error')
  } catch (err) {
    next(err)
  }
}
