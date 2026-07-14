/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict"

var $protobuf = require("protobufjs/minimal")

// Common aliases
var $Reader = $protobuf.Reader,
  $util = $protobuf.util
var $Object = $util.global.Object,
  $undefined = $util.global.undefined,
  $Error = $util.global.Error,
  $TypeError = $util.global.TypeError,
  $Number = $util.global.Number,
  $parseInt = $util.global.parseInt,
  $String = $util.global.String,
  $BigInt = $util.global.BigInt,
  $isFinite = $util.global.isFinite,
  $Boolean = $util.global.Boolean,
  $Array = $util.global.Array

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {})

$root.leancode = (function () {
  /**
   * Namespace leancode.
   * @exports leancode
   * @namespace
   */
  var leancode = {}

  leancode.contracts = (function () {
    /**
     * Namespace contracts.
     * @memberof leancode
     * @namespace
     */
    var contracts = {}

    /**
     * KnownType enum.
     * @name leancode.contracts.KnownType
     * @enum {number}
     * @property {number} Object=0 Object value
     * @property {number} String=1 String value
     * @property {number} Guid=3 Guid value
     * @property {number} Uri=4 Uri value
     * @property {number} Boolean=5 Boolean value
     * @property {number} UInt8=100 UInt8 value
     * @property {number} Int8=101 Int8 value
     * @property {number} Int16=102 Int16 value
     * @property {number} UInt16=103 UInt16 value
     * @property {number} Int32=104 Int32 value
     * @property {number} UInt32=105 UInt32 value
     * @property {number} Int64=106 Int64 value
     * @property {number} UInt64=107 UInt64 value
     * @property {number} Float32=150 Float32 value
     * @property {number} Float64=151 Float64 value
     * @property {number} DateOnly=200 DateOnly value
     * @property {number} TimeOnly=201 TimeOnly value
     * @property {number} DateTimeOffset=202 DateTimeOffset value
     * @property {number} TimeSpan=203 TimeSpan value
     * @property {number} DateTime=204 DateTime value
     * @property {number} Array=300 Array value
     * @property {number} Map=301 Map value
     * @property {number} Query=1000 Query value
     * @property {number} Command=1001 Command value
     * @property {number} CommandResult=1002 CommandResult value
     * @property {number} Operation=1003 Operation value
     * @property {number} Binary=1004 Binary value
     * @property {number} Topic=1005 Topic value
     * @property {number} Attribute=1100 Attribute value
     * @property {number} AuthorizeWhenAttribute=1101 AuthorizeWhenAttribute value
     * @property {number} AuthorizeWhenHasAnyOfAttribute=1102 AuthorizeWhenHasAnyOfAttribute value
     */
    contracts.KnownType = (function () {
      var valuesById = $Object.create(null),
        values = $Object.create(valuesById)
      values[(valuesById[0] = "Object")] = 0
      values[(valuesById[1] = "String")] = 1
      values[(valuesById[3] = "Guid")] = 3
      values[(valuesById[4] = "Uri")] = 4
      values[(valuesById[5] = "Boolean")] = 5
      values[(valuesById[100] = "UInt8")] = 100
      values[(valuesById[101] = "Int8")] = 101
      values[(valuesById[102] = "Int16")] = 102
      values[(valuesById[103] = "UInt16")] = 103
      values[(valuesById[104] = "Int32")] = 104
      values[(valuesById[105] = "UInt32")] = 105
      values[(valuesById[106] = "Int64")] = 106
      values[(valuesById[107] = "UInt64")] = 107
      values[(valuesById[150] = "Float32")] = 150
      values[(valuesById[151] = "Float64")] = 151
      values[(valuesById[200] = "DateOnly")] = 200
      values[(valuesById[201] = "TimeOnly")] = 201
      values[(valuesById[202] = "DateTimeOffset")] = 202
      values[(valuesById[203] = "TimeSpan")] = 203
      values[(valuesById[204] = "DateTime")] = 204
      values[(valuesById[300] = "Array")] = 300
      values[(valuesById[301] = "Map")] = 301
      values[(valuesById[1000] = "Query")] = 1000
      values[(valuesById[1001] = "Command")] = 1001
      values[(valuesById[1002] = "CommandResult")] = 1002
      values[(valuesById[1003] = "Operation")] = 1003
      values[(valuesById[1004] = "Binary")] = 1004
      values[(valuesById[1005] = "Topic")] = 1005
      values[(valuesById[1100] = "Attribute")] = 1100
      values[(valuesById[1101] = "AuthorizeWhenAttribute")] = 1101
      values[(valuesById[1102] = "AuthorizeWhenHasAnyOfAttribute")] = 1102
      return values
    })()

    contracts.ValueRef = (function () {
      /**
       * Properties of a ValueRef.
       * @typedef {Object} leancode.contracts.ValueRef.$Properties
       * @property {leancode.contracts.ValueRef.Null.$Properties|null} ["null"] ValueRef null
       * @property {leancode.contracts.ValueRef.Number.$Properties|null} [number] ValueRef number
       * @property {leancode.contracts.ValueRef.FloatingPointNumber.$Properties|null} [floatingPoint] ValueRef floatingPoint
       * @property {leancode.contracts.ValueRef.String.$Properties|null} [string] ValueRef string
       * @property {leancode.contracts.ValueRef.Boolean.$Properties|null} [bool] ValueRef bool
       * @property {"null"|"number"|"floatingPoint"|"string"|"bool"} [value] ValueRef value
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of a ValueRef.
       * @memberof leancode.contracts
       * @interface IValueRef
       * @augments leancode.contracts.ValueRef.$Properties
       * @deprecated Use leancode.contracts.ValueRef.$Properties instead.
       */

      /**
       * Narrowed shape of a ValueRef.
       * @typedef {{
       *   "null"?: leancode.contracts.ValueRef.Null.$Shape|null;
       *   number?: leancode.contracts.ValueRef.Number.$Shape|null;
       *   floatingPoint?: leancode.contracts.ValueRef.FloatingPointNumber.$Shape|null;
       *   string?: leancode.contracts.ValueRef.String.$Shape|null;
       *   bool?: leancode.contracts.ValueRef.Boolean.$Shape|null;
       *   $unknowns?: Array.<Uint8Array>;
       * } & (
       *   ({ value?: undefined; "null"?: null; number?: null; floatingPoint?: null; string?: null; bool?: null }|{ value?: "null"; "null": leancode.contracts.ValueRef.Null.$Shape; number?: null; floatingPoint?: null; string?: null; bool?: null }|{ value?: "number"; "null"?: null; number: leancode.contracts.ValueRef.Number.$Shape; floatingPoint?: null; string?: null; bool?: null }|{ value?: "floatingPoint"; "null"?: null; number?: null; floatingPoint: leancode.contracts.ValueRef.FloatingPointNumber.$Shape; string?: null; bool?: null }|{ value?: "string"; "null"?: null; number?: null; floatingPoint?: null; string: leancode.contracts.ValueRef.String.$Shape; bool?: null }|{ value?: "bool"; "null"?: null; number?: null; floatingPoint?: null; string?: null; bool: leancode.contracts.ValueRef.Boolean.$Shape })
       * )} leancode.contracts.ValueRef.$Shape
       */

      /**
       * Constructs a new ValueRef.
       * @memberof leancode.contracts
       * @classdesc Represents a ValueRef.
       * @constructor
       * @param {leancode.contracts.ValueRef.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var ValueRef = function (properties) {
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * ValueRef null.
       * @member {leancode.contracts.ValueRef.Null.$Properties|null|undefined} null
       * @memberof leancode.contracts.ValueRef
       * @instance
       */
      ValueRef.prototype["null"] = null

      /**
       * ValueRef number.
       * @member {leancode.contracts.ValueRef.Number.$Properties|null|undefined} number
       * @memberof leancode.contracts.ValueRef
       * @instance
       */
      ValueRef.prototype.number = null

      /**
       * ValueRef floatingPoint.
       * @member {leancode.contracts.ValueRef.FloatingPointNumber.$Properties|null|undefined} floatingPoint
       * @memberof leancode.contracts.ValueRef
       * @instance
       */
      ValueRef.prototype.floatingPoint = null

      /**
       * ValueRef string.
       * @member {leancode.contracts.ValueRef.String.$Properties|null|undefined} string
       * @memberof leancode.contracts.ValueRef
       * @instance
       */
      ValueRef.prototype.string = null

      /**
       * ValueRef bool.
       * @member {leancode.contracts.ValueRef.Boolean.$Properties|null|undefined} bool
       * @memberof leancode.contracts.ValueRef
       * @instance
       */
      ValueRef.prototype.bool = null

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields

      /**
       * ValueRef value.
       * @member {"null"|"number"|"floatingPoint"|"string"|"bool"|undefined} value
       * @memberof leancode.contracts.ValueRef
       * @instance
       */
      $Object.defineProperty(ValueRef.prototype, "value", {
        get: $util.oneOfGetter(($oneOfFields = ["null", "number", "floatingPoint", "string", "bool"])),
        set: $util.oneOfSetter($oneOfFields),
      })

      /**
       * Decodes a ValueRef message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.ValueRef
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.ValueRef & leancode.contracts.ValueRef.$Shape} ValueRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ValueRef.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.ValueRef()
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 2) break
              message["null"] = $root.leancode.contracts.ValueRef.Null.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message["null"],
              )
              message.value = "null"
              continue
            }
            case 2: {
              if (wireType !== 2) break
              message.number = $root.leancode.contracts.ValueRef.Number.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.number,
              )
              message.value = "number"
              continue
            }
            case 3: {
              if (wireType !== 2) break
              message.floatingPoint = $root.leancode.contracts.ValueRef.FloatingPointNumber.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.floatingPoint,
              )
              message.value = "floatingPoint"
              continue
            }
            case 4: {
              if (wireType !== 2) break
              message.string = $root.leancode.contracts.ValueRef.String.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.string,
              )
              message.value = "string"
              continue
            }
            case 5: {
              if (wireType !== 2) break
              message.bool = $root.leancode.contracts.ValueRef.Boolean.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.bool,
              )
              message.value = "bool"
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes a ValueRef message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.ValueRef
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.ValueRef & leancode.contracts.ValueRef.$Shape} ValueRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ValueRef.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a ValueRef message.
       * @function verify
       * @memberof leancode.contracts.ValueRef
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ValueRef.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        var properties = {}
        if (message["null"] != null && $Object.hasOwnProperty.call(message, "null")) {
          properties.value = 1
          {
            var error = $root.leancode.contracts.ValueRef.Null.verify(message["null"], _depth + 1)
            if (error) return "null." + error
          }
        }
        if (message.number != null && $Object.hasOwnProperty.call(message, "number")) {
          if (properties.value === 1) return "value: multiple values"
          properties.value = 1
          {
            var error = $root.leancode.contracts.ValueRef.Number.verify(message.number, _depth + 1)
            if (error) return "number." + error
          }
        }
        if (message.floatingPoint != null && $Object.hasOwnProperty.call(message, "floatingPoint")) {
          if (properties.value === 1) return "value: multiple values"
          properties.value = 1
          {
            var error = $root.leancode.contracts.ValueRef.FloatingPointNumber.verify(message.floatingPoint, _depth + 1)
            if (error) return "floatingPoint." + error
          }
        }
        if (message.string != null && $Object.hasOwnProperty.call(message, "string")) {
          if (properties.value === 1) return "value: multiple values"
          properties.value = 1
          {
            var error = $root.leancode.contracts.ValueRef.String.verify(message.string, _depth + 1)
            if (error) return "string." + error
          }
        }
        if (message.bool != null && $Object.hasOwnProperty.call(message, "bool")) {
          if (properties.value === 1) return "value: multiple values"
          properties.value = 1
          {
            var error = $root.leancode.contracts.ValueRef.Boolean.verify(message.bool, _depth + 1)
            if (error) return "bool." + error
          }
        }
        return null
      }

      /**
       * Creates a ValueRef message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.ValueRef
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.ValueRef} ValueRef
       */
      ValueRef.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.ValueRef) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.ValueRef: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.ValueRef()
        if (object["null"] != null) {
          if (!$util.isObject(object["null"])) throw $TypeError(".leancode.contracts.ValueRef.null: object expected")
          message["null"] = $root.leancode.contracts.ValueRef.Null.fromObject(object["null"], _depth + 1)
        }
        if (object.number != null) {
          if (!$util.isObject(object.number)) throw $TypeError(".leancode.contracts.ValueRef.number: object expected")
          message.number = $root.leancode.contracts.ValueRef.Number.fromObject(object.number, _depth + 1)
        }
        if (object.floatingPoint != null) {
          if (!$util.isObject(object.floatingPoint))
            throw $TypeError(".leancode.contracts.ValueRef.floatingPoint: object expected")
          message.floatingPoint = $root.leancode.contracts.ValueRef.FloatingPointNumber.fromObject(
            object.floatingPoint,
            _depth + 1,
          )
        }
        if (object.string != null) {
          if (!$util.isObject(object.string)) throw $TypeError(".leancode.contracts.ValueRef.string: object expected")
          message.string = $root.leancode.contracts.ValueRef.String.fromObject(object.string, _depth + 1)
        }
        if (object.bool != null) {
          if (!$util.isObject(object.bool)) throw $TypeError(".leancode.contracts.ValueRef.bool: object expected")
          message.bool = $root.leancode.contracts.ValueRef.Boolean.fromObject(object.bool, _depth + 1)
        }
        return message
      }

      /**
       * Creates a plain object from a ValueRef message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.ValueRef
       * @static
       * @param {leancode.contracts.ValueRef} message ValueRef
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ValueRef.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (message["null"] != null && $Object.hasOwnProperty.call(message, "null")) {
          object["null"] = $root.leancode.contracts.ValueRef.Null.toObject(message["null"], options, _depth + 1)
          if (options.oneofs) object.value = "null"
        }
        if (message.number != null && $Object.hasOwnProperty.call(message, "number")) {
          object.number = $root.leancode.contracts.ValueRef.Number.toObject(message.number, options, _depth + 1)
          if (options.oneofs) object.value = "number"
        }
        if (message.floatingPoint != null && $Object.hasOwnProperty.call(message, "floatingPoint")) {
          object.floatingPoint = $root.leancode.contracts.ValueRef.FloatingPointNumber.toObject(
            message.floatingPoint,
            options,
            _depth + 1,
          )
          if (options.oneofs) object.value = "floatingPoint"
        }
        if (message.string != null && $Object.hasOwnProperty.call(message, "string")) {
          object.string = $root.leancode.contracts.ValueRef.String.toObject(message.string, options, _depth + 1)
          if (options.oneofs) object.value = "string"
        }
        if (message.bool != null && $Object.hasOwnProperty.call(message, "bool")) {
          object.bool = $root.leancode.contracts.ValueRef.Boolean.toObject(message.bool, options, _depth + 1)
          if (options.oneofs) object.value = "bool"
        }
        return object
      }

      /**
       * Converts this ValueRef to JSON.
       * @function toJSON
       * @memberof leancode.contracts.ValueRef
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ValueRef.prototype.toJSON = function () {
        return ValueRef.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for ValueRef
       * @function getTypeUrl
       * @memberof leancode.contracts.ValueRef
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      ValueRef.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.ValueRef"
      }

      ValueRef.Null = (function () {
        /**
         * Properties of a Null.
         * @typedef {Object} leancode.contracts.ValueRef.Null.$Properties
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Null.
         * @memberof leancode.contracts.ValueRef
         * @interface INull
         * @augments leancode.contracts.ValueRef.Null.$Properties
         * @deprecated Use leancode.contracts.ValueRef.Null.$Properties instead.
         */

        /**
         * Shape of a Null.
         * @typedef {leancode.contracts.ValueRef.Null.$Properties} leancode.contracts.ValueRef.Null.$Shape
         */

        /**
         * Constructs a new Null.
         * @memberof leancode.contracts.ValueRef
         * @classdesc Represents a Null.
         * @constructor
         * @param {leancode.contracts.ValueRef.Null.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Null = function (properties) {
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Decodes a Null message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.ValueRef.Null
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.ValueRef.Null & leancode.contracts.ValueRef.Null.$Shape} Null
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Null.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.ValueRef.Null()
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            reader.skipType(tag & 7, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a Null message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.ValueRef.Null
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.ValueRef.Null & leancode.contracts.ValueRef.Null.$Shape} Null
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Null.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a Null message.
         * @function verify
         * @memberof leancode.contracts.ValueRef.Null
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Null.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          return null
        }

        /**
         * Creates a Null message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.ValueRef.Null
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.ValueRef.Null} Null
         */
        Null.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.ValueRef.Null) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.ValueRef.Null: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          return new $root.leancode.contracts.ValueRef.Null()
        }

        /**
         * Creates a plain object from a Null message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.ValueRef.Null
         * @static
         * @param {leancode.contracts.ValueRef.Null} message Null
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Null.toObject = function () {
          return {}
        }

        /**
         * Converts this Null to JSON.
         * @function toJSON
         * @memberof leancode.contracts.ValueRef.Null
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Null.prototype.toJSON = function () {
          return Null.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Null
         * @function getTypeUrl
         * @memberof leancode.contracts.ValueRef.Null
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Null.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.ValueRef.Null"
        }

        return Null
      })()

      ValueRef.Number = (function () {
        /**
         * Properties of a Number.
         * @typedef {Object} leancode.contracts.ValueRef.Number.$Properties
         * @property {number|Long|null} [value] Number value
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Number.
         * @memberof leancode.contracts.ValueRef
         * @interface INumber
         * @augments leancode.contracts.ValueRef.Number.$Properties
         * @deprecated Use leancode.contracts.ValueRef.Number.$Properties instead.
         */

        /**
         * Shape of a Number.
         * @typedef {leancode.contracts.ValueRef.Number.$Properties} leancode.contracts.ValueRef.Number.$Shape
         */

        /**
         * Constructs a new Number.
         * @memberof leancode.contracts.ValueRef
         * @classdesc Represents a Number.
         * @constructor
         * @param {leancode.contracts.ValueRef.Number.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Number = function (properties) {
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Number value.
         * @member {number|Long} value
         * @memberof leancode.contracts.ValueRef.Number
         * @instance
         */
        Number.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

        /**
         * Decodes a Number message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.ValueRef.Number
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.ValueRef.Number & leancode.contracts.ValueRef.Number.$Shape} Number
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Number.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.ValueRef.Number(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 0) break
                if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                  message.value = value
                else delete message.value
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a Number message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.ValueRef.Number
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.ValueRef.Number & leancode.contracts.ValueRef.Number.$Shape} Number
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Number.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a Number message.
         * @function verify
         * @memberof leancode.contracts.ValueRef.Number
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Number.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
            if (
              !$util.isInteger(message.value) &&
              !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high))
            )
              return "value: integer|Long expected"
          return null
        }

        /**
         * Creates a Number message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.ValueRef.Number
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.ValueRef.Number} Number
         */
        Number.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.ValueRef.Number) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.ValueRef.Number: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.ValueRef.Number()
          if (object.value != null)
            if (typeof object.value === "object" ? object.value.low || object.value.high : $Number(object.value) !== 0)
              if ($util.Long) message.value = $util.Long.fromValue(object.value, false)
              else if (typeof object.value === "string") message.value = $parseInt(object.value, 10)
              else if (typeof object.value === "number") message.value = object.value
              else if (typeof object.value === "object")
                message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber()
          return message
        }

        /**
         * Creates a plain object from a Number message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.ValueRef.Number
         * @static
         * @param {leancode.contracts.ValueRef.Number} message Number
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Number.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.defaults)
            if ($util.Long) {
              var long = new $util.Long(0, 0, false)
              object.value =
                options.longs === $String
                  ? long.toString()
                  : options.longs === $Number
                    ? long.toNumber()
                    : typeof $BigInt !== "undefined" && options.longs === $BigInt
                      ? long.toBigInt()
                      : long
            } else
              object.value =
                options.longs === $String
                  ? "0"
                  : typeof $BigInt !== "undefined" && options.longs === $BigInt
                    ? $BigInt("0")
                    : 0
          if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
            if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
              object.value =
                typeof message.value === "number"
                  ? $BigInt(message.value)
                  : $util.Long.fromBits(message.value.low >>> 0, message.value.high >>> 0, false).toBigInt()
            else if (typeof message.value === "number")
              object.value = options.longs === $String ? $String(message.value) : message.value
            else
              object.value =
                options.longs === $String
                  ? $util.Long.prototype.toString.call(message.value)
                  : options.longs === $Number
                    ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber()
                    : message.value
          return object
        }

        /**
         * Converts this Number to JSON.
         * @function toJSON
         * @memberof leancode.contracts.ValueRef.Number
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Number.prototype.toJSON = function () {
          return Number.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Number
         * @function getTypeUrl
         * @memberof leancode.contracts.ValueRef.Number
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Number.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.ValueRef.Number"
        }

        return Number
      })()

      ValueRef.FloatingPointNumber = (function () {
        /**
         * Properties of a FloatingPointNumber.
         * @typedef {Object} leancode.contracts.ValueRef.FloatingPointNumber.$Properties
         * @property {number|null} [value] FloatingPointNumber value
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a FloatingPointNumber.
         * @memberof leancode.contracts.ValueRef
         * @interface IFloatingPointNumber
         * @augments leancode.contracts.ValueRef.FloatingPointNumber.$Properties
         * @deprecated Use leancode.contracts.ValueRef.FloatingPointNumber.$Properties instead.
         */

        /**
         * Shape of a FloatingPointNumber.
         * @typedef {leancode.contracts.ValueRef.FloatingPointNumber.$Properties} leancode.contracts.ValueRef.FloatingPointNumber.$Shape
         */

        /**
         * Constructs a new FloatingPointNumber.
         * @memberof leancode.contracts.ValueRef
         * @classdesc Represents a FloatingPointNumber.
         * @constructor
         * @param {leancode.contracts.ValueRef.FloatingPointNumber.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var FloatingPointNumber = function (properties) {
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * FloatingPointNumber value.
         * @member {number} value
         * @memberof leancode.contracts.ValueRef.FloatingPointNumber
         * @instance
         */
        FloatingPointNumber.prototype.value = 0

        /**
         * Decodes a FloatingPointNumber message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.ValueRef.FloatingPointNumber
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.ValueRef.FloatingPointNumber & leancode.contracts.ValueRef.FloatingPointNumber.$Shape} FloatingPointNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FloatingPointNumber.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.ValueRef.FloatingPointNumber(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 1) break
                if (!$Object.is((value = reader.double()), 0)) message.value = value
                else delete message.value
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a FloatingPointNumber message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.ValueRef.FloatingPointNumber
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.ValueRef.FloatingPointNumber & leancode.contracts.ValueRef.FloatingPointNumber.$Shape} FloatingPointNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FloatingPointNumber.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a FloatingPointNumber message.
         * @function verify
         * @memberof leancode.contracts.ValueRef.FloatingPointNumber
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FloatingPointNumber.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
            if (typeof message.value !== "number") return "value: number expected"
          return null
        }

        /**
         * Creates a FloatingPointNumber message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.ValueRef.FloatingPointNumber
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.ValueRef.FloatingPointNumber} FloatingPointNumber
         */
        FloatingPointNumber.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.ValueRef.FloatingPointNumber) return object
          if (!$util.isObject(object))
            throw $TypeError(".leancode.contracts.ValueRef.FloatingPointNumber: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.ValueRef.FloatingPointNumber()
          if (object.value != null) if (!$Object.is($Number(object.value), 0)) message.value = $Number(object.value)
          return message
        }

        /**
         * Creates a plain object from a FloatingPointNumber message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.ValueRef.FloatingPointNumber
         * @static
         * @param {leancode.contracts.ValueRef.FloatingPointNumber} message FloatingPointNumber
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FloatingPointNumber.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.defaults) object.value = 0
          if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
            object.value = options.json && !$isFinite(message.value) ? $String(message.value) : message.value
          return object
        }

        /**
         * Converts this FloatingPointNumber to JSON.
         * @function toJSON
         * @memberof leancode.contracts.ValueRef.FloatingPointNumber
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FloatingPointNumber.prototype.toJSON = function () {
          return FloatingPointNumber.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for FloatingPointNumber
         * @function getTypeUrl
         * @memberof leancode.contracts.ValueRef.FloatingPointNumber
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        FloatingPointNumber.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.ValueRef.FloatingPointNumber"
        }

        return FloatingPointNumber
      })()

      ValueRef.String = (function () {
        /**
         * Properties of a String.
         * @typedef {Object} leancode.contracts.ValueRef.String.$Properties
         * @property {string|null} [value] String value
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a String.
         * @memberof leancode.contracts.ValueRef
         * @interface IString
         * @augments leancode.contracts.ValueRef.String.$Properties
         * @deprecated Use leancode.contracts.ValueRef.String.$Properties instead.
         */

        /**
         * Shape of a String.
         * @typedef {leancode.contracts.ValueRef.String.$Properties} leancode.contracts.ValueRef.String.$Shape
         */

        /**
         * Constructs a new String.
         * @memberof leancode.contracts.ValueRef
         * @classdesc Represents a String.
         * @constructor
         * @param {leancode.contracts.ValueRef.String.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var String = function (properties) {
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * String value.
         * @member {string} value
         * @memberof leancode.contracts.ValueRef.String
         * @instance
         */
        String.prototype.value = ""

        /**
         * Decodes a String message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.ValueRef.String
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.ValueRef.String & leancode.contracts.ValueRef.String.$Shape} String
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        String.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.ValueRef.String(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 2) break
                if ((value = reader.stringVerify()).length) message.value = value
                else delete message.value
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a String message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.ValueRef.String
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.ValueRef.String & leancode.contracts.ValueRef.String.$Shape} String
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        String.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a String message.
         * @function verify
         * @memberof leancode.contracts.ValueRef.String
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        String.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
            if (!$util.isString(message.value)) return "value: string expected"
          return null
        }

        /**
         * Creates a String message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.ValueRef.String
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.ValueRef.String} String
         */
        String.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.ValueRef.String) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.ValueRef.String: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.ValueRef.String()
          if (object.value != null)
            if (typeof object.value !== "string" || object.value.length) message.value = $String(object.value)
          return message
        }

        /**
         * Creates a plain object from a String message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.ValueRef.String
         * @static
         * @param {leancode.contracts.ValueRef.String} message String
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        String.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.defaults) object.value = ""
          if (message.value != null && $Object.hasOwnProperty.call(message, "value")) object.value = message.value
          return object
        }

        /**
         * Converts this String to JSON.
         * @function toJSON
         * @memberof leancode.contracts.ValueRef.String
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        String.prototype.toJSON = function () {
          return String.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for String
         * @function getTypeUrl
         * @memberof leancode.contracts.ValueRef.String
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        String.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.ValueRef.String"
        }

        return String
      })()

      ValueRef.Boolean = (function () {
        /**
         * Properties of a Boolean.
         * @typedef {Object} leancode.contracts.ValueRef.Boolean.$Properties
         * @property {boolean|null} [value] Boolean value
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Boolean.
         * @memberof leancode.contracts.ValueRef
         * @interface IBoolean
         * @augments leancode.contracts.ValueRef.Boolean.$Properties
         * @deprecated Use leancode.contracts.ValueRef.Boolean.$Properties instead.
         */

        /**
         * Shape of a Boolean.
         * @typedef {leancode.contracts.ValueRef.Boolean.$Properties} leancode.contracts.ValueRef.Boolean.$Shape
         */

        /**
         * Constructs a new Boolean.
         * @memberof leancode.contracts.ValueRef
         * @classdesc Represents a Boolean.
         * @constructor
         * @param {leancode.contracts.ValueRef.Boolean.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Boolean = function (properties) {
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Boolean value.
         * @member {boolean} value
         * @memberof leancode.contracts.ValueRef.Boolean
         * @instance
         */
        Boolean.prototype.value = false

        /**
         * Decodes a Boolean message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.ValueRef.Boolean
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.ValueRef.Boolean & leancode.contracts.ValueRef.Boolean.$Shape} Boolean
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Boolean.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.ValueRef.Boolean(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 0) break
                if ((value = reader.bool())) message.value = value
                else delete message.value
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a Boolean message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.ValueRef.Boolean
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.ValueRef.Boolean & leancode.contracts.ValueRef.Boolean.$Shape} Boolean
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Boolean.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a Boolean message.
         * @function verify
         * @memberof leancode.contracts.ValueRef.Boolean
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Boolean.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
            if (typeof message.value !== "boolean") return "value: boolean expected"
          return null
        }

        /**
         * Creates a Boolean message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.ValueRef.Boolean
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.ValueRef.Boolean} Boolean
         */
        Boolean.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.ValueRef.Boolean) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.ValueRef.Boolean: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.ValueRef.Boolean()
          if (object.value != null) if (object.value) message.value = $Boolean(object.value)
          return message
        }

        /**
         * Creates a plain object from a Boolean message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.ValueRef.Boolean
         * @static
         * @param {leancode.contracts.ValueRef.Boolean} message Boolean
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Boolean.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.defaults) object.value = false
          if (message.value != null && $Object.hasOwnProperty.call(message, "value")) object.value = message.value
          return object
        }

        /**
         * Converts this Boolean to JSON.
         * @function toJSON
         * @memberof leancode.contracts.ValueRef.Boolean
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Boolean.prototype.toJSON = function () {
          return Boolean.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Boolean
         * @function getTypeUrl
         * @memberof leancode.contracts.ValueRef.Boolean
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Boolean.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.ValueRef.Boolean"
        }

        return Boolean
      })()

      return ValueRef
    })()

    contracts.TypeRef = (function () {
      /**
       * Properties of a TypeRef.
       * @typedef {Object} leancode.contracts.TypeRef.$Properties
       * @property {boolean|null} [nullable] TypeRef nullable
       * @property {leancode.contracts.TypeRef.Generic.$Properties|null} [generic] TypeRef generic
       * @property {leancode.contracts.TypeRef.Internal.$Properties|null} [internal] TypeRef internal
       * @property {leancode.contracts.TypeRef.Known.$Properties|null} [known] TypeRef known
       * @property {"generic"|"internal"|"known"} [type] TypeRef type
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of a TypeRef.
       * @memberof leancode.contracts
       * @interface ITypeRef
       * @augments leancode.contracts.TypeRef.$Properties
       * @deprecated Use leancode.contracts.TypeRef.$Properties instead.
       */

      /**
       * Narrowed shape of a TypeRef.
       * @typedef {{
       *   nullable?: boolean|null;
       *   generic?: leancode.contracts.TypeRef.Generic.$Shape|null;
       *   internal?: leancode.contracts.TypeRef.Internal.$Shape|null;
       *   known?: leancode.contracts.TypeRef.Known.$Shape|null;
       *   $unknowns?: Array.<Uint8Array>;
       * } & (
       *   ({ type?: undefined; generic?: null; internal?: null; known?: null }|{ type?: "generic"; generic: leancode.contracts.TypeRef.Generic.$Shape; internal?: null; known?: null }|{ type?: "internal"; generic?: null; internal: leancode.contracts.TypeRef.Internal.$Shape; known?: null }|{ type?: "known"; generic?: null; internal?: null; known: leancode.contracts.TypeRef.Known.$Shape })
       * )} leancode.contracts.TypeRef.$Shape
       */

      /**
       * Constructs a new TypeRef.
       * @memberof leancode.contracts
       * @classdesc Represents a TypeRef.
       * @constructor
       * @param {leancode.contracts.TypeRef.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var TypeRef = function (properties) {
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * TypeRef nullable.
       * @member {boolean} nullable
       * @memberof leancode.contracts.TypeRef
       * @instance
       */
      TypeRef.prototype.nullable = false

      /**
       * TypeRef generic.
       * @member {leancode.contracts.TypeRef.Generic.$Properties|null|undefined} generic
       * @memberof leancode.contracts.TypeRef
       * @instance
       */
      TypeRef.prototype.generic = null

      /**
       * TypeRef internal.
       * @member {leancode.contracts.TypeRef.Internal.$Properties|null|undefined} internal
       * @memberof leancode.contracts.TypeRef
       * @instance
       */
      TypeRef.prototype.internal = null

      /**
       * TypeRef known.
       * @member {leancode.contracts.TypeRef.Known.$Properties|null|undefined} known
       * @memberof leancode.contracts.TypeRef
       * @instance
       */
      TypeRef.prototype.known = null

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields

      /**
       * TypeRef type.
       * @member {"generic"|"internal"|"known"|undefined} type
       * @memberof leancode.contracts.TypeRef
       * @instance
       */
      $Object.defineProperty(TypeRef.prototype, "type", {
        get: $util.oneOfGetter(($oneOfFields = ["generic", "internal", "known"])),
        set: $util.oneOfSetter($oneOfFields),
      })

      /**
       * Decodes a TypeRef message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.TypeRef
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.TypeRef & leancode.contracts.TypeRef.$Shape} TypeRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      TypeRef.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.TypeRef(),
          value
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 0) break
              if ((value = reader.bool())) message.nullable = value
              else delete message.nullable
              continue
            }
            case 2: {
              if (wireType !== 2) break
              message.generic = $root.leancode.contracts.TypeRef.Generic.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.generic,
              )
              message.type = "generic"
              continue
            }
            case 3: {
              if (wireType !== 2) break
              message.internal = $root.leancode.contracts.TypeRef.Internal.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.internal,
              )
              message.type = "internal"
              continue
            }
            case 4: {
              if (wireType !== 2) break
              message.known = $root.leancode.contracts.TypeRef.Known.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.known,
              )
              message.type = "known"
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes a TypeRef message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.TypeRef
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.TypeRef & leancode.contracts.TypeRef.$Shape} TypeRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      TypeRef.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a TypeRef message.
       * @function verify
       * @memberof leancode.contracts.TypeRef
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      TypeRef.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        var properties = {}
        if (message.nullable != null && $Object.hasOwnProperty.call(message, "nullable"))
          if (typeof message.nullable !== "boolean") return "nullable: boolean expected"
        if (message.generic != null && $Object.hasOwnProperty.call(message, "generic")) {
          properties.type = 1
          {
            var error = $root.leancode.contracts.TypeRef.Generic.verify(message.generic, _depth + 1)
            if (error) return "generic." + error
          }
        }
        if (message.internal != null && $Object.hasOwnProperty.call(message, "internal")) {
          if (properties.type === 1) return "type: multiple values"
          properties.type = 1
          {
            var error = $root.leancode.contracts.TypeRef.Internal.verify(message.internal, _depth + 1)
            if (error) return "internal." + error
          }
        }
        if (message.known != null && $Object.hasOwnProperty.call(message, "known")) {
          if (properties.type === 1) return "type: multiple values"
          properties.type = 1
          {
            var error = $root.leancode.contracts.TypeRef.Known.verify(message.known, _depth + 1)
            if (error) return "known." + error
          }
        }
        return null
      }

      /**
       * Creates a TypeRef message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.TypeRef
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.TypeRef} TypeRef
       */
      TypeRef.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.TypeRef) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.TypeRef: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.TypeRef()
        if (object.nullable != null) if (object.nullable) message.nullable = $Boolean(object.nullable)
        if (object.generic != null) {
          if (!$util.isObject(object.generic)) throw $TypeError(".leancode.contracts.TypeRef.generic: object expected")
          message.generic = $root.leancode.contracts.TypeRef.Generic.fromObject(object.generic, _depth + 1)
        }
        if (object.internal != null) {
          if (!$util.isObject(object.internal))
            throw $TypeError(".leancode.contracts.TypeRef.internal: object expected")
          message.internal = $root.leancode.contracts.TypeRef.Internal.fromObject(object.internal, _depth + 1)
        }
        if (object.known != null) {
          if (!$util.isObject(object.known)) throw $TypeError(".leancode.contracts.TypeRef.known: object expected")
          message.known = $root.leancode.contracts.TypeRef.Known.fromObject(object.known, _depth + 1)
        }
        return message
      }

      /**
       * Creates a plain object from a TypeRef message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.TypeRef
       * @static
       * @param {leancode.contracts.TypeRef} message TypeRef
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      TypeRef.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (options.defaults) object.nullable = false
        if (message.nullable != null && $Object.hasOwnProperty.call(message, "nullable"))
          object.nullable = message.nullable
        if (message.generic != null && $Object.hasOwnProperty.call(message, "generic")) {
          object.generic = $root.leancode.contracts.TypeRef.Generic.toObject(message.generic, options, _depth + 1)
          if (options.oneofs) object.type = "generic"
        }
        if (message.internal != null && $Object.hasOwnProperty.call(message, "internal")) {
          object.internal = $root.leancode.contracts.TypeRef.Internal.toObject(message.internal, options, _depth + 1)
          if (options.oneofs) object.type = "internal"
        }
        if (message.known != null && $Object.hasOwnProperty.call(message, "known")) {
          object.known = $root.leancode.contracts.TypeRef.Known.toObject(message.known, options, _depth + 1)
          if (options.oneofs) object.type = "known"
        }
        return object
      }

      /**
       * Converts this TypeRef to JSON.
       * @function toJSON
       * @memberof leancode.contracts.TypeRef
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      TypeRef.prototype.toJSON = function () {
        return TypeRef.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for TypeRef
       * @function getTypeUrl
       * @memberof leancode.contracts.TypeRef
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      TypeRef.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.TypeRef"
      }

      TypeRef.Generic = (function () {
        /**
         * Properties of a Generic.
         * @typedef {Object} leancode.contracts.TypeRef.Generic.$Properties
         * @property {string|null} [name] Generic name
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Generic.
         * @memberof leancode.contracts.TypeRef
         * @interface IGeneric
         * @augments leancode.contracts.TypeRef.Generic.$Properties
         * @deprecated Use leancode.contracts.TypeRef.Generic.$Properties instead.
         */

        /**
         * Shape of a Generic.
         * @typedef {leancode.contracts.TypeRef.Generic.$Properties} leancode.contracts.TypeRef.Generic.$Shape
         */

        /**
         * Constructs a new Generic.
         * @memberof leancode.contracts.TypeRef
         * @classdesc Represents a Generic.
         * @constructor
         * @param {leancode.contracts.TypeRef.Generic.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Generic = function (properties) {
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Generic name.
         * @member {string} name
         * @memberof leancode.contracts.TypeRef.Generic
         * @instance
         */
        Generic.prototype.name = ""

        /**
         * Decodes a Generic message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.TypeRef.Generic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.TypeRef.Generic & leancode.contracts.TypeRef.Generic.$Shape} Generic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Generic.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.TypeRef.Generic(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 2) break
                if ((value = reader.stringVerify()).length) message.name = value
                else delete message.name
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a Generic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.TypeRef.Generic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.TypeRef.Generic & leancode.contracts.TypeRef.Generic.$Shape} Generic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Generic.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a Generic message.
         * @function verify
         * @memberof leancode.contracts.TypeRef.Generic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Generic.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
            if (!$util.isString(message.name)) return "name: string expected"
          return null
        }

        /**
         * Creates a Generic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.TypeRef.Generic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.TypeRef.Generic} Generic
         */
        Generic.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.TypeRef.Generic) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.TypeRef.Generic: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.TypeRef.Generic()
          if (object.name != null)
            if (typeof object.name !== "string" || object.name.length) message.name = $String(object.name)
          return message
        }

        /**
         * Creates a plain object from a Generic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.TypeRef.Generic
         * @static
         * @param {leancode.contracts.TypeRef.Generic} message Generic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Generic.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.defaults) object.name = ""
          if (message.name != null && $Object.hasOwnProperty.call(message, "name")) object.name = message.name
          return object
        }

        /**
         * Converts this Generic to JSON.
         * @function toJSON
         * @memberof leancode.contracts.TypeRef.Generic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Generic.prototype.toJSON = function () {
          return Generic.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Generic
         * @function getTypeUrl
         * @memberof leancode.contracts.TypeRef.Generic
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Generic.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.TypeRef.Generic"
        }

        return Generic
      })()

      TypeRef.Internal = (function () {
        /**
         * Properties of an Internal.
         * @typedef {Object} leancode.contracts.TypeRef.Internal.$Properties
         * @property {string|null} [name] Internal name
         * @property {Array.<leancode.contracts.TypeRef.$Properties>|null} ["arguments"] Internal arguments
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an Internal.
         * @memberof leancode.contracts.TypeRef
         * @interface IInternal
         * @augments leancode.contracts.TypeRef.Internal.$Properties
         * @deprecated Use leancode.contracts.TypeRef.Internal.$Properties instead.
         */

        /**
         * Shape of an Internal.
         * @typedef {{
         *   name?: string|null;
         *   "arguments"?: Array.<leancode.contracts.TypeRef.$Shape>|null;
         *   $unknowns?: Array.<Uint8Array>;
         * }} leancode.contracts.TypeRef.Internal.$Shape
         */

        /**
         * Constructs a new Internal.
         * @memberof leancode.contracts.TypeRef
         * @classdesc Represents an Internal.
         * @constructor
         * @param {leancode.contracts.TypeRef.Internal.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Internal = function (properties) {
          this["arguments"] = []
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Internal name.
         * @member {string} name
         * @memberof leancode.contracts.TypeRef.Internal
         * @instance
         */
        Internal.prototype.name = ""

        /**
         * Internal arguments.
         * @member {Array.<leancode.contracts.TypeRef.$Properties>} arguments
         * @memberof leancode.contracts.TypeRef.Internal
         * @instance
         */
        Internal.prototype["arguments"] = $util.emptyArray

        /**
         * Decodes an Internal message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.TypeRef.Internal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.TypeRef.Internal & leancode.contracts.TypeRef.Internal.$Shape} Internal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Internal.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.TypeRef.Internal(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 2) break
                if ((value = reader.stringVerify()).length) message.name = value
                else delete message.name
                continue
              }
              case 2: {
                if (wireType !== 2) break
                if (!(message["arguments"] && message["arguments"].length)) message["arguments"] = []
                message["arguments"].push(
                  $root.leancode.contracts.TypeRef.decode(reader, reader.uint32(), $undefined, _depth + 1),
                )
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes an Internal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.TypeRef.Internal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.TypeRef.Internal & leancode.contracts.TypeRef.Internal.$Shape} Internal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Internal.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies an Internal message.
         * @function verify
         * @memberof leancode.contracts.TypeRef.Internal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Internal.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
            if (!$util.isString(message.name)) return "name: string expected"
          if (message["arguments"] != null && $Object.hasOwnProperty.call(message, "arguments")) {
            if (!$Array.isArray(message["arguments"])) return "arguments: array expected"
            for (var i = 0; i < message["arguments"].length; ++i) {
              var error = $root.leancode.contracts.TypeRef.verify(message["arguments"][i], _depth + 1)
              if (error) return "arguments." + error
            }
          }
          return null
        }

        /**
         * Creates an Internal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.TypeRef.Internal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.TypeRef.Internal} Internal
         */
        Internal.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.TypeRef.Internal) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.TypeRef.Internal: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.TypeRef.Internal()
          if (object.name != null)
            if (typeof object.name !== "string" || object.name.length) message.name = $String(object.name)
          if (object["arguments"]) {
            if (!$Array.isArray(object["arguments"]))
              throw $TypeError(".leancode.contracts.TypeRef.Internal.arguments: array expected")
            message["arguments"] = $Array(object["arguments"].length)
            for (var i = 0; i < object["arguments"].length; ++i) {
              if (!$util.isObject(object["arguments"][i]))
                throw $TypeError(".leancode.contracts.TypeRef.Internal.arguments: object expected")
              message["arguments"][i] = $root.leancode.contracts.TypeRef.fromObject(object["arguments"][i], _depth + 1)
            }
          }
          return message
        }

        /**
         * Creates a plain object from an Internal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.TypeRef.Internal
         * @static
         * @param {leancode.contracts.TypeRef.Internal} message Internal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Internal.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.arrays || options.defaults) object["arguments"] = []
          if (options.defaults) object.name = ""
          if (message.name != null && $Object.hasOwnProperty.call(message, "name")) object.name = message.name
          if (message["arguments"] && message["arguments"].length) {
            object["arguments"] = $Array(message["arguments"].length)
            for (var j = 0; j < message["arguments"].length; ++j)
              object["arguments"][j] = $root.leancode.contracts.TypeRef.toObject(
                message["arguments"][j],
                options,
                _depth + 1,
              )
          }
          return object
        }

        /**
         * Converts this Internal to JSON.
         * @function toJSON
         * @memberof leancode.contracts.TypeRef.Internal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Internal.prototype.toJSON = function () {
          return Internal.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Internal
         * @function getTypeUrl
         * @memberof leancode.contracts.TypeRef.Internal
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Internal.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.TypeRef.Internal"
        }

        return Internal
      })()

      TypeRef.Known = (function () {
        /**
         * Properties of a Known.
         * @typedef {Object} leancode.contracts.TypeRef.Known.$Properties
         * @property {leancode.contracts.KnownType|null} [type] Known type
         * @property {Array.<leancode.contracts.TypeRef.$Properties>|null} ["arguments"] Known arguments
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Known.
         * @memberof leancode.contracts.TypeRef
         * @interface IKnown
         * @augments leancode.contracts.TypeRef.Known.$Properties
         * @deprecated Use leancode.contracts.TypeRef.Known.$Properties instead.
         */

        /**
         * Shape of a Known.
         * @typedef {{
         *   type?: leancode.contracts.KnownType|null;
         *   "arguments"?: Array.<leancode.contracts.TypeRef.$Shape>|null;
         *   $unknowns?: Array.<Uint8Array>;
         * }} leancode.contracts.TypeRef.Known.$Shape
         */

        /**
         * Constructs a new Known.
         * @memberof leancode.contracts.TypeRef
         * @classdesc Represents a Known.
         * @constructor
         * @param {leancode.contracts.TypeRef.Known.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Known = function (properties) {
          this["arguments"] = []
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Known type.
         * @member {leancode.contracts.KnownType} type
         * @memberof leancode.contracts.TypeRef.Known
         * @instance
         */
        Known.prototype.type = 0

        /**
         * Known arguments.
         * @member {Array.<leancode.contracts.TypeRef.$Properties>} arguments
         * @memberof leancode.contracts.TypeRef.Known
         * @instance
         */
        Known.prototype["arguments"] = $util.emptyArray

        /**
         * Decodes a Known message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.TypeRef.Known
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.TypeRef.Known & leancode.contracts.TypeRef.Known.$Shape} Known
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Known.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.TypeRef.Known(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 0) break
                if ((value = reader.int32())) message.type = value
                else delete message.type
                continue
              }
              case 2: {
                if (wireType !== 2) break
                if (!(message["arguments"] && message["arguments"].length)) message["arguments"] = []
                message["arguments"].push(
                  $root.leancode.contracts.TypeRef.decode(reader, reader.uint32(), $undefined, _depth + 1),
                )
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a Known message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.TypeRef.Known
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.TypeRef.Known & leancode.contracts.TypeRef.Known.$Shape} Known
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Known.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a Known message.
         * @function verify
         * @memberof leancode.contracts.TypeRef.Known
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Known.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
            if (typeof message.type !== "number" || (message.type | 0) !== message.type)
              return "type: enum value expected"
          if (message["arguments"] != null && $Object.hasOwnProperty.call(message, "arguments")) {
            if (!$Array.isArray(message["arguments"])) return "arguments: array expected"
            for (var i = 0; i < message["arguments"].length; ++i) {
              var error = $root.leancode.contracts.TypeRef.verify(message["arguments"][i], _depth + 1)
              if (error) return "arguments." + error
            }
          }
          return null
        }

        /**
         * Creates a Known message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.TypeRef.Known
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.TypeRef.Known} Known
         */
        Known.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.TypeRef.Known) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.TypeRef.Known: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.TypeRef.Known()
          if (
            object.type !== 0 &&
            (typeof object.type !== "string" || $root.leancode.contracts.KnownType[object.type] !== 0)
          )
            switch (object.type) {
              case "Object":
              case 0:
                message.type = 0
                break
              case "String":
              case 1:
                message.type = 1
                break
              case "Guid":
              case 3:
                message.type = 3
                break
              case "Uri":
              case 4:
                message.type = 4
                break
              case "Boolean":
              case 5:
                message.type = 5
                break
              case "UInt8":
              case 100:
                message.type = 100
                break
              case "Int8":
              case 101:
                message.type = 101
                break
              case "Int16":
              case 102:
                message.type = 102
                break
              case "UInt16":
              case 103:
                message.type = 103
                break
              case "Int32":
              case 104:
                message.type = 104
                break
              case "UInt32":
              case 105:
                message.type = 105
                break
              case "Int64":
              case 106:
                message.type = 106
                break
              case "UInt64":
              case 107:
                message.type = 107
                break
              case "Float32":
              case 150:
                message.type = 150
                break
              case "Float64":
              case 151:
                message.type = 151
                break
              case "DateOnly":
              case 200:
                message.type = 200
                break
              case "TimeOnly":
              case 201:
                message.type = 201
                break
              case "DateTimeOffset":
              case 202:
                message.type = 202
                break
              case "TimeSpan":
              case 203:
                message.type = 203
                break
              case "DateTime":
              case 204:
                message.type = 204
                break
              case "Array":
              case 300:
                message.type = 300
                break
              case "Map":
              case 301:
                message.type = 301
                break
              case "Query":
              case 1000:
                message.type = 1000
                break
              case "Command":
              case 1001:
                message.type = 1001
                break
              case "CommandResult":
              case 1002:
                message.type = 1002
                break
              case "Operation":
              case 1003:
                message.type = 1003
                break
              case "Binary":
              case 1004:
                message.type = 1004
                break
              case "Topic":
              case 1005:
                message.type = 1005
                break
              case "Attribute":
              case 1100:
                message.type = 1100
                break
              case "AuthorizeWhenAttribute":
              case 1101:
                message.type = 1101
                break
              case "AuthorizeWhenHasAnyOfAttribute":
              case 1102:
                message.type = 1102
                break
              default:
                if (typeof object.type === "number" && (object.type | 0) === object.type) message.type = object.type
            }
          if (object["arguments"]) {
            if (!$Array.isArray(object["arguments"]))
              throw $TypeError(".leancode.contracts.TypeRef.Known.arguments: array expected")
            message["arguments"] = $Array(object["arguments"].length)
            for (var i = 0; i < object["arguments"].length; ++i) {
              if (!$util.isObject(object["arguments"][i]))
                throw $TypeError(".leancode.contracts.TypeRef.Known.arguments: object expected")
              message["arguments"][i] = $root.leancode.contracts.TypeRef.fromObject(object["arguments"][i], _depth + 1)
            }
          }
          return message
        }

        /**
         * Creates a plain object from a Known message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.TypeRef.Known
         * @static
         * @param {leancode.contracts.TypeRef.Known} message Known
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Known.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.arrays || options.defaults) object["arguments"] = []
          if (options.defaults) object.type = options.enums === $String ? "Object" : 0
          if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
            object.type =
              options.enums === $String
                ? $root.leancode.contracts.KnownType[message.type] === $undefined
                  ? message.type
                  : $root.leancode.contracts.KnownType[message.type]
                : message.type
          if (message["arguments"] && message["arguments"].length) {
            object["arguments"] = $Array(message["arguments"].length)
            for (var j = 0; j < message["arguments"].length; ++j)
              object["arguments"][j] = $root.leancode.contracts.TypeRef.toObject(
                message["arguments"][j],
                options,
                _depth + 1,
              )
          }
          return object
        }

        /**
         * Converts this Known to JSON.
         * @function toJSON
         * @memberof leancode.contracts.TypeRef.Known
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Known.prototype.toJSON = function () {
          return Known.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Known
         * @function getTypeUrl
         * @memberof leancode.contracts.TypeRef.Known
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Known.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.TypeRef.Known"
        }

        return Known
      })()

      return TypeRef
    })()

    contracts.NotificationTypeRef = (function () {
      /**
       * Properties of a NotificationTypeRef.
       * @typedef {Object} leancode.contracts.NotificationTypeRef.$Properties
       * @property {leancode.contracts.TypeRef.$Properties|null} [type] NotificationTypeRef type
       * @property {string|null} [tag] NotificationTypeRef tag
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of a NotificationTypeRef.
       * @memberof leancode.contracts
       * @interface INotificationTypeRef
       * @augments leancode.contracts.NotificationTypeRef.$Properties
       * @deprecated Use leancode.contracts.NotificationTypeRef.$Properties instead.
       */

      /**
       * Shape of a NotificationTypeRef.
       * @typedef {{
       *   type?: leancode.contracts.TypeRef.$Shape|null;
       *   tag?: string|null;
       *   $unknowns?: Array.<Uint8Array>;
       * }} leancode.contracts.NotificationTypeRef.$Shape
       */

      /**
       * Constructs a new NotificationTypeRef.
       * @memberof leancode.contracts
       * @classdesc Represents a NotificationTypeRef.
       * @constructor
       * @param {leancode.contracts.NotificationTypeRef.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var NotificationTypeRef = function (properties) {
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * NotificationTypeRef type.
       * @member {leancode.contracts.TypeRef.$Properties|null|undefined} type
       * @memberof leancode.contracts.NotificationTypeRef
       * @instance
       */
      NotificationTypeRef.prototype.type = null

      /**
       * NotificationTypeRef tag.
       * @member {string} tag
       * @memberof leancode.contracts.NotificationTypeRef
       * @instance
       */
      NotificationTypeRef.prototype.tag = ""

      /**
       * Decodes a NotificationTypeRef message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.NotificationTypeRef
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.NotificationTypeRef & leancode.contracts.NotificationTypeRef.$Shape} NotificationTypeRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      NotificationTypeRef.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.NotificationTypeRef(),
          value
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 2) break
              message.type = $root.leancode.contracts.TypeRef.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.type,
              )
              continue
            }
            case 2: {
              if (wireType !== 2) break
              if ((value = reader.stringVerify()).length) message.tag = value
              else delete message.tag
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes a NotificationTypeRef message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.NotificationTypeRef
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.NotificationTypeRef & leancode.contracts.NotificationTypeRef.$Shape} NotificationTypeRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      NotificationTypeRef.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a NotificationTypeRef message.
       * @function verify
       * @memberof leancode.contracts.NotificationTypeRef
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      NotificationTypeRef.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        if (message.type != null && $Object.hasOwnProperty.call(message, "type")) {
          var error = $root.leancode.contracts.TypeRef.verify(message.type, _depth + 1)
          if (error) return "type." + error
        }
        if (message.tag != null && $Object.hasOwnProperty.call(message, "tag"))
          if (!$util.isString(message.tag)) return "tag: string expected"
        return null
      }

      /**
       * Creates a NotificationTypeRef message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.NotificationTypeRef
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.NotificationTypeRef} NotificationTypeRef
       */
      NotificationTypeRef.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.NotificationTypeRef) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.NotificationTypeRef: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.NotificationTypeRef()
        if (object.type != null) {
          if (!$util.isObject(object.type))
            throw $TypeError(".leancode.contracts.NotificationTypeRef.type: object expected")
          message.type = $root.leancode.contracts.TypeRef.fromObject(object.type, _depth + 1)
        }
        if (object.tag != null)
          if (typeof object.tag !== "string" || object.tag.length) message.tag = $String(object.tag)
        return message
      }

      /**
       * Creates a plain object from a NotificationTypeRef message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.NotificationTypeRef
       * @static
       * @param {leancode.contracts.NotificationTypeRef} message NotificationTypeRef
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      NotificationTypeRef.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (options.defaults) {
          object.type = null
          object.tag = ""
        }
        if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
          object.type = $root.leancode.contracts.TypeRef.toObject(message.type, options, _depth + 1)
        if (message.tag != null && $Object.hasOwnProperty.call(message, "tag")) object.tag = message.tag
        return object
      }

      /**
       * Converts this NotificationTypeRef to JSON.
       * @function toJSON
       * @memberof leancode.contracts.NotificationTypeRef
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      NotificationTypeRef.prototype.toJSON = function () {
        return NotificationTypeRef.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for NotificationTypeRef
       * @function getTypeUrl
       * @memberof leancode.contracts.NotificationTypeRef
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      NotificationTypeRef.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.NotificationTypeRef"
      }

      return NotificationTypeRef
    })()

    contracts.GenericParameter = (function () {
      /**
       * Properties of a GenericParameter.
       * @typedef {Object} leancode.contracts.GenericParameter.$Properties
       * @property {string|null} [name] GenericParameter name
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of a GenericParameter.
       * @memberof leancode.contracts
       * @interface IGenericParameter
       * @augments leancode.contracts.GenericParameter.$Properties
       * @deprecated Use leancode.contracts.GenericParameter.$Properties instead.
       */

      /**
       * Shape of a GenericParameter.
       * @typedef {leancode.contracts.GenericParameter.$Properties} leancode.contracts.GenericParameter.$Shape
       */

      /**
       * Constructs a new GenericParameter.
       * @memberof leancode.contracts
       * @classdesc Represents a GenericParameter.
       * @constructor
       * @param {leancode.contracts.GenericParameter.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var GenericParameter = function (properties) {
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * GenericParameter name.
       * @member {string} name
       * @memberof leancode.contracts.GenericParameter
       * @instance
       */
      GenericParameter.prototype.name = ""

      /**
       * Decodes a GenericParameter message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.GenericParameter
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.GenericParameter & leancode.contracts.GenericParameter.$Shape} GenericParameter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      GenericParameter.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.GenericParameter(),
          value
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 2) break
              if ((value = reader.stringVerify()).length) message.name = value
              else delete message.name
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes a GenericParameter message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.GenericParameter
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.GenericParameter & leancode.contracts.GenericParameter.$Shape} GenericParameter
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      GenericParameter.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a GenericParameter message.
       * @function verify
       * @memberof leancode.contracts.GenericParameter
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      GenericParameter.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
          if (!$util.isString(message.name)) return "name: string expected"
        return null
      }

      /**
       * Creates a GenericParameter message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.GenericParameter
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.GenericParameter} GenericParameter
       */
      GenericParameter.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.GenericParameter) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.GenericParameter: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.GenericParameter()
        if (object.name != null)
          if (typeof object.name !== "string" || object.name.length) message.name = $String(object.name)
        return message
      }

      /**
       * Creates a plain object from a GenericParameter message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.GenericParameter
       * @static
       * @param {leancode.contracts.GenericParameter} message GenericParameter
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      GenericParameter.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (options.defaults) object.name = ""
        if (message.name != null && $Object.hasOwnProperty.call(message, "name")) object.name = message.name
        return object
      }

      /**
       * Converts this GenericParameter to JSON.
       * @function toJSON
       * @memberof leancode.contracts.GenericParameter
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      GenericParameter.prototype.toJSON = function () {
        return GenericParameter.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for GenericParameter
       * @function getTypeUrl
       * @memberof leancode.contracts.GenericParameter
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      GenericParameter.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.GenericParameter"
      }

      return GenericParameter
    })()

    contracts.AttributeArgument = (function () {
      /**
       * Properties of an AttributeArgument.
       * @typedef {Object} leancode.contracts.AttributeArgument.$Properties
       * @property {leancode.contracts.AttributeArgument.Positional.$Properties|null} [positional] AttributeArgument positional
       * @property {leancode.contracts.AttributeArgument.Named.$Properties|null} [named] AttributeArgument named
       * @property {"positional"|"named"} [attribute] AttributeArgument attribute
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of an AttributeArgument.
       * @memberof leancode.contracts
       * @interface IAttributeArgument
       * @augments leancode.contracts.AttributeArgument.$Properties
       * @deprecated Use leancode.contracts.AttributeArgument.$Properties instead.
       */

      /**
       * Narrowed shape of an AttributeArgument.
       * @typedef {{
       *   positional?: leancode.contracts.AttributeArgument.Positional.$Shape|null;
       *   named?: leancode.contracts.AttributeArgument.Named.$Shape|null;
       *   $unknowns?: Array.<Uint8Array>;
       * } & (
       *   ({ attribute?: undefined; positional?: null; named?: null }|{ attribute?: "positional"; positional: leancode.contracts.AttributeArgument.Positional.$Shape; named?: null }|{ attribute?: "named"; positional?: null; named: leancode.contracts.AttributeArgument.Named.$Shape })
       * )} leancode.contracts.AttributeArgument.$Shape
       */

      /**
       * Constructs a new AttributeArgument.
       * @memberof leancode.contracts
       * @classdesc Represents an AttributeArgument.
       * @constructor
       * @param {leancode.contracts.AttributeArgument.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var AttributeArgument = function (properties) {
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * AttributeArgument positional.
       * @member {leancode.contracts.AttributeArgument.Positional.$Properties|null|undefined} positional
       * @memberof leancode.contracts.AttributeArgument
       * @instance
       */
      AttributeArgument.prototype.positional = null

      /**
       * AttributeArgument named.
       * @member {leancode.contracts.AttributeArgument.Named.$Properties|null|undefined} named
       * @memberof leancode.contracts.AttributeArgument
       * @instance
       */
      AttributeArgument.prototype.named = null

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields

      /**
       * AttributeArgument attribute.
       * @member {"positional"|"named"|undefined} attribute
       * @memberof leancode.contracts.AttributeArgument
       * @instance
       */
      $Object.defineProperty(AttributeArgument.prototype, "attribute", {
        get: $util.oneOfGetter(($oneOfFields = ["positional", "named"])),
        set: $util.oneOfSetter($oneOfFields),
      })

      /**
       * Decodes an AttributeArgument message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.AttributeArgument
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.AttributeArgument & leancode.contracts.AttributeArgument.$Shape} AttributeArgument
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AttributeArgument.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.AttributeArgument()
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 2) break
              message.positional = $root.leancode.contracts.AttributeArgument.Positional.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.positional,
              )
              message.attribute = "positional"
              continue
            }
            case 2: {
              if (wireType !== 2) break
              message.named = $root.leancode.contracts.AttributeArgument.Named.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.named,
              )
              message.attribute = "named"
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes an AttributeArgument message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.AttributeArgument
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.AttributeArgument & leancode.contracts.AttributeArgument.$Shape} AttributeArgument
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AttributeArgument.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies an AttributeArgument message.
       * @function verify
       * @memberof leancode.contracts.AttributeArgument
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      AttributeArgument.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        var properties = {}
        if (message.positional != null && $Object.hasOwnProperty.call(message, "positional")) {
          properties.attribute = 1
          {
            var error = $root.leancode.contracts.AttributeArgument.Positional.verify(message.positional, _depth + 1)
            if (error) return "positional." + error
          }
        }
        if (message.named != null && $Object.hasOwnProperty.call(message, "named")) {
          if (properties.attribute === 1) return "attribute: multiple values"
          properties.attribute = 1
          {
            var error = $root.leancode.contracts.AttributeArgument.Named.verify(message.named, _depth + 1)
            if (error) return "named." + error
          }
        }
        return null
      }

      /**
       * Creates an AttributeArgument message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.AttributeArgument
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.AttributeArgument} AttributeArgument
       */
      AttributeArgument.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.AttributeArgument) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.AttributeArgument: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.AttributeArgument()
        if (object.positional != null) {
          if (!$util.isObject(object.positional))
            throw $TypeError(".leancode.contracts.AttributeArgument.positional: object expected")
          message.positional = $root.leancode.contracts.AttributeArgument.Positional.fromObject(
            object.positional,
            _depth + 1,
          )
        }
        if (object.named != null) {
          if (!$util.isObject(object.named))
            throw $TypeError(".leancode.contracts.AttributeArgument.named: object expected")
          message.named = $root.leancode.contracts.AttributeArgument.Named.fromObject(object.named, _depth + 1)
        }
        return message
      }

      /**
       * Creates a plain object from an AttributeArgument message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.AttributeArgument
       * @static
       * @param {leancode.contracts.AttributeArgument} message AttributeArgument
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      AttributeArgument.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (message.positional != null && $Object.hasOwnProperty.call(message, "positional")) {
          object.positional = $root.leancode.contracts.AttributeArgument.Positional.toObject(
            message.positional,
            options,
            _depth + 1,
          )
          if (options.oneofs) object.attribute = "positional"
        }
        if (message.named != null && $Object.hasOwnProperty.call(message, "named")) {
          object.named = $root.leancode.contracts.AttributeArgument.Named.toObject(message.named, options, _depth + 1)
          if (options.oneofs) object.attribute = "named"
        }
        return object
      }

      /**
       * Converts this AttributeArgument to JSON.
       * @function toJSON
       * @memberof leancode.contracts.AttributeArgument
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      AttributeArgument.prototype.toJSON = function () {
        return AttributeArgument.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for AttributeArgument
       * @function getTypeUrl
       * @memberof leancode.contracts.AttributeArgument
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      AttributeArgument.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.AttributeArgument"
      }

      AttributeArgument.Positional = (function () {
        /**
         * Properties of a Positional.
         * @typedef {Object} leancode.contracts.AttributeArgument.Positional.$Properties
         * @property {number|null} [position] Positional position
         * @property {leancode.contracts.ValueRef.$Properties|null} [value] Positional value
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Positional.
         * @memberof leancode.contracts.AttributeArgument
         * @interface IPositional
         * @augments leancode.contracts.AttributeArgument.Positional.$Properties
         * @deprecated Use leancode.contracts.AttributeArgument.Positional.$Properties instead.
         */

        /**
         * Shape of a Positional.
         * @typedef {{
         *   position?: number|null;
         *   value?: leancode.contracts.ValueRef.$Shape|null;
         *   $unknowns?: Array.<Uint8Array>;
         * }} leancode.contracts.AttributeArgument.Positional.$Shape
         */

        /**
         * Constructs a new Positional.
         * @memberof leancode.contracts.AttributeArgument
         * @classdesc Represents a Positional.
         * @constructor
         * @param {leancode.contracts.AttributeArgument.Positional.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Positional = function (properties) {
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Positional position.
         * @member {number} position
         * @memberof leancode.contracts.AttributeArgument.Positional
         * @instance
         */
        Positional.prototype.position = 0

        /**
         * Positional value.
         * @member {leancode.contracts.ValueRef.$Properties|null|undefined} value
         * @memberof leancode.contracts.AttributeArgument.Positional
         * @instance
         */
        Positional.prototype.value = null

        /**
         * Decodes a Positional message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.AttributeArgument.Positional
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.AttributeArgument.Positional & leancode.contracts.AttributeArgument.Positional.$Shape} Positional
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Positional.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.AttributeArgument.Positional(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 0) break
                if ((value = reader.int32())) message.position = value
                else delete message.position
                continue
              }
              case 2: {
                if (wireType !== 2) break
                message.value = $root.leancode.contracts.ValueRef.decode(
                  reader,
                  reader.uint32(),
                  $undefined,
                  _depth + 1,
                  message.value,
                )
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a Positional message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.AttributeArgument.Positional
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.AttributeArgument.Positional & leancode.contracts.AttributeArgument.Positional.$Shape} Positional
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Positional.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a Positional message.
         * @function verify
         * @memberof leancode.contracts.AttributeArgument.Positional
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Positional.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.position != null && $Object.hasOwnProperty.call(message, "position"))
            if (!$util.isInteger(message.position)) return "position: integer expected"
          if (message.value != null && $Object.hasOwnProperty.call(message, "value")) {
            var error = $root.leancode.contracts.ValueRef.verify(message.value, _depth + 1)
            if (error) return "value." + error
          }
          return null
        }

        /**
         * Creates a Positional message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.AttributeArgument.Positional
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.AttributeArgument.Positional} Positional
         */
        Positional.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.AttributeArgument.Positional) return object
          if (!$util.isObject(object))
            throw $TypeError(".leancode.contracts.AttributeArgument.Positional: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.AttributeArgument.Positional()
          if (object.position != null) if ($Number(object.position) !== 0) message.position = object.position | 0
          if (object.value != null) {
            if (!$util.isObject(object.value))
              throw $TypeError(".leancode.contracts.AttributeArgument.Positional.value: object expected")
            message.value = $root.leancode.contracts.ValueRef.fromObject(object.value, _depth + 1)
          }
          return message
        }

        /**
         * Creates a plain object from a Positional message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.AttributeArgument.Positional
         * @static
         * @param {leancode.contracts.AttributeArgument.Positional} message Positional
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Positional.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.defaults) {
            object.position = 0
            object.value = null
          }
          if (message.position != null && $Object.hasOwnProperty.call(message, "position"))
            object.position = message.position
          if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
            object.value = $root.leancode.contracts.ValueRef.toObject(message.value, options, _depth + 1)
          return object
        }

        /**
         * Converts this Positional to JSON.
         * @function toJSON
         * @memberof leancode.contracts.AttributeArgument.Positional
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Positional.prototype.toJSON = function () {
          return Positional.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Positional
         * @function getTypeUrl
         * @memberof leancode.contracts.AttributeArgument.Positional
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Positional.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.AttributeArgument.Positional"
        }

        return Positional
      })()

      AttributeArgument.Named = (function () {
        /**
         * Properties of a Named.
         * @typedef {Object} leancode.contracts.AttributeArgument.Named.$Properties
         * @property {string|null} [name] Named name
         * @property {leancode.contracts.ValueRef.$Properties|null} [value] Named value
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Named.
         * @memberof leancode.contracts.AttributeArgument
         * @interface INamed
         * @augments leancode.contracts.AttributeArgument.Named.$Properties
         * @deprecated Use leancode.contracts.AttributeArgument.Named.$Properties instead.
         */

        /**
         * Shape of a Named.
         * @typedef {{
         *   name?: string|null;
         *   value?: leancode.contracts.ValueRef.$Shape|null;
         *   $unknowns?: Array.<Uint8Array>;
         * }} leancode.contracts.AttributeArgument.Named.$Shape
         */

        /**
         * Constructs a new Named.
         * @memberof leancode.contracts.AttributeArgument
         * @classdesc Represents a Named.
         * @constructor
         * @param {leancode.contracts.AttributeArgument.Named.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Named = function (properties) {
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Named name.
         * @member {string} name
         * @memberof leancode.contracts.AttributeArgument.Named
         * @instance
         */
        Named.prototype.name = ""

        /**
         * Named value.
         * @member {leancode.contracts.ValueRef.$Properties|null|undefined} value
         * @memberof leancode.contracts.AttributeArgument.Named
         * @instance
         */
        Named.prototype.value = null

        /**
         * Decodes a Named message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.AttributeArgument.Named
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.AttributeArgument.Named & leancode.contracts.AttributeArgument.Named.$Shape} Named
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Named.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.AttributeArgument.Named(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 2) break
                if ((value = reader.stringVerify()).length) message.name = value
                else delete message.name
                continue
              }
              case 2: {
                if (wireType !== 2) break
                message.value = $root.leancode.contracts.ValueRef.decode(
                  reader,
                  reader.uint32(),
                  $undefined,
                  _depth + 1,
                  message.value,
                )
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a Named message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.AttributeArgument.Named
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.AttributeArgument.Named & leancode.contracts.AttributeArgument.Named.$Shape} Named
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Named.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a Named message.
         * @function verify
         * @memberof leancode.contracts.AttributeArgument.Named
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Named.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
            if (!$util.isString(message.name)) return "name: string expected"
          if (message.value != null && $Object.hasOwnProperty.call(message, "value")) {
            var error = $root.leancode.contracts.ValueRef.verify(message.value, _depth + 1)
            if (error) return "value." + error
          }
          return null
        }

        /**
         * Creates a Named message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.AttributeArgument.Named
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.AttributeArgument.Named} Named
         */
        Named.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.AttributeArgument.Named) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.AttributeArgument.Named: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.AttributeArgument.Named()
          if (object.name != null)
            if (typeof object.name !== "string" || object.name.length) message.name = $String(object.name)
          if (object.value != null) {
            if (!$util.isObject(object.value))
              throw $TypeError(".leancode.contracts.AttributeArgument.Named.value: object expected")
            message.value = $root.leancode.contracts.ValueRef.fromObject(object.value, _depth + 1)
          }
          return message
        }

        /**
         * Creates a plain object from a Named message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.AttributeArgument.Named
         * @static
         * @param {leancode.contracts.AttributeArgument.Named} message Named
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Named.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.defaults) {
            object.name = ""
            object.value = null
          }
          if (message.name != null && $Object.hasOwnProperty.call(message, "name")) object.name = message.name
          if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
            object.value = $root.leancode.contracts.ValueRef.toObject(message.value, options, _depth + 1)
          return object
        }

        /**
         * Converts this Named to JSON.
         * @function toJSON
         * @memberof leancode.contracts.AttributeArgument.Named
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Named.prototype.toJSON = function () {
          return Named.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Named
         * @function getTypeUrl
         * @memberof leancode.contracts.AttributeArgument.Named
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Named.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.AttributeArgument.Named"
        }

        return Named
      })()

      return AttributeArgument
    })()

    contracts.AttributeRef = (function () {
      /**
       * Properties of an AttributeRef.
       * @typedef {Object} leancode.contracts.AttributeRef.$Properties
       * @property {string|null} [attributeName] AttributeRef attributeName
       * @property {Array.<leancode.contracts.AttributeArgument.$Properties>|null} [argument] AttributeRef argument
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of an AttributeRef.
       * @memberof leancode.contracts
       * @interface IAttributeRef
       * @augments leancode.contracts.AttributeRef.$Properties
       * @deprecated Use leancode.contracts.AttributeRef.$Properties instead.
       */

      /**
       * Shape of an AttributeRef.
       * @typedef {{
       *   attributeName?: string|null;
       *   argument?: Array.<leancode.contracts.AttributeArgument.$Shape>|null;
       *   $unknowns?: Array.<Uint8Array>;
       * }} leancode.contracts.AttributeRef.$Shape
       */

      /**
       * Constructs a new AttributeRef.
       * @memberof leancode.contracts
       * @classdesc Represents an AttributeRef.
       * @constructor
       * @param {leancode.contracts.AttributeRef.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var AttributeRef = function (properties) {
        this.argument = []
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * AttributeRef attributeName.
       * @member {string} attributeName
       * @memberof leancode.contracts.AttributeRef
       * @instance
       */
      AttributeRef.prototype.attributeName = ""

      /**
       * AttributeRef argument.
       * @member {Array.<leancode.contracts.AttributeArgument.$Properties>} argument
       * @memberof leancode.contracts.AttributeRef
       * @instance
       */
      AttributeRef.prototype.argument = $util.emptyArray

      /**
       * Decodes an AttributeRef message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.AttributeRef
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.AttributeRef & leancode.contracts.AttributeRef.$Shape} AttributeRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AttributeRef.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.AttributeRef(),
          value
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 2) break
              if ((value = reader.stringVerify()).length) message.attributeName = value
              else delete message.attributeName
              continue
            }
            case 2: {
              if (wireType !== 2) break
              if (!(message.argument && message.argument.length)) message.argument = []
              message.argument.push(
                $root.leancode.contracts.AttributeArgument.decode(reader, reader.uint32(), $undefined, _depth + 1),
              )
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes an AttributeRef message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.AttributeRef
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.AttributeRef & leancode.contracts.AttributeRef.$Shape} AttributeRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AttributeRef.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies an AttributeRef message.
       * @function verify
       * @memberof leancode.contracts.AttributeRef
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      AttributeRef.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        if (message.attributeName != null && $Object.hasOwnProperty.call(message, "attributeName"))
          if (!$util.isString(message.attributeName)) return "attributeName: string expected"
        if (message.argument != null && $Object.hasOwnProperty.call(message, "argument")) {
          if (!$Array.isArray(message.argument)) return "argument: array expected"
          for (var i = 0; i < message.argument.length; ++i) {
            var error = $root.leancode.contracts.AttributeArgument.verify(message.argument[i], _depth + 1)
            if (error) return "argument." + error
          }
        }
        return null
      }

      /**
       * Creates an AttributeRef message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.AttributeRef
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.AttributeRef} AttributeRef
       */
      AttributeRef.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.AttributeRef) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.AttributeRef: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.AttributeRef()
        if (object.attributeName != null)
          if (typeof object.attributeName !== "string" || object.attributeName.length)
            message.attributeName = $String(object.attributeName)
        if (object.argument) {
          if (!$Array.isArray(object.argument))
            throw $TypeError(".leancode.contracts.AttributeRef.argument: array expected")
          message.argument = $Array(object.argument.length)
          for (var i = 0; i < object.argument.length; ++i) {
            if (!$util.isObject(object.argument[i]))
              throw $TypeError(".leancode.contracts.AttributeRef.argument: object expected")
            message.argument[i] = $root.leancode.contracts.AttributeArgument.fromObject(object.argument[i], _depth + 1)
          }
        }
        return message
      }

      /**
       * Creates a plain object from an AttributeRef message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.AttributeRef
       * @static
       * @param {leancode.contracts.AttributeRef} message AttributeRef
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      AttributeRef.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (options.arrays || options.defaults) object.argument = []
        if (options.defaults) object.attributeName = ""
        if (message.attributeName != null && $Object.hasOwnProperty.call(message, "attributeName"))
          object.attributeName = message.attributeName
        if (message.argument && message.argument.length) {
          object.argument = $Array(message.argument.length)
          for (var j = 0; j < message.argument.length; ++j)
            object.argument[j] = $root.leancode.contracts.AttributeArgument.toObject(
              message.argument[j],
              options,
              _depth + 1,
            )
        }
        return object
      }

      /**
       * Converts this AttributeRef to JSON.
       * @function toJSON
       * @memberof leancode.contracts.AttributeRef
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      AttributeRef.prototype.toJSON = function () {
        return AttributeRef.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for AttributeRef
       * @function getTypeUrl
       * @memberof leancode.contracts.AttributeRef
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      AttributeRef.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.AttributeRef"
      }

      return AttributeRef
    })()

    contracts.PropertyRef = (function () {
      /**
       * Properties of a PropertyRef.
       * @typedef {Object} leancode.contracts.PropertyRef.$Properties
       * @property {leancode.contracts.TypeRef.$Properties|null} [type] PropertyRef type
       * @property {string|null} [name] PropertyRef name
       * @property {Array.<leancode.contracts.AttributeRef.$Properties>|null} [attributes] PropertyRef attributes
       * @property {string|null} [comment] PropertyRef comment
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of a PropertyRef.
       * @memberof leancode.contracts
       * @interface IPropertyRef
       * @augments leancode.contracts.PropertyRef.$Properties
       * @deprecated Use leancode.contracts.PropertyRef.$Properties instead.
       */

      /**
       * Shape of a PropertyRef.
       * @typedef {{
       *   type?: leancode.contracts.TypeRef.$Shape|null;
       *   name?: string|null;
       *   attributes?: Array.<leancode.contracts.AttributeRef.$Shape>|null;
       *   comment?: string|null;
       *   $unknowns?: Array.<Uint8Array>;
       * }} leancode.contracts.PropertyRef.$Shape
       */

      /**
       * Constructs a new PropertyRef.
       * @memberof leancode.contracts
       * @classdesc Represents a PropertyRef.
       * @constructor
       * @param {leancode.contracts.PropertyRef.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var PropertyRef = function (properties) {
        this.attributes = []
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * PropertyRef type.
       * @member {leancode.contracts.TypeRef.$Properties|null|undefined} type
       * @memberof leancode.contracts.PropertyRef
       * @instance
       */
      PropertyRef.prototype.type = null

      /**
       * PropertyRef name.
       * @member {string} name
       * @memberof leancode.contracts.PropertyRef
       * @instance
       */
      PropertyRef.prototype.name = ""

      /**
       * PropertyRef attributes.
       * @member {Array.<leancode.contracts.AttributeRef.$Properties>} attributes
       * @memberof leancode.contracts.PropertyRef
       * @instance
       */
      PropertyRef.prototype.attributes = $util.emptyArray

      /**
       * PropertyRef comment.
       * @member {string} comment
       * @memberof leancode.contracts.PropertyRef
       * @instance
       */
      PropertyRef.prototype.comment = ""

      /**
       * Decodes a PropertyRef message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.PropertyRef
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.PropertyRef & leancode.contracts.PropertyRef.$Shape} PropertyRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PropertyRef.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.PropertyRef(),
          value
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 2) break
              message.type = $root.leancode.contracts.TypeRef.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.type,
              )
              continue
            }
            case 2: {
              if (wireType !== 2) break
              if ((value = reader.stringVerify()).length) message.name = value
              else delete message.name
              continue
            }
            case 3: {
              if (wireType !== 2) break
              if (!(message.attributes && message.attributes.length)) message.attributes = []
              message.attributes.push(
                $root.leancode.contracts.AttributeRef.decode(reader, reader.uint32(), $undefined, _depth + 1),
              )
              continue
            }
            case 4: {
              if (wireType !== 2) break
              if ((value = reader.stringVerify()).length) message.comment = value
              else delete message.comment
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes a PropertyRef message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.PropertyRef
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.PropertyRef & leancode.contracts.PropertyRef.$Shape} PropertyRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PropertyRef.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a PropertyRef message.
       * @function verify
       * @memberof leancode.contracts.PropertyRef
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      PropertyRef.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        if (message.type != null && $Object.hasOwnProperty.call(message, "type")) {
          var error = $root.leancode.contracts.TypeRef.verify(message.type, _depth + 1)
          if (error) return "type." + error
        }
        if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
          if (!$util.isString(message.name)) return "name: string expected"
        if (message.attributes != null && $Object.hasOwnProperty.call(message, "attributes")) {
          if (!$Array.isArray(message.attributes)) return "attributes: array expected"
          for (var i = 0; i < message.attributes.length; ++i) {
            var error = $root.leancode.contracts.AttributeRef.verify(message.attributes[i], _depth + 1)
            if (error) return "attributes." + error
          }
        }
        if (message.comment != null && $Object.hasOwnProperty.call(message, "comment"))
          if (!$util.isString(message.comment)) return "comment: string expected"
        return null
      }

      /**
       * Creates a PropertyRef message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.PropertyRef
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.PropertyRef} PropertyRef
       */
      PropertyRef.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.PropertyRef) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.PropertyRef: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.PropertyRef()
        if (object.type != null) {
          if (!$util.isObject(object.type)) throw $TypeError(".leancode.contracts.PropertyRef.type: object expected")
          message.type = $root.leancode.contracts.TypeRef.fromObject(object.type, _depth + 1)
        }
        if (object.name != null)
          if (typeof object.name !== "string" || object.name.length) message.name = $String(object.name)
        if (object.attributes) {
          if (!$Array.isArray(object.attributes))
            throw $TypeError(".leancode.contracts.PropertyRef.attributes: array expected")
          message.attributes = $Array(object.attributes.length)
          for (var i = 0; i < object.attributes.length; ++i) {
            if (!$util.isObject(object.attributes[i]))
              throw $TypeError(".leancode.contracts.PropertyRef.attributes: object expected")
            message.attributes[i] = $root.leancode.contracts.AttributeRef.fromObject(object.attributes[i], _depth + 1)
          }
        }
        if (object.comment != null)
          if (typeof object.comment !== "string" || object.comment.length) message.comment = $String(object.comment)
        return message
      }

      /**
       * Creates a plain object from a PropertyRef message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.PropertyRef
       * @static
       * @param {leancode.contracts.PropertyRef} message PropertyRef
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      PropertyRef.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (options.arrays || options.defaults) object.attributes = []
        if (options.defaults) {
          object.type = null
          object.name = ""
          object.comment = ""
        }
        if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
          object.type = $root.leancode.contracts.TypeRef.toObject(message.type, options, _depth + 1)
        if (message.name != null && $Object.hasOwnProperty.call(message, "name")) object.name = message.name
        if (message.attributes && message.attributes.length) {
          object.attributes = $Array(message.attributes.length)
          for (var j = 0; j < message.attributes.length; ++j)
            object.attributes[j] = $root.leancode.contracts.AttributeRef.toObject(
              message.attributes[j],
              options,
              _depth + 1,
            )
        }
        if (message.comment != null && $Object.hasOwnProperty.call(message, "comment")) object.comment = message.comment
        return object
      }

      /**
       * Converts this PropertyRef to JSON.
       * @function toJSON
       * @memberof leancode.contracts.PropertyRef
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      PropertyRef.prototype.toJSON = function () {
        return PropertyRef.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for PropertyRef
       * @function getTypeUrl
       * @memberof leancode.contracts.PropertyRef
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      PropertyRef.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.PropertyRef"
      }

      return PropertyRef
    })()

    contracts.ConstantRef = (function () {
      /**
       * Properties of a ConstantRef.
       * @typedef {Object} leancode.contracts.ConstantRef.$Properties
       * @property {string|null} [name] ConstantRef name
       * @property {leancode.contracts.ValueRef.$Properties|null} [value] ConstantRef value
       * @property {string|null} [comment] ConstantRef comment
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of a ConstantRef.
       * @memberof leancode.contracts
       * @interface IConstantRef
       * @augments leancode.contracts.ConstantRef.$Properties
       * @deprecated Use leancode.contracts.ConstantRef.$Properties instead.
       */

      /**
       * Shape of a ConstantRef.
       * @typedef {{
       *   name?: string|null;
       *   value?: leancode.contracts.ValueRef.$Shape|null;
       *   comment?: string|null;
       *   $unknowns?: Array.<Uint8Array>;
       * }} leancode.contracts.ConstantRef.$Shape
       */

      /**
       * Constructs a new ConstantRef.
       * @memberof leancode.contracts
       * @classdesc Represents a ConstantRef.
       * @constructor
       * @param {leancode.contracts.ConstantRef.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var ConstantRef = function (properties) {
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * ConstantRef name.
       * @member {string} name
       * @memberof leancode.contracts.ConstantRef
       * @instance
       */
      ConstantRef.prototype.name = ""

      /**
       * ConstantRef value.
       * @member {leancode.contracts.ValueRef.$Properties|null|undefined} value
       * @memberof leancode.contracts.ConstantRef
       * @instance
       */
      ConstantRef.prototype.value = null

      /**
       * ConstantRef comment.
       * @member {string} comment
       * @memberof leancode.contracts.ConstantRef
       * @instance
       */
      ConstantRef.prototype.comment = ""

      /**
       * Decodes a ConstantRef message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.ConstantRef
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.ConstantRef & leancode.contracts.ConstantRef.$Shape} ConstantRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ConstantRef.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.ConstantRef(),
          value
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 2) break
              if ((value = reader.stringVerify()).length) message.name = value
              else delete message.name
              continue
            }
            case 2: {
              if (wireType !== 2) break
              message.value = $root.leancode.contracts.ValueRef.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.value,
              )
              continue
            }
            case 3: {
              if (wireType !== 2) break
              if ((value = reader.stringVerify()).length) message.comment = value
              else delete message.comment
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes a ConstantRef message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.ConstantRef
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.ConstantRef & leancode.contracts.ConstantRef.$Shape} ConstantRef
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ConstantRef.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a ConstantRef message.
       * @function verify
       * @memberof leancode.contracts.ConstantRef
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ConstantRef.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
          if (!$util.isString(message.name)) return "name: string expected"
        if (message.value != null && $Object.hasOwnProperty.call(message, "value")) {
          var error = $root.leancode.contracts.ValueRef.verify(message.value, _depth + 1)
          if (error) return "value." + error
        }
        if (message.comment != null && $Object.hasOwnProperty.call(message, "comment"))
          if (!$util.isString(message.comment)) return "comment: string expected"
        return null
      }

      /**
       * Creates a ConstantRef message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.ConstantRef
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.ConstantRef} ConstantRef
       */
      ConstantRef.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.ConstantRef) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.ConstantRef: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.ConstantRef()
        if (object.name != null)
          if (typeof object.name !== "string" || object.name.length) message.name = $String(object.name)
        if (object.value != null) {
          if (!$util.isObject(object.value)) throw $TypeError(".leancode.contracts.ConstantRef.value: object expected")
          message.value = $root.leancode.contracts.ValueRef.fromObject(object.value, _depth + 1)
        }
        if (object.comment != null)
          if (typeof object.comment !== "string" || object.comment.length) message.comment = $String(object.comment)
        return message
      }

      /**
       * Creates a plain object from a ConstantRef message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.ConstantRef
       * @static
       * @param {leancode.contracts.ConstantRef} message ConstantRef
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ConstantRef.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (options.defaults) {
          object.name = ""
          object.value = null
          object.comment = ""
        }
        if (message.name != null && $Object.hasOwnProperty.call(message, "name")) object.name = message.name
        if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
          object.value = $root.leancode.contracts.ValueRef.toObject(message.value, options, _depth + 1)
        if (message.comment != null && $Object.hasOwnProperty.call(message, "comment")) object.comment = message.comment
        return object
      }

      /**
       * Converts this ConstantRef to JSON.
       * @function toJSON
       * @memberof leancode.contracts.ConstantRef
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ConstantRef.prototype.toJSON = function () {
        return ConstantRef.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for ConstantRef
       * @function getTypeUrl
       * @memberof leancode.contracts.ConstantRef
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      ConstantRef.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.ConstantRef"
      }

      return ConstantRef
    })()

    contracts.EnumValue = (function () {
      /**
       * Properties of an EnumValue.
       * @typedef {Object} leancode.contracts.EnumValue.$Properties
       * @property {string|null} [name] EnumValue name
       * @property {number|Long|null} [value] EnumValue value
       * @property {string|null} [comment] EnumValue comment
       * @property {Array.<leancode.contracts.AttributeRef.$Properties>|null} [attributes] EnumValue attributes
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of an EnumValue.
       * @memberof leancode.contracts
       * @interface IEnumValue
       * @augments leancode.contracts.EnumValue.$Properties
       * @deprecated Use leancode.contracts.EnumValue.$Properties instead.
       */

      /**
       * Shape of an EnumValue.
       * @typedef {{
       *   name?: string|null;
       *   value?: number|Long|null;
       *   comment?: string|null;
       *   attributes?: Array.<leancode.contracts.AttributeRef.$Shape>|null;
       *   $unknowns?: Array.<Uint8Array>;
       * }} leancode.contracts.EnumValue.$Shape
       */

      /**
       * Constructs a new EnumValue.
       * @memberof leancode.contracts
       * @classdesc Represents an EnumValue.
       * @constructor
       * @param {leancode.contracts.EnumValue.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var EnumValue = function (properties) {
        this.attributes = []
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * EnumValue name.
       * @member {string} name
       * @memberof leancode.contracts.EnumValue
       * @instance
       */
      EnumValue.prototype.name = ""

      /**
       * EnumValue value.
       * @member {number|Long} value
       * @memberof leancode.contracts.EnumValue
       * @instance
       */
      EnumValue.prototype.value = $util.Long ? $util.Long.fromBits(0, 0, false) : 0

      /**
       * EnumValue comment.
       * @member {string} comment
       * @memberof leancode.contracts.EnumValue
       * @instance
       */
      EnumValue.prototype.comment = ""

      /**
       * EnumValue attributes.
       * @member {Array.<leancode.contracts.AttributeRef.$Properties>} attributes
       * @memberof leancode.contracts.EnumValue
       * @instance
       */
      EnumValue.prototype.attributes = $util.emptyArray

      /**
       * Decodes an EnumValue message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.EnumValue
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.EnumValue & leancode.contracts.EnumValue.$Shape} EnumValue
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      EnumValue.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.EnumValue(),
          value
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 2) break
              if ((value = reader.stringVerify()).length) message.name = value
              else delete message.name
              continue
            }
            case 2: {
              if (wireType !== 0) break
              if (typeof (value = reader.int64()) === "object" ? value.low || value.high : value !== 0)
                message.value = value
              else delete message.value
              continue
            }
            case 3: {
              if (wireType !== 2) break
              if ((value = reader.stringVerify()).length) message.comment = value
              else delete message.comment
              continue
            }
            case 4: {
              if (wireType !== 2) break
              if (!(message.attributes && message.attributes.length)) message.attributes = []
              message.attributes.push(
                $root.leancode.contracts.AttributeRef.decode(reader, reader.uint32(), $undefined, _depth + 1),
              )
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes an EnumValue message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.EnumValue
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.EnumValue & leancode.contracts.EnumValue.$Shape} EnumValue
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      EnumValue.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies an EnumValue message.
       * @function verify
       * @memberof leancode.contracts.EnumValue
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      EnumValue.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
          if (!$util.isString(message.name)) return "name: string expected"
        if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
          if (
            !$util.isInteger(message.value) &&
            !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high))
          )
            return "value: integer|Long expected"
        if (message.comment != null && $Object.hasOwnProperty.call(message, "comment"))
          if (!$util.isString(message.comment)) return "comment: string expected"
        if (message.attributes != null && $Object.hasOwnProperty.call(message, "attributes")) {
          if (!$Array.isArray(message.attributes)) return "attributes: array expected"
          for (var i = 0; i < message.attributes.length; ++i) {
            var error = $root.leancode.contracts.AttributeRef.verify(message.attributes[i], _depth + 1)
            if (error) return "attributes." + error
          }
        }
        return null
      }

      /**
       * Creates an EnumValue message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.EnumValue
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.EnumValue} EnumValue
       */
      EnumValue.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.EnumValue) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.EnumValue: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.EnumValue()
        if (object.name != null)
          if (typeof object.name !== "string" || object.name.length) message.name = $String(object.name)
        if (object.value != null)
          if (typeof object.value === "object" ? object.value.low || object.value.high : $Number(object.value) !== 0)
            if ($util.Long) message.value = $util.Long.fromValue(object.value, false)
            else if (typeof object.value === "string") message.value = $parseInt(object.value, 10)
            else if (typeof object.value === "number") message.value = object.value
            else if (typeof object.value === "object")
              message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber()
        if (object.comment != null)
          if (typeof object.comment !== "string" || object.comment.length) message.comment = $String(object.comment)
        if (object.attributes) {
          if (!$Array.isArray(object.attributes))
            throw $TypeError(".leancode.contracts.EnumValue.attributes: array expected")
          message.attributes = $Array(object.attributes.length)
          for (var i = 0; i < object.attributes.length; ++i) {
            if (!$util.isObject(object.attributes[i]))
              throw $TypeError(".leancode.contracts.EnumValue.attributes: object expected")
            message.attributes[i] = $root.leancode.contracts.AttributeRef.fromObject(object.attributes[i], _depth + 1)
          }
        }
        return message
      }

      /**
       * Creates a plain object from an EnumValue message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.EnumValue
       * @static
       * @param {leancode.contracts.EnumValue} message EnumValue
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      EnumValue.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (options.arrays || options.defaults) object.attributes = []
        if (options.defaults) {
          object.name = ""
          if ($util.Long) {
            var long = new $util.Long(0, 0, false)
            object.value =
              options.longs === $String
                ? long.toString()
                : options.longs === $Number
                  ? long.toNumber()
                  : typeof $BigInt !== "undefined" && options.longs === $BigInt
                    ? long.toBigInt()
                    : long
          } else
            object.value =
              options.longs === $String
                ? "0"
                : typeof $BigInt !== "undefined" && options.longs === $BigInt
                  ? $BigInt("0")
                  : 0
          object.comment = ""
        }
        if (message.name != null && $Object.hasOwnProperty.call(message, "name")) object.name = message.name
        if (message.value != null && $Object.hasOwnProperty.call(message, "value"))
          if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
            object.value =
              typeof message.value === "number"
                ? $BigInt(message.value)
                : $util.Long.fromBits(message.value.low >>> 0, message.value.high >>> 0, false).toBigInt()
          else if (typeof message.value === "number")
            object.value = options.longs === $String ? $String(message.value) : message.value
          else
            object.value =
              options.longs === $String
                ? $util.Long.prototype.toString.call(message.value)
                : options.longs === $Number
                  ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber()
                  : message.value
        if (message.comment != null && $Object.hasOwnProperty.call(message, "comment")) object.comment = message.comment
        if (message.attributes && message.attributes.length) {
          object.attributes = $Array(message.attributes.length)
          for (var j = 0; j < message.attributes.length; ++j)
            object.attributes[j] = $root.leancode.contracts.AttributeRef.toObject(
              message.attributes[j],
              options,
              _depth + 1,
            )
        }
        return object
      }

      /**
       * Converts this EnumValue to JSON.
       * @function toJSON
       * @memberof leancode.contracts.EnumValue
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      EnumValue.prototype.toJSON = function () {
        return EnumValue.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for EnumValue
       * @function getTypeUrl
       * @memberof leancode.contracts.EnumValue
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      EnumValue.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.EnumValue"
      }

      return EnumValue
    })()

    contracts.ErrorCode = (function () {
      /**
       * Properties of an ErrorCode.
       * @typedef {Object} leancode.contracts.ErrorCode.$Properties
       * @property {leancode.contracts.ErrorCode.Single.$Properties|null} [single] ErrorCode single
       * @property {leancode.contracts.ErrorCode.Group.$Properties|null} [group] ErrorCode group
       * @property {"single"|"group"} [code] ErrorCode code
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of an ErrorCode.
       * @memberof leancode.contracts
       * @interface IErrorCode
       * @augments leancode.contracts.ErrorCode.$Properties
       * @deprecated Use leancode.contracts.ErrorCode.$Properties instead.
       */

      /**
       * Narrowed shape of an ErrorCode.
       * @typedef {{
       *   single?: leancode.contracts.ErrorCode.Single.$Shape|null;
       *   group?: leancode.contracts.ErrorCode.Group.$Shape|null;
       *   $unknowns?: Array.<Uint8Array>;
       * } & (
       *   ({ code?: undefined; single?: null; group?: null }|{ code?: "single"; single: leancode.contracts.ErrorCode.Single.$Shape; group?: null }|{ code?: "group"; single?: null; group: leancode.contracts.ErrorCode.Group.$Shape })
       * )} leancode.contracts.ErrorCode.$Shape
       */

      /**
       * Constructs a new ErrorCode.
       * @memberof leancode.contracts
       * @classdesc Represents an ErrorCode.
       * @constructor
       * @param {leancode.contracts.ErrorCode.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var ErrorCode = function (properties) {
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * ErrorCode single.
       * @member {leancode.contracts.ErrorCode.Single.$Properties|null|undefined} single
       * @memberof leancode.contracts.ErrorCode
       * @instance
       */
      ErrorCode.prototype.single = null

      /**
       * ErrorCode group.
       * @member {leancode.contracts.ErrorCode.Group.$Properties|null|undefined} group
       * @memberof leancode.contracts.ErrorCode
       * @instance
       */
      ErrorCode.prototype.group = null

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields

      /**
       * ErrorCode code.
       * @member {"single"|"group"|undefined} code
       * @memberof leancode.contracts.ErrorCode
       * @instance
       */
      $Object.defineProperty(ErrorCode.prototype, "code", {
        get: $util.oneOfGetter(($oneOfFields = ["single", "group"])),
        set: $util.oneOfSetter($oneOfFields),
      })

      /**
       * Decodes an ErrorCode message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.ErrorCode
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.ErrorCode & leancode.contracts.ErrorCode.$Shape} ErrorCode
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ErrorCode.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.ErrorCode()
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 2) break
              message.single = $root.leancode.contracts.ErrorCode.Single.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.single,
              )
              message.code = "single"
              continue
            }
            case 2: {
              if (wireType !== 2) break
              message.group = $root.leancode.contracts.ErrorCode.Group.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.group,
              )
              message.code = "group"
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes an ErrorCode message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.ErrorCode
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.ErrorCode & leancode.contracts.ErrorCode.$Shape} ErrorCode
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ErrorCode.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies an ErrorCode message.
       * @function verify
       * @memberof leancode.contracts.ErrorCode
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ErrorCode.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        var properties = {}
        if (message.single != null && $Object.hasOwnProperty.call(message, "single")) {
          properties.code = 1
          {
            var error = $root.leancode.contracts.ErrorCode.Single.verify(message.single, _depth + 1)
            if (error) return "single." + error
          }
        }
        if (message.group != null && $Object.hasOwnProperty.call(message, "group")) {
          if (properties.code === 1) return "code: multiple values"
          properties.code = 1
          {
            var error = $root.leancode.contracts.ErrorCode.Group.verify(message.group, _depth + 1)
            if (error) return "group." + error
          }
        }
        return null
      }

      /**
       * Creates an ErrorCode message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.ErrorCode
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.ErrorCode} ErrorCode
       */
      ErrorCode.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.ErrorCode) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.ErrorCode: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.ErrorCode()
        if (object.single != null) {
          if (!$util.isObject(object.single)) throw $TypeError(".leancode.contracts.ErrorCode.single: object expected")
          message.single = $root.leancode.contracts.ErrorCode.Single.fromObject(object.single, _depth + 1)
        }
        if (object.group != null) {
          if (!$util.isObject(object.group)) throw $TypeError(".leancode.contracts.ErrorCode.group: object expected")
          message.group = $root.leancode.contracts.ErrorCode.Group.fromObject(object.group, _depth + 1)
        }
        return message
      }

      /**
       * Creates a plain object from an ErrorCode message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.ErrorCode
       * @static
       * @param {leancode.contracts.ErrorCode} message ErrorCode
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ErrorCode.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (message.single != null && $Object.hasOwnProperty.call(message, "single")) {
          object.single = $root.leancode.contracts.ErrorCode.Single.toObject(message.single, options, _depth + 1)
          if (options.oneofs) object.code = "single"
        }
        if (message.group != null && $Object.hasOwnProperty.call(message, "group")) {
          object.group = $root.leancode.contracts.ErrorCode.Group.toObject(message.group, options, _depth + 1)
          if (options.oneofs) object.code = "group"
        }
        return object
      }

      /**
       * Converts this ErrorCode to JSON.
       * @function toJSON
       * @memberof leancode.contracts.ErrorCode
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ErrorCode.prototype.toJSON = function () {
        return ErrorCode.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for ErrorCode
       * @function getTypeUrl
       * @memberof leancode.contracts.ErrorCode
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      ErrorCode.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.ErrorCode"
      }

      ErrorCode.Single = (function () {
        /**
         * Properties of a Single.
         * @typedef {Object} leancode.contracts.ErrorCode.Single.$Properties
         * @property {string|null} [name] Single name
         * @property {number|null} [code] Single code
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Single.
         * @memberof leancode.contracts.ErrorCode
         * @interface ISingle
         * @augments leancode.contracts.ErrorCode.Single.$Properties
         * @deprecated Use leancode.contracts.ErrorCode.Single.$Properties instead.
         */

        /**
         * Shape of a Single.
         * @typedef {leancode.contracts.ErrorCode.Single.$Properties} leancode.contracts.ErrorCode.Single.$Shape
         */

        /**
         * Constructs a new Single.
         * @memberof leancode.contracts.ErrorCode
         * @classdesc Represents a Single.
         * @constructor
         * @param {leancode.contracts.ErrorCode.Single.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Single = function (properties) {
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Single name.
         * @member {string} name
         * @memberof leancode.contracts.ErrorCode.Single
         * @instance
         */
        Single.prototype.name = ""

        /**
         * Single code.
         * @member {number} code
         * @memberof leancode.contracts.ErrorCode.Single
         * @instance
         */
        Single.prototype.code = 0

        /**
         * Decodes a Single message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.ErrorCode.Single
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.ErrorCode.Single & leancode.contracts.ErrorCode.Single.$Shape} Single
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Single.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.ErrorCode.Single(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 2) break
                if ((value = reader.stringVerify()).length) message.name = value
                else delete message.name
                continue
              }
              case 2: {
                if (wireType !== 0) break
                if ((value = reader.int32())) message.code = value
                else delete message.code
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a Single message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.ErrorCode.Single
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.ErrorCode.Single & leancode.contracts.ErrorCode.Single.$Shape} Single
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Single.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a Single message.
         * @function verify
         * @memberof leancode.contracts.ErrorCode.Single
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Single.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
            if (!$util.isString(message.name)) return "name: string expected"
          if (message.code != null && $Object.hasOwnProperty.call(message, "code"))
            if (!$util.isInteger(message.code)) return "code: integer expected"
          return null
        }

        /**
         * Creates a Single message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.ErrorCode.Single
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.ErrorCode.Single} Single
         */
        Single.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.ErrorCode.Single) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.ErrorCode.Single: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.ErrorCode.Single()
          if (object.name != null)
            if (typeof object.name !== "string" || object.name.length) message.name = $String(object.name)
          if (object.code != null) if ($Number(object.code) !== 0) message.code = object.code | 0
          return message
        }

        /**
         * Creates a plain object from a Single message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.ErrorCode.Single
         * @static
         * @param {leancode.contracts.ErrorCode.Single} message Single
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Single.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.defaults) {
            object.name = ""
            object.code = 0
          }
          if (message.name != null && $Object.hasOwnProperty.call(message, "name")) object.name = message.name
          if (message.code != null && $Object.hasOwnProperty.call(message, "code")) object.code = message.code
          return object
        }

        /**
         * Converts this Single to JSON.
         * @function toJSON
         * @memberof leancode.contracts.ErrorCode.Single
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Single.prototype.toJSON = function () {
          return Single.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Single
         * @function getTypeUrl
         * @memberof leancode.contracts.ErrorCode.Single
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Single.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.ErrorCode.Single"
        }

        return Single
      })()

      ErrorCode.Group = (function () {
        /**
         * Properties of a Group.
         * @typedef {Object} leancode.contracts.ErrorCode.Group.$Properties
         * @property {string|null} [name] Group name
         * @property {string|null} [groupId] Group groupId
         * @property {Array.<leancode.contracts.ErrorCode.$Properties>|null} [innerCodes] Group innerCodes
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Group.
         * @memberof leancode.contracts.ErrorCode
         * @interface IGroup
         * @augments leancode.contracts.ErrorCode.Group.$Properties
         * @deprecated Use leancode.contracts.ErrorCode.Group.$Properties instead.
         */

        /**
         * Shape of a Group.
         * @typedef {{
         *   name?: string|null;
         *   groupId?: string|null;
         *   innerCodes?: Array.<leancode.contracts.ErrorCode.$Shape>|null;
         *   $unknowns?: Array.<Uint8Array>;
         * }} leancode.contracts.ErrorCode.Group.$Shape
         */

        /**
         * Constructs a new Group.
         * @memberof leancode.contracts.ErrorCode
         * @classdesc Represents a Group.
         * @constructor
         * @param {leancode.contracts.ErrorCode.Group.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Group = function (properties) {
          this.innerCodes = []
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Group name.
         * @member {string} name
         * @memberof leancode.contracts.ErrorCode.Group
         * @instance
         */
        Group.prototype.name = ""

        /**
         * Group groupId.
         * @member {string} groupId
         * @memberof leancode.contracts.ErrorCode.Group
         * @instance
         */
        Group.prototype.groupId = ""

        /**
         * Group innerCodes.
         * @member {Array.<leancode.contracts.ErrorCode.$Properties>} innerCodes
         * @memberof leancode.contracts.ErrorCode.Group
         * @instance
         */
        Group.prototype.innerCodes = $util.emptyArray

        /**
         * Decodes a Group message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.ErrorCode.Group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.ErrorCode.Group & leancode.contracts.ErrorCode.Group.$Shape} Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Group.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.ErrorCode.Group(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 2) break
                if ((value = reader.stringVerify()).length) message.name = value
                else delete message.name
                continue
              }
              case 2: {
                if (wireType !== 2) break
                if ((value = reader.stringVerify()).length) message.groupId = value
                else delete message.groupId
                continue
              }
              case 3: {
                if (wireType !== 2) break
                if (!(message.innerCodes && message.innerCodes.length)) message.innerCodes = []
                message.innerCodes.push(
                  $root.leancode.contracts.ErrorCode.decode(reader, reader.uint32(), $undefined, _depth + 1),
                )
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a Group message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.ErrorCode.Group
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.ErrorCode.Group & leancode.contracts.ErrorCode.Group.$Shape} Group
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Group.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a Group message.
         * @function verify
         * @memberof leancode.contracts.ErrorCode.Group
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Group.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
            if (!$util.isString(message.name)) return "name: string expected"
          if (message.groupId != null && $Object.hasOwnProperty.call(message, "groupId"))
            if (!$util.isString(message.groupId)) return "groupId: string expected"
          if (message.innerCodes != null && $Object.hasOwnProperty.call(message, "innerCodes")) {
            if (!$Array.isArray(message.innerCodes)) return "innerCodes: array expected"
            for (var i = 0; i < message.innerCodes.length; ++i) {
              var error = $root.leancode.contracts.ErrorCode.verify(message.innerCodes[i], _depth + 1)
              if (error) return "innerCodes." + error
            }
          }
          return null
        }

        /**
         * Creates a Group message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.ErrorCode.Group
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.ErrorCode.Group} Group
         */
        Group.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.ErrorCode.Group) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.ErrorCode.Group: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.ErrorCode.Group()
          if (object.name != null)
            if (typeof object.name !== "string" || object.name.length) message.name = $String(object.name)
          if (object.groupId != null)
            if (typeof object.groupId !== "string" || object.groupId.length) message.groupId = $String(object.groupId)
          if (object.innerCodes) {
            if (!$Array.isArray(object.innerCodes))
              throw $TypeError(".leancode.contracts.ErrorCode.Group.innerCodes: array expected")
            message.innerCodes = $Array(object.innerCodes.length)
            for (var i = 0; i < object.innerCodes.length; ++i) {
              if (!$util.isObject(object.innerCodes[i]))
                throw $TypeError(".leancode.contracts.ErrorCode.Group.innerCodes: object expected")
              message.innerCodes[i] = $root.leancode.contracts.ErrorCode.fromObject(object.innerCodes[i], _depth + 1)
            }
          }
          return message
        }

        /**
         * Creates a plain object from a Group message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.ErrorCode.Group
         * @static
         * @param {leancode.contracts.ErrorCode.Group} message Group
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Group.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.arrays || options.defaults) object.innerCodes = []
          if (options.defaults) {
            object.name = ""
            object.groupId = ""
          }
          if (message.name != null && $Object.hasOwnProperty.call(message, "name")) object.name = message.name
          if (message.groupId != null && $Object.hasOwnProperty.call(message, "groupId"))
            object.groupId = message.groupId
          if (message.innerCodes && message.innerCodes.length) {
            object.innerCodes = $Array(message.innerCodes.length)
            for (var j = 0; j < message.innerCodes.length; ++j)
              object.innerCodes[j] = $root.leancode.contracts.ErrorCode.toObject(
                message.innerCodes[j],
                options,
                _depth + 1,
              )
          }
          return object
        }

        /**
         * Converts this Group to JSON.
         * @function toJSON
         * @memberof leancode.contracts.ErrorCode.Group
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Group.prototype.toJSON = function () {
          return Group.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Group
         * @function getTypeUrl
         * @memberof leancode.contracts.ErrorCode.Group
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Group.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.ErrorCode.Group"
        }

        return Group
      })()

      return ErrorCode
    })()

    contracts.TypeDescriptor = (function () {
      /**
       * Properties of a TypeDescriptor.
       * @typedef {Object} leancode.contracts.TypeDescriptor.$Properties
       * @property {Array.<leancode.contracts.TypeRef.$Properties>|null} ["extends"] TypeDescriptor extends
       * @property {Array.<leancode.contracts.GenericParameter.$Properties>|null} [genericParameters] TypeDescriptor genericParameters
       * @property {Array.<leancode.contracts.PropertyRef.$Properties>|null} [properties] TypeDescriptor properties
       * @property {Array.<leancode.contracts.ConstantRef.$Properties>|null} [constants] TypeDescriptor constants
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of a TypeDescriptor.
       * @memberof leancode.contracts
       * @interface ITypeDescriptor
       * @augments leancode.contracts.TypeDescriptor.$Properties
       * @deprecated Use leancode.contracts.TypeDescriptor.$Properties instead.
       */

      /**
       * Shape of a TypeDescriptor.
       * @typedef {{
       *   "extends"?: Array.<leancode.contracts.TypeRef.$Shape>|null;
       *   genericParameters?: Array.<leancode.contracts.GenericParameter.$Shape>|null;
       *   properties?: Array.<leancode.contracts.PropertyRef.$Shape>|null;
       *   constants?: Array.<leancode.contracts.ConstantRef.$Shape>|null;
       *   $unknowns?: Array.<Uint8Array>;
       * }} leancode.contracts.TypeDescriptor.$Shape
       */

      /**
       * Constructs a new TypeDescriptor.
       * @memberof leancode.contracts
       * @classdesc Represents a TypeDescriptor.
       * @constructor
       * @param {leancode.contracts.TypeDescriptor.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var TypeDescriptor = function (properties) {
        this["extends"] = []
        this.genericParameters = []
        this.properties = []
        this.constants = []
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * TypeDescriptor extends.
       * @member {Array.<leancode.contracts.TypeRef.$Properties>} extends
       * @memberof leancode.contracts.TypeDescriptor
       * @instance
       */
      TypeDescriptor.prototype["extends"] = $util.emptyArray

      /**
       * TypeDescriptor genericParameters.
       * @member {Array.<leancode.contracts.GenericParameter.$Properties>} genericParameters
       * @memberof leancode.contracts.TypeDescriptor
       * @instance
       */
      TypeDescriptor.prototype.genericParameters = $util.emptyArray

      /**
       * TypeDescriptor properties.
       * @member {Array.<leancode.contracts.PropertyRef.$Properties>} properties
       * @memberof leancode.contracts.TypeDescriptor
       * @instance
       */
      TypeDescriptor.prototype.properties = $util.emptyArray

      /**
       * TypeDescriptor constants.
       * @member {Array.<leancode.contracts.ConstantRef.$Properties>} constants
       * @memberof leancode.contracts.TypeDescriptor
       * @instance
       */
      TypeDescriptor.prototype.constants = $util.emptyArray

      /**
       * Decodes a TypeDescriptor message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.TypeDescriptor
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.TypeDescriptor & leancode.contracts.TypeDescriptor.$Shape} TypeDescriptor
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      TypeDescriptor.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.TypeDescriptor()
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 2) break
              if (!(message["extends"] && message["extends"].length)) message["extends"] = []
              message["extends"].push(
                $root.leancode.contracts.TypeRef.decode(reader, reader.uint32(), $undefined, _depth + 1),
              )
              continue
            }
            case 2: {
              if (wireType !== 2) break
              if (!(message.genericParameters && message.genericParameters.length)) message.genericParameters = []
              message.genericParameters.push(
                $root.leancode.contracts.GenericParameter.decode(reader, reader.uint32(), $undefined, _depth + 1),
              )
              continue
            }
            case 3: {
              if (wireType !== 2) break
              if (!(message.properties && message.properties.length)) message.properties = []
              message.properties.push(
                $root.leancode.contracts.PropertyRef.decode(reader, reader.uint32(), $undefined, _depth + 1),
              )
              continue
            }
            case 4: {
              if (wireType !== 2) break
              if (!(message.constants && message.constants.length)) message.constants = []
              message.constants.push(
                $root.leancode.contracts.ConstantRef.decode(reader, reader.uint32(), $undefined, _depth + 1),
              )
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes a TypeDescriptor message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.TypeDescriptor
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.TypeDescriptor & leancode.contracts.TypeDescriptor.$Shape} TypeDescriptor
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      TypeDescriptor.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a TypeDescriptor message.
       * @function verify
       * @memberof leancode.contracts.TypeDescriptor
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      TypeDescriptor.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        if (message["extends"] != null && $Object.hasOwnProperty.call(message, "extends")) {
          if (!$Array.isArray(message["extends"])) return "extends: array expected"
          for (var i = 0; i < message["extends"].length; ++i) {
            var error = $root.leancode.contracts.TypeRef.verify(message["extends"][i], _depth + 1)
            if (error) return "extends." + error
          }
        }
        if (message.genericParameters != null && $Object.hasOwnProperty.call(message, "genericParameters")) {
          if (!$Array.isArray(message.genericParameters)) return "genericParameters: array expected"
          for (var i = 0; i < message.genericParameters.length; ++i) {
            var error = $root.leancode.contracts.GenericParameter.verify(message.genericParameters[i], _depth + 1)
            if (error) return "genericParameters." + error
          }
        }
        if (message.properties != null && $Object.hasOwnProperty.call(message, "properties")) {
          if (!$Array.isArray(message.properties)) return "properties: array expected"
          for (var i = 0; i < message.properties.length; ++i) {
            var error = $root.leancode.contracts.PropertyRef.verify(message.properties[i], _depth + 1)
            if (error) return "properties." + error
          }
        }
        if (message.constants != null && $Object.hasOwnProperty.call(message, "constants")) {
          if (!$Array.isArray(message.constants)) return "constants: array expected"
          for (var i = 0; i < message.constants.length; ++i) {
            var error = $root.leancode.contracts.ConstantRef.verify(message.constants[i], _depth + 1)
            if (error) return "constants." + error
          }
        }
        return null
      }

      /**
       * Creates a TypeDescriptor message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.TypeDescriptor
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.TypeDescriptor} TypeDescriptor
       */
      TypeDescriptor.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.TypeDescriptor) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.TypeDescriptor: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.TypeDescriptor()
        if (object["extends"]) {
          if (!$Array.isArray(object["extends"]))
            throw $TypeError(".leancode.contracts.TypeDescriptor.extends: array expected")
          message["extends"] = $Array(object["extends"].length)
          for (var i = 0; i < object["extends"].length; ++i) {
            if (!$util.isObject(object["extends"][i]))
              throw $TypeError(".leancode.contracts.TypeDescriptor.extends: object expected")
            message["extends"][i] = $root.leancode.contracts.TypeRef.fromObject(object["extends"][i], _depth + 1)
          }
        }
        if (object.genericParameters) {
          if (!$Array.isArray(object.genericParameters))
            throw $TypeError(".leancode.contracts.TypeDescriptor.genericParameters: array expected")
          message.genericParameters = $Array(object.genericParameters.length)
          for (var i = 0; i < object.genericParameters.length; ++i) {
            if (!$util.isObject(object.genericParameters[i]))
              throw $TypeError(".leancode.contracts.TypeDescriptor.genericParameters: object expected")
            message.genericParameters[i] = $root.leancode.contracts.GenericParameter.fromObject(
              object.genericParameters[i],
              _depth + 1,
            )
          }
        }
        if (object.properties) {
          if (!$Array.isArray(object.properties))
            throw $TypeError(".leancode.contracts.TypeDescriptor.properties: array expected")
          message.properties = $Array(object.properties.length)
          for (var i = 0; i < object.properties.length; ++i) {
            if (!$util.isObject(object.properties[i]))
              throw $TypeError(".leancode.contracts.TypeDescriptor.properties: object expected")
            message.properties[i] = $root.leancode.contracts.PropertyRef.fromObject(object.properties[i], _depth + 1)
          }
        }
        if (object.constants) {
          if (!$Array.isArray(object.constants))
            throw $TypeError(".leancode.contracts.TypeDescriptor.constants: array expected")
          message.constants = $Array(object.constants.length)
          for (var i = 0; i < object.constants.length; ++i) {
            if (!$util.isObject(object.constants[i]))
              throw $TypeError(".leancode.contracts.TypeDescriptor.constants: object expected")
            message.constants[i] = $root.leancode.contracts.ConstantRef.fromObject(object.constants[i], _depth + 1)
          }
        }
        return message
      }

      /**
       * Creates a plain object from a TypeDescriptor message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.TypeDescriptor
       * @static
       * @param {leancode.contracts.TypeDescriptor} message TypeDescriptor
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      TypeDescriptor.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (options.arrays || options.defaults) {
          object["extends"] = []
          object.genericParameters = []
          object.properties = []
          object.constants = []
        }
        if (message["extends"] && message["extends"].length) {
          object["extends"] = $Array(message["extends"].length)
          for (var j = 0; j < message["extends"].length; ++j)
            object["extends"][j] = $root.leancode.contracts.TypeRef.toObject(message["extends"][j], options, _depth + 1)
        }
        if (message.genericParameters && message.genericParameters.length) {
          object.genericParameters = $Array(message.genericParameters.length)
          for (var j = 0; j < message.genericParameters.length; ++j)
            object.genericParameters[j] = $root.leancode.contracts.GenericParameter.toObject(
              message.genericParameters[j],
              options,
              _depth + 1,
            )
        }
        if (message.properties && message.properties.length) {
          object.properties = $Array(message.properties.length)
          for (var j = 0; j < message.properties.length; ++j)
            object.properties[j] = $root.leancode.contracts.PropertyRef.toObject(
              message.properties[j],
              options,
              _depth + 1,
            )
        }
        if (message.constants && message.constants.length) {
          object.constants = $Array(message.constants.length)
          for (var j = 0; j < message.constants.length; ++j)
            object.constants[j] = $root.leancode.contracts.ConstantRef.toObject(
              message.constants[j],
              options,
              _depth + 1,
            )
        }
        return object
      }

      /**
       * Converts this TypeDescriptor to JSON.
       * @function toJSON
       * @memberof leancode.contracts.TypeDescriptor
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      TypeDescriptor.prototype.toJSON = function () {
        return TypeDescriptor.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for TypeDescriptor
       * @function getTypeUrl
       * @memberof leancode.contracts.TypeDescriptor
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      TypeDescriptor.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.TypeDescriptor"
      }

      return TypeDescriptor
    })()

    contracts.Statement = (function () {
      /**
       * Properties of a Statement.
       * @typedef {Object} leancode.contracts.Statement.$Properties
       * @property {string|null} [name] Statement name
       * @property {string|null} [comment] Statement comment
       * @property {Array.<leancode.contracts.AttributeRef.$Properties>|null} [attributes] Statement attributes
       * @property {leancode.contracts.Statement.DTO.$Properties|null} [dto] Statement dto
       * @property {leancode.contracts.Statement.Enum.$Properties|null} ["enum"] Statement enum
       * @property {leancode.contracts.Statement.Query.$Properties|null} [query] Statement query
       * @property {leancode.contracts.Statement.Command.$Properties|null} [command] Statement command
       * @property {leancode.contracts.Statement.Operation.$Properties|null} [operation] Statement operation
       * @property {leancode.contracts.Statement.Topic.$Properties|null} [topic] Statement topic
       * @property {"dto"|"enum"|"query"|"command"|"operation"|"topic"} [content] Statement content
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of a Statement.
       * @memberof leancode.contracts
       * @interface IStatement
       * @augments leancode.contracts.Statement.$Properties
       * @deprecated Use leancode.contracts.Statement.$Properties instead.
       */

      /**
       * Narrowed shape of a Statement.
       * @typedef {{
       *   name?: string|null;
       *   comment?: string|null;
       *   attributes?: Array.<leancode.contracts.AttributeRef.$Shape>|null;
       *   dto?: leancode.contracts.Statement.DTO.$Shape|null;
       *   "enum"?: leancode.contracts.Statement.Enum.$Shape|null;
       *   query?: leancode.contracts.Statement.Query.$Shape|null;
       *   command?: leancode.contracts.Statement.Command.$Shape|null;
       *   operation?: leancode.contracts.Statement.Operation.$Shape|null;
       *   topic?: leancode.contracts.Statement.Topic.$Shape|null;
       *   $unknowns?: Array.<Uint8Array>;
       * } & (
       *   ({ content?: undefined; dto?: null; "enum"?: null; query?: null; command?: null; operation?: null; topic?: null }|{ content?: "dto"; dto: leancode.contracts.Statement.DTO.$Shape; "enum"?: null; query?: null; command?: null; operation?: null; topic?: null }|{ content?: "enum"; dto?: null; "enum": leancode.contracts.Statement.Enum.$Shape; query?: null; command?: null; operation?: null; topic?: null }|{ content?: "query"; dto?: null; "enum"?: null; query: leancode.contracts.Statement.Query.$Shape; command?: null; operation?: null; topic?: null }|{ content?: "command"; dto?: null; "enum"?: null; query?: null; command: leancode.contracts.Statement.Command.$Shape; operation?: null; topic?: null }|{ content?: "operation"; dto?: null; "enum"?: null; query?: null; command?: null; operation: leancode.contracts.Statement.Operation.$Shape; topic?: null }|{ content?: "topic"; dto?: null; "enum"?: null; query?: null; command?: null; operation?: null; topic: leancode.contracts.Statement.Topic.$Shape })
       * )} leancode.contracts.Statement.$Shape
       */

      /**
       * Constructs a new Statement.
       * @memberof leancode.contracts
       * @classdesc Represents a Statement.
       * @constructor
       * @param {leancode.contracts.Statement.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var Statement = function (properties) {
        this.attributes = []
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * Statement name.
       * @member {string} name
       * @memberof leancode.contracts.Statement
       * @instance
       */
      Statement.prototype.name = ""

      /**
       * Statement comment.
       * @member {string} comment
       * @memberof leancode.contracts.Statement
       * @instance
       */
      Statement.prototype.comment = ""

      /**
       * Statement attributes.
       * @member {Array.<leancode.contracts.AttributeRef.$Properties>} attributes
       * @memberof leancode.contracts.Statement
       * @instance
       */
      Statement.prototype.attributes = $util.emptyArray

      /**
       * Statement dto.
       * @member {leancode.contracts.Statement.DTO.$Properties|null|undefined} dto
       * @memberof leancode.contracts.Statement
       * @instance
       */
      Statement.prototype.dto = null

      /**
       * Statement enum.
       * @member {leancode.contracts.Statement.Enum.$Properties|null|undefined} enum
       * @memberof leancode.contracts.Statement
       * @instance
       */
      Statement.prototype["enum"] = null

      /**
       * Statement query.
       * @member {leancode.contracts.Statement.Query.$Properties|null|undefined} query
       * @memberof leancode.contracts.Statement
       * @instance
       */
      Statement.prototype.query = null

      /**
       * Statement command.
       * @member {leancode.contracts.Statement.Command.$Properties|null|undefined} command
       * @memberof leancode.contracts.Statement
       * @instance
       */
      Statement.prototype.command = null

      /**
       * Statement operation.
       * @member {leancode.contracts.Statement.Operation.$Properties|null|undefined} operation
       * @memberof leancode.contracts.Statement
       * @instance
       */
      Statement.prototype.operation = null

      /**
       * Statement topic.
       * @member {leancode.contracts.Statement.Topic.$Properties|null|undefined} topic
       * @memberof leancode.contracts.Statement
       * @instance
       */
      Statement.prototype.topic = null

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields

      /**
       * Statement content.
       * @member {"dto"|"enum"|"query"|"command"|"operation"|"topic"|undefined} content
       * @memberof leancode.contracts.Statement
       * @instance
       */
      $Object.defineProperty(Statement.prototype, "content", {
        get: $util.oneOfGetter(($oneOfFields = ["dto", "enum", "query", "command", "operation", "topic"])),
        set: $util.oneOfSetter($oneOfFields),
      })

      /**
       * Decodes a Statement message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.Statement
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.Statement & leancode.contracts.Statement.$Shape} Statement
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Statement.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.Statement(),
          value
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 2) break
              if ((value = reader.stringVerify()).length) message.name = value
              else delete message.name
              continue
            }
            case 2: {
              if (wireType !== 2) break
              if ((value = reader.stringVerify()).length) message.comment = value
              else delete message.comment
              continue
            }
            case 3: {
              if (wireType !== 2) break
              if (!(message.attributes && message.attributes.length)) message.attributes = []
              message.attributes.push(
                $root.leancode.contracts.AttributeRef.decode(reader, reader.uint32(), $undefined, _depth + 1),
              )
              continue
            }
            case 10: {
              if (wireType !== 2) break
              message.dto = $root.leancode.contracts.Statement.DTO.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.dto,
              )
              message.content = "dto"
              continue
            }
            case 11: {
              if (wireType !== 2) break
              message["enum"] = $root.leancode.contracts.Statement.Enum.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message["enum"],
              )
              message.content = "enum"
              continue
            }
            case 12: {
              if (wireType !== 2) break
              message.query = $root.leancode.contracts.Statement.Query.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.query,
              )
              message.content = "query"
              continue
            }
            case 13: {
              if (wireType !== 2) break
              message.command = $root.leancode.contracts.Statement.Command.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.command,
              )
              message.content = "command"
              continue
            }
            case 14: {
              if (wireType !== 2) break
              message.operation = $root.leancode.contracts.Statement.Operation.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.operation,
              )
              message.content = "operation"
              continue
            }
            case 15: {
              if (wireType !== 2) break
              message.topic = $root.leancode.contracts.Statement.Topic.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.topic,
              )
              message.content = "topic"
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes a Statement message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.Statement
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.Statement & leancode.contracts.Statement.$Shape} Statement
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Statement.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Statement message.
       * @function verify
       * @memberof leancode.contracts.Statement
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Statement.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        var properties = {}
        if (message.name != null && $Object.hasOwnProperty.call(message, "name"))
          if (!$util.isString(message.name)) return "name: string expected"
        if (message.comment != null && $Object.hasOwnProperty.call(message, "comment"))
          if (!$util.isString(message.comment)) return "comment: string expected"
        if (message.attributes != null && $Object.hasOwnProperty.call(message, "attributes")) {
          if (!$Array.isArray(message.attributes)) return "attributes: array expected"
          for (var i = 0; i < message.attributes.length; ++i) {
            var error = $root.leancode.contracts.AttributeRef.verify(message.attributes[i], _depth + 1)
            if (error) return "attributes." + error
          }
        }
        if (message.dto != null && $Object.hasOwnProperty.call(message, "dto")) {
          properties.content = 1
          {
            var error = $root.leancode.contracts.Statement.DTO.verify(message.dto, _depth + 1)
            if (error) return "dto." + error
          }
        }
        if (message["enum"] != null && $Object.hasOwnProperty.call(message, "enum")) {
          if (properties.content === 1) return "content: multiple values"
          properties.content = 1
          {
            var error = $root.leancode.contracts.Statement.Enum.verify(message["enum"], _depth + 1)
            if (error) return "enum." + error
          }
        }
        if (message.query != null && $Object.hasOwnProperty.call(message, "query")) {
          if (properties.content === 1) return "content: multiple values"
          properties.content = 1
          {
            var error = $root.leancode.contracts.Statement.Query.verify(message.query, _depth + 1)
            if (error) return "query." + error
          }
        }
        if (message.command != null && $Object.hasOwnProperty.call(message, "command")) {
          if (properties.content === 1) return "content: multiple values"
          properties.content = 1
          {
            var error = $root.leancode.contracts.Statement.Command.verify(message.command, _depth + 1)
            if (error) return "command." + error
          }
        }
        if (message.operation != null && $Object.hasOwnProperty.call(message, "operation")) {
          if (properties.content === 1) return "content: multiple values"
          properties.content = 1
          {
            var error = $root.leancode.contracts.Statement.Operation.verify(message.operation, _depth + 1)
            if (error) return "operation." + error
          }
        }
        if (message.topic != null && $Object.hasOwnProperty.call(message, "topic")) {
          if (properties.content === 1) return "content: multiple values"
          properties.content = 1
          {
            var error = $root.leancode.contracts.Statement.Topic.verify(message.topic, _depth + 1)
            if (error) return "topic." + error
          }
        }
        return null
      }

      /**
       * Creates a Statement message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.Statement
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.Statement} Statement
       */
      Statement.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.Statement) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.Statement: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.Statement()
        if (object.name != null)
          if (typeof object.name !== "string" || object.name.length) message.name = $String(object.name)
        if (object.comment != null)
          if (typeof object.comment !== "string" || object.comment.length) message.comment = $String(object.comment)
        if (object.attributes) {
          if (!$Array.isArray(object.attributes))
            throw $TypeError(".leancode.contracts.Statement.attributes: array expected")
          message.attributes = $Array(object.attributes.length)
          for (var i = 0; i < object.attributes.length; ++i) {
            if (!$util.isObject(object.attributes[i]))
              throw $TypeError(".leancode.contracts.Statement.attributes: object expected")
            message.attributes[i] = $root.leancode.contracts.AttributeRef.fromObject(object.attributes[i], _depth + 1)
          }
        }
        if (object.dto != null) {
          if (!$util.isObject(object.dto)) throw $TypeError(".leancode.contracts.Statement.dto: object expected")
          message.dto = $root.leancode.contracts.Statement.DTO.fromObject(object.dto, _depth + 1)
        }
        if (object["enum"] != null) {
          if (!$util.isObject(object["enum"])) throw $TypeError(".leancode.contracts.Statement.enum: object expected")
          message["enum"] = $root.leancode.contracts.Statement.Enum.fromObject(object["enum"], _depth + 1)
        }
        if (object.query != null) {
          if (!$util.isObject(object.query)) throw $TypeError(".leancode.contracts.Statement.query: object expected")
          message.query = $root.leancode.contracts.Statement.Query.fromObject(object.query, _depth + 1)
        }
        if (object.command != null) {
          if (!$util.isObject(object.command))
            throw $TypeError(".leancode.contracts.Statement.command: object expected")
          message.command = $root.leancode.contracts.Statement.Command.fromObject(object.command, _depth + 1)
        }
        if (object.operation != null) {
          if (!$util.isObject(object.operation))
            throw $TypeError(".leancode.contracts.Statement.operation: object expected")
          message.operation = $root.leancode.contracts.Statement.Operation.fromObject(object.operation, _depth + 1)
        }
        if (object.topic != null) {
          if (!$util.isObject(object.topic)) throw $TypeError(".leancode.contracts.Statement.topic: object expected")
          message.topic = $root.leancode.contracts.Statement.Topic.fromObject(object.topic, _depth + 1)
        }
        return message
      }

      /**
       * Creates a plain object from a Statement message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.Statement
       * @static
       * @param {leancode.contracts.Statement} message Statement
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Statement.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (options.arrays || options.defaults) object.attributes = []
        if (options.defaults) {
          object.name = ""
          object.comment = ""
        }
        if (message.name != null && $Object.hasOwnProperty.call(message, "name")) object.name = message.name
        if (message.comment != null && $Object.hasOwnProperty.call(message, "comment")) object.comment = message.comment
        if (message.attributes && message.attributes.length) {
          object.attributes = $Array(message.attributes.length)
          for (var j = 0; j < message.attributes.length; ++j)
            object.attributes[j] = $root.leancode.contracts.AttributeRef.toObject(
              message.attributes[j],
              options,
              _depth + 1,
            )
        }
        if (message.dto != null && $Object.hasOwnProperty.call(message, "dto")) {
          object.dto = $root.leancode.contracts.Statement.DTO.toObject(message.dto, options, _depth + 1)
          if (options.oneofs) object.content = "dto"
        }
        if (message["enum"] != null && $Object.hasOwnProperty.call(message, "enum")) {
          object["enum"] = $root.leancode.contracts.Statement.Enum.toObject(message["enum"], options, _depth + 1)
          if (options.oneofs) object.content = "enum"
        }
        if (message.query != null && $Object.hasOwnProperty.call(message, "query")) {
          object.query = $root.leancode.contracts.Statement.Query.toObject(message.query, options, _depth + 1)
          if (options.oneofs) object.content = "query"
        }
        if (message.command != null && $Object.hasOwnProperty.call(message, "command")) {
          object.command = $root.leancode.contracts.Statement.Command.toObject(message.command, options, _depth + 1)
          if (options.oneofs) object.content = "command"
        }
        if (message.operation != null && $Object.hasOwnProperty.call(message, "operation")) {
          object.operation = $root.leancode.contracts.Statement.Operation.toObject(
            message.operation,
            options,
            _depth + 1,
          )
          if (options.oneofs) object.content = "operation"
        }
        if (message.topic != null && $Object.hasOwnProperty.call(message, "topic")) {
          object.topic = $root.leancode.contracts.Statement.Topic.toObject(message.topic, options, _depth + 1)
          if (options.oneofs) object.content = "topic"
        }
        return object
      }

      /**
       * Converts this Statement to JSON.
       * @function toJSON
       * @memberof leancode.contracts.Statement
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Statement.prototype.toJSON = function () {
        return Statement.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for Statement
       * @function getTypeUrl
       * @memberof leancode.contracts.Statement
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      Statement.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.Statement"
      }

      Statement.DTO = (function () {
        /**
         * Properties of a DTO.
         * @typedef {Object} leancode.contracts.Statement.DTO.$Properties
         * @property {leancode.contracts.TypeDescriptor.$Properties|null} [typeDescriptor] DTO typeDescriptor
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a DTO.
         * @memberof leancode.contracts.Statement
         * @interface IDTO
         * @augments leancode.contracts.Statement.DTO.$Properties
         * @deprecated Use leancode.contracts.Statement.DTO.$Properties instead.
         */

        /**
         * Shape of a DTO.
         * @typedef {{
         *   typeDescriptor?: leancode.contracts.TypeDescriptor.$Shape|null;
         *   $unknowns?: Array.<Uint8Array>;
         * }} leancode.contracts.Statement.DTO.$Shape
         */

        /**
         * Constructs a new DTO.
         * @memberof leancode.contracts.Statement
         * @classdesc Represents a DTO.
         * @constructor
         * @param {leancode.contracts.Statement.DTO.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var DTO = function (properties) {
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * DTO typeDescriptor.
         * @member {leancode.contracts.TypeDescriptor.$Properties|null|undefined} typeDescriptor
         * @memberof leancode.contracts.Statement.DTO
         * @instance
         */
        DTO.prototype.typeDescriptor = null

        /**
         * Decodes a DTO message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.Statement.DTO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.Statement.DTO & leancode.contracts.Statement.DTO.$Shape} DTO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DTO.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.Statement.DTO(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 2) break
                message.typeDescriptor = $root.leancode.contracts.TypeDescriptor.decode(
                  reader,
                  reader.uint32(),
                  $undefined,
                  _depth + 1,
                  message.typeDescriptor,
                )
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a DTO message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.Statement.DTO
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.Statement.DTO & leancode.contracts.Statement.DTO.$Shape} DTO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DTO.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a DTO message.
         * @function verify
         * @memberof leancode.contracts.Statement.DTO
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DTO.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.typeDescriptor != null && $Object.hasOwnProperty.call(message, "typeDescriptor")) {
            var error = $root.leancode.contracts.TypeDescriptor.verify(message.typeDescriptor, _depth + 1)
            if (error) return "typeDescriptor." + error
          }
          return null
        }

        /**
         * Creates a DTO message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.Statement.DTO
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.Statement.DTO} DTO
         */
        DTO.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.Statement.DTO) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.Statement.DTO: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.Statement.DTO()
          if (object.typeDescriptor != null) {
            if (!$util.isObject(object.typeDescriptor))
              throw $TypeError(".leancode.contracts.Statement.DTO.typeDescriptor: object expected")
            message.typeDescriptor = $root.leancode.contracts.TypeDescriptor.fromObject(
              object.typeDescriptor,
              _depth + 1,
            )
          }
          return message
        }

        /**
         * Creates a plain object from a DTO message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.Statement.DTO
         * @static
         * @param {leancode.contracts.Statement.DTO} message DTO
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DTO.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.defaults) object.typeDescriptor = null
          if (message.typeDescriptor != null && $Object.hasOwnProperty.call(message, "typeDescriptor"))
            object.typeDescriptor = $root.leancode.contracts.TypeDescriptor.toObject(
              message.typeDescriptor,
              options,
              _depth + 1,
            )
          return object
        }

        /**
         * Converts this DTO to JSON.
         * @function toJSON
         * @memberof leancode.contracts.Statement.DTO
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DTO.prototype.toJSON = function () {
          return DTO.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for DTO
         * @function getTypeUrl
         * @memberof leancode.contracts.Statement.DTO
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DTO.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.Statement.DTO"
        }

        return DTO
      })()

      Statement.Enum = (function () {
        /**
         * Properties of an Enum.
         * @typedef {Object} leancode.contracts.Statement.Enum.$Properties
         * @property {Array.<leancode.contracts.EnumValue.$Properties>|null} [members] Enum members
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an Enum.
         * @memberof leancode.contracts.Statement
         * @interface IEnum
         * @augments leancode.contracts.Statement.Enum.$Properties
         * @deprecated Use leancode.contracts.Statement.Enum.$Properties instead.
         */

        /**
         * Shape of an Enum.
         * @typedef {{
         *   members?: Array.<leancode.contracts.EnumValue.$Shape>|null;
         *   $unknowns?: Array.<Uint8Array>;
         * }} leancode.contracts.Statement.Enum.$Shape
         */

        /**
         * Constructs a new Enum.
         * @memberof leancode.contracts.Statement
         * @classdesc Represents an Enum.
         * @constructor
         * @param {leancode.contracts.Statement.Enum.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Enum = function (properties) {
          this.members = []
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Enum members.
         * @member {Array.<leancode.contracts.EnumValue.$Properties>} members
         * @memberof leancode.contracts.Statement.Enum
         * @instance
         */
        Enum.prototype.members = $util.emptyArray

        /**
         * Decodes an Enum message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.Statement.Enum
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.Statement.Enum & leancode.contracts.Statement.Enum.$Shape} Enum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Enum.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.Statement.Enum()
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 2) break
                if (!(message.members && message.members.length)) message.members = []
                message.members.push(
                  $root.leancode.contracts.EnumValue.decode(reader, reader.uint32(), $undefined, _depth + 1),
                )
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes an Enum message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.Statement.Enum
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.Statement.Enum & leancode.contracts.Statement.Enum.$Shape} Enum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Enum.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies an Enum message.
         * @function verify
         * @memberof leancode.contracts.Statement.Enum
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Enum.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.members != null && $Object.hasOwnProperty.call(message, "members")) {
            if (!$Array.isArray(message.members)) return "members: array expected"
            for (var i = 0; i < message.members.length; ++i) {
              var error = $root.leancode.contracts.EnumValue.verify(message.members[i], _depth + 1)
              if (error) return "members." + error
            }
          }
          return null
        }

        /**
         * Creates an Enum message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.Statement.Enum
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.Statement.Enum} Enum
         */
        Enum.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.Statement.Enum) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.Statement.Enum: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.Statement.Enum()
          if (object.members) {
            if (!$Array.isArray(object.members))
              throw $TypeError(".leancode.contracts.Statement.Enum.members: array expected")
            message.members = $Array(object.members.length)
            for (var i = 0; i < object.members.length; ++i) {
              if (!$util.isObject(object.members[i]))
                throw $TypeError(".leancode.contracts.Statement.Enum.members: object expected")
              message.members[i] = $root.leancode.contracts.EnumValue.fromObject(object.members[i], _depth + 1)
            }
          }
          return message
        }

        /**
         * Creates a plain object from an Enum message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.Statement.Enum
         * @static
         * @param {leancode.contracts.Statement.Enum} message Enum
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Enum.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.arrays || options.defaults) object.members = []
          if (message.members && message.members.length) {
            object.members = $Array(message.members.length)
            for (var j = 0; j < message.members.length; ++j)
              object.members[j] = $root.leancode.contracts.EnumValue.toObject(message.members[j], options, _depth + 1)
          }
          return object
        }

        /**
         * Converts this Enum to JSON.
         * @function toJSON
         * @memberof leancode.contracts.Statement.Enum
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Enum.prototype.toJSON = function () {
          return Enum.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Enum
         * @function getTypeUrl
         * @memberof leancode.contracts.Statement.Enum
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Enum.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.Statement.Enum"
        }

        return Enum
      })()

      Statement.Query = (function () {
        /**
         * Properties of a Query.
         * @typedef {Object} leancode.contracts.Statement.Query.$Properties
         * @property {leancode.contracts.TypeDescriptor.$Properties|null} [typeDescriptor] Query typeDescriptor
         * @property {leancode.contracts.TypeRef.$Properties|null} [returnType] Query returnType
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Query.
         * @memberof leancode.contracts.Statement
         * @interface IQuery
         * @augments leancode.contracts.Statement.Query.$Properties
         * @deprecated Use leancode.contracts.Statement.Query.$Properties instead.
         */

        /**
         * Shape of a Query.
         * @typedef {{
         *   typeDescriptor?: leancode.contracts.TypeDescriptor.$Shape|null;
         *   returnType?: leancode.contracts.TypeRef.$Shape|null;
         *   $unknowns?: Array.<Uint8Array>;
         * }} leancode.contracts.Statement.Query.$Shape
         */

        /**
         * Constructs a new Query.
         * @memberof leancode.contracts.Statement
         * @classdesc Represents a Query.
         * @constructor
         * @param {leancode.contracts.Statement.Query.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Query = function (properties) {
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Query typeDescriptor.
         * @member {leancode.contracts.TypeDescriptor.$Properties|null|undefined} typeDescriptor
         * @memberof leancode.contracts.Statement.Query
         * @instance
         */
        Query.prototype.typeDescriptor = null

        /**
         * Query returnType.
         * @member {leancode.contracts.TypeRef.$Properties|null|undefined} returnType
         * @memberof leancode.contracts.Statement.Query
         * @instance
         */
        Query.prototype.returnType = null

        /**
         * Decodes a Query message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.Statement.Query
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.Statement.Query & leancode.contracts.Statement.Query.$Shape} Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Query.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.Statement.Query(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 2) break
                message.typeDescriptor = $root.leancode.contracts.TypeDescriptor.decode(
                  reader,
                  reader.uint32(),
                  $undefined,
                  _depth + 1,
                  message.typeDescriptor,
                )
                continue
              }
              case 2: {
                if (wireType !== 2) break
                message.returnType = $root.leancode.contracts.TypeRef.decode(
                  reader,
                  reader.uint32(),
                  $undefined,
                  _depth + 1,
                  message.returnType,
                )
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a Query message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.Statement.Query
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.Statement.Query & leancode.contracts.Statement.Query.$Shape} Query
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Query.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a Query message.
         * @function verify
         * @memberof leancode.contracts.Statement.Query
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Query.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.typeDescriptor != null && $Object.hasOwnProperty.call(message, "typeDescriptor")) {
            var error = $root.leancode.contracts.TypeDescriptor.verify(message.typeDescriptor, _depth + 1)
            if (error) return "typeDescriptor." + error
          }
          if (message.returnType != null && $Object.hasOwnProperty.call(message, "returnType")) {
            var error = $root.leancode.contracts.TypeRef.verify(message.returnType, _depth + 1)
            if (error) return "returnType." + error
          }
          return null
        }

        /**
         * Creates a Query message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.Statement.Query
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.Statement.Query} Query
         */
        Query.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.Statement.Query) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.Statement.Query: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.Statement.Query()
          if (object.typeDescriptor != null) {
            if (!$util.isObject(object.typeDescriptor))
              throw $TypeError(".leancode.contracts.Statement.Query.typeDescriptor: object expected")
            message.typeDescriptor = $root.leancode.contracts.TypeDescriptor.fromObject(
              object.typeDescriptor,
              _depth + 1,
            )
          }
          if (object.returnType != null) {
            if (!$util.isObject(object.returnType))
              throw $TypeError(".leancode.contracts.Statement.Query.returnType: object expected")
            message.returnType = $root.leancode.contracts.TypeRef.fromObject(object.returnType, _depth + 1)
          }
          return message
        }

        /**
         * Creates a plain object from a Query message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.Statement.Query
         * @static
         * @param {leancode.contracts.Statement.Query} message Query
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Query.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.defaults) {
            object.typeDescriptor = null
            object.returnType = null
          }
          if (message.typeDescriptor != null && $Object.hasOwnProperty.call(message, "typeDescriptor"))
            object.typeDescriptor = $root.leancode.contracts.TypeDescriptor.toObject(
              message.typeDescriptor,
              options,
              _depth + 1,
            )
          if (message.returnType != null && $Object.hasOwnProperty.call(message, "returnType"))
            object.returnType = $root.leancode.contracts.TypeRef.toObject(message.returnType, options, _depth + 1)
          return object
        }

        /**
         * Converts this Query to JSON.
         * @function toJSON
         * @memberof leancode.contracts.Statement.Query
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Query.prototype.toJSON = function () {
          return Query.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Query
         * @function getTypeUrl
         * @memberof leancode.contracts.Statement.Query
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Query.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.Statement.Query"
        }

        return Query
      })()

      Statement.Command = (function () {
        /**
         * Properties of a Command.
         * @typedef {Object} leancode.contracts.Statement.Command.$Properties
         * @property {leancode.contracts.TypeDescriptor.$Properties|null} [typeDescriptor] Command typeDescriptor
         * @property {Array.<leancode.contracts.ErrorCode.$Properties>|null} [errorCodes] Command errorCodes
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Command.
         * @memberof leancode.contracts.Statement
         * @interface ICommand
         * @augments leancode.contracts.Statement.Command.$Properties
         * @deprecated Use leancode.contracts.Statement.Command.$Properties instead.
         */

        /**
         * Shape of a Command.
         * @typedef {{
         *   typeDescriptor?: leancode.contracts.TypeDescriptor.$Shape|null;
         *   errorCodes?: Array.<leancode.contracts.ErrorCode.$Shape>|null;
         *   $unknowns?: Array.<Uint8Array>;
         * }} leancode.contracts.Statement.Command.$Shape
         */

        /**
         * Constructs a new Command.
         * @memberof leancode.contracts.Statement
         * @classdesc Represents a Command.
         * @constructor
         * @param {leancode.contracts.Statement.Command.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Command = function (properties) {
          this.errorCodes = []
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Command typeDescriptor.
         * @member {leancode.contracts.TypeDescriptor.$Properties|null|undefined} typeDescriptor
         * @memberof leancode.contracts.Statement.Command
         * @instance
         */
        Command.prototype.typeDescriptor = null

        /**
         * Command errorCodes.
         * @member {Array.<leancode.contracts.ErrorCode.$Properties>} errorCodes
         * @memberof leancode.contracts.Statement.Command
         * @instance
         */
        Command.prototype.errorCodes = $util.emptyArray

        /**
         * Decodes a Command message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.Statement.Command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.Statement.Command & leancode.contracts.Statement.Command.$Shape} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.Statement.Command(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 2) break
                message.typeDescriptor = $root.leancode.contracts.TypeDescriptor.decode(
                  reader,
                  reader.uint32(),
                  $undefined,
                  _depth + 1,
                  message.typeDescriptor,
                )
                continue
              }
              case 2: {
                if (wireType !== 2) break
                if (!(message.errorCodes && message.errorCodes.length)) message.errorCodes = []
                message.errorCodes.push(
                  $root.leancode.contracts.ErrorCode.decode(reader, reader.uint32(), $undefined, _depth + 1),
                )
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a Command message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.Statement.Command
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.Statement.Command & leancode.contracts.Statement.Command.$Shape} Command
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Command.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a Command message.
         * @function verify
         * @memberof leancode.contracts.Statement.Command
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Command.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.typeDescriptor != null && $Object.hasOwnProperty.call(message, "typeDescriptor")) {
            var error = $root.leancode.contracts.TypeDescriptor.verify(message.typeDescriptor, _depth + 1)
            if (error) return "typeDescriptor." + error
          }
          if (message.errorCodes != null && $Object.hasOwnProperty.call(message, "errorCodes")) {
            if (!$Array.isArray(message.errorCodes)) return "errorCodes: array expected"
            for (var i = 0; i < message.errorCodes.length; ++i) {
              var error = $root.leancode.contracts.ErrorCode.verify(message.errorCodes[i], _depth + 1)
              if (error) return "errorCodes." + error
            }
          }
          return null
        }

        /**
         * Creates a Command message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.Statement.Command
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.Statement.Command} Command
         */
        Command.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.Statement.Command) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.Statement.Command: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.Statement.Command()
          if (object.typeDescriptor != null) {
            if (!$util.isObject(object.typeDescriptor))
              throw $TypeError(".leancode.contracts.Statement.Command.typeDescriptor: object expected")
            message.typeDescriptor = $root.leancode.contracts.TypeDescriptor.fromObject(
              object.typeDescriptor,
              _depth + 1,
            )
          }
          if (object.errorCodes) {
            if (!$Array.isArray(object.errorCodes))
              throw $TypeError(".leancode.contracts.Statement.Command.errorCodes: array expected")
            message.errorCodes = $Array(object.errorCodes.length)
            for (var i = 0; i < object.errorCodes.length; ++i) {
              if (!$util.isObject(object.errorCodes[i]))
                throw $TypeError(".leancode.contracts.Statement.Command.errorCodes: object expected")
              message.errorCodes[i] = $root.leancode.contracts.ErrorCode.fromObject(object.errorCodes[i], _depth + 1)
            }
          }
          return message
        }

        /**
         * Creates a plain object from a Command message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.Statement.Command
         * @static
         * @param {leancode.contracts.Statement.Command} message Command
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Command.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.arrays || options.defaults) object.errorCodes = []
          if (options.defaults) object.typeDescriptor = null
          if (message.typeDescriptor != null && $Object.hasOwnProperty.call(message, "typeDescriptor"))
            object.typeDescriptor = $root.leancode.contracts.TypeDescriptor.toObject(
              message.typeDescriptor,
              options,
              _depth + 1,
            )
          if (message.errorCodes && message.errorCodes.length) {
            object.errorCodes = $Array(message.errorCodes.length)
            for (var j = 0; j < message.errorCodes.length; ++j)
              object.errorCodes[j] = $root.leancode.contracts.ErrorCode.toObject(
                message.errorCodes[j],
                options,
                _depth + 1,
              )
          }
          return object
        }

        /**
         * Converts this Command to JSON.
         * @function toJSON
         * @memberof leancode.contracts.Statement.Command
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Command.prototype.toJSON = function () {
          return Command.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Command
         * @function getTypeUrl
         * @memberof leancode.contracts.Statement.Command
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Command.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.Statement.Command"
        }

        return Command
      })()

      Statement.Operation = (function () {
        /**
         * Properties of an Operation.
         * @typedef {Object} leancode.contracts.Statement.Operation.$Properties
         * @property {leancode.contracts.TypeDescriptor.$Properties|null} [typeDescriptor] Operation typeDescriptor
         * @property {leancode.contracts.TypeRef.$Properties|null} [returnType] Operation returnType
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an Operation.
         * @memberof leancode.contracts.Statement
         * @interface IOperation
         * @augments leancode.contracts.Statement.Operation.$Properties
         * @deprecated Use leancode.contracts.Statement.Operation.$Properties instead.
         */

        /**
         * Shape of an Operation.
         * @typedef {{
         *   typeDescriptor?: leancode.contracts.TypeDescriptor.$Shape|null;
         *   returnType?: leancode.contracts.TypeRef.$Shape|null;
         *   $unknowns?: Array.<Uint8Array>;
         * }} leancode.contracts.Statement.Operation.$Shape
         */

        /**
         * Constructs a new Operation.
         * @memberof leancode.contracts.Statement
         * @classdesc Represents an Operation.
         * @constructor
         * @param {leancode.contracts.Statement.Operation.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Operation = function (properties) {
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Operation typeDescriptor.
         * @member {leancode.contracts.TypeDescriptor.$Properties|null|undefined} typeDescriptor
         * @memberof leancode.contracts.Statement.Operation
         * @instance
         */
        Operation.prototype.typeDescriptor = null

        /**
         * Operation returnType.
         * @member {leancode.contracts.TypeRef.$Properties|null|undefined} returnType
         * @memberof leancode.contracts.Statement.Operation
         * @instance
         */
        Operation.prototype.returnType = null

        /**
         * Decodes an Operation message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.Statement.Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.Statement.Operation & leancode.contracts.Statement.Operation.$Shape} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operation.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.Statement.Operation(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 2) break
                message.typeDescriptor = $root.leancode.contracts.TypeDescriptor.decode(
                  reader,
                  reader.uint32(),
                  $undefined,
                  _depth + 1,
                  message.typeDescriptor,
                )
                continue
              }
              case 2: {
                if (wireType !== 2) break
                message.returnType = $root.leancode.contracts.TypeRef.decode(
                  reader,
                  reader.uint32(),
                  $undefined,
                  _depth + 1,
                  message.returnType,
                )
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes an Operation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.Statement.Operation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.Statement.Operation & leancode.contracts.Statement.Operation.$Shape} Operation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Operation.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies an Operation message.
         * @function verify
         * @memberof leancode.contracts.Statement.Operation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Operation.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.typeDescriptor != null && $Object.hasOwnProperty.call(message, "typeDescriptor")) {
            var error = $root.leancode.contracts.TypeDescriptor.verify(message.typeDescriptor, _depth + 1)
            if (error) return "typeDescriptor." + error
          }
          if (message.returnType != null && $Object.hasOwnProperty.call(message, "returnType")) {
            var error = $root.leancode.contracts.TypeRef.verify(message.returnType, _depth + 1)
            if (error) return "returnType." + error
          }
          return null
        }

        /**
         * Creates an Operation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.Statement.Operation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.Statement.Operation} Operation
         */
        Operation.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.Statement.Operation) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.Statement.Operation: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.Statement.Operation()
          if (object.typeDescriptor != null) {
            if (!$util.isObject(object.typeDescriptor))
              throw $TypeError(".leancode.contracts.Statement.Operation.typeDescriptor: object expected")
            message.typeDescriptor = $root.leancode.contracts.TypeDescriptor.fromObject(
              object.typeDescriptor,
              _depth + 1,
            )
          }
          if (object.returnType != null) {
            if (!$util.isObject(object.returnType))
              throw $TypeError(".leancode.contracts.Statement.Operation.returnType: object expected")
            message.returnType = $root.leancode.contracts.TypeRef.fromObject(object.returnType, _depth + 1)
          }
          return message
        }

        /**
         * Creates a plain object from an Operation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.Statement.Operation
         * @static
         * @param {leancode.contracts.Statement.Operation} message Operation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Operation.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.defaults) {
            object.typeDescriptor = null
            object.returnType = null
          }
          if (message.typeDescriptor != null && $Object.hasOwnProperty.call(message, "typeDescriptor"))
            object.typeDescriptor = $root.leancode.contracts.TypeDescriptor.toObject(
              message.typeDescriptor,
              options,
              _depth + 1,
            )
          if (message.returnType != null && $Object.hasOwnProperty.call(message, "returnType"))
            object.returnType = $root.leancode.contracts.TypeRef.toObject(message.returnType, options, _depth + 1)
          return object
        }

        /**
         * Converts this Operation to JSON.
         * @function toJSON
         * @memberof leancode.contracts.Statement.Operation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Operation.prototype.toJSON = function () {
          return Operation.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Operation
         * @function getTypeUrl
         * @memberof leancode.contracts.Statement.Operation
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Operation.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.Statement.Operation"
        }

        return Operation
      })()

      Statement.Topic = (function () {
        /**
         * Properties of a Topic.
         * @typedef {Object} leancode.contracts.Statement.Topic.$Properties
         * @property {leancode.contracts.TypeDescriptor.$Properties|null} [typeDescriptor] Topic typeDescriptor
         * @property {Array.<leancode.contracts.NotificationTypeRef.$Properties>|null} [notifications] Topic notifications
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a Topic.
         * @memberof leancode.contracts.Statement
         * @interface ITopic
         * @augments leancode.contracts.Statement.Topic.$Properties
         * @deprecated Use leancode.contracts.Statement.Topic.$Properties instead.
         */

        /**
         * Shape of a Topic.
         * @typedef {{
         *   typeDescriptor?: leancode.contracts.TypeDescriptor.$Shape|null;
         *   notifications?: Array.<leancode.contracts.NotificationTypeRef.$Shape>|null;
         *   $unknowns?: Array.<Uint8Array>;
         * }} leancode.contracts.Statement.Topic.$Shape
         */

        /**
         * Constructs a new Topic.
         * @memberof leancode.contracts.Statement
         * @classdesc Represents a Topic.
         * @constructor
         * @param {leancode.contracts.Statement.Topic.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var Topic = function (properties) {
          this.notifications = []
          if (properties)
            for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
              if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
        }

        /**
         * Topic typeDescriptor.
         * @member {leancode.contracts.TypeDescriptor.$Properties|null|undefined} typeDescriptor
         * @memberof leancode.contracts.Statement.Topic
         * @instance
         */
        Topic.prototype.typeDescriptor = null

        /**
         * Topic notifications.
         * @member {Array.<leancode.contracts.NotificationTypeRef.$Properties>} notifications
         * @memberof leancode.contracts.Statement.Topic
         * @instance
         */
        Topic.prototype.notifications = $util.emptyArray

        /**
         * Decodes a Topic message from the specified reader or buffer.
         * @function decode
         * @memberof leancode.contracts.Statement.Topic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {leancode.contracts.Statement.Topic & leancode.contracts.Statement.Topic.$Shape} Topic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Topic.decode = function (reader, length, _end, _depth, _target) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
          if (_depth === $undefined) _depth = 0
          if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
          var end = length === $undefined ? reader.len : reader.pos + length,
            message = _target || new $root.leancode.contracts.Statement.Topic(),
            value
          while (reader.pos < end) {
            var start = reader.pos
            var tag = reader.tag()
            if (tag === _end) {
              _end = $undefined
              break
            }
            var wireType = tag & 7
            switch ((tag >>>= 3)) {
              case 1: {
                if (wireType !== 2) break
                message.typeDescriptor = $root.leancode.contracts.TypeDescriptor.decode(
                  reader,
                  reader.uint32(),
                  $undefined,
                  _depth + 1,
                  message.typeDescriptor,
                )
                continue
              }
              case 2: {
                if (wireType !== 2) break
                if (!(message.notifications && message.notifications.length)) message.notifications = []
                message.notifications.push(
                  $root.leancode.contracts.NotificationTypeRef.decode(reader, reader.uint32(), $undefined, _depth + 1),
                )
                continue
              }
            }
            reader.skipType(wireType, _depth, tag)
            if (!reader.discardUnknown) {
              $util.makeProp(message, "$unknowns", false)
              ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
            }
          }
          if (_end !== $undefined) throw $Error("missing end group")
          return message
        }

        /**
         * Decodes a Topic message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof leancode.contracts.Statement.Topic
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {leancode.contracts.Statement.Topic & leancode.contracts.Statement.Topic.$Shape} Topic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Topic.decodeDelimited = function (reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader)
          return this.decode(reader, reader.uint32())
        }

        /**
         * Verifies a Topic message.
         * @function verify
         * @memberof leancode.contracts.Statement.Topic
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Topic.verify = function (message, _depth) {
          if (typeof message !== "object" || message === null) return "object expected"
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) return "max depth exceeded"
          if (message.typeDescriptor != null && $Object.hasOwnProperty.call(message, "typeDescriptor")) {
            var error = $root.leancode.contracts.TypeDescriptor.verify(message.typeDescriptor, _depth + 1)
            if (error) return "typeDescriptor." + error
          }
          if (message.notifications != null && $Object.hasOwnProperty.call(message, "notifications")) {
            if (!$Array.isArray(message.notifications)) return "notifications: array expected"
            for (var i = 0; i < message.notifications.length; ++i) {
              var error = $root.leancode.contracts.NotificationTypeRef.verify(message.notifications[i], _depth + 1)
              if (error) return "notifications." + error
            }
          }
          return null
        }

        /**
         * Creates a Topic message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof leancode.contracts.Statement.Topic
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {leancode.contracts.Statement.Topic} Topic
         */
        Topic.fromObject = function (object, _depth) {
          if (object instanceof $root.leancode.contracts.Statement.Topic) return object
          if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.Statement.Topic: object expected")
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var message = new $root.leancode.contracts.Statement.Topic()
          if (object.typeDescriptor != null) {
            if (!$util.isObject(object.typeDescriptor))
              throw $TypeError(".leancode.contracts.Statement.Topic.typeDescriptor: object expected")
            message.typeDescriptor = $root.leancode.contracts.TypeDescriptor.fromObject(
              object.typeDescriptor,
              _depth + 1,
            )
          }
          if (object.notifications) {
            if (!$Array.isArray(object.notifications))
              throw $TypeError(".leancode.contracts.Statement.Topic.notifications: array expected")
            message.notifications = $Array(object.notifications.length)
            for (var i = 0; i < object.notifications.length; ++i) {
              if (!$util.isObject(object.notifications[i]))
                throw $TypeError(".leancode.contracts.Statement.Topic.notifications: object expected")
              message.notifications[i] = $root.leancode.contracts.NotificationTypeRef.fromObject(
                object.notifications[i],
                _depth + 1,
              )
            }
          }
          return message
        }

        /**
         * Creates a plain object from a Topic message. Also converts values to other types if specified.
         * @function toObject
         * @memberof leancode.contracts.Statement.Topic
         * @static
         * @param {leancode.contracts.Statement.Topic} message Topic
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Topic.toObject = function (message, options, _depth) {
          if (!options) options = {}
          if (_depth === $undefined) _depth = 0
          if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
          var object = {}
          if (options.arrays || options.defaults) object.notifications = []
          if (options.defaults) object.typeDescriptor = null
          if (message.typeDescriptor != null && $Object.hasOwnProperty.call(message, "typeDescriptor"))
            object.typeDescriptor = $root.leancode.contracts.TypeDescriptor.toObject(
              message.typeDescriptor,
              options,
              _depth + 1,
            )
          if (message.notifications && message.notifications.length) {
            object.notifications = $Array(message.notifications.length)
            for (var j = 0; j < message.notifications.length; ++j)
              object.notifications[j] = $root.leancode.contracts.NotificationTypeRef.toObject(
                message.notifications[j],
                options,
                _depth + 1,
              )
          }
          return object
        }

        /**
         * Converts this Topic to JSON.
         * @function toJSON
         * @memberof leancode.contracts.Statement.Topic
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Topic.prototype.toJSON = function () {
          return Topic.toObject(this, $protobuf.util.toJSONOptions)
        }

        /**
         * Gets the type url for Topic
         * @function getTypeUrl
         * @memberof leancode.contracts.Statement.Topic
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        Topic.getTypeUrl = function (prefix) {
          if (prefix === $undefined) prefix = "type.googleapis.com"
          return prefix + "/leancode.contracts.Statement.Topic"
        }

        return Topic
      })()

      return Statement
    })()

    contracts.Protocol = (function () {
      /**
       * Properties of a Protocol.
       * @typedef {Object} leancode.contracts.Protocol.$Properties
       * @property {string|null} [version] Protocol version
       * @property {Array.<string>|null} [extensions] Protocol extensions
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of a Protocol.
       * @memberof leancode.contracts
       * @interface IProtocol
       * @augments leancode.contracts.Protocol.$Properties
       * @deprecated Use leancode.contracts.Protocol.$Properties instead.
       */

      /**
       * Shape of a Protocol.
       * @typedef {leancode.contracts.Protocol.$Properties} leancode.contracts.Protocol.$Shape
       */

      /**
       * Constructs a new Protocol.
       * @memberof leancode.contracts
       * @classdesc Represents a Protocol.
       * @constructor
       * @param {leancode.contracts.Protocol.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var Protocol = function (properties) {
        this.extensions = []
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * Protocol version.
       * @member {string} version
       * @memberof leancode.contracts.Protocol
       * @instance
       */
      Protocol.prototype.version = ""

      /**
       * Protocol extensions.
       * @member {Array.<string>} extensions
       * @memberof leancode.contracts.Protocol
       * @instance
       */
      Protocol.prototype.extensions = $util.emptyArray

      /**
       * Decodes a Protocol message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.Protocol
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.Protocol & leancode.contracts.Protocol.$Shape} Protocol
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Protocol.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.Protocol(),
          value
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 2) break
              if ((value = reader.stringVerify()).length) message.version = value
              else delete message.version
              continue
            }
            case 2: {
              if (wireType !== 2) break
              if (!(message.extensions && message.extensions.length)) message.extensions = []
              message.extensions.push(reader.stringVerify())
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes a Protocol message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.Protocol
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.Protocol & leancode.contracts.Protocol.$Shape} Protocol
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Protocol.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies a Protocol message.
       * @function verify
       * @memberof leancode.contracts.Protocol
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Protocol.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
          if (!$util.isString(message.version)) return "version: string expected"
        if (message.extensions != null && $Object.hasOwnProperty.call(message, "extensions")) {
          if (!$Array.isArray(message.extensions)) return "extensions: array expected"
          for (var i = 0; i < message.extensions.length; ++i)
            if (!$util.isString(message.extensions[i])) return "extensions: string[] expected"
        }
        return null
      }

      /**
       * Creates a Protocol message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.Protocol
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.Protocol} Protocol
       */
      Protocol.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.Protocol) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.Protocol: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.Protocol()
        if (object.version != null)
          if (typeof object.version !== "string" || object.version.length) message.version = $String(object.version)
        if (object.extensions) {
          if (!$Array.isArray(object.extensions))
            throw $TypeError(".leancode.contracts.Protocol.extensions: array expected")
          message.extensions = $Array(object.extensions.length)
          for (var i = 0; i < object.extensions.length; ++i) message.extensions[i] = $String(object.extensions[i])
        }
        return message
      }

      /**
       * Creates a plain object from a Protocol message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.Protocol
       * @static
       * @param {leancode.contracts.Protocol} message Protocol
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Protocol.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (options.arrays || options.defaults) object.extensions = []
        if (options.defaults) object.version = ""
        if (message.version != null && $Object.hasOwnProperty.call(message, "version")) object.version = message.version
        if (message.extensions && message.extensions.length) {
          object.extensions = $Array(message.extensions.length)
          for (var j = 0; j < message.extensions.length; ++j) object.extensions[j] = message.extensions[j]
        }
        return object
      }

      /**
       * Converts this Protocol to JSON.
       * @function toJSON
       * @memberof leancode.contracts.Protocol
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Protocol.prototype.toJSON = function () {
        return Protocol.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for Protocol
       * @function getTypeUrl
       * @memberof leancode.contracts.Protocol
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      Protocol.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.Protocol"
      }

      return Protocol
    })()

    contracts.Export = (function () {
      /**
       * Properties of an Export.
       * @typedef {Object} leancode.contracts.Export.$Properties
       * @property {string|null} [projectName] Export projectName
       * @property {Array.<leancode.contracts.Statement.$Properties>|null} [statements] Export statements
       * @property {Array.<leancode.contracts.ErrorCode.Group.$Properties>|null} [knownErrorGroups] Export knownErrorGroups
       * @property {leancode.contracts.Protocol.$Properties|null} [protocol] Export protocol
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */

      /**
       * Properties of an Export.
       * @memberof leancode.contracts
       * @interface IExport
       * @augments leancode.contracts.Export.$Properties
       * @deprecated Use leancode.contracts.Export.$Properties instead.
       */

      /**
       * Shape of an Export.
       * @typedef {{
       *   projectName?: string|null;
       *   statements?: Array.<leancode.contracts.Statement.$Shape>|null;
       *   knownErrorGroups?: Array.<leancode.contracts.ErrorCode.Group.$Shape>|null;
       *   protocol?: leancode.contracts.Protocol.$Shape|null;
       *   $unknowns?: Array.<Uint8Array>;
       * }} leancode.contracts.Export.$Shape
       */

      /**
       * Constructs a new Export.
       * @memberof leancode.contracts
       * @classdesc Represents an Export.
       * @constructor
       * @param {leancode.contracts.Export.$Properties=} [properties] Properties to set
       * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
       */
      var Export = function (properties) {
        this.statements = []
        this.knownErrorGroups = []
        if (properties)
          for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null && keys[i] !== "__proto__") this[keys[i]] = properties[keys[i]]
      }

      /**
       * Export projectName.
       * @member {string} projectName
       * @memberof leancode.contracts.Export
       * @instance
       */
      Export.prototype.projectName = ""

      /**
       * Export statements.
       * @member {Array.<leancode.contracts.Statement.$Properties>} statements
       * @memberof leancode.contracts.Export
       * @instance
       */
      Export.prototype.statements = $util.emptyArray

      /**
       * Export knownErrorGroups.
       * @member {Array.<leancode.contracts.ErrorCode.Group.$Properties>} knownErrorGroups
       * @memberof leancode.contracts.Export
       * @instance
       */
      Export.prototype.knownErrorGroups = $util.emptyArray

      /**
       * Export protocol.
       * @member {leancode.contracts.Protocol.$Properties|null|undefined} protocol
       * @memberof leancode.contracts.Export
       * @instance
       */
      Export.prototype.protocol = null

      /**
       * Decodes an Export message from the specified reader or buffer.
       * @function decode
       * @memberof leancode.contracts.Export
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {leancode.contracts.Export & leancode.contracts.Export.$Shape} Export
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Export.decode = function (reader, length, _end, _depth, _target) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader)
        if (_depth === $undefined) _depth = 0
        if (_depth > $Reader.recursionLimit) throw $Error("max depth exceeded")
        var end = length === $undefined ? reader.len : reader.pos + length,
          message = _target || new $root.leancode.contracts.Export(),
          value
        while (reader.pos < end) {
          var start = reader.pos
          var tag = reader.tag()
          if (tag === _end) {
            _end = $undefined
            break
          }
          var wireType = tag & 7
          switch ((tag >>>= 3)) {
            case 1: {
              if (wireType !== 2) break
              if ((value = reader.stringVerify()).length) message.projectName = value
              else delete message.projectName
              continue
            }
            case 2: {
              if (wireType !== 2) break
              if (!(message.statements && message.statements.length)) message.statements = []
              message.statements.push(
                $root.leancode.contracts.Statement.decode(reader, reader.uint32(), $undefined, _depth + 1),
              )
              continue
            }
            case 3: {
              if (wireType !== 2) break
              if (!(message.knownErrorGroups && message.knownErrorGroups.length)) message.knownErrorGroups = []
              message.knownErrorGroups.push(
                $root.leancode.contracts.ErrorCode.Group.decode(reader, reader.uint32(), $undefined, _depth + 1),
              )
              continue
            }
            case 4: {
              if (wireType !== 2) break
              message.protocol = $root.leancode.contracts.Protocol.decode(
                reader,
                reader.uint32(),
                $undefined,
                _depth + 1,
                message.protocol,
              )
              continue
            }
          }
          reader.skipType(wireType, _depth, tag)
          if (!reader.discardUnknown) {
            $util.makeProp(message, "$unknowns", false)
            ;(message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos))
          }
        }
        if (_end !== $undefined) throw $Error("missing end group")
        return message
      }

      /**
       * Decodes an Export message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof leancode.contracts.Export
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {leancode.contracts.Export & leancode.contracts.Export.$Shape} Export
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Export.decodeDelimited = function (reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader)
        return this.decode(reader, reader.uint32())
      }

      /**
       * Verifies an Export message.
       * @function verify
       * @memberof leancode.contracts.Export
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Export.verify = function (message, _depth) {
        if (typeof message !== "object" || message === null) return "object expected"
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) return "max depth exceeded"
        if (message.projectName != null && $Object.hasOwnProperty.call(message, "projectName"))
          if (!$util.isString(message.projectName)) return "projectName: string expected"
        if (message.statements != null && $Object.hasOwnProperty.call(message, "statements")) {
          if (!$Array.isArray(message.statements)) return "statements: array expected"
          for (var i = 0; i < message.statements.length; ++i) {
            var error = $root.leancode.contracts.Statement.verify(message.statements[i], _depth + 1)
            if (error) return "statements." + error
          }
        }
        if (message.knownErrorGroups != null && $Object.hasOwnProperty.call(message, "knownErrorGroups")) {
          if (!$Array.isArray(message.knownErrorGroups)) return "knownErrorGroups: array expected"
          for (var i = 0; i < message.knownErrorGroups.length; ++i) {
            var error = $root.leancode.contracts.ErrorCode.Group.verify(message.knownErrorGroups[i], _depth + 1)
            if (error) return "knownErrorGroups." + error
          }
        }
        if (message.protocol != null && $Object.hasOwnProperty.call(message, "protocol")) {
          var error = $root.leancode.contracts.Protocol.verify(message.protocol, _depth + 1)
          if (error) return "protocol." + error
        }
        return null
      }

      /**
       * Creates an Export message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof leancode.contracts.Export
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {leancode.contracts.Export} Export
       */
      Export.fromObject = function (object, _depth) {
        if (object instanceof $root.leancode.contracts.Export) return object
        if (!$util.isObject(object)) throw $TypeError(".leancode.contracts.Export: object expected")
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var message = new $root.leancode.contracts.Export()
        if (object.projectName != null)
          if (typeof object.projectName !== "string" || object.projectName.length)
            message.projectName = $String(object.projectName)
        if (object.statements) {
          if (!$Array.isArray(object.statements))
            throw $TypeError(".leancode.contracts.Export.statements: array expected")
          message.statements = $Array(object.statements.length)
          for (var i = 0; i < object.statements.length; ++i) {
            if (!$util.isObject(object.statements[i]))
              throw $TypeError(".leancode.contracts.Export.statements: object expected")
            message.statements[i] = $root.leancode.contracts.Statement.fromObject(object.statements[i], _depth + 1)
          }
        }
        if (object.knownErrorGroups) {
          if (!$Array.isArray(object.knownErrorGroups))
            throw $TypeError(".leancode.contracts.Export.knownErrorGroups: array expected")
          message.knownErrorGroups = $Array(object.knownErrorGroups.length)
          for (var i = 0; i < object.knownErrorGroups.length; ++i) {
            if (!$util.isObject(object.knownErrorGroups[i]))
              throw $TypeError(".leancode.contracts.Export.knownErrorGroups: object expected")
            message.knownErrorGroups[i] = $root.leancode.contracts.ErrorCode.Group.fromObject(
              object.knownErrorGroups[i],
              _depth + 1,
            )
          }
        }
        if (object.protocol != null) {
          if (!$util.isObject(object.protocol)) throw $TypeError(".leancode.contracts.Export.protocol: object expected")
          message.protocol = $root.leancode.contracts.Protocol.fromObject(object.protocol, _depth + 1)
        }
        return message
      }

      /**
       * Creates a plain object from an Export message. Also converts values to other types if specified.
       * @function toObject
       * @memberof leancode.contracts.Export
       * @static
       * @param {leancode.contracts.Export} message Export
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Export.toObject = function (message, options, _depth) {
        if (!options) options = {}
        if (_depth === $undefined) _depth = 0
        if (_depth > $util.recursionLimit) throw $Error("max depth exceeded")
        var object = {}
        if (options.arrays || options.defaults) {
          object.statements = []
          object.knownErrorGroups = []
        }
        if (options.defaults) {
          object.projectName = ""
          object.protocol = null
        }
        if (message.projectName != null && $Object.hasOwnProperty.call(message, "projectName"))
          object.projectName = message.projectName
        if (message.statements && message.statements.length) {
          object.statements = $Array(message.statements.length)
          for (var j = 0; j < message.statements.length; ++j)
            object.statements[j] = $root.leancode.contracts.Statement.toObject(
              message.statements[j],
              options,
              _depth + 1,
            )
        }
        if (message.knownErrorGroups && message.knownErrorGroups.length) {
          object.knownErrorGroups = $Array(message.knownErrorGroups.length)
          for (var j = 0; j < message.knownErrorGroups.length; ++j)
            object.knownErrorGroups[j] = $root.leancode.contracts.ErrorCode.Group.toObject(
              message.knownErrorGroups[j],
              options,
              _depth + 1,
            )
        }
        if (message.protocol != null && $Object.hasOwnProperty.call(message, "protocol"))
          object.protocol = $root.leancode.contracts.Protocol.toObject(message.protocol, options, _depth + 1)
        return object
      }

      /**
       * Converts this Export to JSON.
       * @function toJSON
       * @memberof leancode.contracts.Export
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Export.prototype.toJSON = function () {
        return Export.toObject(this, $protobuf.util.toJSONOptions)
      }

      /**
       * Gets the type url for Export
       * @function getTypeUrl
       * @memberof leancode.contracts.Export
       * @static
       * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
       * @returns {string} The type url
       */
      Export.getTypeUrl = function (prefix) {
        if (prefix === $undefined) prefix = "type.googleapis.com"
        return prefix + "/leancode.contracts.Export"
      }

      return Export
    })()

    return contracts
  })()

  return leancode
})()

module.exports = $root
