export function getPartialText(test: string): string {
  return Text.split('').filter((_character, index) => index % 2 === 0).join('')
}