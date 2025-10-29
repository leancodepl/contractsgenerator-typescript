import { ensureNotEmpty } from "@leancodepl/utils"
import { leancode } from "./protocol"
import { SchemaInterface } from "./schemaInterface"
import { createType } from "./types"

export class SchemaTopic extends SchemaInterface {
  override kind = schemaTopicKind

  notifications
  topicType

  constructor({ statement }: { statement: leancode.contracts.IStatement }) {
    super({ statement })

    this.notifications =
      statement.topic?.notifications?.map(notification => new SchemaNotification({ notification })) ?? []
    this.topicType = createType({ type: { internal: { name: this.id } } })
  }
}

export class SchemaNotification {
  name
  notificationType

  constructor({ notification }: { notification: leancode.contracts.INotificationTypeRef }) {
    this.name = ensureNotEmpty(notification.tag)
    this.notificationType = createType({ type: ensureNotEmpty(notification.type) })
  }
}

const schemaTopicKind = "topic"

export function isSchemaTopic(schemaInterface: SchemaInterface): schemaInterface is SchemaTopic {
  return schemaInterface.kind === schemaTopicKind
}
