

export function executeCode(code) {
  try {
    const fn = new Function(code)
    fn()
  } catch (error) {
    console.log(code)
    console.log(error);
  }
}
