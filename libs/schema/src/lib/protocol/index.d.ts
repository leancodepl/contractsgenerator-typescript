import * as $protobuf from "protobufjs"
import Long = require("long")

/** Namespace leancode. */
export namespace leancode {
  /** Namespace contracts. */
  namespace contracts {
    /** KnownType enum. */
    enum KnownType {
      /** Object value */
      Object = 0,

      /** String value */
      String = 1,

      /** Guid value */
      Guid = 3,

      /** Uri value */
      Uri = 4,

      /** Boolean value */
      Boolean = 5,

      /** UInt8 value */
      UInt8 = 100,

      /** Int8 value */
      Int8 = 101,

      /** Int16 value */
      Int16 = 102,

      /** UInt16 value */
      UInt16 = 103,

      /** Int32 value */
      Int32 = 104,

      /** UInt32 value */
      UInt32 = 105,

      /** Int64 value */
      Int64 = 106,

      /** UInt64 value */
      UInt64 = 107,

      /** Float32 value */
      Float32 = 150,

      /** Float64 value */
      Float64 = 151,

      /** DateOnly value */
      DateOnly = 200,

      /** TimeOnly value */
      TimeOnly = 201,

      /** DateTimeOffset value */
      DateTimeOffset = 202,

      /** TimeSpan value */
      TimeSpan = 203,

      /** DateTime value */
      DateTime = 204,

      /** Array value */
      Array = 300,

      /** Map value */
      Map = 301,

      /** Query value */
      Query = 1000,

      /** Command value */
      Command = 1001,

      /** CommandResult value */
      CommandResult = 1002,

      /** Operation value */
      Operation = 1003,

      /** Binary value */
      Binary = 1004,

      /** Topic value */
      Topic = 1005,

      /** Attribute value */
      Attribute = 1100,

      /** AuthorizeWhenAttribute value */
      AuthorizeWhenAttribute = 1101,

      /** AuthorizeWhenHasAnyOfAttribute value */
      AuthorizeWhenHasAnyOfAttribute = 1102,
    }

    /**
     * Properties of a ValueRef.
     * @deprecated Use leancode.contracts.ValueRef.$Properties instead.
     */
    interface IValueRef extends leancode.contracts.ValueRef.$Properties {}

    /** Represents a ValueRef. */
    class ValueRef {
      /**
       * Constructs a new ValueRef.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.ValueRef.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** ValueRef null. */
      null?: leancode.contracts.ValueRef.Null.$Properties | null

      /** ValueRef number. */
      number?: leancode.contracts.ValueRef.Number.$Properties | null

      /** ValueRef floatingPoint. */
      floatingPoint?: leancode.contracts.ValueRef.FloatingPointNumber.$Properties | null

      /** ValueRef string. */
      string?: leancode.contracts.ValueRef.String.$Properties | null

      /** ValueRef bool. */
      bool?: leancode.contracts.ValueRef.Boolean.$Properties | null

      /** ValueRef value. */
      value?: "null" | "number" | "floatingPoint" | "string" | "bool"

      /**
       * Decodes a ValueRef message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.ValueRef & leancode.contracts.ValueRef.$Shape} ValueRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.ValueRef & leancode.contracts.ValueRef.$Shape

      /**
       * Decodes a ValueRef message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.ValueRef & leancode.contracts.ValueRef.$Shape} ValueRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.ValueRef & leancode.contracts.ValueRef.$Shape

      /**
       * Verifies a ValueRef message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a ValueRef message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ValueRef
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.ValueRef

      /**
       * Creates a plain object from a ValueRef message. Also converts values to other types if specified.
       * @param message ValueRef
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(
        message: leancode.contracts.ValueRef,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any }

      /**
       * Converts this ValueRef to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for ValueRef
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace ValueRef {
      /** Properties of a ValueRef. */
      interface $Properties {
        /** ValueRef null */
        null?: leancode.contracts.ValueRef.Null.$Properties | null

        /** ValueRef number */
        number?: leancode.contracts.ValueRef.Number.$Properties | null

        /** ValueRef floatingPoint */
        floatingPoint?: leancode.contracts.ValueRef.FloatingPointNumber.$Properties | null

        /** ValueRef string */
        string?: leancode.contracts.ValueRef.String.$Properties | null

        /** ValueRef bool */
        bool?: leancode.contracts.ValueRef.Boolean.$Properties | null

        /** ValueRef value */
        value?: "null" | "number" | "floatingPoint" | "string" | "bool"

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Narrowed shape of a ValueRef. */
      type $Shape = {
        null?: leancode.contracts.ValueRef.Null.$Shape | null
        number?: leancode.contracts.ValueRef.Number.$Shape | null
        floatingPoint?: leancode.contracts.ValueRef.FloatingPointNumber.$Shape | null
        string?: leancode.contracts.ValueRef.String.$Shape | null
        bool?: leancode.contracts.ValueRef.Boolean.$Shape | null
        $unknowns?: Uint8Array[]
      } & (
        | { value?: undefined; null?: null; number?: null; floatingPoint?: null; string?: null; bool?: null }
        | {
            value?: "null"
            null: leancode.contracts.ValueRef.Null.$Shape
            number?: null
            floatingPoint?: null
            string?: null
            bool?: null
          }
        | {
            value?: "number"
            null?: null
            number: leancode.contracts.ValueRef.Number.$Shape
            floatingPoint?: null
            string?: null
            bool?: null
          }
        | {
            value?: "floatingPoint"
            null?: null
            number?: null
            floatingPoint: leancode.contracts.ValueRef.FloatingPointNumber.$Shape
            string?: null
            bool?: null
          }
        | {
            value?: "string"
            null?: null
            number?: null
            floatingPoint?: null
            string: leancode.contracts.ValueRef.String.$Shape
            bool?: null
          }
        | {
            value?: "bool"
            null?: null
            number?: null
            floatingPoint?: null
            string?: null
            bool: leancode.contracts.ValueRef.Boolean.$Shape
          }
      )

      /**
       * Properties of a Null.
       * @deprecated Use leancode.contracts.ValueRef.Null.$Properties instead.
       */
      interface INull extends leancode.contracts.ValueRef.Null.$Properties {}

      /** Represents a Null. */
      class Null {
        /**
         * Constructs a new Null.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.ValueRef.Null.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /**
         * Decodes a Null message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.ValueRef.Null & leancode.contracts.ValueRef.Null.$Shape} Null
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.ValueRef.Null & leancode.contracts.ValueRef.Null.$Shape

        /**
         * Decodes a Null message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.ValueRef.Null & leancode.contracts.ValueRef.Null.$Shape} Null
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.ValueRef.Null & leancode.contracts.ValueRef.Null.$Shape

        /**
         * Verifies a Null message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a Null message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Null
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.ValueRef.Null

        /**
         * Creates a plain object from a Null message. Also converts values to other types if specified.
         * @param message Null
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.ValueRef.Null,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Null to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Null
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Null {
        /** Properties of a Null. */
        interface $Properties {
          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a Null. */
        type $Shape = leancode.contracts.ValueRef.Null.$Properties
      }

      /**
       * Properties of a Number.
       * @deprecated Use leancode.contracts.ValueRef.Number.$Properties instead.
       */
      interface INumber extends leancode.contracts.ValueRef.Number.$Properties {}

      /** Represents a Number. */
      class Number {
        /**
         * Constructs a new Number.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.ValueRef.Number.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Number value. */
        value: number | Long

        /**
         * Decodes a Number message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.ValueRef.Number & leancode.contracts.ValueRef.Number.$Shape} Number
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.ValueRef.Number & leancode.contracts.ValueRef.Number.$Shape

        /**
         * Decodes a Number message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.ValueRef.Number & leancode.contracts.ValueRef.Number.$Shape} Number
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.ValueRef.Number & leancode.contracts.ValueRef.Number.$Shape

        /**
         * Verifies a Number message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a Number message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Number
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.ValueRef.Number

        /**
         * Creates a plain object from a Number message. Also converts values to other types if specified.
         * @param message Number
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.ValueRef.Number,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Number to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Number
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Number {
        /** Properties of a Number. */
        interface $Properties {
          /** Number value */
          value?: number | Long | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a Number. */
        type $Shape = leancode.contracts.ValueRef.Number.$Properties
      }

      /**
       * Properties of a FloatingPointNumber.
       * @deprecated Use leancode.contracts.ValueRef.FloatingPointNumber.$Properties instead.
       */
      interface IFloatingPointNumber extends leancode.contracts.ValueRef.FloatingPointNumber.$Properties {}

      /** Represents a FloatingPointNumber. */
      class FloatingPointNumber {
        /**
         * Constructs a new FloatingPointNumber.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.ValueRef.FloatingPointNumber.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** FloatingPointNumber value. */
        value: number

        /**
         * Decodes a FloatingPointNumber message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.ValueRef.FloatingPointNumber & leancode.contracts.ValueRef.FloatingPointNumber.$Shape} FloatingPointNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.ValueRef.FloatingPointNumber & leancode.contracts.ValueRef.FloatingPointNumber.$Shape

        /**
         * Decodes a FloatingPointNumber message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.ValueRef.FloatingPointNumber & leancode.contracts.ValueRef.FloatingPointNumber.$Shape} FloatingPointNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.ValueRef.FloatingPointNumber & leancode.contracts.ValueRef.FloatingPointNumber.$Shape

        /**
         * Verifies a FloatingPointNumber message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a FloatingPointNumber message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FloatingPointNumber
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.ValueRef.FloatingPointNumber

        /**
         * Creates a plain object from a FloatingPointNumber message. Also converts values to other types if specified.
         * @param message FloatingPointNumber
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.ValueRef.FloatingPointNumber,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this FloatingPointNumber to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for FloatingPointNumber
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace FloatingPointNumber {
        /** Properties of a FloatingPointNumber. */
        interface $Properties {
          /** FloatingPointNumber value */
          value?: number | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a FloatingPointNumber. */
        type $Shape = leancode.contracts.ValueRef.FloatingPointNumber.$Properties
      }

      /**
       * Properties of a String.
       * @deprecated Use leancode.contracts.ValueRef.String.$Properties instead.
       */
      interface IString extends leancode.contracts.ValueRef.String.$Properties {}

      /** Represents a String. */
      class String {
        /**
         * Constructs a new String.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.ValueRef.String.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** String value. */
        value: string

        /**
         * Decodes a String message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.ValueRef.String & leancode.contracts.ValueRef.String.$Shape} String
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.ValueRef.String & leancode.contracts.ValueRef.String.$Shape

        /**
         * Decodes a String message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.ValueRef.String & leancode.contracts.ValueRef.String.$Shape} String
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.ValueRef.String & leancode.contracts.ValueRef.String.$Shape

        /**
         * Verifies a String message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a String message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns String
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.ValueRef.String

        /**
         * Creates a plain object from a String message. Also converts values to other types if specified.
         * @param message String
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.ValueRef.String,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this String to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for String
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace String {
        /** Properties of a String. */
        interface $Properties {
          /** String value */
          value?: string | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a String. */
        type $Shape = leancode.contracts.ValueRef.String.$Properties
      }

      /**
       * Properties of a Boolean.
       * @deprecated Use leancode.contracts.ValueRef.Boolean.$Properties instead.
       */
      interface IBoolean extends leancode.contracts.ValueRef.Boolean.$Properties {}

      /** Represents a Boolean. */
      class Boolean {
        /**
         * Constructs a new Boolean.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.ValueRef.Boolean.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Boolean value. */
        value: boolean

        /**
         * Decodes a Boolean message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.ValueRef.Boolean & leancode.contracts.ValueRef.Boolean.$Shape} Boolean
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.ValueRef.Boolean & leancode.contracts.ValueRef.Boolean.$Shape

        /**
         * Decodes a Boolean message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.ValueRef.Boolean & leancode.contracts.ValueRef.Boolean.$Shape} Boolean
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.ValueRef.Boolean & leancode.contracts.ValueRef.Boolean.$Shape

        /**
         * Verifies a Boolean message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a Boolean message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Boolean
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.ValueRef.Boolean

        /**
         * Creates a plain object from a Boolean message. Also converts values to other types if specified.
         * @param message Boolean
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.ValueRef.Boolean,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Boolean to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Boolean
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Boolean {
        /** Properties of a Boolean. */
        interface $Properties {
          /** Boolean value */
          value?: boolean | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a Boolean. */
        type $Shape = leancode.contracts.ValueRef.Boolean.$Properties
      }
    }

    /**
     * Properties of a TypeRef.
     * @deprecated Use leancode.contracts.TypeRef.$Properties instead.
     */
    interface ITypeRef extends leancode.contracts.TypeRef.$Properties {}

    /** Represents a TypeRef. */
    class TypeRef {
      /**
       * Constructs a new TypeRef.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.TypeRef.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** TypeRef nullable. */
      nullable: boolean

      /** TypeRef generic. */
      generic?: leancode.contracts.TypeRef.Generic.$Properties | null

      /** TypeRef internal. */
      internal?: leancode.contracts.TypeRef.Internal.$Properties | null

      /** TypeRef known. */
      known?: leancode.contracts.TypeRef.Known.$Properties | null

      /** TypeRef type. */
      type?: "generic" | "internal" | "known"

      /**
       * Decodes a TypeRef message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.TypeRef & leancode.contracts.TypeRef.$Shape} TypeRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.TypeRef & leancode.contracts.TypeRef.$Shape

      /**
       * Decodes a TypeRef message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.TypeRef & leancode.contracts.TypeRef.$Shape} TypeRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.TypeRef & leancode.contracts.TypeRef.$Shape

      /**
       * Verifies a TypeRef message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a TypeRef message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns TypeRef
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.TypeRef

      /**
       * Creates a plain object from a TypeRef message. Also converts values to other types if specified.
       * @param message TypeRef
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(message: leancode.contracts.TypeRef, options?: $protobuf.IConversionOptions): { [k: string]: any }

      /**
       * Converts this TypeRef to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for TypeRef
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace TypeRef {
      /** Properties of a TypeRef. */
      interface $Properties {
        /** TypeRef nullable */
        nullable?: boolean | null

        /** TypeRef generic */
        generic?: leancode.contracts.TypeRef.Generic.$Properties | null

        /** TypeRef internal */
        internal?: leancode.contracts.TypeRef.Internal.$Properties | null

        /** TypeRef known */
        known?: leancode.contracts.TypeRef.Known.$Properties | null

        /** TypeRef type */
        type?: "generic" | "internal" | "known"

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Narrowed shape of a TypeRef. */
      type $Shape = {
        nullable?: boolean | null
        generic?: leancode.contracts.TypeRef.Generic.$Shape | null
        internal?: leancode.contracts.TypeRef.Internal.$Shape | null
        known?: leancode.contracts.TypeRef.Known.$Shape | null
        $unknowns?: Uint8Array[]
      } & (
        | { type?: undefined; generic?: null; internal?: null; known?: null }
        | { type?: "generic"; generic: leancode.contracts.TypeRef.Generic.$Shape; internal?: null; known?: null }
        | { type?: "internal"; generic?: null; internal: leancode.contracts.TypeRef.Internal.$Shape; known?: null }
        | { type?: "known"; generic?: null; internal?: null; known: leancode.contracts.TypeRef.Known.$Shape }
      )

      /**
       * Properties of a Generic.
       * @deprecated Use leancode.contracts.TypeRef.Generic.$Properties instead.
       */
      interface IGeneric extends leancode.contracts.TypeRef.Generic.$Properties {}

      /** Represents a Generic. */
      class Generic {
        /**
         * Constructs a new Generic.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.TypeRef.Generic.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Generic name. */
        name: string

        /**
         * Decodes a Generic message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.TypeRef.Generic & leancode.contracts.TypeRef.Generic.$Shape} Generic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.TypeRef.Generic & leancode.contracts.TypeRef.Generic.$Shape

        /**
         * Decodes a Generic message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.TypeRef.Generic & leancode.contracts.TypeRef.Generic.$Shape} Generic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.TypeRef.Generic & leancode.contracts.TypeRef.Generic.$Shape

        /**
         * Verifies a Generic message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a Generic message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Generic
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.TypeRef.Generic

        /**
         * Creates a plain object from a Generic message. Also converts values to other types if specified.
         * @param message Generic
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.TypeRef.Generic,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Generic to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Generic
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Generic {
        /** Properties of a Generic. */
        interface $Properties {
          /** Generic name */
          name?: string | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a Generic. */
        type $Shape = leancode.contracts.TypeRef.Generic.$Properties
      }

      /**
       * Properties of an Internal.
       * @deprecated Use leancode.contracts.TypeRef.Internal.$Properties instead.
       */
      interface IInternal extends leancode.contracts.TypeRef.Internal.$Properties {}

      /** Represents an Internal. */
      class Internal {
        /**
         * Constructs a new Internal.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.TypeRef.Internal.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Internal name. */
        name: string

        /** Internal arguments. */
        arguments: leancode.contracts.TypeRef.$Properties[]

        /**
         * Decodes an Internal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.TypeRef.Internal & leancode.contracts.TypeRef.Internal.$Shape} Internal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.TypeRef.Internal & leancode.contracts.TypeRef.Internal.$Shape

        /**
         * Decodes an Internal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.TypeRef.Internal & leancode.contracts.TypeRef.Internal.$Shape} Internal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.TypeRef.Internal & leancode.contracts.TypeRef.Internal.$Shape

        /**
         * Verifies an Internal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates an Internal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Internal
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.TypeRef.Internal

        /**
         * Creates a plain object from an Internal message. Also converts values to other types if specified.
         * @param message Internal
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.TypeRef.Internal,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Internal to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Internal
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Internal {
        /** Properties of an Internal. */
        interface $Properties {
          /** Internal name */
          name?: string | null

          /** Internal arguments */
          arguments?: leancode.contracts.TypeRef.$Properties[] | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of an Internal. */
        type $Shape = {
          name?: string | null
          arguments?: leancode.contracts.TypeRef.$Shape[] | null
          $unknowns?: Uint8Array[]
        }
      }

      /**
       * Properties of a Known.
       * @deprecated Use leancode.contracts.TypeRef.Known.$Properties instead.
       */
      interface IKnown extends leancode.contracts.TypeRef.Known.$Properties {}

      /** Represents a Known. */
      class Known {
        /**
         * Constructs a new Known.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.TypeRef.Known.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Known type. */
        type: leancode.contracts.KnownType

        /** Known arguments. */
        arguments: leancode.contracts.TypeRef.$Properties[]

        /**
         * Decodes a Known message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.TypeRef.Known & leancode.contracts.TypeRef.Known.$Shape} Known
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.TypeRef.Known & leancode.contracts.TypeRef.Known.$Shape

        /**
         * Decodes a Known message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.TypeRef.Known & leancode.contracts.TypeRef.Known.$Shape} Known
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.TypeRef.Known & leancode.contracts.TypeRef.Known.$Shape

        /**
         * Verifies a Known message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a Known message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Known
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.TypeRef.Known

        /**
         * Creates a plain object from a Known message. Also converts values to other types if specified.
         * @param message Known
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.TypeRef.Known,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Known to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Known
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Known {
        /** Properties of a Known. */
        interface $Properties {
          /** Known type */
          type?: leancode.contracts.KnownType | null

          /** Known arguments */
          arguments?: leancode.contracts.TypeRef.$Properties[] | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a Known. */
        type $Shape = {
          type?: leancode.contracts.KnownType | null
          arguments?: leancode.contracts.TypeRef.$Shape[] | null
          $unknowns?: Uint8Array[]
        }
      }
    }

    /**
     * Properties of a NotificationTypeRef.
     * @deprecated Use leancode.contracts.NotificationTypeRef.$Properties instead.
     */
    interface INotificationTypeRef extends leancode.contracts.NotificationTypeRef.$Properties {}

    /** Represents a NotificationTypeRef. */
    class NotificationTypeRef {
      /**
       * Constructs a new NotificationTypeRef.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.NotificationTypeRef.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** NotificationTypeRef type. */
      type?: leancode.contracts.TypeRef.$Properties | null

      /** NotificationTypeRef tag. */
      tag: string

      /**
       * Decodes a NotificationTypeRef message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.NotificationTypeRef & leancode.contracts.NotificationTypeRef.$Shape} NotificationTypeRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.NotificationTypeRef & leancode.contracts.NotificationTypeRef.$Shape

      /**
       * Decodes a NotificationTypeRef message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.NotificationTypeRef & leancode.contracts.NotificationTypeRef.$Shape} NotificationTypeRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.NotificationTypeRef & leancode.contracts.NotificationTypeRef.$Shape

      /**
       * Verifies a NotificationTypeRef message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a NotificationTypeRef message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns NotificationTypeRef
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.NotificationTypeRef

      /**
       * Creates a plain object from a NotificationTypeRef message. Also converts values to other types if specified.
       * @param message NotificationTypeRef
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(
        message: leancode.contracts.NotificationTypeRef,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any }

      /**
       * Converts this NotificationTypeRef to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for NotificationTypeRef
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace NotificationTypeRef {
      /** Properties of a NotificationTypeRef. */
      interface $Properties {
        /** NotificationTypeRef type */
        type?: leancode.contracts.TypeRef.$Properties | null

        /** NotificationTypeRef tag */
        tag?: string | null

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Shape of a NotificationTypeRef. */
      type $Shape = {
        type?: leancode.contracts.TypeRef.$Shape | null
        tag?: string | null
        $unknowns?: Uint8Array[]
      }
    }

    /**
     * Properties of a GenericParameter.
     * @deprecated Use leancode.contracts.GenericParameter.$Properties instead.
     */
    interface IGenericParameter extends leancode.contracts.GenericParameter.$Properties {}

    /** Represents a GenericParameter. */
    class GenericParameter {
      /**
       * Constructs a new GenericParameter.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.GenericParameter.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** GenericParameter name. */
      name: string

      /**
       * Decodes a GenericParameter message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.GenericParameter & leancode.contracts.GenericParameter.$Shape} GenericParameter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.GenericParameter & leancode.contracts.GenericParameter.$Shape

      /**
       * Decodes a GenericParameter message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.GenericParameter & leancode.contracts.GenericParameter.$Shape} GenericParameter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.GenericParameter & leancode.contracts.GenericParameter.$Shape

      /**
       * Verifies a GenericParameter message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a GenericParameter message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns GenericParameter
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.GenericParameter

      /**
       * Creates a plain object from a GenericParameter message. Also converts values to other types if specified.
       * @param message GenericParameter
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(
        message: leancode.contracts.GenericParameter,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any }

      /**
       * Converts this GenericParameter to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for GenericParameter
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace GenericParameter {
      /** Properties of a GenericParameter. */
      interface $Properties {
        /** GenericParameter name */
        name?: string | null

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Shape of a GenericParameter. */
      type $Shape = leancode.contracts.GenericParameter.$Properties
    }

    /**
     * Properties of an AttributeArgument.
     * @deprecated Use leancode.contracts.AttributeArgument.$Properties instead.
     */
    interface IAttributeArgument extends leancode.contracts.AttributeArgument.$Properties {}

    /** Represents an AttributeArgument. */
    class AttributeArgument {
      /**
       * Constructs a new AttributeArgument.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.AttributeArgument.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** AttributeArgument positional. */
      positional?: leancode.contracts.AttributeArgument.Positional.$Properties | null

      /** AttributeArgument named. */
      named?: leancode.contracts.AttributeArgument.Named.$Properties | null

      /** AttributeArgument attribute. */
      attribute?: "positional" | "named"

      /**
       * Decodes an AttributeArgument message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.AttributeArgument & leancode.contracts.AttributeArgument.$Shape} AttributeArgument
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.AttributeArgument & leancode.contracts.AttributeArgument.$Shape

      /**
       * Decodes an AttributeArgument message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.AttributeArgument & leancode.contracts.AttributeArgument.$Shape} AttributeArgument
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.AttributeArgument & leancode.contracts.AttributeArgument.$Shape

      /**
       * Verifies an AttributeArgument message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates an AttributeArgument message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns AttributeArgument
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.AttributeArgument

      /**
       * Creates a plain object from an AttributeArgument message. Also converts values to other types if specified.
       * @param message AttributeArgument
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(
        message: leancode.contracts.AttributeArgument,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any }

      /**
       * Converts this AttributeArgument to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for AttributeArgument
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace AttributeArgument {
      /** Properties of an AttributeArgument. */
      interface $Properties {
        /** AttributeArgument positional */
        positional?: leancode.contracts.AttributeArgument.Positional.$Properties | null

        /** AttributeArgument named */
        named?: leancode.contracts.AttributeArgument.Named.$Properties | null

        /** AttributeArgument attribute */
        attribute?: "positional" | "named"

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Narrowed shape of an AttributeArgument. */
      type $Shape = {
        positional?: leancode.contracts.AttributeArgument.Positional.$Shape | null
        named?: leancode.contracts.AttributeArgument.Named.$Shape | null
        $unknowns?: Uint8Array[]
      } & (
        | { attribute?: undefined; positional?: null; named?: null }
        | { attribute?: "positional"; positional: leancode.contracts.AttributeArgument.Positional.$Shape; named?: null }
        | { attribute?: "named"; positional?: null; named: leancode.contracts.AttributeArgument.Named.$Shape }
      )

      /**
       * Properties of a Positional.
       * @deprecated Use leancode.contracts.AttributeArgument.Positional.$Properties instead.
       */
      interface IPositional extends leancode.contracts.AttributeArgument.Positional.$Properties {}

      /** Represents a Positional. */
      class Positional {
        /**
         * Constructs a new Positional.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.AttributeArgument.Positional.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Positional position. */
        position: number

        /** Positional value. */
        value?: leancode.contracts.ValueRef.$Properties | null

        /**
         * Decodes a Positional message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.AttributeArgument.Positional & leancode.contracts.AttributeArgument.Positional.$Shape} Positional
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.AttributeArgument.Positional & leancode.contracts.AttributeArgument.Positional.$Shape

        /**
         * Decodes a Positional message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.AttributeArgument.Positional & leancode.contracts.AttributeArgument.Positional.$Shape} Positional
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.AttributeArgument.Positional & leancode.contracts.AttributeArgument.Positional.$Shape

        /**
         * Verifies a Positional message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a Positional message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Positional
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.AttributeArgument.Positional

        /**
         * Creates a plain object from a Positional message. Also converts values to other types if specified.
         * @param message Positional
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.AttributeArgument.Positional,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Positional to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Positional
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Positional {
        /** Properties of a Positional. */
        interface $Properties {
          /** Positional position */
          position?: number | null

          /** Positional value */
          value?: leancode.contracts.ValueRef.$Properties | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a Positional. */
        type $Shape = {
          position?: number | null
          value?: leancode.contracts.ValueRef.$Shape | null
          $unknowns?: Uint8Array[]
        }
      }

      /**
       * Properties of a Named.
       * @deprecated Use leancode.contracts.AttributeArgument.Named.$Properties instead.
       */
      interface INamed extends leancode.contracts.AttributeArgument.Named.$Properties {}

      /** Represents a Named. */
      class Named {
        /**
         * Constructs a new Named.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.AttributeArgument.Named.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Named name. */
        name: string

        /** Named value. */
        value?: leancode.contracts.ValueRef.$Properties | null

        /**
         * Decodes a Named message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.AttributeArgument.Named & leancode.contracts.AttributeArgument.Named.$Shape} Named
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.AttributeArgument.Named & leancode.contracts.AttributeArgument.Named.$Shape

        /**
         * Decodes a Named message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.AttributeArgument.Named & leancode.contracts.AttributeArgument.Named.$Shape} Named
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.AttributeArgument.Named & leancode.contracts.AttributeArgument.Named.$Shape

        /**
         * Verifies a Named message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a Named message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Named
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.AttributeArgument.Named

        /**
         * Creates a plain object from a Named message. Also converts values to other types if specified.
         * @param message Named
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.AttributeArgument.Named,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Named to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Named
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Named {
        /** Properties of a Named. */
        interface $Properties {
          /** Named name */
          name?: string | null

          /** Named value */
          value?: leancode.contracts.ValueRef.$Properties | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a Named. */
        type $Shape = {
          name?: string | null
          value?: leancode.contracts.ValueRef.$Shape | null
          $unknowns?: Uint8Array[]
        }
      }
    }

    /**
     * Properties of an AttributeRef.
     * @deprecated Use leancode.contracts.AttributeRef.$Properties instead.
     */
    interface IAttributeRef extends leancode.contracts.AttributeRef.$Properties {}

    /** Represents an AttributeRef. */
    class AttributeRef {
      /**
       * Constructs a new AttributeRef.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.AttributeRef.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** AttributeRef attributeName. */
      attributeName: string

      /** AttributeRef argument. */
      argument: leancode.contracts.AttributeArgument.$Properties[]

      /**
       * Decodes an AttributeRef message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.AttributeRef & leancode.contracts.AttributeRef.$Shape} AttributeRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.AttributeRef & leancode.contracts.AttributeRef.$Shape

      /**
       * Decodes an AttributeRef message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.AttributeRef & leancode.contracts.AttributeRef.$Shape} AttributeRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.AttributeRef & leancode.contracts.AttributeRef.$Shape

      /**
       * Verifies an AttributeRef message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates an AttributeRef message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns AttributeRef
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.AttributeRef

      /**
       * Creates a plain object from an AttributeRef message. Also converts values to other types if specified.
       * @param message AttributeRef
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(
        message: leancode.contracts.AttributeRef,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any }

      /**
       * Converts this AttributeRef to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for AttributeRef
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace AttributeRef {
      /** Properties of an AttributeRef. */
      interface $Properties {
        /** AttributeRef attributeName */
        attributeName?: string | null

        /** AttributeRef argument */
        argument?: leancode.contracts.AttributeArgument.$Properties[] | null

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Shape of an AttributeRef. */
      type $Shape = {
        attributeName?: string | null
        argument?: leancode.contracts.AttributeArgument.$Shape[] | null
        $unknowns?: Uint8Array[]
      }
    }

    /**
     * Properties of a PropertyRef.
     * @deprecated Use leancode.contracts.PropertyRef.$Properties instead.
     */
    interface IPropertyRef extends leancode.contracts.PropertyRef.$Properties {}

    /** Represents a PropertyRef. */
    class PropertyRef {
      /**
       * Constructs a new PropertyRef.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.PropertyRef.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** PropertyRef type. */
      type?: leancode.contracts.TypeRef.$Properties | null

      /** PropertyRef name. */
      name: string

      /** PropertyRef attributes. */
      attributes: leancode.contracts.AttributeRef.$Properties[]

      /** PropertyRef comment. */
      comment: string

      /**
       * Decodes a PropertyRef message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.PropertyRef & leancode.contracts.PropertyRef.$Shape} PropertyRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.PropertyRef & leancode.contracts.PropertyRef.$Shape

      /**
       * Decodes a PropertyRef message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.PropertyRef & leancode.contracts.PropertyRef.$Shape} PropertyRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.PropertyRef & leancode.contracts.PropertyRef.$Shape

      /**
       * Verifies a PropertyRef message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a PropertyRef message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns PropertyRef
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.PropertyRef

      /**
       * Creates a plain object from a PropertyRef message. Also converts values to other types if specified.
       * @param message PropertyRef
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(
        message: leancode.contracts.PropertyRef,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any }

      /**
       * Converts this PropertyRef to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for PropertyRef
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace PropertyRef {
      /** Properties of a PropertyRef. */
      interface $Properties {
        /** PropertyRef type */
        type?: leancode.contracts.TypeRef.$Properties | null

        /** PropertyRef name */
        name?: string | null

        /** PropertyRef attributes */
        attributes?: leancode.contracts.AttributeRef.$Properties[] | null

        /** PropertyRef comment */
        comment?: string | null

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Shape of a PropertyRef. */
      type $Shape = {
        type?: leancode.contracts.TypeRef.$Shape | null
        name?: string | null
        attributes?: leancode.contracts.AttributeRef.$Shape[] | null
        comment?: string | null
        $unknowns?: Uint8Array[]
      }
    }

    /**
     * Properties of a ConstantRef.
     * @deprecated Use leancode.contracts.ConstantRef.$Properties instead.
     */
    interface IConstantRef extends leancode.contracts.ConstantRef.$Properties {}

    /** Represents a ConstantRef. */
    class ConstantRef {
      /**
       * Constructs a new ConstantRef.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.ConstantRef.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** ConstantRef name. */
      name: string

      /** ConstantRef value. */
      value?: leancode.contracts.ValueRef.$Properties | null

      /** ConstantRef comment. */
      comment: string

      /**
       * Decodes a ConstantRef message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.ConstantRef & leancode.contracts.ConstantRef.$Shape} ConstantRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.ConstantRef & leancode.contracts.ConstantRef.$Shape

      /**
       * Decodes a ConstantRef message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.ConstantRef & leancode.contracts.ConstantRef.$Shape} ConstantRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.ConstantRef & leancode.contracts.ConstantRef.$Shape

      /**
       * Verifies a ConstantRef message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a ConstantRef message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ConstantRef
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.ConstantRef

      /**
       * Creates a plain object from a ConstantRef message. Also converts values to other types if specified.
       * @param message ConstantRef
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(
        message: leancode.contracts.ConstantRef,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any }

      /**
       * Converts this ConstantRef to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for ConstantRef
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace ConstantRef {
      /** Properties of a ConstantRef. */
      interface $Properties {
        /** ConstantRef name */
        name?: string | null

        /** ConstantRef value */
        value?: leancode.contracts.ValueRef.$Properties | null

        /** ConstantRef comment */
        comment?: string | null

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Shape of a ConstantRef. */
      type $Shape = {
        name?: string | null
        value?: leancode.contracts.ValueRef.$Shape | null
        comment?: string | null
        $unknowns?: Uint8Array[]
      }
    }

    /**
     * Properties of an EnumValue.
     * @deprecated Use leancode.contracts.EnumValue.$Properties instead.
     */
    interface IEnumValue extends leancode.contracts.EnumValue.$Properties {}

    /** Represents an EnumValue. */
    class EnumValue {
      /**
       * Constructs a new EnumValue.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.EnumValue.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** EnumValue name. */
      name: string

      /** EnumValue value. */
      value: number | Long

      /** EnumValue comment. */
      comment: string

      /** EnumValue attributes. */
      attributes: leancode.contracts.AttributeRef.$Properties[]

      /**
       * Decodes an EnumValue message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.EnumValue & leancode.contracts.EnumValue.$Shape} EnumValue
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.EnumValue & leancode.contracts.EnumValue.$Shape

      /**
       * Decodes an EnumValue message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.EnumValue & leancode.contracts.EnumValue.$Shape} EnumValue
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.EnumValue & leancode.contracts.EnumValue.$Shape

      /**
       * Verifies an EnumValue message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates an EnumValue message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns EnumValue
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.EnumValue

      /**
       * Creates a plain object from an EnumValue message. Also converts values to other types if specified.
       * @param message EnumValue
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(
        message: leancode.contracts.EnumValue,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any }

      /**
       * Converts this EnumValue to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for EnumValue
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace EnumValue {
      /** Properties of an EnumValue. */
      interface $Properties {
        /** EnumValue name */
        name?: string | null

        /** EnumValue value */
        value?: number | Long | null

        /** EnumValue comment */
        comment?: string | null

        /** EnumValue attributes */
        attributes?: leancode.contracts.AttributeRef.$Properties[] | null

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Shape of an EnumValue. */
      type $Shape = {
        name?: string | null
        value?: number | Long | null
        comment?: string | null
        attributes?: leancode.contracts.AttributeRef.$Shape[] | null
        $unknowns?: Uint8Array[]
      }
    }

    /**
     * Properties of an ErrorCode.
     * @deprecated Use leancode.contracts.ErrorCode.$Properties instead.
     */
    interface IErrorCode extends leancode.contracts.ErrorCode.$Properties {}

    /** Represents an ErrorCode. */
    class ErrorCode {
      /**
       * Constructs a new ErrorCode.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.ErrorCode.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** ErrorCode single. */
      single?: leancode.contracts.ErrorCode.Single.$Properties | null

      /** ErrorCode group. */
      group?: leancode.contracts.ErrorCode.Group.$Properties | null

      /** ErrorCode code. */
      code?: "single" | "group"

      /**
       * Decodes an ErrorCode message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.ErrorCode & leancode.contracts.ErrorCode.$Shape} ErrorCode
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.ErrorCode & leancode.contracts.ErrorCode.$Shape

      /**
       * Decodes an ErrorCode message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.ErrorCode & leancode.contracts.ErrorCode.$Shape} ErrorCode
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.ErrorCode & leancode.contracts.ErrorCode.$Shape

      /**
       * Verifies an ErrorCode message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates an ErrorCode message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns ErrorCode
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.ErrorCode

      /**
       * Creates a plain object from an ErrorCode message. Also converts values to other types if specified.
       * @param message ErrorCode
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(
        message: leancode.contracts.ErrorCode,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any }

      /**
       * Converts this ErrorCode to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for ErrorCode
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace ErrorCode {
      /** Properties of an ErrorCode. */
      interface $Properties {
        /** ErrorCode single */
        single?: leancode.contracts.ErrorCode.Single.$Properties | null

        /** ErrorCode group */
        group?: leancode.contracts.ErrorCode.Group.$Properties | null

        /** ErrorCode code */
        code?: "single" | "group"

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Narrowed shape of an ErrorCode. */
      type $Shape = {
        single?: leancode.contracts.ErrorCode.Single.$Shape | null
        group?: leancode.contracts.ErrorCode.Group.$Shape | null
        $unknowns?: Uint8Array[]
      } & (
        | { code?: undefined; single?: null; group?: null }
        | { code?: "single"; single: leancode.contracts.ErrorCode.Single.$Shape; group?: null }
        | { code?: "group"; single?: null; group: leancode.contracts.ErrorCode.Group.$Shape }
      )

      /**
       * Properties of a Single.
       * @deprecated Use leancode.contracts.ErrorCode.Single.$Properties instead.
       */
      interface ISingle extends leancode.contracts.ErrorCode.Single.$Properties {}

      /** Represents a Single. */
      class Single {
        /**
         * Constructs a new Single.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.ErrorCode.Single.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Single name. */
        name: string

        /** Single code. */
        code: number

        /**
         * Decodes a Single message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.ErrorCode.Single & leancode.contracts.ErrorCode.Single.$Shape} Single
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.ErrorCode.Single & leancode.contracts.ErrorCode.Single.$Shape

        /**
         * Decodes a Single message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.ErrorCode.Single & leancode.contracts.ErrorCode.Single.$Shape} Single
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.ErrorCode.Single & leancode.contracts.ErrorCode.Single.$Shape

        /**
         * Verifies a Single message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a Single message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Single
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.ErrorCode.Single

        /**
         * Creates a plain object from a Single message. Also converts values to other types if specified.
         * @param message Single
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.ErrorCode.Single,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Single to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Single
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Single {
        /** Properties of a Single. */
        interface $Properties {
          /** Single name */
          name?: string | null

          /** Single code */
          code?: number | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a Single. */
        type $Shape = leancode.contracts.ErrorCode.Single.$Properties
      }

      /**
       * Properties of a Group.
       * @deprecated Use leancode.contracts.ErrorCode.Group.$Properties instead.
       */
      interface IGroup extends leancode.contracts.ErrorCode.Group.$Properties {}

      /** Represents a Group. */
      class Group {
        /**
         * Constructs a new Group.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.ErrorCode.Group.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Group name. */
        name: string

        /** Group groupId. */
        groupId: string

        /** Group innerCodes. */
        innerCodes: leancode.contracts.ErrorCode.$Properties[]

        /**
         * Decodes a Group message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.ErrorCode.Group & leancode.contracts.ErrorCode.Group.$Shape} Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.ErrorCode.Group & leancode.contracts.ErrorCode.Group.$Shape

        /**
         * Decodes a Group message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.ErrorCode.Group & leancode.contracts.ErrorCode.Group.$Shape} Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.ErrorCode.Group & leancode.contracts.ErrorCode.Group.$Shape

        /**
         * Verifies a Group message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a Group message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Group
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.ErrorCode.Group

        /**
         * Creates a plain object from a Group message. Also converts values to other types if specified.
         * @param message Group
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.ErrorCode.Group,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Group to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Group
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Group {
        /** Properties of a Group. */
        interface $Properties {
          /** Group name */
          name?: string | null

          /** Group groupId */
          groupId?: string | null

          /** Group innerCodes */
          innerCodes?: leancode.contracts.ErrorCode.$Properties[] | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a Group. */
        type $Shape = {
          name?: string | null
          groupId?: string | null
          innerCodes?: leancode.contracts.ErrorCode.$Shape[] | null
          $unknowns?: Uint8Array[]
        }
      }
    }

    /**
     * Properties of a TypeDescriptor.
     * @deprecated Use leancode.contracts.TypeDescriptor.$Properties instead.
     */
    interface ITypeDescriptor extends leancode.contracts.TypeDescriptor.$Properties {}

    /** Represents a TypeDescriptor. */
    class TypeDescriptor {
      /**
       * Constructs a new TypeDescriptor.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.TypeDescriptor.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** TypeDescriptor extends. */
      extends: leancode.contracts.TypeRef.$Properties[]

      /** TypeDescriptor genericParameters. */
      genericParameters: leancode.contracts.GenericParameter.$Properties[]

      /** TypeDescriptor properties. */
      properties: leancode.contracts.PropertyRef.$Properties[]

      /** TypeDescriptor constants. */
      constants: leancode.contracts.ConstantRef.$Properties[]

      /**
       * Decodes a TypeDescriptor message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.TypeDescriptor & leancode.contracts.TypeDescriptor.$Shape} TypeDescriptor
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.TypeDescriptor & leancode.contracts.TypeDescriptor.$Shape

      /**
       * Decodes a TypeDescriptor message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.TypeDescriptor & leancode.contracts.TypeDescriptor.$Shape} TypeDescriptor
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.TypeDescriptor & leancode.contracts.TypeDescriptor.$Shape

      /**
       * Verifies a TypeDescriptor message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a TypeDescriptor message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns TypeDescriptor
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.TypeDescriptor

      /**
       * Creates a plain object from a TypeDescriptor message. Also converts values to other types if specified.
       * @param message TypeDescriptor
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(
        message: leancode.contracts.TypeDescriptor,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any }

      /**
       * Converts this TypeDescriptor to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for TypeDescriptor
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace TypeDescriptor {
      /** Properties of a TypeDescriptor. */
      interface $Properties {
        /** TypeDescriptor extends */
        extends?: leancode.contracts.TypeRef.$Properties[] | null

        /** TypeDescriptor genericParameters */
        genericParameters?: leancode.contracts.GenericParameter.$Properties[] | null

        /** TypeDescriptor properties */
        properties?: leancode.contracts.PropertyRef.$Properties[] | null

        /** TypeDescriptor constants */
        constants?: leancode.contracts.ConstantRef.$Properties[] | null

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Shape of a TypeDescriptor. */
      type $Shape = {
        extends?: leancode.contracts.TypeRef.$Shape[] | null
        genericParameters?: leancode.contracts.GenericParameter.$Shape[] | null
        properties?: leancode.contracts.PropertyRef.$Shape[] | null
        constants?: leancode.contracts.ConstantRef.$Shape[] | null
        $unknowns?: Uint8Array[]
      }
    }

    /**
     * Properties of a Statement.
     * @deprecated Use leancode.contracts.Statement.$Properties instead.
     */
    interface IStatement extends leancode.contracts.Statement.$Properties {}

    /** Represents a Statement. */
    class Statement {
      /**
       * Constructs a new Statement.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.Statement.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** Statement name. */
      name: string

      /** Statement comment. */
      comment: string

      /** Statement attributes. */
      attributes: leancode.contracts.AttributeRef.$Properties[]

      /** Statement dto. */
      dto?: leancode.contracts.Statement.DTO.$Properties | null

      /** Statement enum. */
      enum?: leancode.contracts.Statement.Enum.$Properties | null

      /** Statement query. */
      query?: leancode.contracts.Statement.Query.$Properties | null

      /** Statement command. */
      command?: leancode.contracts.Statement.Command.$Properties | null

      /** Statement operation. */
      operation?: leancode.contracts.Statement.Operation.$Properties | null

      /** Statement topic. */
      topic?: leancode.contracts.Statement.Topic.$Properties | null

      /** Statement content. */
      content?: "dto" | "enum" | "query" | "command" | "operation" | "topic"

      /**
       * Decodes a Statement message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.Statement & leancode.contracts.Statement.$Shape} Statement
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.Statement & leancode.contracts.Statement.$Shape

      /**
       * Decodes a Statement message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.Statement & leancode.contracts.Statement.$Shape} Statement
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.Statement & leancode.contracts.Statement.$Shape

      /**
       * Verifies a Statement message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a Statement message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Statement
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.Statement

      /**
       * Creates a plain object from a Statement message. Also converts values to other types if specified.
       * @param message Statement
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(
        message: leancode.contracts.Statement,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any }

      /**
       * Converts this Statement to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for Statement
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace Statement {
      /** Properties of a Statement. */
      interface $Properties {
        /** Statement name */
        name?: string | null

        /** Statement comment */
        comment?: string | null

        /** Statement attributes */
        attributes?: leancode.contracts.AttributeRef.$Properties[] | null

        /** Statement dto */
        dto?: leancode.contracts.Statement.DTO.$Properties | null

        /** Statement enum */
        enum?: leancode.contracts.Statement.Enum.$Properties | null

        /** Statement query */
        query?: leancode.contracts.Statement.Query.$Properties | null

        /** Statement command */
        command?: leancode.contracts.Statement.Command.$Properties | null

        /** Statement operation */
        operation?: leancode.contracts.Statement.Operation.$Properties | null

        /** Statement topic */
        topic?: leancode.contracts.Statement.Topic.$Properties | null

        /** Statement content */
        content?: "dto" | "enum" | "query" | "command" | "operation" | "topic"

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Narrowed shape of a Statement. */
      type $Shape = {
        name?: string | null
        comment?: string | null
        attributes?: leancode.contracts.AttributeRef.$Shape[] | null
        dto?: leancode.contracts.Statement.DTO.$Shape | null
        enum?: leancode.contracts.Statement.Enum.$Shape | null
        query?: leancode.contracts.Statement.Query.$Shape | null
        command?: leancode.contracts.Statement.Command.$Shape | null
        operation?: leancode.contracts.Statement.Operation.$Shape | null
        topic?: leancode.contracts.Statement.Topic.$Shape | null
        $unknowns?: Uint8Array[]
      } & (
        | { content?: undefined; dto?: null; enum?: null; query?: null; command?: null; operation?: null; topic?: null }
        | {
            content?: "dto"
            dto: leancode.contracts.Statement.DTO.$Shape
            enum?: null
            query?: null
            command?: null
            operation?: null
            topic?: null
          }
        | {
            content?: "enum"
            dto?: null
            enum: leancode.contracts.Statement.Enum.$Shape
            query?: null
            command?: null
            operation?: null
            topic?: null
          }
        | {
            content?: "query"
            dto?: null
            enum?: null
            query: leancode.contracts.Statement.Query.$Shape
            command?: null
            operation?: null
            topic?: null
          }
        | {
            content?: "command"
            dto?: null
            enum?: null
            query?: null
            command: leancode.contracts.Statement.Command.$Shape
            operation?: null
            topic?: null
          }
        | {
            content?: "operation"
            dto?: null
            enum?: null
            query?: null
            command?: null
            operation: leancode.contracts.Statement.Operation.$Shape
            topic?: null
          }
        | {
            content?: "topic"
            dto?: null
            enum?: null
            query?: null
            command?: null
            operation?: null
            topic: leancode.contracts.Statement.Topic.$Shape
          }
      )

      /**
       * Properties of a DTO.
       * @deprecated Use leancode.contracts.Statement.DTO.$Properties instead.
       */
      interface IDTO extends leancode.contracts.Statement.DTO.$Properties {}

      /** Represents a DTO. */
      class DTO {
        /**
         * Constructs a new DTO.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.Statement.DTO.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** DTO typeDescriptor. */
        typeDescriptor?: leancode.contracts.TypeDescriptor.$Properties | null

        /**
         * Decodes a DTO message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.Statement.DTO & leancode.contracts.Statement.DTO.$Shape} DTO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.Statement.DTO & leancode.contracts.Statement.DTO.$Shape

        /**
         * Decodes a DTO message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.Statement.DTO & leancode.contracts.Statement.DTO.$Shape} DTO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.Statement.DTO & leancode.contracts.Statement.DTO.$Shape

        /**
         * Verifies a DTO message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a DTO message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DTO
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.Statement.DTO

        /**
         * Creates a plain object from a DTO message. Also converts values to other types if specified.
         * @param message DTO
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.Statement.DTO,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this DTO to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for DTO
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace DTO {
        /** Properties of a DTO. */
        interface $Properties {
          /** DTO typeDescriptor */
          typeDescriptor?: leancode.contracts.TypeDescriptor.$Properties | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a DTO. */
        type $Shape = {
          typeDescriptor?: leancode.contracts.TypeDescriptor.$Shape | null
          $unknowns?: Uint8Array[]
        }
      }

      /**
       * Properties of an Enum.
       * @deprecated Use leancode.contracts.Statement.Enum.$Properties instead.
       */
      interface IEnum extends leancode.contracts.Statement.Enum.$Properties {}

      /** Represents an Enum. */
      class Enum {
        /**
         * Constructs a new Enum.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.Statement.Enum.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Enum members. */
        members: leancode.contracts.EnumValue.$Properties[]

        /**
         * Decodes an Enum message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.Statement.Enum & leancode.contracts.Statement.Enum.$Shape} Enum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.Statement.Enum & leancode.contracts.Statement.Enum.$Shape

        /**
         * Decodes an Enum message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.Statement.Enum & leancode.contracts.Statement.Enum.$Shape} Enum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.Statement.Enum & leancode.contracts.Statement.Enum.$Shape

        /**
         * Verifies an Enum message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates an Enum message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Enum
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.Statement.Enum

        /**
         * Creates a plain object from an Enum message. Also converts values to other types if specified.
         * @param message Enum
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.Statement.Enum,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Enum to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Enum
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Enum {
        /** Properties of an Enum. */
        interface $Properties {
          /** Enum members */
          members?: leancode.contracts.EnumValue.$Properties[] | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of an Enum. */
        type $Shape = {
          members?: leancode.contracts.EnumValue.$Shape[] | null
          $unknowns?: Uint8Array[]
        }
      }

      /**
       * Properties of a Query.
       * @deprecated Use leancode.contracts.Statement.Query.$Properties instead.
       */
      interface IQuery extends leancode.contracts.Statement.Query.$Properties {}

      /** Represents a Query. */
      class Query {
        /**
         * Constructs a new Query.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.Statement.Query.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Query typeDescriptor. */
        typeDescriptor?: leancode.contracts.TypeDescriptor.$Properties | null

        /** Query returnType. */
        returnType?: leancode.contracts.TypeRef.$Properties | null

        /**
         * Decodes a Query message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.Statement.Query & leancode.contracts.Statement.Query.$Shape} Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.Statement.Query & leancode.contracts.Statement.Query.$Shape

        /**
         * Decodes a Query message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.Statement.Query & leancode.contracts.Statement.Query.$Shape} Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.Statement.Query & leancode.contracts.Statement.Query.$Shape

        /**
         * Verifies a Query message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a Query message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Query
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.Statement.Query

        /**
         * Creates a plain object from a Query message. Also converts values to other types if specified.
         * @param message Query
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.Statement.Query,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Query to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Query
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Query {
        /** Properties of a Query. */
        interface $Properties {
          /** Query typeDescriptor */
          typeDescriptor?: leancode.contracts.TypeDescriptor.$Properties | null

          /** Query returnType */
          returnType?: leancode.contracts.TypeRef.$Properties | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a Query. */
        type $Shape = {
          typeDescriptor?: leancode.contracts.TypeDescriptor.$Shape | null
          returnType?: leancode.contracts.TypeRef.$Shape | null
          $unknowns?: Uint8Array[]
        }
      }

      /**
       * Properties of a Command.
       * @deprecated Use leancode.contracts.Statement.Command.$Properties instead.
       */
      interface ICommand extends leancode.contracts.Statement.Command.$Properties {}

      /** Represents a Command. */
      class Command {
        /**
         * Constructs a new Command.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.Statement.Command.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Command typeDescriptor. */
        typeDescriptor?: leancode.contracts.TypeDescriptor.$Properties | null

        /** Command errorCodes. */
        errorCodes: leancode.contracts.ErrorCode.$Properties[]

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.Statement.Command & leancode.contracts.Statement.Command.$Shape} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.Statement.Command & leancode.contracts.Statement.Command.$Shape

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.Statement.Command & leancode.contracts.Statement.Command.$Shape} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.Statement.Command & leancode.contracts.Statement.Command.$Shape

        /**
         * Verifies a Command message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Command
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.Statement.Command

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @param message Command
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.Statement.Command,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Command to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Command
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Command {
        /** Properties of a Command. */
        interface $Properties {
          /** Command typeDescriptor */
          typeDescriptor?: leancode.contracts.TypeDescriptor.$Properties | null

          /** Command errorCodes */
          errorCodes?: leancode.contracts.ErrorCode.$Properties[] | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a Command. */
        type $Shape = {
          typeDescriptor?: leancode.contracts.TypeDescriptor.$Shape | null
          errorCodes?: leancode.contracts.ErrorCode.$Shape[] | null
          $unknowns?: Uint8Array[]
        }
      }

      /**
       * Properties of an Operation.
       * @deprecated Use leancode.contracts.Statement.Operation.$Properties instead.
       */
      interface IOperation extends leancode.contracts.Statement.Operation.$Properties {}

      /** Represents an Operation. */
      class Operation {
        /**
         * Constructs a new Operation.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.Statement.Operation.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Operation typeDescriptor. */
        typeDescriptor?: leancode.contracts.TypeDescriptor.$Properties | null

        /** Operation returnType. */
        returnType?: leancode.contracts.TypeRef.$Properties | null

        /**
         * Decodes an Operation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.Statement.Operation & leancode.contracts.Statement.Operation.$Shape} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.Statement.Operation & leancode.contracts.Statement.Operation.$Shape

        /**
         * Decodes an Operation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.Statement.Operation & leancode.contracts.Statement.Operation.$Shape} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.Statement.Operation & leancode.contracts.Statement.Operation.$Shape

        /**
         * Verifies an Operation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates an Operation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Operation
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.Statement.Operation

        /**
         * Creates a plain object from an Operation message. Also converts values to other types if specified.
         * @param message Operation
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.Statement.Operation,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Operation to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Operation
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Operation {
        /** Properties of an Operation. */
        interface $Properties {
          /** Operation typeDescriptor */
          typeDescriptor?: leancode.contracts.TypeDescriptor.$Properties | null

          /** Operation returnType */
          returnType?: leancode.contracts.TypeRef.$Properties | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of an Operation. */
        type $Shape = {
          typeDescriptor?: leancode.contracts.TypeDescriptor.$Shape | null
          returnType?: leancode.contracts.TypeRef.$Shape | null
          $unknowns?: Uint8Array[]
        }
      }

      /**
       * Properties of a Topic.
       * @deprecated Use leancode.contracts.Statement.Topic.$Properties instead.
       */
      interface ITopic extends leancode.contracts.Statement.Topic.$Properties {}

      /** Represents a Topic. */
      class Topic {
        /**
         * Constructs a new Topic.
         * @param [properties] Properties to set
         */
        constructor(properties?: leancode.contracts.Statement.Topic.$Properties)

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]

        /** Topic typeDescriptor. */
        typeDescriptor?: leancode.contracts.TypeDescriptor.$Properties | null

        /** Topic notifications. */
        notifications: leancode.contracts.NotificationTypeRef.$Properties[]

        /**
         * Decodes a Topic message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns {leancode.contracts.Statement.Topic & leancode.contracts.Statement.Topic.$Shape} Topic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decode(
          reader: $protobuf.Reader | Uint8Array,
          length?: number,
        ): leancode.contracts.Statement.Topic & leancode.contracts.Statement.Topic.$Shape

        /**
         * Decodes a Topic message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns {leancode.contracts.Statement.Topic & leancode.contracts.Statement.Topic.$Shape} Topic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        static decodeDelimited(
          reader: $protobuf.Reader | Uint8Array,
        ): leancode.contracts.Statement.Topic & leancode.contracts.Statement.Topic.$Shape

        /**
         * Verifies a Topic message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        static verify(message: { [k: string]: any }): string | null

        /**
         * Creates a Topic message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Topic
         */
        static fromObject(object: { [k: string]: any }): leancode.contracts.Statement.Topic

        /**
         * Creates a plain object from a Topic message. Also converts values to other types if specified.
         * @param message Topic
         * @param [options] Conversion options
         * @returns Plain object
         */
        static toObject(
          message: leancode.contracts.Statement.Topic,
          options?: $protobuf.IConversionOptions,
        ): { [k: string]: any }

        /**
         * Converts this Topic to JSON.
         * @returns JSON object
         */
        toJSON(): { [k: string]: any }

        /**
         * Gets the type url for Topic
         * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns The type url
         */
        static getTypeUrl(prefix?: string): string
      }

      namespace Topic {
        /** Properties of a Topic. */
        interface $Properties {
          /** Topic typeDescriptor */
          typeDescriptor?: leancode.contracts.TypeDescriptor.$Properties | null

          /** Topic notifications */
          notifications?: leancode.contracts.NotificationTypeRef.$Properties[] | null

          /** Unknown fields preserved while decoding when enabled */
          $unknowns?: Uint8Array[]
        }

        /** Shape of a Topic. */
        type $Shape = {
          typeDescriptor?: leancode.contracts.TypeDescriptor.$Shape | null
          notifications?: leancode.contracts.NotificationTypeRef.$Shape[] | null
          $unknowns?: Uint8Array[]
        }
      }
    }

    /**
     * Properties of a Protocol.
     * @deprecated Use leancode.contracts.Protocol.$Properties instead.
     */
    interface IProtocol extends leancode.contracts.Protocol.$Properties {}

    /** Represents a Protocol. */
    class Protocol {
      /**
       * Constructs a new Protocol.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.Protocol.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** Protocol version. */
      version: string

      /** Protocol extensions. */
      extensions: string[]

      /**
       * Decodes a Protocol message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.Protocol & leancode.contracts.Protocol.$Shape} Protocol
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.Protocol & leancode.contracts.Protocol.$Shape

      /**
       * Decodes a Protocol message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.Protocol & leancode.contracts.Protocol.$Shape} Protocol
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.Protocol & leancode.contracts.Protocol.$Shape

      /**
       * Verifies a Protocol message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates a Protocol message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Protocol
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.Protocol

      /**
       * Creates a plain object from a Protocol message. Also converts values to other types if specified.
       * @param message Protocol
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(
        message: leancode.contracts.Protocol,
        options?: $protobuf.IConversionOptions,
      ): { [k: string]: any }

      /**
       * Converts this Protocol to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for Protocol
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace Protocol {
      /** Properties of a Protocol. */
      interface $Properties {
        /** Protocol version */
        version?: string | null

        /** Protocol extensions */
        extensions?: string[] | null

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Shape of a Protocol. */
      type $Shape = leancode.contracts.Protocol.$Properties
    }

    /**
     * Properties of an Export.
     * @deprecated Use leancode.contracts.Export.$Properties instead.
     */
    interface IExport extends leancode.contracts.Export.$Properties {}

    /** Represents an Export. */
    class Export {
      /**
       * Constructs a new Export.
       * @param [properties] Properties to set
       */
      constructor(properties?: leancode.contracts.Export.$Properties)

      /** Unknown fields preserved while decoding when enabled */
      $unknowns?: Uint8Array[]

      /** Export projectName. */
      projectName: string

      /** Export statements. */
      statements: leancode.contracts.Statement.$Properties[]

      /** Export knownErrorGroups. */
      knownErrorGroups: leancode.contracts.ErrorCode.Group.$Properties[]

      /** Export protocol. */
      protocol?: leancode.contracts.Protocol.$Properties | null

      /**
       * Decodes an Export message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns {leancode.contracts.Export & leancode.contracts.Export.$Shape} Export
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number,
      ): leancode.contracts.Export & leancode.contracts.Export.$Shape

      /**
       * Decodes an Export message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns {leancode.contracts.Export & leancode.contracts.Export.$Shape} Export
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array,
      ): leancode.contracts.Export & leancode.contracts.Export.$Shape

      /**
       * Verifies an Export message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      static verify(message: { [k: string]: any }): string | null

      /**
       * Creates an Export message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Export
       */
      static fromObject(object: { [k: string]: any }): leancode.contracts.Export

      /**
       * Creates a plain object from an Export message. Also converts values to other types if specified.
       * @param message Export
       * @param [options] Conversion options
       * @returns Plain object
       */
      static toObject(message: leancode.contracts.Export, options?: $protobuf.IConversionOptions): { [k: string]: any }

      /**
       * Converts this Export to JSON.
       * @returns JSON object
       */
      toJSON(): { [k: string]: any }

      /**
       * Gets the type url for Export
       * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns The type url
       */
      static getTypeUrl(prefix?: string): string
    }

    namespace Export {
      /** Properties of an Export. */
      interface $Properties {
        /** Export projectName */
        projectName?: string | null

        /** Export statements */
        statements?: leancode.contracts.Statement.$Properties[] | null

        /** Export knownErrorGroups */
        knownErrorGroups?: leancode.contracts.ErrorCode.Group.$Properties[] | null

        /** Export protocol */
        protocol?: leancode.contracts.Protocol.$Properties | null

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[]
      }

      /** Shape of an Export. */
      type $Shape = {
        projectName?: string | null
        statements?: leancode.contracts.Statement.$Shape[] | null
        knownErrorGroups?: leancode.contracts.ErrorCode.Group.$Shape[] | null
        protocol?: leancode.contracts.Protocol.$Shape | null
        $unknowns?: Uint8Array[]
      }
    }
  }
}
