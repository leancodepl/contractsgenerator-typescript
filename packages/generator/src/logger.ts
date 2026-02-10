import { createLogger, isContextualMessage } from "@leancodepl/logger"

function format(level: string, context: Record<string, unknown>, messages: unknown[]) {
  const line = messages.map(m => (isContextualMessage(m) ? m(context) : m)).join(" ")
  return `[${level}] ${line}\n`
}

export const logger = createLogger({
  info: (context, ...messages) => process.stdout.write(format("INFO", context, messages)),
  warn: (context, ...messages) => process.stderr.write(format("WARN", context, messages)),
  error: (context, ...messages) => process.stderr.write(format("ERROR", context, messages)),
  success: (context, ...messages) => process.stdout.write(format("SUCCESS", context, messages)),
  debug: (context, ...messages) => process.stdout.write(format("DEBUG", context, messages)),
  verbose: (context, ...messages) => process.stdout.write(format("VERBOSE", context, messages)),
})
