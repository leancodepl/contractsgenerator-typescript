import { ReactNode } from "react"
import { leancode } from "@leancodepl/contractsgenerator-typescript-schema"
import { dateFormatters } from "./dateFormatter"
import { otherTypeFormatters } from "./otherTypeFormatter"
import { simpleTypeFormatters } from "./simpleTypeFormatter"

 
export const defaultFormatters: Record<leancode.contracts.KnownType, (value: any) => ReactNode> = {
    ...simpleTypeFormatters,
    ...dateFormatters,
    ...otherTypeFormatters,
} as const
