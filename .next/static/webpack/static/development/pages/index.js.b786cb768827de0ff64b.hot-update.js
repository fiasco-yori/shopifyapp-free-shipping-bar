webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/graphql/error/formatError.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/error/formatError.mjs ***!
  \****************************************************/
/*! exports provided: formatError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return formatError; });
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");


/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  var _error$message;

  error || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'Received null or undefined error.');
  var message = (_error$message = error.message) !== null && _error$message !== void 0 ? _error$message : 'An unknown error occurred.';
  var locations = error.locations;
  var path = error.path;
  var extensions = error.extensions;
  return extensions ? {
    message: message,
    locations: locations,
    path: path,
    extensions: extensions
  } : {
    message: message,
    locations: locations,
    path: path
  };
}
/**
 * @see https://github.com/graphql/graphql-spec/blob/master/spec/Section%207%20--%20Response.md#errors
 */


/***/ }),

/***/ "./node_modules/graphql/error/index.mjs":
/*!**********************************************!*\
  !*** ./node_modules/graphql/error/index.mjs ***!
  \**********************************************/
/*! exports provided: GraphQLError, printError, syntaxError, locatedError, formatError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["printError"]; });

/* harmony import */ var _syntaxError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syntaxError.mjs */ "./node_modules/graphql/error/syntaxError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return _syntaxError_mjs__WEBPACK_IMPORTED_MODULE_1__["syntaxError"]; });

/* harmony import */ var _locatedError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locatedError.mjs */ "./node_modules/graphql/error/locatedError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locatedError", function() { return _locatedError_mjs__WEBPACK_IMPORTED_MODULE_2__["locatedError"]; });

/* harmony import */ var _formatError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatError.mjs */ "./node_modules/graphql/error/formatError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return _formatError_mjs__WEBPACK_IMPORTED_MODULE_3__["formatError"]; });







/***/ }),

/***/ "./node_modules/graphql/error/locatedError.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/error/locatedError.mjs ***!
  \*****************************************************/
/*! exports provided: locatedError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locatedError", function() { return locatedError; });
/* harmony import */ var _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */

function locatedError(originalError, nodes, path) {
  var _nodes;

  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (Array.isArray(originalError.path)) {
    return originalError;
  }

  return new _GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](originalError.message, (_nodes = originalError.nodes) !== null && _nodes !== void 0 ? _nodes : nodes, originalError.source, originalError.positions, path, originalError);
}


/***/ }),

/***/ "./node_modules/graphql/execution/execute.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/execution/execute.mjs ***!
  \****************************************************/
/*! exports provided: execute, assertValidExecutionArguments, buildExecutionContext, collectFields, buildResolveInfo, resolveFieldValueOrError, defaultTypeResolver, defaultFieldResolver, getFieldDef */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidExecutionArguments", function() { return assertValidExecutionArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildExecutionContext", function() { return buildExecutionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectFields", function() { return collectFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildResolveInfo", function() { return buildResolveInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveFieldValueOrError", function() { return resolveFieldValueOrError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTypeResolver", function() { return defaultTypeResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFieldResolver", function() { return defaultFieldResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldDef", function() { return getFieldDef; });
/* harmony import */ var _polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/arrayFrom.mjs */ "./node_modules/graphql/polyfills/arrayFrom.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_memoize3_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/memoize3.mjs */ "./node_modules/graphql/jsutils/memoize3.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/isPromise.mjs */ "./node_modules/graphql/jsutils/isPromise.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_isCollection_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/isCollection.mjs */ "./node_modules/graphql/jsutils/isCollection.mjs");
/* harmony import */ var _jsutils_promiseReduce_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/promiseReduce.mjs */ "./node_modules/graphql/jsutils/promiseReduce.mjs");
/* harmony import */ var _jsutils_promiseForObject_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jsutils/promiseForObject.mjs */ "./node_modules/graphql/jsutils/promiseForObject.mjs");
/* harmony import */ var _jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jsutils/Path.mjs */ "./node_modules/graphql/jsutils/Path.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../error/locatedError.mjs */ "./node_modules/graphql/error/locatedError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_validate_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../type/validate.mjs */ "./node_modules/graphql/type/validate.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_getOperationRootType_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utilities/getOperationRootType.mjs */ "./node_modules/graphql/utilities/getOperationRootType.mjs");
/* harmony import */ var _values_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./values.mjs */ "./node_modules/graphql/execution/values.mjs");





















/**
 * Terminology
 *
 * "Definitions" are the generic name for top-level statements in the document.
 * Examples of this include:
 * 1) Operations (such as a query)
 * 2) Fragments
 *
 * "Operations" are a generic name for requests in the document.
 * Examples of this include:
 * 1) query,
 * 2) mutation
 *
 * "Selections" are the definitions that can appear legally and at
 * single level of the query. These include:
 * 1) field references e.g "a"
 * 2) fragment "spreads" e.g. "...c"
 * 3) inline fragment "spreads" e.g. "...on Type { a }"
 */

/**
 * Data that must be available at all points during query execution.
 *
 * Namely, schema of the type system that is currently executing,
 * and the fragments defined in the query document
 */

function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? executeImpl(argsOrSchema) : executeImpl({
    schema: argsOrSchema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  });
}

function executeImpl(args) {
  var schema = args.schema,
      document = args.document,
      rootValue = args.rootValue,
      contextValue = args.contextValue,
      variableValues = args.variableValues,
      operationName = args.operationName,
      fieldResolver = args.fieldResolver,
      typeResolver = args.typeResolver; // If arguments are missing or incorrect, throw an error.

  assertValidExecutionArguments(schema, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
  // a "Response" with only errors is returned.

  var exeContext = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver); // Return early errors if execution context failed.

  if (Array.isArray(exeContext)) {
    return {
      errors: exeContext
    };
  } // Return a Promise that will eventually resolve to the data described by
  // The "Response" section of the GraphQL specification.
  //
  // If errors are encountered while executing a GraphQL field, only that
  // field and its descendants will be omitted, and sibling fields will still
  // be executed. An execution which encounters errors will still result in a
  // resolved Promise.


  var data = executeOperation(exeContext, exeContext.operation, rootValue);
  return buildResponse(exeContext, data);
}
/**
 * Given a completed execution context and data, build the { errors, data }
 * response defined by the "Response" section of the GraphQL specification.
 */


function buildResponse(exeContext, data) {
  if (Object(_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(data)) {
    return data.then(function (resolved) {
      return buildResponse(exeContext, resolved);
    });
  }

  return exeContext.errors.length === 0 ? {
    data: data
  } : {
    errors: exeContext.errors,
    data: data
  };
}
/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 *
 * @internal
 */


function assertValidExecutionArguments(schema, document, rawVariableValues) {
  document || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Must provide document.'); // If the schema used for execution is invalid, throw an error.

  Object(_type_validate_mjs__WEBPACK_IMPORTED_MODULE_14__["assertValidSchema"])(schema); // Variables, if provided, must be an object.

  rawVariableValues == null || Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(rawVariableValues) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.');
}
/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 *
 * @internal
 */

function buildExecutionContext(schema, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver, typeResolver) {
  var _definition$name, _operation$variableDe;

  var operation;
  var fragments = Object.create(null);

  for (var _i2 = 0, _document$definitions2 = document.definitions; _i2 < _document$definitions2.length; _i2++) {
    var definition = _document$definitions2[_i2];

    switch (definition.kind) {
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_13__["Kind"].OPERATION_DEFINITION:
        if (operationName == null) {
          if (operation !== undefined) {
            return [new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_11__["GraphQLError"]('Must provide operation name if query contains multiple operations.')];
          }

          operation = definition;
        } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
          operation = definition;
        }

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_13__["Kind"].FRAGMENT_DEFINITION:
        fragments[definition.name.value] = definition;
        break;
    }
  }

  if (!operation) {
    if (operationName != null) {
      return [new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_11__["GraphQLError"]("Unknown operation named \"".concat(operationName, "\"."))];
    }

    return [new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_11__["GraphQLError"]('Must provide an operation.')];
  }
  /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */


  var variableDefinitions = (_operation$variableDe = operation.variableDefinitions) !== null && _operation$variableDe !== void 0 ? _operation$variableDe : [];
  var coercedVariableValues = Object(_values_mjs__WEBPACK_IMPORTED_MODULE_20__["getVariableValues"])(schema, variableDefinitions, rawVariableValues !== null && rawVariableValues !== void 0 ? rawVariableValues : {}, {
    maxErrors: 50
  });

  if (coercedVariableValues.errors) {
    return coercedVariableValues.errors;
  }

  return {
    schema: schema,
    fragments: fragments,
    rootValue: rootValue,
    contextValue: contextValue,
    operation: operation,
    variableValues: coercedVariableValues.coerced,
    fieldResolver: fieldResolver !== null && fieldResolver !== void 0 ? fieldResolver : defaultFieldResolver,
    typeResolver: typeResolver !== null && typeResolver !== void 0 ? typeResolver : defaultTypeResolver,
    errors: []
  };
}
/**
 * Implements the "Evaluating operations" section of the spec.
 */

function executeOperation(exeContext, operation, rootValue) {
  var type = Object(_utilities_getOperationRootType_mjs__WEBPACK_IMPORTED_MODULE_19__["getOperationRootType"])(exeContext.schema, operation);
  var fields = collectFields(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));
  var path = undefined; // Errors from sub-fields of a NonNull type may propagate to the top level,
  // at which point we still log the error and null the parent field, which
  // in this case is the entire response.
  //
  // Similar to completeValueCatchingError.

  try {
    var result = operation.operation === 'mutation' ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);

    if (Object(_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(result)) {
      return result.then(undefined, function (error) {
        exeContext.errors.push(error);
        return Promise.resolve(null);
      });
    }

    return result;
  } catch (error) {
    exeContext.errors.push(error);
    return null;
  }
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "write" mode.
 */


function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
  return Object(_jsutils_promiseReduce_mjs__WEBPACK_IMPORTED_MODULE_8__["default"])(Object.keys(fields), function (results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_10__["addPath"])(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result === undefined) {
      return results;
    }

    if (Object(_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(result)) {
      return result.then(function (resolvedResult) {
        results[responseName] = resolvedResult;
        return results;
      });
    }

    results[responseName] = result;
    return results;
  }, Object.create(null));
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "read" mode.
 */


function executeFields(exeContext, parentType, sourceValue, path, fields) {
  var results = Object.create(null);
  var containsPromise = false;

  for (var _i4 = 0, _Object$keys2 = Object.keys(fields); _i4 < _Object$keys2.length; _i4++) {
    var responseName = _Object$keys2[_i4];
    var fieldNodes = fields[responseName];
    var fieldPath = Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_10__["addPath"])(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result !== undefined) {
      results[responseName] = result;

      if (!containsPromise && Object(_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(result)) {
        containsPromise = true;
      }
    }
  } // If there are no promises, we can just return the object


  if (!containsPromise) {
    return results;
  } // Otherwise, results is a map from field name to the result of resolving that
  // field, which is possibly a promise. Return a promise that will return this
  // same map, but with any promises replaced with the values they resolved to.


  return Object(_jsutils_promiseForObject_mjs__WEBPACK_IMPORTED_MODULE_9__["default"])(results);
}
/**
 * Given a selectionSet, adds all of the fields in that selection to
 * the passed in map of fields, and returns it at the end.
 *
 * CollectFields requires the "runtime type" of an object. For a field which
 * returns an Interface or Union type, the "runtime type" will be the actual
 * Object type returned by that field.
 *
 * @internal
 */


function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (var _i6 = 0, _selectionSet$selecti2 = selectionSet.selections; _i6 < _selectionSet$selecti2.length; _i6++) {
    var selection = _selectionSet$selecti2[_i6];

    switch (selection.kind) {
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_13__["Kind"].FIELD:
        {
          if (!shouldIncludeNode(exeContext, selection)) {
            continue;
          }

          var name = getFieldEntryKey(selection);

          if (!fields[name]) {
            fields[name] = [];
          }

          fields[name].push(selection);
          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_13__["Kind"].INLINE_FRAGMENT:
        {
          if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
            continue;
          }

          collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_13__["Kind"].FRAGMENT_SPREAD:
        {
          var fragName = selection.name.value;

          if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
            continue;
          }

          visitedFragmentNames[fragName] = true;
          var fragment = exeContext.fragments[fragName];

          if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
            continue;
          }

          collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
          break;
        }
    }
  }

  return fields;
}
/**
 * Determines if a field should be included based on the @include and @skip
 * directives, where @skip has higher precedence than @include.
 */

function shouldIncludeNode(exeContext, node) {
  var skip = Object(_values_mjs__WEBPACK_IMPORTED_MODULE_20__["getDirectiveValues"])(_type_directives_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLSkipDirective"], node, exeContext.variableValues);

  if ((skip === null || skip === void 0 ? void 0 : skip.if) === true) {
    return false;
  }

  var include = Object(_values_mjs__WEBPACK_IMPORTED_MODULE_20__["getDirectiveValues"])(_type_directives_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLIncludeDirective"], node, exeContext.variableValues);

  if ((include === null || include === void 0 ? void 0 : include.if) === false) {
    return false;
  }

  return true;
}
/**
 * Determines if a fragment is applicable to the given type.
 */


function doesFragmentConditionMatch(exeContext, fragment, type) {
  var typeConditionNode = fragment.typeCondition;

  if (!typeConditionNode) {
    return true;
  }

  var conditionalType = Object(_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_18__["typeFromAST"])(exeContext.schema, typeConditionNode);

  if (conditionalType === type) {
    return true;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_17__["isAbstractType"])(conditionalType)) {
    return exeContext.schema.isSubType(conditionalType, type);
  }

  return false;
}
/**
 * Implements the logic to compute the key of a given field's entry
 */


function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}
/**
 * Resolves the field on the given source object. In particular, this
 * figures out the value that the field returns by calling its resolve function,
 * then calls completeValue to complete promises, serialize scalars, or execute
 * the sub-selection-set for objects.
 */


function resolveField(exeContext, parentType, source, fieldNodes, path) {
  var _fieldDef$resolve;

  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;
  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);

  if (!fieldDef) {
    return;
  }

  var resolveFn = (_fieldDef$resolve = fieldDef.resolve) !== null && _fieldDef$resolve !== void 0 ? _fieldDef$resolve : exeContext.fieldResolver;
  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path); // Get the resolve function, regardless of if its result is normal
  // or abrupt (error).

  var result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info);
  return completeValueCatchingError(exeContext, fieldDef.type, fieldNodes, info, path, result);
}
/**
 * @internal
 */


function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  // The resolve function's optional fourth argument is a collection of
  // information about the current execution state.
  return {
    fieldName: fieldDef.name,
    fieldNodes: fieldNodes,
    returnType: fieldDef.type,
    parentType: parentType,
    path: path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues
  };
}
/**
 * Isolates the "ReturnOrAbrupt" behavior to not de-opt the `resolveField`
 * function. Returns the result of resolveFn or the abrupt-return Error object.
 *
 * @internal
 */

function resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info) {
  try {
    // Build a JS object of arguments from the field.arguments AST, using the
    // variables scope to fulfill any variable references.
    // TODO: find a way to memoize, in case this field is within a List type.
    var args = Object(_values_mjs__WEBPACK_IMPORTED_MODULE_20__["getArgumentValues"])(fieldDef, fieldNodes[0], exeContext.variableValues); // The resolve function's optional third argument is a context value that
    // is provided to every resolve function within an execution. It is commonly
    // used to represent an authenticated user, or request-specific caches.

    var _contextValue = exeContext.contextValue;
    var result = resolveFn(source, args, _contextValue, info);
    return Object(_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(result) ? result.then(undefined, asErrorInstance) : result;
  } catch (error) {
    return asErrorInstance(error);
  }
} // Sometimes a non-error is thrown, wrap it as an Error instance to ensure a
// consistent Error interface.

function asErrorInstance(error) {
  if (error instanceof Error) {
    return error;
  }

  return new Error('Unexpected error value: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(error));
} // This is a small wrapper around completeValue which detects and logs errors
// in the execution context.


function completeValueCatchingError(exeContext, returnType, fieldNodes, info, path, result) {
  try {
    var completed;

    if (Object(_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(result)) {
      completed = result.then(function (resolved) {
        return completeValue(exeContext, returnType, fieldNodes, info, path, resolved);
      });
    } else {
      completed = completeValue(exeContext, returnType, fieldNodes, info, path, result);
    }

    if (Object(_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(completed)) {
      // Note: we don't rely on a `catch` method, but we do expect "thenable"
      // to take a second callback for the error case.
      return completed.then(undefined, function (error) {
        return handleFieldError(error, fieldNodes, path, returnType, exeContext);
      });
    }

    return completed;
  } catch (error) {
    return handleFieldError(error, fieldNodes, path, returnType, exeContext);
  }
}

function handleFieldError(rawError, fieldNodes, path, returnType, exeContext) {
  var error = Object(_error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_12__["locatedError"])(asErrorInstance(rawError), fieldNodes, Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_10__["pathToArray"])(path)); // If the field type is non-nullable, then it is resolved without any
  // protection from errors, however it still properly locates the error.

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_17__["isNonNullType"])(returnType)) {
    throw error;
  } // Otherwise, error protection is applied, logging the error and resolving
  // a null value for this field if one is encountered.


  exeContext.errors.push(error);
  return null;
}
/**
 * Implements the instructions for completeValue as defined in the
 * "Field entries" section of the spec.
 *
 * If the field type is Non-Null, then this recursively completes the value
 * for the inner type. It throws a field error if that completion returns null,
 * as per the "Nullability" section of the spec.
 *
 * If the field type is a List, then this recursively completes the value
 * for the inner type on each item in the list.
 *
 * If the field type is a Scalar or Enum, ensures the completed value is a legal
 * value of the type by calling the `serialize` method of GraphQL type
 * definition.
 *
 * If the field is an abstract type, determine the runtime type of the value
 * and then complete based on that type
 *
 * Otherwise, the field type expects a sub-selection set, and will complete the
 * value by evaluating all sub-selections.
 */


function completeValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If result is an Error, throw a located error.
  if (result instanceof Error) {
    throw result;
  } // If field type is NonNull, complete for inner type, and throw field error
  // if result is null.


  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_17__["isNonNullType"])(returnType)) {
    var completed = completeValue(exeContext, returnType.ofType, fieldNodes, info, path, result);

    if (completed === null) {
      throw new Error("Cannot return null for non-nullable field ".concat(info.parentType.name, ".").concat(info.fieldName, "."));
    }

    return completed;
  } // If result value is null or undefined then return null.


  if (result == null) {
    return null;
  } // If field type is List, complete each item in the list with the inner type


  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_17__["isListType"])(returnType)) {
    return completeListValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is a leaf type, Scalar or Enum, serialize to a valid value,
  // returning null if serialization is not possible.


  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_17__["isLeafType"])(returnType)) {
    return completeLeafValue(returnType, result);
  } // If field type is an abstract type, Interface or Union, determine the
  // runtime Object type and complete for that type.


  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_17__["isAbstractType"])(returnType)) {
    return completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result);
  } // If field type is Object, execute and complete all sub-selections.


  /* istanbul ignore else */
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_17__["isObjectType"])(returnType)) {
    return completeObjectValue(exeContext, returnType, fieldNodes, info, path, result);
  } // Not reachable. All possible output types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Cannot complete value of unexpected output type: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(returnType));
}
/**
 * Complete a list value by completing each item in the list with the
 * inner type
 */


function completeListValue(exeContext, returnType, fieldNodes, info, path, result) {
  if (!Object(_jsutils_isCollection_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])(result)) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_11__["GraphQLError"]("Expected Iterable, but did not find one for field \"".concat(info.parentType.name, ".").concat(info.fieldName, "\"."));
  } // This is specified as a simple map, however we're optimizing the path
  // where the list contains no Promises by avoiding creating another Promise.


  var itemType = returnType.ofType;
  var containsPromise = false;
  var completedResults = Object(_polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(result, function (item, index) {
    // No need to modify the info object containing the path,
    // since from here on it is not ever accessed by resolver functions.
    var fieldPath = Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_10__["addPath"])(path, index);
    var completedItem = completeValueCatchingError(exeContext, itemType, fieldNodes, info, fieldPath, item);

    if (!containsPromise && Object(_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(completedItem)) {
      containsPromise = true;
    }

    return completedItem;
  });
  return containsPromise ? Promise.all(completedResults) : completedResults;
}
/**
 * Complete a Scalar or Enum by serializing to a valid value, returning
 * null if serialization is not possible.
 */


function completeLeafValue(returnType, result) {
  var serializedResult = returnType.serialize(result);

  if (serializedResult === undefined) {
    throw new Error("Expected a value of type \"".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(returnType), "\" but ") + "received: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(result)));
  }

  return serializedResult;
}
/**
 * Complete a value of an abstract type by determining the runtime object type
 * of that value, then complete the value for that type.
 */


function completeAbstractValue(exeContext, returnType, fieldNodes, info, path, result) {
  var _returnType$resolveTy;

  var resolveTypeFn = (_returnType$resolveTy = returnType.resolveType) !== null && _returnType$resolveTy !== void 0 ? _returnType$resolveTy : exeContext.typeResolver;
  var contextValue = exeContext.contextValue;
  var runtimeType = resolveTypeFn(result, contextValue, info, returnType);

  if (Object(_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(runtimeType)) {
    return runtimeType.then(function (resolvedRuntimeType) {
      return completeObjectValue(exeContext, ensureValidRuntimeType(resolvedRuntimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
    });
  }

  return completeObjectValue(exeContext, ensureValidRuntimeType(runtimeType, exeContext, returnType, fieldNodes, info, result), fieldNodes, info, path, result);
}

function ensureValidRuntimeType(runtimeTypeOrName, exeContext, returnType, fieldNodes, info, result) {
  var runtimeType = typeof runtimeTypeOrName === 'string' ? exeContext.schema.getType(runtimeTypeOrName) : runtimeTypeOrName;

  if (!Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_17__["isObjectType"])(runtimeType)) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_11__["GraphQLError"]("Abstract type \"".concat(returnType.name, "\" must resolve to an Object type at runtime for field \"").concat(info.parentType.name, ".").concat(info.fieldName, "\" with ") + "value ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(result), ", received \"").concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(runtimeType), "\". ") + "Either the \"".concat(returnType.name, "\" type should provide a \"resolveType\" function or each possible type should provide an \"isTypeOf\" function."), fieldNodes);
  }

  if (!exeContext.schema.isSubType(returnType, runtimeType)) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_11__["GraphQLError"]("Runtime Object type \"".concat(runtimeType.name, "\" is not a possible type for \"").concat(returnType.name, "\"."), fieldNodes);
  }

  return runtimeType;
}
/**
 * Complete an Object value by executing all sub-selections.
 */


function completeObjectValue(exeContext, returnType, fieldNodes, info, path, result) {
  // If there is an isTypeOf predicate function, call it with the
  // current result. If isTypeOf returns false, then raise an error rather
  // than continuing execution.
  if (returnType.isTypeOf) {
    var isTypeOf = returnType.isTypeOf(result, exeContext.contextValue, info);

    if (Object(_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(isTypeOf)) {
      return isTypeOf.then(function (resolvedIsTypeOf) {
        if (!resolvedIsTypeOf) {
          throw invalidReturnTypeError(returnType, result, fieldNodes);
        }

        return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
      });
    }

    if (!isTypeOf) {
      throw invalidReturnTypeError(returnType, result, fieldNodes);
    }
  }

  return collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result);
}

function invalidReturnTypeError(returnType, result, fieldNodes) {
  return new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_11__["GraphQLError"]("Expected value of type \"".concat(returnType.name, "\" but got: ").concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(result), "."), fieldNodes);
}

function collectAndExecuteSubfields(exeContext, returnType, fieldNodes, path, result) {
  // Collect sub-fields to execute to complete this value.
  var subFieldNodes = collectSubfields(exeContext, returnType, fieldNodes);
  return executeFields(exeContext, returnType, result, path, subFieldNodes);
}
/**
 * A memoized collection of relevant subfields with regard to the return
 * type. Memoizing ensures the subfields are not repeatedly calculated, which
 * saves overhead when resolving lists of values.
 */


var collectSubfields = Object(_jsutils_memoize3_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(_collectSubfields);

function _collectSubfields(exeContext, returnType, fieldNodes) {
  var subFieldNodes = Object.create(null);
  var visitedFragmentNames = Object.create(null);

  for (var _i8 = 0; _i8 < fieldNodes.length; _i8++) {
    var node = fieldNodes[_i8];

    if (node.selectionSet) {
      subFieldNodes = collectFields(exeContext, returnType, node.selectionSet, subFieldNodes, visitedFragmentNames);
    }
  }

  return subFieldNodes;
}
/**
 * If a resolveType function is not given, then a default resolve behavior is
 * used which attempts two strategies:
 *
 * First, See if the provided value has a `__typename` field defined, if so, use
 * that value as name of the resolved type.
 *
 * Otherwise, test each possible type for the abstract type by calling
 * isTypeOf for the object being coerced, returning the first type that matches.
 */


var defaultTypeResolver = function defaultTypeResolver(value, contextValue, info, abstractType) {
  // First, look for `__typename`.
  if (Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(value) && typeof value.__typename === 'string') {
    return value.__typename;
  } // Otherwise, test each possible type.


  var possibleTypes = info.schema.getPossibleTypes(abstractType);
  var promisedIsTypeOfResults = [];

  for (var i = 0; i < possibleTypes.length; i++) {
    var type = possibleTypes[i];

    if (type.isTypeOf) {
      var isTypeOfResult = type.isTypeOf(value, contextValue, info);

      if (Object(_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(isTypeOfResult)) {
        promisedIsTypeOfResults[i] = isTypeOfResult;
      } else if (isTypeOfResult) {
        return type;
      }
    }
  }

  if (promisedIsTypeOfResults.length) {
    return Promise.all(promisedIsTypeOfResults).then(function (isTypeOfResults) {
      for (var _i9 = 0; _i9 < isTypeOfResults.length; _i9++) {
        if (isTypeOfResults[_i9]) {
          return possibleTypes[_i9];
        }
      }
    });
  }
};
/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context value.
 */

var defaultFieldResolver = function defaultFieldResolver(source, args, contextValue, info) {
  // ensure source is a value for which property access is acceptable.
  if (Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(source) || typeof source === 'function') {
    var property = source[info.fieldName];

    if (typeof property === 'function') {
      return source[info.fieldName](args, contextValue, info);
    }

    return property;
  }
};
/**
 * This method looks up the field on the given type definition.
 * It has special casing for the two introspection fields, __schema
 * and __typename. __typename is special because it can always be
 * queried as a field, even in situations where no other fields
 * are allowed, like on a Union. __schema could get automatically
 * added to the query type, but that would require mutating type
 * definitions, which would cause issues.
 *
 * @internal
 */

function getFieldDef(schema, parentType, fieldName) {
  if (fieldName === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_15__["SchemaMetaFieldDef"].name && schema.getQueryType() === parentType) {
    return _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_15__["SchemaMetaFieldDef"];
  } else if (fieldName === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_15__["TypeMetaFieldDef"].name && schema.getQueryType() === parentType) {
    return _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_15__["TypeMetaFieldDef"];
  } else if (fieldName === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_15__["TypeNameMetaFieldDef"].name) {
    return _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_15__["TypeNameMetaFieldDef"];
  }

  return parentType.getFields()[fieldName];
}


/***/ }),

/***/ "./node_modules/graphql/execution/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/execution/index.mjs ***!
  \**************************************************/
/*! exports provided: responsePathAsArray, execute, defaultFieldResolver, defaultTypeResolver, getDirectiveValues */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/Path.mjs */ "./node_modules/graphql/jsutils/Path.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responsePathAsArray", function() { return _jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_0__["pathToArray"]; });

/* harmony import */ var _execute_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./execute.mjs */ "./node_modules/graphql/execution/execute.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _execute_mjs__WEBPACK_IMPORTED_MODULE_1__["execute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultFieldResolver", function() { return _execute_mjs__WEBPACK_IMPORTED_MODULE_1__["defaultFieldResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTypeResolver", function() { return _execute_mjs__WEBPACK_IMPORTED_MODULE_1__["defaultTypeResolver"]; });

/* harmony import */ var _values_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./values.mjs */ "./node_modules/graphql/execution/values.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectiveValues", function() { return _values_mjs__WEBPACK_IMPORTED_MODULE_2__["getDirectiveValues"]; });






/***/ }),

/***/ "./node_modules/graphql/execution/values.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/execution/values.mjs ***!
  \***************************************************/
/*! exports provided: getVariableValues, getArgumentValues, getDirectiveValues */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVariableValues", function() { return getVariableValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArgumentValues", function() { return getArgumentValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveValues", function() { return getDirectiveValues; });
/* harmony import */ var _polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/find.mjs */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_printPathArray_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/printPathArray.mjs */ "./node_modules/graphql/jsutils/printPathArray.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utilities/valueFromAST.mjs */ "./node_modules/graphql/utilities/valueFromAST.mjs");
/* harmony import */ var _utilities_coerceInputValue_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utilities/coerceInputValue.mjs */ "./node_modules/graphql/utilities/coerceInputValue.mjs");












/**
 * Prepares an object map of variableValues of the correct type based on the
 * provided variable definitions and arbitrary input. If the input cannot be
 * parsed to match the variable definitions, a GraphQLError will be thrown.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 *
 * @internal
 */
function getVariableValues(schema, varDefNodes, inputs, options) {
  var errors = [];
  var maxErrors = options === null || options === void 0 ? void 0 : options.maxErrors;

  try {
    var coerced = coerceVariableValues(schema, varDefNodes, inputs, function (error) {
      if (maxErrors != null && errors.length >= maxErrors) {
        throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]('Too many errors processing variables, error limit reached. Execution aborted.');
      }

      errors.push(error);
    });

    if (errors.length === 0) {
      return {
        coerced: coerced
      };
    }
  } catch (error) {
    errors.push(error);
  }

  return {
    errors: errors
  };
}

function coerceVariableValues(schema, varDefNodes, inputs, onError) {
  var coercedValues = {};

  var _loop = function _loop(_i2) {
    var varDefNode = varDefNodes[_i2];
    var varName = varDefNode.variable.name.value;
    var varType = Object(_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_8__["typeFromAST"])(schema, varDefNode.type);

    if (!Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInputType"])(varType)) {
      // Must use input types for variables. This should be caught during
      // validation, however is checked again here for safety.
      var varTypeStr = Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_6__["print"])(varDefNode.type);
      onError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Variable \"$".concat(varName, "\" expected value of type \"").concat(varTypeStr, "\" which cannot be used as an input type."), varDefNode.type));
      return "continue";
    }

    if (!hasOwnProperty(inputs, varName)) {
      if (varDefNode.defaultValue) {
        coercedValues[varName] = Object(_utilities_valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_9__["valueFromAST"])(varDefNode.defaultValue, varType);
      } else if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(varType)) {
        var _varTypeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(varType);

        onError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Variable \"$".concat(varName, "\" of required type \"").concat(_varTypeStr, "\" was not provided."), varDefNode));
      }

      return "continue";
    }

    var value = inputs[varName];

    if (value === null && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(varType)) {
      var _varTypeStr2 = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(varType);

      onError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Variable \"$".concat(varName, "\" of non-null type \"").concat(_varTypeStr2, "\" must not be null."), varDefNode));
      return "continue";
    }

    coercedValues[varName] = Object(_utilities_coerceInputValue_mjs__WEBPACK_IMPORTED_MODULE_10__["coerceInputValue"])(value, varType, function (path, invalidValue, error) {
      var prefix = "Variable \"$".concat(varName, "\" got invalid value ") + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(invalidValue);

      if (path.length > 0) {
        prefix += " at \"".concat(varName).concat(Object(_jsutils_printPathArray_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(path), "\"");
      }

      onError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"](prefix + '; ' + error.message, varDefNode, undefined, undefined, undefined, error.originalError));
    });
  };

  for (var _i2 = 0; _i2 < varDefNodes.length; _i2++) {
    var _ret = _loop(_i2);

    if (_ret === "continue") continue;
  }

  return coercedValues;
}
/**
 * Prepares an object map of argument values given a list of argument
 * definitions and list of argument AST nodes.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 *
 * @internal
 */


function getArgumentValues(def, node, variableValues) {
  var _node$arguments;

  var coercedValues = {};
  /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */

  var argumentNodes = (_node$arguments = node.arguments) !== null && _node$arguments !== void 0 ? _node$arguments : [];
  var argNodeMap = Object(_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(argumentNodes, function (arg) {
    return arg.name.value;
  });

  for (var _i4 = 0, _def$args2 = def.args; _i4 < _def$args2.length; _i4++) {
    var argDef = _def$args2[_i4];
    var name = argDef.name;
    var argType = argDef.type;
    var argumentNode = argNodeMap[name];

    if (!argumentNode) {
      if (argDef.defaultValue !== undefined) {
        coercedValues[name] = argDef.defaultValue;
      } else if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(argType)) {
        throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Argument \"".concat(name, "\" of required type \"").concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(argType), "\" ") + 'was not provided.', node);
      }

      continue;
    }

    var valueNode = argumentNode.value;
    var isNull = valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].NULL;

    if (valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].VARIABLE) {
      var variableName = valueNode.name.value;

      if (variableValues == null || !hasOwnProperty(variableValues, variableName)) {
        if (argDef.defaultValue !== undefined) {
          coercedValues[name] = argDef.defaultValue;
        } else if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(argType)) {
          throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Argument \"".concat(name, "\" of required type \"").concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(argType), "\" ") + "was provided the variable \"$".concat(variableName, "\" which was not provided a runtime value."), valueNode);
        }

        continue;
      }

      isNull = variableValues[variableName] == null;
    }

    if (isNull && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(argType)) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Argument \"".concat(name, "\" of non-null type \"").concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(argType), "\" ") + 'must not be null.', valueNode);
    }

    var coercedValue = Object(_utilities_valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_9__["valueFromAST"])(valueNode, argType, variableValues);

    if (coercedValue === undefined) {
      // Note: ValuesOfCorrectTypeRule validation should catch this before
      // execution. This is a runtime check to ensure execution does not
      // continue with an invalid argument value.
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Argument \"".concat(name, "\" has invalid value ").concat(Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_6__["print"])(valueNode), "."), valueNode);
    }

    coercedValues[name] = coercedValue;
  }

  return coercedValues;
}
/**
 * Prepares an object map of argument values given a directive definition
 * and a AST node which may contain directives. Optionally also accepts a map
 * of variable values.
 *
 * If the directive does not exist on the node, returns undefined.
 *
 * Note: The returned value is a plain Object with a prototype, since it is
 * exposed to user code. Care should be taken to not pull values from the
 * Object prototype.
 */

function getDirectiveValues(directiveDef, node, variableValues) {
  var directiveNode = node.directives && Object(_polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(node.directives, function (directive) {
    return directive.name.value === directiveDef.name;
  });

  if (directiveNode) {
    return getArgumentValues(directiveDef, directiveNode, variableValues);
  }
}

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


/***/ }),

/***/ "./node_modules/graphql/graphql.mjs":
/*!******************************************!*\
  !*** ./node_modules/graphql/graphql.mjs ***!
  \******************************************/
/*! exports provided: graphql, graphqlSync */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphqlSync", function() { return graphqlSync; });
/* harmony import */ var _jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsutils/isPromise.mjs */ "./node_modules/graphql/jsutils/isPromise.mjs");
/* harmony import */ var _language_parser_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language/parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var _validation_validate_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation/validate.mjs */ "./node_modules/graphql/validation/validate.mjs");
/* harmony import */ var _type_validate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type/validate.mjs */ "./node_modules/graphql/type/validate.mjs");
/* harmony import */ var _execution_execute_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./execution/execute.mjs */ "./node_modules/graphql/execution/execute.mjs");





/**
 * This is the primary entry point function for fulfilling GraphQL operations
 * by parsing, validating, and executing a GraphQL document along side a
 * GraphQL schema.
 *
 * More sophisticated GraphQL servers, such as those which persist queries,
 * may wish to separate the validation and execution phases to a static time
 * tooling step, and a server runtime step.
 *
 * Accepts either an object with named arguments, or individual arguments:
 *
 * schema:
 *    The GraphQL type system to use when validating and executing a query.
 * source:
 *    A GraphQL language formatted string representing the requested operation.
 * rootValue:
 *    The value provided as the first argument to resolver functions on the top
 *    level type (e.g. the query object type).
 * contextValue:
 *    The context value is provided as an argument to resolver functions after
 *    field arguments. It is used to pass shared information useful at any point
 *    during executing this query, for example the currently logged in user and
 *    connections to databases or other services.
 * variableValues:
 *    A mapping of variable name to runtime value to use for all variables
 *    defined in the requestString.
 * operationName:
 *    The name of the operation to use if requestString contains multiple
 *    possible operations. Can be omitted if requestString contains only
 *    one operation.
 * fieldResolver:
 *    A resolver function to use when one is not provided by the schema.
 *    If not provided, the default field resolver is used (which looks for a
 *    value or method on the source value with the field's name).
 * typeResolver:
 *    A type resolver function to use when none is provided by the schema.
 *    If not provided, the default type resolver is used (which looks for a
 *    `__typename` field or alternatively calls the `isTypeOf` method).
 */

function graphql(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  var _arguments = arguments;

  /* eslint-enable no-redeclare */
  // Always return a Promise for a consistent API.
  return new Promise(function (resolve) {
    return resolve( // Extract arguments from object args if provided.
    _arguments.length === 1 ? graphqlImpl(argsOrSchema) : graphqlImpl({
      schema: argsOrSchema,
      source: source,
      rootValue: rootValue,
      contextValue: contextValue,
      variableValues: variableValues,
      operationName: operationName,
      fieldResolver: fieldResolver,
      typeResolver: typeResolver
    }));
  });
}
/**
 * The graphqlSync function also fulfills GraphQL operations by parsing,
 * validating, and executing a GraphQL document along side a GraphQL schema.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */

function graphqlSync(argsOrSchema, source, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  var result = arguments.length === 1 ? graphqlImpl(argsOrSchema) : graphqlImpl({
    schema: argsOrSchema,
    source: source,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  }); // Assert that the execution was synchronous.

  if (Object(_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(result)) {
    throw new Error('GraphQL execution failed to complete synchronously.');
  }

  return result;
}

function graphqlImpl(args) {
  var schema = args.schema,
      source = args.source,
      rootValue = args.rootValue,
      contextValue = args.contextValue,
      variableValues = args.variableValues,
      operationName = args.operationName,
      fieldResolver = args.fieldResolver,
      typeResolver = args.typeResolver; // Validate Schema

  var schemaValidationErrors = Object(_type_validate_mjs__WEBPACK_IMPORTED_MODULE_3__["validateSchema"])(schema);

  if (schemaValidationErrors.length > 0) {
    return {
      errors: schemaValidationErrors
    };
  } // Parse


  var document;

  try {
    document = Object(_language_parser_mjs__WEBPACK_IMPORTED_MODULE_1__["parse"])(source);
  } catch (syntaxError) {
    return {
      errors: [syntaxError]
    };
  } // Validate


  var validationErrors = Object(_validation_validate_mjs__WEBPACK_IMPORTED_MODULE_2__["validate"])(schema, document);

  if (validationErrors.length > 0) {
    return {
      errors: validationErrors
    };
  } // Execute


  return Object(_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_4__["execute"])({
    schema: schema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  });
}


/***/ }),

/***/ "./node_modules/graphql/index.mjs":
/*!****************************************!*\
  !*** ./node_modules/graphql/index.mjs ***!
  \****************************************/
/*! exports provided: version, versionInfo, graphql, graphqlSync, GraphQLSchema, GraphQLDirective, GraphQLScalarType, GraphQLObjectType, GraphQLInterfaceType, GraphQLUnionType, GraphQLEnumType, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, specifiedScalarTypes, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLBoolean, GraphQLID, specifiedDirectives, GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective, TypeKind, DEFAULT_DEPRECATION_REASON, introspectionTypes, __Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind, SchemaMetaFieldDef, TypeMetaFieldDef, TypeNameMetaFieldDef, isSchema, isDirective, isType, isScalarType, isObjectType, isInterfaceType, isUnionType, isEnumType, isInputObjectType, isListType, isNonNullType, isInputType, isOutputType, isLeafType, isCompositeType, isAbstractType, isWrappingType, isNullableType, isNamedType, isRequiredArgument, isRequiredInputField, isSpecifiedScalarType, isIntrospectionType, isSpecifiedDirective, assertSchema, assertDirective, assertType, assertScalarType, assertObjectType, assertInterfaceType, assertUnionType, assertEnumType, assertInputObjectType, assertListType, assertNonNullType, assertInputType, assertOutputType, assertLeafType, assertCompositeType, assertAbstractType, assertWrappingType, assertNullableType, assertNamedType, getNullableType, getNamedType, validateSchema, assertValidSchema, Source, getLocation, printLocation, printSourceLocation, Lexer, TokenKind, parse, parseValue, parseType, print, visit, visitInParallel, getVisitFn, BREAK, Kind, DirectiveLocation, isDefinitionNode, isExecutableDefinitionNode, isSelectionNode, isValueNode, isTypeNode, isTypeSystemDefinitionNode, isTypeDefinitionNode, isTypeSystemExtensionNode, isTypeExtensionNode, execute, defaultFieldResolver, defaultTypeResolver, responsePathAsArray, getDirectiveValues, subscribe, createSourceEventStream, validate, ValidationContext, specifiedRules, ExecutableDefinitionsRule, FieldsOnCorrectTypeRule, FragmentsOnCompositeTypesRule, KnownArgumentNamesRule, KnownDirectivesRule, KnownFragmentNamesRule, KnownTypeNamesRule, LoneAnonymousOperationRule, NoFragmentCyclesRule, NoUndefinedVariablesRule, NoUnusedFragmentsRule, NoUnusedVariablesRule, OverlappingFieldsCanBeMergedRule, PossibleFragmentSpreadsRule, ProvidedRequiredArgumentsRule, ScalarLeafsRule, SingleFieldSubscriptionsRule, UniqueArgumentNamesRule, UniqueDirectivesPerLocationRule, UniqueFragmentNamesRule, UniqueInputFieldNamesRule, UniqueOperationNamesRule, UniqueVariableNamesRule, ValuesOfCorrectTypeRule, VariablesAreInputTypesRule, VariablesInAllowedPositionRule, LoneSchemaDefinitionRule, UniqueOperationTypesRule, UniqueTypeNamesRule, UniqueEnumValueNamesRule, UniqueFieldDefinitionNamesRule, UniqueDirectiveNamesRule, PossibleTypeExtensionsRule, GraphQLError, syntaxError, locatedError, printError, formatError, getIntrospectionQuery, getOperationAST, getOperationRootType, introspectionFromSchema, buildClientSchema, buildASTSchema, buildSchema, getDescription, extendSchema, lexicographicSortSchema, printSchema, printType, printIntrospectionSchema, typeFromAST, valueFromAST, valueFromASTUntyped, astFromValue, TypeInfo, visitWithTypeInfo, coerceInputValue, concatAST, separateOperations, stripIgnoredCharacters, isEqualType, isTypeSubTypeOf, doTypesOverlap, assertValidName, isValidNameError, BreakingChangeType, DangerousChangeType, findBreakingChanges, findDangerousChanges, findDeprecatedUsages */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.mjs */ "./node_modules/graphql/version.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _version_mjs__WEBPACK_IMPORTED_MODULE_0__["version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "versionInfo", function() { return _version_mjs__WEBPACK_IMPORTED_MODULE_0__["versionInfo"]; });

/* harmony import */ var _graphql_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql.mjs */ "./node_modules/graphql/graphql.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return _graphql_mjs__WEBPACK_IMPORTED_MODULE_1__["graphql"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphqlSync", function() { return _graphql_mjs__WEBPACK_IMPORTED_MODULE_1__["graphqlSync"]; });

/* harmony import */ var _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type/index.mjs */ "./node_modules/graphql/type/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLSchema", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLDirective", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLScalarType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLObjectType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInterfaceType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLUnionType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLEnumType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInputObjectType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLList", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLNonNull", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLNonNull"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedScalarTypes", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["specifiedScalarTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInt", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLFloat", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLString", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLBoolean", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLID", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedDirectives", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["specifiedDirectives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLIncludeDirective", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLIncludeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLSkipDirective", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLSkipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLDeprecatedDirective", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLDeprecatedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeKind", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["TypeKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DEPRECATION_REASON", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_DEPRECATION_REASON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionTypes", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["introspectionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Schema", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["__Schema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Directive", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["__Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__DirectiveLocation", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["__DirectiveLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Type", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["__Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Field", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["__Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__InputValue", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["__InputValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__EnumValue", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["__EnumValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__TypeKind", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["__TypeKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemaMetaFieldDef", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["SchemaMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeMetaFieldDef", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["TypeMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeNameMetaFieldDef", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["TypeNameMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSchema", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isScalarType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInterfaceType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUnionType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnumType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputObjectType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isListType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isListType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNonNullType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isNonNullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOutputType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLeafType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isLeafType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCompositeType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAbstractType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isAbstractType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWrappingType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isWrappingType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullableType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNamedType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRequiredArgument", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isRequiredArgument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRequiredInputField", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isRequiredInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedScalarType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isSpecifiedScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIntrospectionType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isIntrospectionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedDirective", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["isSpecifiedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertSchema", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertDirective", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertScalarType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertObjectType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInterfaceType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertUnionType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertEnumType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInputObjectType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertListType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertListType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNonNullType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertNonNullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInputType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertOutputType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertLeafType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertLeafType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertCompositeType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertCompositeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertAbstractType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertAbstractType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertWrappingType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertWrappingType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNullableType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNamedType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNullableType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["getNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNamedType", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["getNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateSchema", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["validateSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertValidSchema", function() { return _type_index_mjs__WEBPACK_IMPORTED_MODULE_2__["assertValidSchema"]; });

/* harmony import */ var _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language/index.mjs */ "./node_modules/graphql/language/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["Source"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["getLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printLocation", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["printLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printSourceLocation", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["printSourceLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["Lexer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["TokenKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["parseValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["parseType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "print", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["print"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["visit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["visitInParallel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["getVisitFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["BREAK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["DirectiveLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefinitionNode", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["isDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExecutableDefinitionNode", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["isExecutableDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSelectionNode", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["isSelectionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValueNode", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["isValueNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeNode", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["isTypeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemDefinitionNode", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["isTypeSystemDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeDefinitionNode", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["isTypeDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemExtensionNode", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["isTypeSystemExtensionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeExtensionNode", function() { return _language_index_mjs__WEBPACK_IMPORTED_MODULE_3__["isTypeExtensionNode"]; });

/* harmony import */ var _execution_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./execution/index.mjs */ "./node_modules/graphql/execution/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _execution_index_mjs__WEBPACK_IMPORTED_MODULE_4__["execute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultFieldResolver", function() { return _execution_index_mjs__WEBPACK_IMPORTED_MODULE_4__["defaultFieldResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTypeResolver", function() { return _execution_index_mjs__WEBPACK_IMPORTED_MODULE_4__["defaultTypeResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responsePathAsArray", function() { return _execution_index_mjs__WEBPACK_IMPORTED_MODULE_4__["responsePathAsArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectiveValues", function() { return _execution_index_mjs__WEBPACK_IMPORTED_MODULE_4__["getDirectiveValues"]; });

/* harmony import */ var _subscription_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription/index.mjs */ "./node_modules/graphql/subscription/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return _subscription_index_mjs__WEBPACK_IMPORTED_MODULE_5__["subscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSourceEventStream", function() { return _subscription_index_mjs__WEBPACK_IMPORTED_MODULE_5__["createSourceEventStream"]; });

/* harmony import */ var _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation/index.mjs */ "./node_modules/graphql/validation/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["validate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationContext", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["ValidationContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedRules", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["specifiedRules"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutableDefinitionsRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["ExecutableDefinitionsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldsOnCorrectTypeRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["FieldsOnCorrectTypeRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FragmentsOnCompositeTypesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["FragmentsOnCompositeTypesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownArgumentNamesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["KnownArgumentNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownDirectivesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["KnownDirectivesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownFragmentNamesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["KnownFragmentNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownTypeNamesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["KnownTypeNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoneAnonymousOperationRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["LoneAnonymousOperationRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoFragmentCyclesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["NoFragmentCyclesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUndefinedVariablesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["NoUndefinedVariablesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUnusedFragmentsRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["NoUnusedFragmentsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUnusedVariablesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["NoUnusedVariablesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlappingFieldsCanBeMergedRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["OverlappingFieldsCanBeMergedRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PossibleFragmentSpreadsRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["PossibleFragmentSpreadsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProvidedRequiredArgumentsRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["ProvidedRequiredArgumentsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScalarLeafsRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["ScalarLeafsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleFieldSubscriptionsRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["SingleFieldSubscriptionsRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueArgumentNamesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["UniqueArgumentNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectivesPerLocationRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["UniqueDirectivesPerLocationRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueFragmentNamesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["UniqueFragmentNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueInputFieldNamesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["UniqueInputFieldNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationNamesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["UniqueOperationNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueVariableNamesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["UniqueVariableNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValuesOfCorrectTypeRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["ValuesOfCorrectTypeRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariablesAreInputTypesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["VariablesAreInputTypesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariablesInAllowedPositionRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["VariablesInAllowedPositionRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoneSchemaDefinitionRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["LoneSchemaDefinitionRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationTypesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["UniqueOperationTypesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueTypeNamesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["UniqueTypeNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueEnumValueNamesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["UniqueEnumValueNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueFieldDefinitionNamesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["UniqueFieldDefinitionNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectiveNamesRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["UniqueDirectiveNamesRule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PossibleTypeExtensionsRule", function() { return _validation_index_mjs__WEBPACK_IMPORTED_MODULE_6__["PossibleTypeExtensionsRule"]; });

/* harmony import */ var _error_index_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error/index.mjs */ "./node_modules/graphql/error/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return _error_index_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return _error_index_mjs__WEBPACK_IMPORTED_MODULE_7__["syntaxError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locatedError", function() { return _error_index_mjs__WEBPACK_IMPORTED_MODULE_7__["locatedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return _error_index_mjs__WEBPACK_IMPORTED_MODULE_7__["printError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return _error_index_mjs__WEBPACK_IMPORTED_MODULE_7__["formatError"]; });

/* harmony import */ var _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utilities/index.mjs */ "./node_modules/graphql/utilities/index.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIntrospectionQuery", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["getIntrospectionQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationAST", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["getOperationAST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationRootType", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["getOperationRootType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionFromSchema", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["introspectionFromSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClientSchema", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["buildClientSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildASTSchema", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["buildASTSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSchema", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["buildSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["getDescription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendSchema", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["extendSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexicographicSortSchema", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["lexicographicSortSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printSchema", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["printSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printType", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["printType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printIntrospectionSchema", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["printIntrospectionSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeFromAST", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["typeFromAST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromAST", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["valueFromAST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromASTUntyped", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["valueFromASTUntyped"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "astFromValue", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["astFromValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeInfo", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["TypeInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visitWithTypeInfo", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["visitWithTypeInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceInputValue", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["coerceInputValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatAST", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["concatAST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "separateOperations", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["separateOperations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripIgnoredCharacters", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["stripIgnoredCharacters"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqualType", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["isEqualType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSubTypeOf", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["isTypeSubTypeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doTypesOverlap", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["doTypesOverlap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertValidName", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["assertValidName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNameError", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["isValidNameError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakingChangeType", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["BreakingChangeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DangerousChangeType", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["DangerousChangeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findBreakingChanges", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["findBreakingChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDangerousChanges", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["findDangerousChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDeprecatedUsages", function() { return _utilities_index_mjs__WEBPACK_IMPORTED_MODULE_8__["findDeprecatedUsages"]; });

/**
 * GraphQL.js provides a reference implementation for the GraphQL specification
 * but is also a useful utility for operating on GraphQL files and building
 * sophisticated tools.
 *
 * This primary module exports a general purpose function for fulfilling all
 * steps of the GraphQL specification in a single operation, but also includes
 * utilities for every part of the GraphQL specification:
 *
 *   - Parsing the GraphQL language.
 *   - Building a GraphQL type schema.
 *   - Validating a GraphQL request against a type schema.
 *   - Executing a GraphQL request against a type schema.
 *
 * This also includes utility functions for operating on GraphQL types and
 * GraphQL documents to facilitate building tools.
 *
 * You may also import from each sub-directory directly. For example, the
 * following two import statements are equivalent:
 *
 *     import { parse } from 'graphql';
 *     import { parse } from 'graphql/language';
 */
// The GraphQL.js version info.
 // The primary entry point into fulfilling a GraphQL request.

 // Create and operate on GraphQL type definitions and schema.


// Parse and operate on GraphQL language source files.

// Execute GraphQL queries.


// Validate GraphQL documents.

// Create, format, and print GraphQL errors.

// Utilities for operating on GraphQL type schema and parsed sources.



/***/ }),

/***/ "./node_modules/graphql/jsutils/Path.mjs":
/*!***********************************************!*\
  !*** ./node_modules/graphql/jsutils/Path.mjs ***!
  \***********************************************/
/*! exports provided: addPath, pathToArray */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPath", function() { return addPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathToArray", function() { return pathToArray; });
/**
 * Given a Path and a key, return a new Path containing the new key.
 */
function addPath(prev, key) {
  return {
    prev: prev,
    key: key
  };
}
/**
 * Given a Path, return an Array of the path keys.
 */

function pathToArray(path) {
  var flattened = [];
  var curr = path;

  while (curr) {
    flattened.push(curr.key);
    curr = curr.prev;
  }

  return flattened.reverse();
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/didYouMean.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/jsutils/didYouMean.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return didYouMean; });
var MAX_SUGGESTIONS = 5;
/**
 * Given [ A, B, C ] return ' Did you mean A, B, or C?'.
 */

// eslint-disable-next-line no-redeclare
function didYouMean(firstArg, secondArg) {
  var _ref = typeof firstArg === 'string' ? [firstArg, secondArg] : [undefined, firstArg],
      subMessage = _ref[0],
      suggestionsArg = _ref[1];

  var message = ' Did you mean ';

  if (subMessage) {
    message += subMessage + ' ';
  }

  var suggestions = suggestionsArg.map(function (x) {
    return "\"".concat(x, "\"");
  });

  switch (suggestions.length) {
    case 0:
      return '';

    case 1:
      return message + suggestions[0] + '?';

    case 2:
      return message + suggestions[0] + ' or ' + suggestions[1] + '?';
  }

  var selected = suggestions.slice(0, MAX_SUGGESTIONS);
  var lastItem = selected.pop();
  return message + selected.join(', ') + ', or ' + lastItem + '?';
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/identityFunc.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/identityFunc.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identityFunc; });
/**
 * Returns the first argument it receives.
 */
function identityFunc(x) {
  return x;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/instanceOf.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/jsutils/instanceOf.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A replacement for instanceof which includes an error warning when multi-realm
 * constructors are detected.
 */
// See: https://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
// See: https://webpack.js.org/guides/production/
/* harmony default export */ __webpack_exports__["default"] = ( false ?
/* istanbul ignore next (See: https://github.com/graphql/graphql-js/issues/2317) */
// eslint-disable-next-line no-shadow
undefined : // eslint-disable-next-line no-shadow
function instanceOf(value, constructor) {
  if (value instanceof constructor) {
    return true;
  }

  if (value) {
    var valueClass = value.constructor;
    var className = constructor.name;

    if (className && valueClass && valueClass.name === className) {
      throw new Error("Cannot use ".concat(className, " \"").concat(value, "\" from another module or realm.\n\nEnsure that there is only one instance of \"graphql\" in the node_modules\ndirectory. If different versions of \"graphql\" are the dependencies of other\nrelied on modules, use \"resolutions\" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate \"graphql\" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results."));
    }
  }

  return false;
});


/***/ }),

/***/ "./node_modules/graphql/jsutils/invariant.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/invariant.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invariant; });
function invariant(condition, message) {
  var booleanCondition = Boolean(condition);
  /* istanbul ignore else (see transformation done in './resources/inlineInvariant.js') */

  if (!booleanCondition) {
    throw new Error(message != null ? message : 'Unexpected invariant triggered.');
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isCollection.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/graphql/jsutils/isCollection.mjs ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isCollection; });
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * Returns true if the provided object is an Object (i.e. not a string literal)
 * and is either Iterable or Array-like.
 *
 * This may be used in place of [Array.isArray()][isArray] to determine if an
 * object should be iterated-over. It always excludes string literals and
 * includes Arrays (regardless of if it is Iterable). It also includes other
 * Array-like objects such as NodeList, TypedArray, and Buffer.
 *
 * @example
 *
 * isCollection([ 1, 2, 3 ]) // true
 * isCollection('ABC') // false
 * isCollection({ length: 1, 0: 'Alpha' }) // true
 * isCollection({ key: 'value' }) // false
 * isCollection(new Map()) // true
 *
 * @param obj
 *   An Object value which might implement the Iterable or Array-like protocols.
 * @return {boolean} true if Iterable or Array-like Object.
 */

function isCollection(obj) {
  if (obj == null || _typeof(obj) !== 'object') {
    return false;
  } // Is Array like?


  var length = obj.length;

  if (typeof length === 'number' && length >= 0 && length % 1 === 0) {
    return true;
  } // Is Iterable?


  return typeof obj[_polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__["SYMBOL_ITERATOR"]] === 'function';
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/isPromise.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/isPromise.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPromise; });
/**
 * Returns true if the value acts like a Promise, i.e. has a "then" function,
 * otherwise returns false.
 */
// eslint-disable-next-line no-redeclare
function isPromise(value) {
  return typeof (value === null || value === void 0 ? void 0 : value.then) === 'function';
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/keyMap.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/jsutils/keyMap.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyMap; });
/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * for each value in the array.
 *
 * This provides a convenient lookup for the array items if the key function
 * produces unique results.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: { name: 'Jon', num: '555-1234' },
 *     //   Jenny: { name: 'Jenny', num: '867-5309' } }
 *     const entriesByName = keyMap(
 *       phoneBook,
 *       entry => entry.name
 *     )
 *
 *     // { name: 'Jenny', num: '857-6309' }
 *     const jennyEntry = entriesByName['Jenny']
 *
 */
function keyMap(list, keyFn) {
  return list.reduce(function (map, item) {
    map[keyFn(item)] = item;
    return map;
  }, Object.create(null));
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/keyValMap.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/jsutils/keyValMap.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keyValMap; });
/**
 * Creates a keyed JS object from an array, given a function to produce the keys
 * and a function to produce the values from each item in the array.
 *
 *     const phoneBook = [
 *       { name: 'Jon', num: '555-1234' },
 *       { name: 'Jenny', num: '867-5309' }
 *     ]
 *
 *     // { Jon: '555-1234', Jenny: '867-5309' }
 *     const phonesByName = keyValMap(
 *       phoneBook,
 *       entry => entry.name,
 *       entry => entry.num
 *     )
 *
 */
function keyValMap(list, keyFn, valFn) {
  return list.reduce(function (map, item) {
    map[keyFn(item)] = valFn(item);
    return map;
  }, Object.create(null));
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/mapValue.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/jsutils/mapValue.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapValue; });
/* harmony import */ var _polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries.mjs */ "./node_modules/graphql/polyfills/objectEntries.mjs");


/**
 * Creates an object map with the same keys as `map` and values generated by
 * running each value of `map` thru `fn`.
 */
function mapValue(map, fn) {
  var result = Object.create(null);

  for (var _i2 = 0, _objectEntries2 = Object(_polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(map); _i2 < _objectEntries2.length; _i2++) {
    var _ref2 = _objectEntries2[_i2];
    var _key = _ref2[0];
    var _value = _ref2[1];
    result[_key] = fn(_value, _key);
  }

  return result;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/memoize3.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/jsutils/memoize3.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return memoize3; });
/**
 * Memoizes the provided three-argument function.
 */
function memoize3(fn) {
  var cache0;

  function memoized(a1, a2, a3) {
    if (!cache0) {
      cache0 = new WeakMap();
    }

    var cache1 = cache0.get(a1);
    var cache2;

    if (cache1) {
      cache2 = cache1.get(a2);

      if (cache2) {
        var cachedValue = cache2.get(a3);

        if (cachedValue !== undefined) {
          return cachedValue;
        }
      }
    } else {
      cache1 = new WeakMap();
      cache0.set(a1, cache1);
    }

    if (!cache2) {
      cache2 = new WeakMap();
      cache1.set(a2, cache2);
    }

    var newValue = fn(a1, a2, a3);
    cache2.set(a3, newValue);
    return newValue;
  }

  return memoized;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/printPathArray.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/jsutils/printPathArray.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printPathArray; });
/**
 * Build a string describing the path.
 */
function printPathArray(path) {
  return path.map(function (key) {
    return typeof key === 'number' ? '[' + key.toString() + ']' : '.' + key;
  }).join('');
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/promiseForObject.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/graphql/jsutils/promiseForObject.mjs ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return promiseForObject; });
/**
 * This function transforms a JS object `ObjMap<Promise<T>>` into
 * a `Promise<ObjMap<T>>`
 *
 * This is akin to bluebird's `Promise.props`, but implemented only using
 * `Promise.all` so it will work with any implementation of ES6 promises.
 */
function promiseForObject(object) {
  var keys = Object.keys(object);
  var valuesAndPromises = keys.map(function (name) {
    return object[name];
  });
  return Promise.all(valuesAndPromises).then(function (values) {
    return values.reduce(function (resolvedObject, value, i) {
      resolvedObject[keys[i]] = value;
      return resolvedObject;
    }, Object.create(null));
  });
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/promiseReduce.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/jsutils/promiseReduce.mjs ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return promiseReduce; });
/* harmony import */ var _isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPromise.mjs */ "./node_modules/graphql/jsutils/isPromise.mjs");


/**
 * Similar to Array.prototype.reduce(), however the reducing callback may return
 * a Promise, in which case reduction will continue after each promise resolves.
 *
 * If the callback does not return a Promise, then this function will also not
 * return a Promise.
 */
function promiseReduce(values, callback, initialValue) {
  return values.reduce(function (previous, value) {
    return Object(_isPromise_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(previous) ? previous.then(function (resolved) {
      return callback(resolved, value);
    }) : callback(previous, value);
  }, initialValue);
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/suggestionList.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/jsutils/suggestionList.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return suggestionList; });
/**
 * Given an invalid input string and a list of valid options, returns a filtered
 * list of valid options sorted based on their similarity with the input.
 */
function suggestionList(input, options) {
  var optionsByDistance = Object.create(null);
  var lexicalDistance = new LexicalDistance(input);
  var threshold = Math.floor(input.length * 0.4) + 1;

  for (var _i2 = 0; _i2 < options.length; _i2++) {
    var option = options[_i2];
    var distance = lexicalDistance.measure(option, threshold);

    if (distance !== undefined) {
      optionsByDistance[option] = distance;
    }
  }

  return Object.keys(optionsByDistance).sort(function (a, b) {
    var distanceDiff = optionsByDistance[a] - optionsByDistance[b];
    return distanceDiff !== 0 ? distanceDiff : a.localeCompare(b);
  });
}
/**
 * Computes the lexical distance between strings A and B.
 *
 * The "distance" between two strings is given by counting the minimum number
 * of edits needed to transform string A into string B. An edit can be an
 * insertion, deletion, or substitution of a single character, or a swap of two
 * adjacent characters.
 *
 * Includes a custom alteration from Damerau-Levenshtein to treat case changes
 * as a single edit which helps identify mis-cased values with an edit distance
 * of 1.
 *
 * This distance can be useful for detecting typos in input or sorting
 */

var LexicalDistance = /*#__PURE__*/function () {
  function LexicalDistance(input) {
    this._input = input;
    this._inputLowerCase = input.toLowerCase();
    this._inputArray = stringToArray(this._inputLowerCase);
    this._rows = [new Array(input.length + 1).fill(0), new Array(input.length + 1).fill(0), new Array(input.length + 1).fill(0)];
  }

  var _proto = LexicalDistance.prototype;

  _proto.measure = function measure(option, threshold) {
    if (this._input === option) {
      return 0;
    }

    var optionLowerCase = option.toLowerCase(); // Any case change counts as a single edit

    if (this._inputLowerCase === optionLowerCase) {
      return 1;
    }

    var a = stringToArray(optionLowerCase);
    var b = this._inputArray;

    if (a.length < b.length) {
      var tmp = a;
      a = b;
      b = tmp;
    }

    var aLength = a.length;
    var bLength = b.length;

    if (aLength - bLength > threshold) {
      return undefined;
    }

    var rows = this._rows;

    for (var j = 0; j <= bLength; j++) {
      rows[0][j] = j;
    }

    for (var i = 1; i <= aLength; i++) {
      var upRow = rows[(i - 1) % 3];
      var currentRow = rows[i % 3];
      var smallestCell = currentRow[0] = i;

      for (var _j = 1; _j <= bLength; _j++) {
        var cost = a[i - 1] === b[_j - 1] ? 0 : 1;
        var currentCell = Math.min(upRow[_j] + 1, // delete
        currentRow[_j - 1] + 1, // insert
        upRow[_j - 1] + cost // substitute
        );

        if (i > 1 && _j > 1 && a[i - 1] === b[_j - 2] && a[i - 2] === b[_j - 1]) {
          // transposition
          var doubleDiagonalCell = rows[(i - 2) % 3][_j - 2];
          currentCell = Math.min(currentCell, doubleDiagonalCell + 1);
        }

        if (currentCell < smallestCell) {
          smallestCell = currentCell;
        }

        currentRow[_j] = currentCell;
      } // Early exit, since distance can't go smaller than smallest element of the previous row.


      if (smallestCell > threshold) {
        return undefined;
      }
    }

    var distance = rows[aLength % 3][bLength];
    return distance <= threshold ? distance : undefined;
  };

  return LexicalDistance;
}();

function stringToArray(str) {
  var strLength = str.length;
  var array = new Array(strLength);

  for (var i = 0; i < strLength; ++i) {
    array[i] = str.charCodeAt(i);
  }

  return array;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/toObjMap.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/jsutils/toObjMap.mjs ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toObjMap; });
/* harmony import */ var _polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries.mjs */ "./node_modules/graphql/polyfills/objectEntries.mjs");

function toObjMap(obj) {
  /* eslint-enable no-redeclare */
  if (Object.getPrototypeOf(obj) === null) {
    return obj;
  }

  var map = Object.create(null);

  for (var _i2 = 0, _objectEntries2 = Object(_polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(obj); _i2 < _objectEntries2.length; _i2++) {
    var _ref2 = _objectEntries2[_i2];
    var key = _ref2[0];
    var value = _ref2[1];
    map[key] = value;
  }

  return map;
}


/***/ }),

/***/ "./node_modules/graphql/language/index.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/language/index.mjs ***!
  \*************************************************/
/*! exports provided: Source, getLocation, printLocation, printSourceLocation, Kind, TokenKind, Lexer, parse, parseValue, parseType, print, visit, visitInParallel, getVisitFn, BREAK, isDefinitionNode, isExecutableDefinitionNode, isSelectionNode, isValueNode, isTypeNode, isTypeSystemDefinitionNode, isTypeDefinitionNode, isTypeSystemExtensionNode, isTypeExtensionNode, DirectiveLocation */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _source_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./source.mjs */ "./node_modules/graphql/language/source.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Source", function() { return _source_mjs__WEBPACK_IMPORTED_MODULE_0__["Source"]; });

/* harmony import */ var _location_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.mjs */ "./node_modules/graphql/language/location.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocation", function() { return _location_mjs__WEBPACK_IMPORTED_MODULE_1__["getLocation"]; });

/* harmony import */ var _printLocation_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./printLocation.mjs */ "./node_modules/graphql/language/printLocation.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printLocation", function() { return _printLocation_mjs__WEBPACK_IMPORTED_MODULE_2__["printLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printSourceLocation", function() { return _printLocation_mjs__WEBPACK_IMPORTED_MODULE_2__["printSourceLocation"]; });

/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Kind", function() { return _kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"]; });

/* harmony import */ var _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenKind", function() { return _tokenKind_mjs__WEBPACK_IMPORTED_MODULE_4__["TokenKind"]; });

/* harmony import */ var _lexer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lexer.mjs */ "./node_modules/graphql/language/lexer.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Lexer", function() { return _lexer_mjs__WEBPACK_IMPORTED_MODULE_5__["Lexer"]; });

/* harmony import */ var _parser_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _parser_mjs__WEBPACK_IMPORTED_MODULE_6__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _parser_mjs__WEBPACK_IMPORTED_MODULE_6__["parseValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseType", function() { return _parser_mjs__WEBPACK_IMPORTED_MODULE_6__["parseType"]; });

/* harmony import */ var _printer_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "print", function() { return _printer_mjs__WEBPACK_IMPORTED_MODULE_7__["print"]; });

/* harmony import */ var _visitor_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visit", function() { return _visitor_mjs__WEBPACK_IMPORTED_MODULE_8__["visit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visitInParallel", function() { return _visitor_mjs__WEBPACK_IMPORTED_MODULE_8__["visitInParallel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVisitFn", function() { return _visitor_mjs__WEBPACK_IMPORTED_MODULE_8__["getVisitFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAK", function() { return _visitor_mjs__WEBPACK_IMPORTED_MODULE_8__["BREAK"]; });

/* harmony import */ var _predicates_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./predicates.mjs */ "./node_modules/graphql/language/predicates.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefinitionNode", function() { return _predicates_mjs__WEBPACK_IMPORTED_MODULE_9__["isDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isExecutableDefinitionNode", function() { return _predicates_mjs__WEBPACK_IMPORTED_MODULE_9__["isExecutableDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSelectionNode", function() { return _predicates_mjs__WEBPACK_IMPORTED_MODULE_9__["isSelectionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValueNode", function() { return _predicates_mjs__WEBPACK_IMPORTED_MODULE_9__["isValueNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeNode", function() { return _predicates_mjs__WEBPACK_IMPORTED_MODULE_9__["isTypeNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemDefinitionNode", function() { return _predicates_mjs__WEBPACK_IMPORTED_MODULE_9__["isTypeSystemDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeDefinitionNode", function() { return _predicates_mjs__WEBPACK_IMPORTED_MODULE_9__["isTypeDefinitionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemExtensionNode", function() { return _predicates_mjs__WEBPACK_IMPORTED_MODULE_9__["isTypeSystemExtensionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeExtensionNode", function() { return _predicates_mjs__WEBPACK_IMPORTED_MODULE_9__["isTypeExtensionNode"]; });

/* harmony import */ var _directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DirectiveLocation", function() { return _directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_10__["DirectiveLocation"]; });














/***/ }),

/***/ "./node_modules/graphql/language/predicates.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/language/predicates.mjs ***!
  \******************************************************/
/*! exports provided: isDefinitionNode, isExecutableDefinitionNode, isSelectionNode, isValueNode, isTypeNode, isTypeSystemDefinitionNode, isTypeDefinitionNode, isTypeSystemExtensionNode, isTypeExtensionNode */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefinitionNode", function() { return isDefinitionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isExecutableDefinitionNode", function() { return isExecutableDefinitionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelectionNode", function() { return isSelectionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValueNode", function() { return isValueNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeNode", function() { return isTypeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemDefinitionNode", function() { return isTypeSystemDefinitionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeDefinitionNode", function() { return isTypeDefinitionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeSystemExtensionNode", function() { return isTypeSystemExtensionNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeExtensionNode", function() { return isTypeExtensionNode; });
/* harmony import */ var _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");

function isDefinitionNode(node) {
  return isExecutableDefinitionNode(node) || isTypeSystemDefinitionNode(node) || isTypeSystemExtensionNode(node);
}
function isExecutableDefinitionNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].OPERATION_DEFINITION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].FRAGMENT_DEFINITION;
}
function isSelectionNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].FIELD || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].FRAGMENT_SPREAD || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].INLINE_FRAGMENT;
}
function isValueNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].VARIABLE || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].INT || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].FLOAT || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].STRING || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].BOOLEAN || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].NULL || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].ENUM || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].LIST || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].OBJECT;
}
function isTypeNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].NAMED_TYPE || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].LIST_TYPE || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].NON_NULL_TYPE;
}
function isTypeSystemDefinitionNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].SCHEMA_DEFINITION || isTypeDefinitionNode(node) || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].DIRECTIVE_DEFINITION;
}
function isTypeDefinitionNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].SCALAR_TYPE_DEFINITION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].OBJECT_TYPE_DEFINITION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].INTERFACE_TYPE_DEFINITION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].UNION_TYPE_DEFINITION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].ENUM_TYPE_DEFINITION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].INPUT_OBJECT_TYPE_DEFINITION;
}
function isTypeSystemExtensionNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].SCHEMA_EXTENSION || isTypeExtensionNode(node);
}
function isTypeExtensionNode(node) {
  return node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].SCALAR_TYPE_EXTENSION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].OBJECT_TYPE_EXTENSION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].INTERFACE_TYPE_EXTENSION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].UNION_TYPE_EXTENSION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].ENUM_TYPE_EXTENSION || node.kind === _kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].INPUT_OBJECT_TYPE_EXTENSION;
}


/***/ }),

/***/ "./node_modules/graphql/polyfills/arrayFrom.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/polyfills/arrayFrom.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _symbols_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");


/* eslint-disable no-redeclare */
// $FlowFixMe
var arrayFrom = Array.from || function (obj, mapFn, thisArg) {
  if (obj == null) {
    throw new TypeError('Array.from requires an array-like object - not null or undefined');
  } // Is Iterable?


  var iteratorMethod = obj[_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__["SYMBOL_ITERATOR"]];

  if (typeof iteratorMethod === 'function') {
    var iterator = iteratorMethod.call(obj);
    var result = [];
    var step;

    for (var i = 0; !(step = iterator.next()).done; ++i) {
      result.push(mapFn.call(thisArg, step.value, i)); // Infinite Iterators could cause forEach to run forever.
      // After a very large number of iterations, produce an error.

      /* istanbul ignore if */

      if (i > 9999999) {
        throw new TypeError('Near-infinite iteration.');
      }
    }

    return result;
  } // Is Array like?


  var length = obj.length;

  if (typeof length === 'number' && length >= 0 && length % 1 === 0) {
    var _result = [];

    for (var _i = 0; _i < length; ++_i) {
      if (Object.prototype.hasOwnProperty.call(obj, _i)) {
        _result.push(mapFn.call(thisArg, obj[_i], _i));
      }
    }

    return _result;
  }

  return [];
};

/* harmony default export */ __webpack_exports__["default"] = (arrayFrom);


/***/ }),

/***/ "./node_modules/graphql/polyfills/find.mjs":
/*!*************************************************!*\
  !*** ./node_modules/graphql/polyfills/find.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe
var find = Array.prototype.find ? function (list, predicate) {
  return Array.prototype.find.call(list, predicate);
} : function (list, predicate) {
  for (var _i2 = 0; _i2 < list.length; _i2++) {
    var value = list[_i2];

    if (predicate(value)) {
      return value;
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (find);


/***/ }),

/***/ "./node_modules/graphql/polyfills/flatMap.mjs":
/*!****************************************************!*\
  !*** ./node_modules/graphql/polyfills/flatMap.mjs ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var flatMapMethod = Array.prototype.flatMap;
/* eslint-disable no-redeclare */
// $FlowFixMe

var flatMap = flatMapMethod ? function (list, fn) {
  return flatMapMethod.call(list, fn);
} : function (list, fn) {
  var result = [];

  for (var _i2 = 0; _i2 < list.length; _i2++) {
    var _item = list[_i2];
    var value = fn(_item);

    if (Array.isArray(value)) {
      result = result.concat(value);
    } else {
      result.push(value);
    }
  }

  return result;
};
/* harmony default export */ __webpack_exports__["default"] = (flatMap);


/***/ }),

/***/ "./node_modules/graphql/polyfills/isFinite.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/polyfills/isFinite.mjs ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/4441
var isFinitePolyfill = Number.isFinite || function (value) {
  return typeof value === 'number' && isFinite(value);
};

/* harmony default export */ __webpack_exports__["default"] = (isFinitePolyfill);


/***/ }),

/***/ "./node_modules/graphql/polyfills/isInteger.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/polyfills/isInteger.mjs ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/4441
var isInteger = Number.isInteger || function (value) {
  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

/* harmony default export */ __webpack_exports__["default"] = (isInteger);


/***/ }),

/***/ "./node_modules/graphql/polyfills/objectEntries.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/graphql/polyfills/objectEntries.mjs ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/5838
var objectEntries = Object.entries || function (obj) {
  return Object.keys(obj).map(function (key) {
    return [key, obj[key]];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (objectEntries);


/***/ }),

/***/ "./node_modules/graphql/polyfills/objectValues.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/polyfills/objectValues.mjs ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-redeclare */
// $FlowFixMe workaround for: https://github.com/facebook/flow/issues/2221
var objectValues = Object.values || function (obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (objectValues);


/***/ }),

/***/ "./node_modules/graphql/subscription/index.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/subscription/index.mjs ***!
  \*****************************************************/
/*! exports provided: subscribe, createSourceEventStream */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _subscribe_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscribe.mjs */ "./node_modules/graphql/subscription/subscribe.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return _subscribe_mjs__WEBPACK_IMPORTED_MODULE_0__["subscribe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSourceEventStream", function() { return _subscribe_mjs__WEBPACK_IMPORTED_MODULE_0__["createSourceEventStream"]; });




/***/ }),

/***/ "./node_modules/graphql/subscription/mapAsyncIterator.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/graphql/subscription/mapAsyncIterator.mjs ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mapAsyncIterator; });
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */
function mapAsyncIterator(iterable, callback, rejectCallback) {
  // $FlowFixMe
  var iteratorMethod = iterable[_polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__["SYMBOL_ASYNC_ITERATOR"]];
  var iterator = iteratorMethod.call(iterable);
  var $return;
  var abruptClose;

  if (typeof iterator.return === 'function') {
    $return = iterator.return;

    abruptClose = function abruptClose(error) {
      var rethrow = function rethrow() {
        return Promise.reject(error);
      };

      return $return.call(iterator).then(rethrow, rethrow);
    };
  }

  function mapResult(result) {
    return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
  }

  var mapReject;

  if (rejectCallback) {
    // Capture rejectCallback to ensure it cannot be null.
    var reject = rejectCallback;

    mapReject = function mapReject(error) {
      return asyncMapValue(error, reject).then(iteratorResult, abruptClose);
    };
  }
  /* TODO: Flow doesn't support symbols as keys:
     https://github.com/facebook/flow/issues/3258 */


  return _defineProperty({
    next: function next() {
      return iterator.next().then(mapResult, mapReject);
    },
    return: function _return() {
      return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({
        value: undefined,
        done: true
      });
    },
    throw: function _throw(error) {
      if (typeof iterator.throw === 'function') {
        return iterator.throw(error).then(mapResult, mapReject);
      }

      return Promise.reject(error).catch(abruptClose);
    }
  }, _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__["SYMBOL_ASYNC_ITERATOR"], function () {
    return this;
  });
}

function asyncMapValue(value, callback) {
  return new Promise(function (resolve) {
    return resolve(callback(value));
  });
}

function iteratorResult(value) {
  return {
    value: value,
    done: false
  };
}


/***/ }),

/***/ "./node_modules/graphql/subscription/subscribe.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/subscription/subscribe.mjs ***!
  \*********************************************************/
/*! exports provided: subscribe, createSourceEventStream */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSourceEventStream", function() { return createSourceEventStream; });
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/Path.mjs */ "./node_modules/graphql/jsutils/Path.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/locatedError.mjs */ "./node_modules/graphql/error/locatedError.mjs");
/* harmony import */ var _execution_execute_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../execution/execute.mjs */ "./node_modules/graphql/execution/execute.mjs");
/* harmony import */ var _utilities_getOperationRootType_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/getOperationRootType.mjs */ "./node_modules/graphql/utilities/getOperationRootType.mjs");
/* harmony import */ var _mapAsyncIterator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mapAsyncIterator.mjs */ "./node_modules/graphql/subscription/mapAsyncIterator.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }









function subscribe(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, subscribeFieldResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? subscribeImpl(argsOrSchema) : subscribeImpl({
    schema: argsOrSchema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    subscribeFieldResolver: subscribeFieldResolver
  });
}
/**
 * This function checks if the error is a GraphQLError. If it is, report it as
 * an ExecutionResult, containing only errors and no data. Otherwise treat the
 * error as a system-class error and re-throw it.
 */

function reportGraphQLError(error) {
  if (error instanceof _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__["GraphQLError"]) {
    return {
      errors: [error]
    };
  }

  throw error;
}

function subscribeImpl(args) {
  var schema = args.schema,
      document = args.document,
      rootValue = args.rootValue,
      contextValue = args.contextValue,
      variableValues = args.variableValues,
      operationName = args.operationName,
      fieldResolver = args.fieldResolver,
      subscribeFieldResolver = args.subscribeFieldResolver;
  var sourcePromise = createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, subscribeFieldResolver); // For each payload yielded from a subscription, map it over the normal
  // GraphQL `execute` function, with `payload` as the rootValue.
  // This implements the "MapSourceToResponseEvent" algorithm described in
  // the GraphQL specification. The `execute` function provides the
  // "ExecuteSubscriptionEvent" algorithm, as it is nearly identical to the
  // "ExecuteQuery" algorithm, for which `execute` is also used.

  var mapSourceToResponse = function mapSourceToResponse(payload) {
    return Object(_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_5__["execute"])({
      schema: schema,
      document: document,
      rootValue: payload,
      contextValue: contextValue,
      variableValues: variableValues,
      operationName: operationName,
      fieldResolver: fieldResolver
    });
  }; // Resolve the Source Stream, then map every source value to a
  // ExecutionResult value as described above.


  return sourcePromise.then(function (resultOrStream) {
    return (// Note: Flow can't refine isAsyncIterable, so explicit casts are used.
      isAsyncIterable(resultOrStream) ? Object(_mapAsyncIterator_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])(resultOrStream, mapSourceToResponse, reportGraphQLError) : resultOrStream
    );
  });
}
/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns a Promise which resolves to either an AsyncIterable (if successful)
 * or an ExecutionResult (error). The promise will be rejected if the schema or
 * other arguments to this function are invalid, or if the resolved event stream
 * is not an async iterable.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to the AsyncIterable for the
 * event stream returned by the resolver.
 *
 * A Source Event Stream represents a sequence of events, each of which triggers
 * a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */


function createSourceEventStream(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver) {
  // If arguments are missing or incorrectly typed, this is an internal
  // developer mistake which should throw an early error.
  Object(_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_5__["assertValidExecutionArguments"])(schema, document, variableValues);

  try {
    var _fieldDef$subscribe;

    // If a valid context cannot be created due to incorrect arguments,
    // this will throw an error.
    var exeContext = Object(_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_5__["buildExecutionContext"])(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver); // Return early errors if execution context failed.

    if (Array.isArray(exeContext)) {
      return Promise.resolve({
        errors: exeContext
      });
    }

    var type = Object(_utilities_getOperationRootType_mjs__WEBPACK_IMPORTED_MODULE_6__["getOperationRootType"])(schema, exeContext.operation);
    var fields = Object(_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_5__["collectFields"])(exeContext, type, exeContext.operation.selectionSet, Object.create(null), Object.create(null));
    var responseNames = Object.keys(fields);
    var responseName = responseNames[0];
    var fieldNodes = fields[responseName];
    var fieldNode = fieldNodes[0];
    var fieldName = fieldNode.name.value;
    var fieldDef = Object(_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_5__["getFieldDef"])(schema, type, fieldName);

    if (!fieldDef) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__["GraphQLError"]("The subscription field \"".concat(fieldName, "\" is not defined."), fieldNodes);
    } // Call the `subscribe()` resolver or the default resolver to produce an
    // AsyncIterable yielding raw payloads.


    var resolveFn = (_fieldDef$subscribe = fieldDef.subscribe) !== null && _fieldDef$subscribe !== void 0 ? _fieldDef$subscribe : exeContext.fieldResolver;
    var path = Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_2__["addPath"])(undefined, responseName);
    var info = Object(_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_5__["buildResolveInfo"])(exeContext, fieldDef, fieldNodes, type, path); // resolveFieldValueOrError implements the "ResolveFieldEventStream"
    // algorithm from GraphQL specification. It differs from
    // "ResolveFieldValue" due to providing a different `resolveFn`.

    var result = Object(_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_5__["resolveFieldValueOrError"])(exeContext, fieldDef, fieldNodes, resolveFn, rootValue, info); // Coerce to Promise for easier error handling and consistent return type.

    return Promise.resolve(result).then(function (eventStream) {
      // If eventStream is an Error, rethrow a located error.
      if (eventStream instanceof Error) {
        return {
          errors: [Object(_error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_4__["locatedError"])(eventStream, fieldNodes, Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_2__["pathToArray"])(path))]
        };
      } // Assert field returned an event stream, otherwise yield an error.


      if (isAsyncIterable(eventStream)) {
        // Note: isAsyncIterable above ensures this will be correct.
        return eventStream;
      }

      throw new Error('Subscription field must return Async Iterable. ' + "Received: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(eventStream), "."));
    });
  } catch (error) {
    // As with reportGraphQLError above, if the error is a GraphQLError, report
    // it as an ExecutionResult; otherwise treat it as a system-class error and
    // re-throw it.
    return error instanceof _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__["GraphQLError"] ? Promise.resolve({
      errors: [error]
    }) : Promise.reject(error);
  }
}
/**
 * Returns true if the provided object implements the AsyncIterator protocol via
 * either implementing a `Symbol.asyncIterator` or `"@@asyncIterator"` method.
 */

function isAsyncIterable(maybeAsyncIterable) {
  if (maybeAsyncIterable == null || _typeof(maybeAsyncIterable) !== 'object') {
    return false;
  }

  return typeof maybeAsyncIterable[_polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_0__["SYMBOL_ASYNC_ITERATOR"]] === 'function';
}


/***/ }),

/***/ "./node_modules/graphql/type/definition.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/type/definition.mjs ***!
  \**************************************************/
/*! exports provided: isType, assertType, isScalarType, assertScalarType, isObjectType, assertObjectType, isInterfaceType, assertInterfaceType, isUnionType, assertUnionType, isEnumType, assertEnumType, isInputObjectType, assertInputObjectType, isListType, assertListType, isNonNullType, assertNonNullType, isInputType, assertInputType, isOutputType, assertOutputType, isLeafType, assertLeafType, isCompositeType, assertCompositeType, isAbstractType, assertAbstractType, GraphQLList, GraphQLNonNull, isWrappingType, assertWrappingType, isNullableType, assertNullableType, getNullableType, isNamedType, assertNamedType, getNamedType, GraphQLScalarType, GraphQLObjectType, argsToArgsConfig, isRequiredArgument, GraphQLInterfaceType, GraphQLUnionType, GraphQLEnumType, GraphQLInputObjectType, isRequiredInputField */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertType", function() { return assertType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScalarType", function() { return isScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertScalarType", function() { return assertScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectType", function() { return isObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertObjectType", function() { return assertObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInterfaceType", function() { return isInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertInterfaceType", function() { return assertInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnionType", function() { return isUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertUnionType", function() { return assertUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnumType", function() { return isEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertEnumType", function() { return assertEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInputObjectType", function() { return isInputObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertInputObjectType", function() { return assertInputObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isListType", function() { return isListType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertListType", function() { return assertListType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonNullType", function() { return isNonNullType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNonNullType", function() { return assertNonNullType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInputType", function() { return isInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertInputType", function() { return assertInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOutputType", function() { return isOutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertOutputType", function() { return assertOutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeafType", function() { return isLeafType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertLeafType", function() { return assertLeafType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCompositeType", function() { return isCompositeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertCompositeType", function() { return assertCompositeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAbstractType", function() { return isAbstractType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertAbstractType", function() { return assertAbstractType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLList", function() { return GraphQLList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLNonNull", function() { return GraphQLNonNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWrappingType", function() { return isWrappingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertWrappingType", function() { return assertWrappingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullableType", function() { return isNullableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNullableType", function() { return assertNullableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNullableType", function() { return getNullableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNamedType", function() { return isNamedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNamedType", function() { return assertNamedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNamedType", function() { return getNamedType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLScalarType", function() { return GraphQLScalarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLObjectType", function() { return GraphQLObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argsToArgsConfig", function() { return argsToArgsConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequiredArgument", function() { return isRequiredArgument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInterfaceType", function() { return GraphQLInterfaceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLUnionType", function() { return GraphQLUnionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLEnumType", function() { return GraphQLEnumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInputObjectType", function() { return GraphQLInputObjectType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRequiredInputField", function() { return isRequiredInputField; });
/* harmony import */ var _polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries.mjs */ "./node_modules/graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/mapValue.mjs */ "./node_modules/graphql/jsutils/mapValue.mjs");
/* harmony import */ var _jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/toObjMap.mjs */ "./node_modules/graphql/jsutils/toObjMap.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/keyValMap.mjs */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/instanceOf.mjs */ "./node_modules/graphql/jsutils/instanceOf.mjs");
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_identityFunc_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../jsutils/identityFunc.mjs */ "./node_modules/graphql/jsutils/identityFunc.mjs");
/* harmony import */ var _jsutils_defineToJSON_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../jsutils/defineToJSON.mjs */ "./node_modules/graphql/jsutils/defineToJSON.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _utilities_valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../utilities/valueFromASTUntyped.mjs */ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// FIXME

/* eslint-disable import/no-cycle */


















function isType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type) || isListType(type) || isNonNullType(type);
}
function assertType(type) {
  if (!isType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL type."));
  }

  return type;
}
/**
 * There are predicates for each kind of GraphQL type.
 */

// eslint-disable-next-line no-redeclare
function isScalarType(type) {
  return Object(_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_8__["default"])(type, GraphQLScalarType);
}
function assertScalarType(type) {
  if (!isScalarType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL Scalar type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isObjectType(type) {
  return Object(_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_8__["default"])(type, GraphQLObjectType);
}
function assertObjectType(type) {
  if (!isObjectType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL Object type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isInterfaceType(type) {
  return Object(_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_8__["default"])(type, GraphQLInterfaceType);
}
function assertInterfaceType(type) {
  if (!isInterfaceType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL Interface type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isUnionType(type) {
  return Object(_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_8__["default"])(type, GraphQLUnionType);
}
function assertUnionType(type) {
  if (!isUnionType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL Union type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isEnumType(type) {
  return Object(_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_8__["default"])(type, GraphQLEnumType);
}
function assertEnumType(type) {
  if (!isEnumType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL Enum type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isInputObjectType(type) {
  return Object(_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_8__["default"])(type, GraphQLInputObjectType);
}
function assertInputObjectType(type) {
  if (!isInputObjectType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL Input Object type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isListType(type) {
  return Object(_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_8__["default"])(type, GraphQLList);
}
function assertListType(type) {
  if (!isListType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL List type."));
  }

  return type;
}
// eslint-disable-next-line no-redeclare
function isNonNullType(type) {
  return Object(_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_8__["default"])(type, GraphQLNonNull);
}
function assertNonNullType(type) {
  if (!isNonNullType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL Non-Null type."));
  }

  return type;
}
/**
 * These types may be used as input types for arguments and directives.
 */

function isInputType(type) {
  return isScalarType(type) || isEnumType(type) || isInputObjectType(type) || isWrappingType(type) && isInputType(type.ofType);
}
function assertInputType(type) {
  if (!isInputType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL input type."));
  }

  return type;
}
/**
 * These types may be used as output types as the result of fields.
 */

function isOutputType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isWrappingType(type) && isOutputType(type.ofType);
}
function assertOutputType(type) {
  if (!isOutputType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL output type."));
  }

  return type;
}
/**
 * These types may describe types which may be leaf values.
 */

function isLeafType(type) {
  return isScalarType(type) || isEnumType(type);
}
function assertLeafType(type) {
  if (!isLeafType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL leaf type."));
  }

  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isCompositeType(type) {
  return isObjectType(type) || isInterfaceType(type) || isUnionType(type);
}
function assertCompositeType(type) {
  if (!isCompositeType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL composite type."));
  }

  return type;
}
/**
 * These types may describe the parent context of a selection set.
 */

function isAbstractType(type) {
  return isInterfaceType(type) || isUnionType(type);
}
function assertAbstractType(type) {
  if (!isAbstractType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL abstract type."));
  }

  return type;
}
/**
 * List Type Wrapper
 *
 * A list is a wrapping type which points to another type.
 * Lists are often created within the context of defining the fields of
 * an object type.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         parents: { type: GraphQLList(PersonType) },
 *         children: { type: GraphQLList(PersonType) },
 *       })
 *     })
 *
 */
// FIXME: workaround to fix issue with Babel parser

/* ::
declare class GraphQLList<+T: GraphQLType> {
  +ofType: T;
  static <T>(ofType: T): GraphQLList<T>;
  // Note: constructors cannot be used for covariant types. Drop the "new".
  constructor(ofType: GraphQLType): void;
}
*/

function GraphQLList(ofType) {
  if (this instanceof GraphQLList) {
    this.ofType = assertType(ofType);
  } else {
    return new GraphQLList(ofType);
  }
} // Need to cast through any to alter the prototype.

GraphQLList.prototype.toString = function toString() {
  return '[' + String(this.ofType) + ']';
};

Object.defineProperty(GraphQLList.prototype, _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__["SYMBOL_TO_STRING_TAG"], {
  get: function get() {
    return 'GraphQLList';
  }
});
Object(_jsutils_defineToJSON_mjs__WEBPACK_IMPORTED_MODULE_12__["default"])(GraphQLList);
/**
 * Non-Null Type Wrapper
 *
 * A non-null is a wrapping type which points to another type.
 * Non-null types enforce that their values are never null and can ensure
 * an error is raised if this ever occurs during a request. It is useful for
 * fields which you can make a strong guarantee on non-nullability, for example
 * usually the id field of a database row will never be null.
 *
 * Example:
 *
 *     const RowType = new GraphQLObjectType({
 *       name: 'Row',
 *       fields: () => ({
 *         id: { type: GraphQLNonNull(GraphQLString) },
 *       })
 *     })
 *
 * Note: the enforcement of non-nullability occurs within the executor.
 */
// FIXME: workaround to fix issue with Babel parser

/* ::
declare class GraphQLNonNull<+T: GraphQLNullableType> {
  +ofType: T;
  static <T>(ofType: T): GraphQLNonNull<T>;
  // Note: constructors cannot be used for covariant types. Drop the "new".
  constructor(ofType: GraphQLType): void;
}
*/

function GraphQLNonNull(ofType) {
  if (this instanceof GraphQLNonNull) {
    this.ofType = assertNullableType(ofType);
  } else {
    return new GraphQLNonNull(ofType);
  }
} // Need to cast through any to alter the prototype.

GraphQLNonNull.prototype.toString = function toString() {
  return String(this.ofType) + '!';
};

Object.defineProperty(GraphQLNonNull.prototype, _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__["SYMBOL_TO_STRING_TAG"], {
  get: function get() {
    return 'GraphQLNonNull';
  }
});
Object(_jsutils_defineToJSON_mjs__WEBPACK_IMPORTED_MODULE_12__["default"])(GraphQLNonNull);
/**
 * These types wrap and modify other types
 */

function isWrappingType(type) {
  return isListType(type) || isNonNullType(type);
}
function assertWrappingType(type) {
  if (!isWrappingType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL wrapping type."));
  }

  return type;
}
/**
 * These types can all accept null as a value.
 */

function isNullableType(type) {
  return isType(type) && !isNonNullType(type);
}
function assertNullableType(type) {
  if (!isNullableType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL nullable type."));
  }

  return type;
}
/* eslint-disable no-redeclare */

function getNullableType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    return isNonNullType(type) ? type.ofType : type;
  }
}
/**
 * These named types do not include modifiers like List or NonNull.
 */

function isNamedType(type) {
  return isScalarType(type) || isObjectType(type) || isInterfaceType(type) || isUnionType(type) || isEnumType(type) || isInputObjectType(type);
}
function assertNamedType(type) {
  if (!isNamedType(type)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), " to be a GraphQL named type."));
  }

  return type;
}
/* eslint-disable no-redeclare */

function getNamedType(type) {
  /* eslint-enable no-redeclare */
  if (type) {
    var unwrappedType = type;

    while (isWrappingType(unwrappedType)) {
      unwrappedType = unwrappedType.ofType;
    }

    return unwrappedType;
  }
}
/**
 * Used while defining GraphQL types to allow for circular references in
 * otherwise immutable type definitions.
 */

function resolveThunk(thunk) {
  // $FlowFixMe(>=0.90.0)
  return typeof thunk === 'function' ? thunk() : thunk;
}

function undefineIfEmpty(arr) {
  return arr && arr.length > 0 ? arr : undefined;
}
/**
 * Scalar Type Definition
 *
 * The leaf values of any request and input values to arguments are
 * Scalars (or Enums) and are defined with a name and a series of functions
 * used to parse input from ast or variables and to ensure validity.
 *
 * If a type's serialize function does not return a value (i.e. it returns
 * `undefined`) then an error will be raised and a `null` value will be returned
 * in the response. If the serialize function returns `null`, then no error will
 * be included in the response.
 *
 * Example:
 *
 *     const OddType = new GraphQLScalarType({
 *       name: 'Odd',
 *       serialize(value) {
 *         if (value % 2 === 1) {
 *           return value;
 *         }
 *       }
 *     });
 *
 */


var GraphQLScalarType = /*#__PURE__*/function () {
  function GraphQLScalarType(config) {
    var _config$parseValue, _config$serialize, _config$parseLiteral;

    var parseValue = (_config$parseValue = config.parseValue) !== null && _config$parseValue !== void 0 ? _config$parseValue : _jsutils_identityFunc_mjs__WEBPACK_IMPORTED_MODULE_11__["default"];
    this.name = config.name;
    this.description = config.description;
    this.serialize = (_config$serialize = config.serialize) !== null && _config$serialize !== void 0 ? _config$serialize : _jsutils_identityFunc_mjs__WEBPACK_IMPORTED_MODULE_11__["default"];
    this.parseValue = parseValue;
    this.parseLiteral = (_config$parseLiteral = config.parseLiteral) !== null && _config$parseLiteral !== void 0 ? _config$parseLiteral : function (node) {
      return parseValue(Object(_utilities_valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_17__["valueFromASTUntyped"])(node));
    };
    this.extensions = config.extensions && Object(_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    typeof config.name === 'string' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, 'Must provide name.');
    config.serialize == null || typeof config.serialize === 'function' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(this.name, " must provide \"serialize\" function. If this custom Scalar is also used as an input type, ensure \"parseValue\" and \"parseLiteral\" functions are also provided."));

    if (config.parseLiteral) {
      typeof config.parseValue === 'function' && typeof config.parseLiteral === 'function' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(this.name, " must provide both \"parseValue\" and \"parseLiteral\" functions."));
    }
  }

  var _proto = GraphQLScalarType.prototype;

  _proto.toConfig = function toConfig() {
    var _this$extensionASTNod;

    return {
      name: this.name,
      description: this.description,
      serialize: this.serialize,
      parseValue: this.parseValue,
      parseLiteral: this.parseLiteral,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: (_this$extensionASTNod = this.extensionASTNodes) !== null && _this$extensionASTNod !== void 0 ? _this$extensionASTNod : []
    };
  };

  _proto.toString = function toString() {
    return this.name;
  } // $FlowFixMe Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLScalarType, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'GraphQLScalarType';
    }
  }]);

  return GraphQLScalarType;
}();
Object(_jsutils_defineToJSON_mjs__WEBPACK_IMPORTED_MODULE_12__["default"])(GraphQLScalarType);

/**
 * Object Type Definition
 *
 * Almost all of the GraphQL types you define will be object types. Object types
 * have a name, but most importantly describe their fields.
 *
 * Example:
 *
 *     const AddressType = new GraphQLObjectType({
 *       name: 'Address',
 *       fields: {
 *         street: { type: GraphQLString },
 *         number: { type: GraphQLInt },
 *         formatted: {
 *           type: GraphQLString,
 *           resolve(obj) {
 *             return obj.number + ' ' + obj.street
 *           }
 *         }
 *       }
 *     });
 *
 * When two types need to refer to each other, or a type needs to refer to
 * itself in a field, you can use a function expression (aka a closure or a
 * thunk) to supply the fields lazily.
 *
 * Example:
 *
 *     const PersonType = new GraphQLObjectType({
 *       name: 'Person',
 *       fields: () => ({
 *         name: { type: GraphQLString },
 *         bestFriend: { type: PersonType },
 *       })
 *     });
 *
 */
var GraphQLObjectType = /*#__PURE__*/function () {
  function GraphQLObjectType(config) {
    this.name = config.name;
    this.description = config.description;
    this.isTypeOf = config.isTypeOf;
    this.extensions = config.extensions && Object(_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineFieldMap.bind(undefined, config);
    this._interfaces = defineInterfaces.bind(undefined, config);
    typeof config.name === 'string' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, 'Must provide name.');
    config.isTypeOf == null || typeof config.isTypeOf === 'function' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(this.name, " must provide \"isTypeOf\" as a function, ") + "but got: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(config.isTypeOf), "."));
  }

  var _proto2 = GraphQLObjectType.prototype;

  _proto2.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto2.getInterfaces = function getInterfaces() {
    if (typeof this._interfaces === 'function') {
      this._interfaces = this._interfaces();
    }

    return this._interfaces;
  };

  _proto2.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: fieldsToFieldsConfig(this.getFields()),
      isTypeOf: this.isTypeOf,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: this.extensionASTNodes || []
    };
  };

  _proto2.toString = function toString() {
    return this.name;
  } // $FlowFixMe Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLObjectType, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'GraphQLObjectType';
    }
  }]);

  return GraphQLObjectType;
}();
Object(_jsutils_defineToJSON_mjs__WEBPACK_IMPORTED_MODULE_12__["default"])(GraphQLObjectType);

function defineInterfaces(config) {
  var _resolveThunk;

  var interfaces = (_resolveThunk = resolveThunk(config.interfaces)) !== null && _resolveThunk !== void 0 ? _resolveThunk : [];
  Array.isArray(interfaces) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(config.name, " interfaces must be an Array or a function which returns an Array."));
  return interfaces;
}

function defineFieldMap(config) {
  var fieldMap = resolveThunk(config.fields);
  isPlainObj(fieldMap) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
  return Object(_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(fieldMap, function (fieldConfig, fieldName) {
    var _fieldConfig$args;

    isPlainObj(fieldConfig) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(config.name, ".").concat(fieldName, " field config must be an object."));
    !('isDeprecated' in fieldConfig) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(config.name, ".").concat(fieldName, " should provide \"deprecationReason\" instead of \"isDeprecated\"."));
    fieldConfig.resolve == null || typeof fieldConfig.resolve === 'function' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(config.name, ".").concat(fieldName, " field resolver must be a function if ") + "provided, but got: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(fieldConfig.resolve), "."));
    var argsConfig = (_fieldConfig$args = fieldConfig.args) !== null && _fieldConfig$args !== void 0 ? _fieldConfig$args : {};
    isPlainObj(argsConfig) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(config.name, ".").concat(fieldName, " args must be an object with argument names as keys."));
    var args = Object(_polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(argsConfig).map(function (_ref) {
      var argName = _ref[0],
          argConfig = _ref[1];
      return {
        name: argName,
        description: argConfig.description,
        type: argConfig.type,
        defaultValue: argConfig.defaultValue,
        extensions: argConfig.extensions && Object(_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(argConfig.extensions),
        astNode: argConfig.astNode
      };
    });
    return {
      name: fieldName,
      description: fieldConfig.description,
      type: fieldConfig.type,
      args: args,
      resolve: fieldConfig.resolve,
      subscribe: fieldConfig.subscribe,
      isDeprecated: fieldConfig.deprecationReason != null,
      deprecationReason: fieldConfig.deprecationReason,
      extensions: fieldConfig.extensions && Object(_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    };
  });
}

function isPlainObj(obj) {
  return Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_10__["default"])(obj) && !Array.isArray(obj);
}

function fieldsToFieldsConfig(fields) {
  return Object(_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(fields, function (field) {
    return {
      description: field.description,
      type: field.type,
      args: argsToArgsConfig(field.args),
      resolve: field.resolve,
      subscribe: field.subscribe,
      deprecationReason: field.deprecationReason,
      extensions: field.extensions,
      astNode: field.astNode
    };
  });
}
/**
 * @internal
 */


function argsToArgsConfig(args) {
  return Object(_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])(args, function (arg) {
    return arg.name;
  }, function (arg) {
    return {
      description: arg.description,
      type: arg.type,
      defaultValue: arg.defaultValue,
      extensions: arg.extensions,
      astNode: arg.astNode
    };
  });
}
function isRequiredArgument(arg) {
  return isNonNullType(arg.type) && arg.defaultValue === undefined;
}

/**
 * Interface Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Interface type
 * is used to describe what types are possible, what fields are in common across
 * all types, as well as a function to determine which type is actually used
 * when the field is resolved.
 *
 * Example:
 *
 *     const EntityType = new GraphQLInterfaceType({
 *       name: 'Entity',
 *       fields: {
 *         name: { type: GraphQLString }
 *       }
 *     });
 *
 */
var GraphQLInterfaceType = /*#__PURE__*/function () {
  function GraphQLInterfaceType(config) {
    this.name = config.name;
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = config.extensions && Object(_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineFieldMap.bind(undefined, config);
    this._interfaces = defineInterfaces.bind(undefined, config);
    typeof config.name === 'string' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, 'Must provide name.');
    config.resolveType == null || typeof config.resolveType === 'function' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(config.resolveType), "."));
  }

  var _proto3 = GraphQLInterfaceType.prototype;

  _proto3.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto3.getInterfaces = function getInterfaces() {
    if (typeof this._interfaces === 'function') {
      this._interfaces = this._interfaces();
    }

    return this._interfaces;
  };

  _proto3.toConfig = function toConfig() {
    var _this$extensionASTNod2;

    return {
      name: this.name,
      description: this.description,
      interfaces: this.getInterfaces(),
      fields: fieldsToFieldsConfig(this.getFields()),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: (_this$extensionASTNod2 = this.extensionASTNodes) !== null && _this$extensionASTNod2 !== void 0 ? _this$extensionASTNod2 : []
    };
  };

  _proto3.toString = function toString() {
    return this.name;
  } // $FlowFixMe Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLInterfaceType, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'GraphQLInterfaceType';
    }
  }]);

  return GraphQLInterfaceType;
}();
Object(_jsutils_defineToJSON_mjs__WEBPACK_IMPORTED_MODULE_12__["default"])(GraphQLInterfaceType);

/**
 * Union Type Definition
 *
 * When a field can return one of a heterogeneous set of types, a Union type
 * is used to describe what types are possible as well as providing a function
 * to determine which type is actually used when the field is resolved.
 *
 * Example:
 *
 *     const PetType = new GraphQLUnionType({
 *       name: 'Pet',
 *       types: [ DogType, CatType ],
 *       resolveType(value) {
 *         if (value instanceof Dog) {
 *           return DogType;
 *         }
 *         if (value instanceof Cat) {
 *           return CatType;
 *         }
 *       }
 *     });
 *
 */
var GraphQLUnionType = /*#__PURE__*/function () {
  function GraphQLUnionType(config) {
    this.name = config.name;
    this.description = config.description;
    this.resolveType = config.resolveType;
    this.extensions = config.extensions && Object(_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._types = defineTypes.bind(undefined, config);
    typeof config.name === 'string' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, 'Must provide name.');
    config.resolveType == null || typeof config.resolveType === 'function' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(this.name, " must provide \"resolveType\" as a function, ") + "but got: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(config.resolveType), "."));
  }

  var _proto4 = GraphQLUnionType.prototype;

  _proto4.getTypes = function getTypes() {
    if (typeof this._types === 'function') {
      this._types = this._types();
    }

    return this._types;
  };

  _proto4.toConfig = function toConfig() {
    var _this$extensionASTNod3;

    return {
      name: this.name,
      description: this.description,
      types: this.getTypes(),
      resolveType: this.resolveType,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: (_this$extensionASTNod3 = this.extensionASTNodes) !== null && _this$extensionASTNod3 !== void 0 ? _this$extensionASTNod3 : []
    };
  };

  _proto4.toString = function toString() {
    return this.name;
  } // $FlowFixMe Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLUnionType, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'GraphQLUnionType';
    }
  }]);

  return GraphQLUnionType;
}();
Object(_jsutils_defineToJSON_mjs__WEBPACK_IMPORTED_MODULE_12__["default"])(GraphQLUnionType);

function defineTypes(config) {
  var types = resolveThunk(config.types);
  Array.isArray(types) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "Must provide Array of types or a function which returns such an array for Union ".concat(config.name, "."));
  return types;
}

/**
 * Enum Type Definition
 *
 * Some leaf values of requests and input values are Enums. GraphQL serializes
 * Enum values as strings, however internally Enums can be represented by any
 * kind of type, often integers.
 *
 * Example:
 *
 *     const RGBType = new GraphQLEnumType({
 *       name: 'RGB',
 *       values: {
 *         RED: { value: 0 },
 *         GREEN: { value: 1 },
 *         BLUE: { value: 2 }
 *       }
 *     });
 *
 * Note: If a value is not provided in a definition, the name of the enum value
 * will be used as its internal value.
 */
var GraphQLEnumType
/* <T> */
= /*#__PURE__*/function () {
  function GraphQLEnumType(config) {
    this.name = config.name;
    this.description = config.description;
    this.extensions = config.extensions && Object(_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._values = defineEnumValues(this.name, config.values);
    this._valueLookup = new Map(this._values.map(function (enumValue) {
      return [enumValue.value, enumValue];
    }));
    this._nameLookup = Object(_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(this._values, function (value) {
      return value.name;
    });
    typeof config.name === 'string' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, 'Must provide name.');
  }

  var _proto5 = GraphQLEnumType.prototype;

  _proto5.getValues = function getValues() {
    return this._values;
  };

  _proto5.getValue = function getValue(name) {
    return this._nameLookup[name];
  };

  _proto5.serialize = function serialize(outputValue) {
    var enumValue = this._valueLookup.get(outputValue);

    if (enumValue === undefined) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLError"]("Enum \"".concat(this.name, "\" cannot represent value: ").concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(outputValue)));
    }

    return enumValue.name;
  };

  _proto5.parseValue = function parseValue(inputValue)
  /* T */
  {
    if (typeof inputValue !== 'string') {
      var valueStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(inputValue);
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLError"]("Enum \"".concat(this.name, "\" cannot represent non-string value: ").concat(valueStr, ".") + didYouMeanEnumValue(this, valueStr));
    }

    var enumValue = this.getValue(inputValue);

    if (enumValue == null) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLError"]("Value \"".concat(inputValue, "\" does not exist in \"").concat(this.name, "\" enum.") + didYouMeanEnumValue(this, inputValue));
    }

    return enumValue.value;
  };

  _proto5.parseLiteral = function parseLiteral(valueNode, _variables)
  /* T */
  {
    // Note: variables will be resolved to a value before calling this function.
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_14__["Kind"].ENUM) {
      var valueStr = Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_15__["print"])(valueNode);
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLError"]("Enum \"".concat(this.name, "\" cannot represent non-enum value: ").concat(valueStr, ".") + didYouMeanEnumValue(this, valueStr), valueNode);
    }

    var enumValue = this.getValue(valueNode.value);

    if (enumValue == null) {
      var _valueStr = Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_15__["print"])(valueNode);

      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLError"]("Value \"".concat(_valueStr, "\" does not exist in \"").concat(this.name, "\" enum.") + didYouMeanEnumValue(this, _valueStr), valueNode);
    }

    return enumValue.value;
  };

  _proto5.toConfig = function toConfig() {
    var _this$extensionASTNod4;

    var values = Object(_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])(this.getValues(), function (value) {
      return value.name;
    }, function (value) {
      return {
        description: value.description,
        value: value.value,
        deprecationReason: value.deprecationReason,
        extensions: value.extensions,
        astNode: value.astNode
      };
    });
    return {
      name: this.name,
      description: this.description,
      values: values,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: (_this$extensionASTNod4 = this.extensionASTNodes) !== null && _this$extensionASTNod4 !== void 0 ? _this$extensionASTNod4 : []
    };
  };

  _proto5.toString = function toString() {
    return this.name;
  } // $FlowFixMe Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLEnumType, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'GraphQLEnumType';
    }
  }]);

  return GraphQLEnumType;
}();
Object(_jsutils_defineToJSON_mjs__WEBPACK_IMPORTED_MODULE_12__["default"])(GraphQLEnumType);

function didYouMeanEnumValue(enumType, unknownValueStr) {
  var allNames = enumType.getValues().map(function (value) {
    return value.name;
  });
  var suggestedValues = Object(_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_13__["default"])(unknownValueStr, allNames);
  return Object(_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_9__["default"])('the enum value', suggestedValues);
}

function defineEnumValues(typeName, valueMap) {
  isPlainObj(valueMap) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(typeName, " values must be an object with value names as keys."));
  return Object(_polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(valueMap).map(function (_ref2) {
    var valueName = _ref2[0],
        valueConfig = _ref2[1];
    isPlainObj(valueConfig) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(typeName, ".").concat(valueName, " must refer to an object with a \"value\" key ") + "representing an internal value but got: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(valueConfig), "."));
    !('isDeprecated' in valueConfig) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(typeName, ".").concat(valueName, " should provide \"deprecationReason\" instead of \"isDeprecated\"."));
    return {
      name: valueName,
      description: valueConfig.description,
      value: valueConfig.value !== undefined ? valueConfig.value : valueName,
      isDeprecated: valueConfig.deprecationReason != null,
      deprecationReason: valueConfig.deprecationReason,
      extensions: valueConfig.extensions && Object(_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(valueConfig.extensions),
      astNode: valueConfig.astNode
    };
  });
}

/**
 * Input Object Type Definition
 *
 * An input object defines a structured collection of fields which may be
 * supplied to a field argument.
 *
 * Using `NonNull` will ensure that a value must be provided by the query
 *
 * Example:
 *
 *     const GeoPoint = new GraphQLInputObjectType({
 *       name: 'GeoPoint',
 *       fields: {
 *         lat: { type: GraphQLNonNull(GraphQLFloat) },
 *         lon: { type: GraphQLNonNull(GraphQLFloat) },
 *         alt: { type: GraphQLFloat, defaultValue: 0 },
 *       }
 *     });
 *
 */
var GraphQLInputObjectType = /*#__PURE__*/function () {
  function GraphQLInputObjectType(config) {
    this.name = config.name;
    this.description = config.description;
    this.extensions = config.extensions && Object(_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = undefineIfEmpty(config.extensionASTNodes);
    this._fields = defineInputFieldMap.bind(undefined, config);
    typeof config.name === 'string' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, 'Must provide name.');
  }

  var _proto6 = GraphQLInputObjectType.prototype;

  _proto6.getFields = function getFields() {
    if (typeof this._fields === 'function') {
      this._fields = this._fields();
    }

    return this._fields;
  };

  _proto6.toConfig = function toConfig() {
    var _this$extensionASTNod5;

    var fields = Object(_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(this.getFields(), function (field) {
      return {
        description: field.description,
        type: field.type,
        defaultValue: field.defaultValue,
        extensions: field.extensions,
        astNode: field.astNode
      };
    });
    return {
      name: this.name,
      description: this.description,
      fields: fields,
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: (_this$extensionASTNod5 = this.extensionASTNodes) !== null && _this$extensionASTNod5 !== void 0 ? _this$extensionASTNod5 : []
    };
  };

  _proto6.toString = function toString() {
    return this.name;
  } // $FlowFixMe Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLInputObjectType, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'GraphQLInputObjectType';
    }
  }]);

  return GraphQLInputObjectType;
}();
Object(_jsutils_defineToJSON_mjs__WEBPACK_IMPORTED_MODULE_12__["default"])(GraphQLInputObjectType);

function defineInputFieldMap(config) {
  var fieldMap = resolveThunk(config.fields);
  isPlainObj(fieldMap) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(config.name, " fields must be an object with field names as keys or a function which returns such an object."));
  return Object(_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(fieldMap, function (fieldConfig, fieldName) {
    !('resolve' in fieldConfig) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "".concat(config.name, ".").concat(fieldName, " field has a resolve property, but Input Types cannot define resolvers."));
    return {
      name: fieldName,
      description: fieldConfig.description,
      type: fieldConfig.type,
      defaultValue: fieldConfig.defaultValue,
      extensions: fieldConfig.extensions && Object(_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(fieldConfig.extensions),
      astNode: fieldConfig.astNode
    };
  });
}

function isRequiredInputField(field) {
  return isNonNullType(field.type) && field.defaultValue === undefined;
}


/***/ }),

/***/ "./node_modules/graphql/type/directives.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/type/directives.mjs ***!
  \**************************************************/
/*! exports provided: isDirective, assertDirective, GraphQLDirective, GraphQLIncludeDirective, GraphQLSkipDirective, DEFAULT_DEPRECATION_REASON, GraphQLDeprecatedDirective, specifiedDirectives, isSpecifiedDirective */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertDirective", function() { return assertDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLDirective", function() { return GraphQLDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLIncludeDirective", function() { return GraphQLIncludeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLSkipDirective", function() { return GraphQLSkipDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DEPRECATION_REASON", function() { return DEFAULT_DEPRECATION_REASON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLDeprecatedDirective", function() { return GraphQLDeprecatedDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedDirectives", function() { return specifiedDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedDirective", function() { return isSpecifiedDirective; });
/* harmony import */ var _polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectEntries.mjs */ "./node_modules/graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/toObjMap.mjs */ "./node_modules/graphql/jsutils/toObjMap.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/instanceOf.mjs */ "./node_modules/graphql/jsutils/instanceOf.mjs");
/* harmony import */ var _jsutils_defineToJSON_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/defineToJSON.mjs */ "./node_modules/graphql/jsutils/defineToJSON.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../language/directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _scalars_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _definition_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./definition.mjs */ "./node_modules/graphql/type/definition.mjs");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












/**
 * Test if the given value is a GraphQL directive.
 */

// eslint-disable-next-line no-redeclare
function isDirective(directive) {
  return Object(_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(directive, GraphQLDirective);
}
function assertDirective(directive) {
  if (!isDirective(directive)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(directive), " to be a GraphQL directive."));
  }

  return directive;
}
/**
 * Directives are used by the GraphQL runtime as a way of modifying execution
 * behavior. Type system creators will usually not create these directly.
 */

var GraphQLDirective = /*#__PURE__*/function () {
  function GraphQLDirective(config) {
    var _config$isRepeatable, _config$args;

    this.name = config.name;
    this.description = config.description;
    this.locations = config.locations;
    this.isRepeatable = (_config$isRepeatable = config.isRepeatable) !== null && _config$isRepeatable !== void 0 ? _config$isRepeatable : false;
    this.extensions = config.extensions && Object(_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(config.extensions);
    this.astNode = config.astNode;
    config.name || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Directive must be named.');
    Array.isArray(config.locations) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(0, "@".concat(config.name, " locations must be an Array."));
    var args = (_config$args = config.args) !== null && _config$args !== void 0 ? _config$args : {};
    Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])(args) && !Array.isArray(args) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(0, "@".concat(config.name, " args must be an object with argument names as keys."));
    this.args = Object(_polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(args).map(function (_ref) {
      var argName = _ref[0],
          argConfig = _ref[1];
      return {
        name: argName,
        description: argConfig.description,
        type: argConfig.type,
        defaultValue: argConfig.defaultValue,
        extensions: argConfig.extensions && Object(_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(argConfig.extensions),
        astNode: argConfig.astNode
      };
    });
  }

  var _proto = GraphQLDirective.prototype;

  _proto.toConfig = function toConfig() {
    return {
      name: this.name,
      description: this.description,
      locations: this.locations,
      args: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["argsToArgsConfig"])(this.args),
      isRepeatable: this.isRepeatable,
      extensions: this.extensions,
      astNode: this.astNode
    };
  };

  _proto.toString = function toString() {
    return '@' + this.name;
  } // $FlowFixMe Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLDirective, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_1__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'GraphQLDirective';
    }
  }]);

  return GraphQLDirective;
}();
Object(_jsutils_defineToJSON_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(GraphQLDirective);

/**
 * Used to conditionally include fields or fragments.
 */
var GraphQLIncludeDirective = new GraphQLDirective({
  name: 'include',
  description: 'Directs the executor to include this field or fragment only when the `if` argument is true.',
  locations: [_language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FIELD, _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FRAGMENT_SPREAD, _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].INLINE_FRAGMENT],
  args: {
    if: {
      type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLNonNull"])(_scalars_mjs__WEBPACK_IMPORTED_MODULE_9__["GraphQLBoolean"]),
      description: 'Included when true.'
    }
  }
});
/**
 * Used to conditionally skip (exclude) fields or fragments.
 */

var GraphQLSkipDirective = new GraphQLDirective({
  name: 'skip',
  description: 'Directs the executor to skip this field or fragment when the `if` argument is true.',
  locations: [_language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FIELD, _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FRAGMENT_SPREAD, _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].INLINE_FRAGMENT],
  args: {
    if: {
      type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLNonNull"])(_scalars_mjs__WEBPACK_IMPORTED_MODULE_9__["GraphQLBoolean"]),
      description: 'Skipped when true.'
    }
  }
});
/**
 * Constant string used for default reason for a deprecation.
 */

var DEFAULT_DEPRECATION_REASON = 'No longer supported';
/**
 * Used to declare element of a GraphQL schema as deprecated.
 */

var GraphQLDeprecatedDirective = new GraphQLDirective({
  name: 'deprecated',
  description: 'Marks an element of a GraphQL schema as no longer supported.',
  locations: [_language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].FIELD_DEFINITION, _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_8__["DirectiveLocation"].ENUM_VALUE],
  args: {
    reason: {
      type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_9__["GraphQLString"],
      description: 'Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by [CommonMark](https://commonmark.org/).',
      defaultValue: DEFAULT_DEPRECATION_REASON
    }
  }
});
/**
 * The full list of specified directives.
 */

var specifiedDirectives = Object.freeze([GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective]);
function isSpecifiedDirective(directive) {
  return specifiedDirectives.some(function (_ref2) {
    var name = _ref2.name;
    return name === directive.name;
  });
}


/***/ }),

/***/ "./node_modules/graphql/type/index.mjs":
/*!*********************************************!*\
  !*** ./node_modules/graphql/type/index.mjs ***!
  \*********************************************/
/*! exports provided: isSchema, assertSchema, GraphQLSchema, isType, isScalarType, isObjectType, isInterfaceType, isUnionType, isEnumType, isInputObjectType, isListType, isNonNullType, isInputType, isOutputType, isLeafType, isCompositeType, isAbstractType, isWrappingType, isNullableType, isNamedType, isRequiredArgument, isRequiredInputField, assertType, assertScalarType, assertObjectType, assertInterfaceType, assertUnionType, assertEnumType, assertInputObjectType, assertListType, assertNonNullType, assertInputType, assertOutputType, assertLeafType, assertCompositeType, assertAbstractType, assertWrappingType, assertNullableType, assertNamedType, getNullableType, getNamedType, GraphQLScalarType, GraphQLObjectType, GraphQLInterfaceType, GraphQLUnionType, GraphQLEnumType, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, isDirective, assertDirective, GraphQLDirective, isSpecifiedDirective, specifiedDirectives, GraphQLIncludeDirective, GraphQLSkipDirective, GraphQLDeprecatedDirective, DEFAULT_DEPRECATION_REASON, isSpecifiedScalarType, specifiedScalarTypes, GraphQLInt, GraphQLFloat, GraphQLString, GraphQLBoolean, GraphQLID, isIntrospectionType, introspectionTypes, __Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind, TypeKind, SchemaMetaFieldDef, TypeMetaFieldDef, TypeNameMetaFieldDef, validateSchema, assertValidSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schema.mjs */ "./node_modules/graphql/type/schema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSchema", function() { return _schema_mjs__WEBPACK_IMPORTED_MODULE_0__["isSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertSchema", function() { return _schema_mjs__WEBPACK_IMPORTED_MODULE_0__["assertSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLSchema", function() { return _schema_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLSchema"]; });

/* harmony import */ var _definition_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isScalarType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInterfaceType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUnionType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEnumType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputObjectType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isListType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isListType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNonNullType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isNonNullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInputType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOutputType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLeafType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isLeafType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCompositeType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isCompositeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isAbstractType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isAbstractType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isWrappingType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isWrappingType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNullableType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNamedType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRequiredArgument", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isRequiredArgument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRequiredInputField", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isRequiredInputField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertScalarType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertObjectType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInterfaceType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertUnionType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertEnumType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInputObjectType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertListType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertListType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNonNullType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertNonNullType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertInputType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertInputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertOutputType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertOutputType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertLeafType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertLeafType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertCompositeType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertCompositeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertAbstractType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertAbstractType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertWrappingType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertWrappingType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNullableType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertNamedType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["assertNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNullableType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["getNullableType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNamedType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["getNamedType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLScalarType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLObjectType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInterfaceType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLInterfaceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLUnionType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLUnionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLEnumType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLEnumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInputObjectType", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLInputObjectType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLList", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLNonNull", function() { return _definition_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLNonNull"]; });

/* harmony import */ var _directives_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _directives_mjs__WEBPACK_IMPORTED_MODULE_2__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertDirective", function() { return _directives_mjs__WEBPACK_IMPORTED_MODULE_2__["assertDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLDirective", function() { return _directives_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedDirective", function() { return _directives_mjs__WEBPACK_IMPORTED_MODULE_2__["isSpecifiedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedDirectives", function() { return _directives_mjs__WEBPACK_IMPORTED_MODULE_2__["specifiedDirectives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLIncludeDirective", function() { return _directives_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLIncludeDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLSkipDirective", function() { return _directives_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLSkipDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLDeprecatedDirective", function() { return _directives_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLDeprecatedDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DEPRECATION_REASON", function() { return _directives_mjs__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_DEPRECATION_REASON"]; });

/* harmony import */ var _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedScalarType", function() { return _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__["isSpecifiedScalarType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedScalarTypes", function() { return _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__["specifiedScalarTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLInt", function() { return _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__["GraphQLInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLFloat", function() { return _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__["GraphQLFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLString", function() { return _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__["GraphQLString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLBoolean", function() { return _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__["GraphQLBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLID", function() { return _scalars_mjs__WEBPACK_IMPORTED_MODULE_3__["GraphQLID"]; });

/* harmony import */ var _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIntrospectionType", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["isIntrospectionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionTypes", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["introspectionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Schema", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["__Schema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Directive", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["__Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__DirectiveLocation", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["__DirectiveLocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Type", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["__Type"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__Field", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["__Field"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__InputValue", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["__InputValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__EnumValue", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["__EnumValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__TypeKind", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["__TypeKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeKind", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["TypeKind"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchemaMetaFieldDef", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["SchemaMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeMetaFieldDef", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["TypeMetaFieldDef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeNameMetaFieldDef", function() { return _introspection_mjs__WEBPACK_IMPORTED_MODULE_4__["TypeNameMetaFieldDef"]; });

/* harmony import */ var _validate_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validate.mjs */ "./node_modules/graphql/type/validate.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateSchema", function() { return _validate_mjs__WEBPACK_IMPORTED_MODULE_5__["validateSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertValidSchema", function() { return _validate_mjs__WEBPACK_IMPORTED_MODULE_5__["assertValidSchema"]; });




// Common built-in scalar instances.


// Validate GraphQL schema.



/***/ }),

/***/ "./node_modules/graphql/type/introspection.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/type/introspection.mjs ***!
  \*****************************************************/
/*! exports provided: __Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, TypeKind, __TypeKind, SchemaMetaFieldDef, TypeMetaFieldDef, TypeNameMetaFieldDef, introspectionTypes, isIntrospectionType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Schema", function() { return __Schema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Directive", function() { return __Directive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DirectiveLocation", function() { return __DirectiveLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Type", function() { return __Type; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__Field", function() { return __Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__InputValue", function() { return __InputValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__EnumValue", function() { return __EnumValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeKind", function() { return TypeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__TypeKind", function() { return __TypeKind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaMetaFieldDef", function() { return SchemaMetaFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeMetaFieldDef", function() { return TypeMetaFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeNameMetaFieldDef", function() { return TypeNameMetaFieldDef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introspectionTypes", function() { return introspectionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIntrospectionType", function() { return isIntrospectionType; });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _utilities_astFromValue_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/astFromValue.mjs */ "./node_modules/graphql/utilities/astFromValue.mjs");
/* harmony import */ var _scalars_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _definition_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./definition.mjs */ "./node_modules/graphql/type/definition.mjs");
// FIXME

/* eslint-disable import/no-cycle */








var __Schema = new _definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
  name: '__Schema',
  description: 'A GraphQL Schema defines the capabilities of a GraphQL server. It exposes all available types and directives on the server, as well as the entry points for query, mutation, and subscription operations.',
  fields: function fields() {
    return {
      description: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(schema) {
          return schema.description;
        }
      },
      types: {
        description: 'A list of all types supported by this server.',
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Type))),
        resolve: function resolve(schema) {
          return Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(schema.getTypeMap());
        }
      },
      queryType: {
        description: 'The type that query operations will be rooted at.',
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Type),
        resolve: function resolve(schema) {
          return schema.getQueryType();
        }
      },
      mutationType: {
        description: 'If this server supports mutation, the type that mutation operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getMutationType();
        }
      },
      subscriptionType: {
        description: 'If this server support subscription, the type that subscription operations will be rooted at.',
        type: __Type,
        resolve: function resolve(schema) {
          return schema.getSubscriptionType();
        }
      },
      directives: {
        description: 'A list of all directives supported by this server.',
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Directive))),
        resolve: function resolve(schema) {
          return schema.getDirectives();
        }
      }
    };
  }
});
var __Directive = new _definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
  name: '__Directive',
  description: "A Directive provides a way to describe alternate runtime execution and type validation behavior in a GraphQL document.\n\nIn some cases, you need to provide options to alter GraphQL's execution behavior in ways field arguments will not suffice, such as conditionally including or skipping a field. Directives provide this by describing additional information to the executor.",
  fields: function fields() {
    return {
      name: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"]),
        resolve: function resolve(directive) {
          return directive.name;
        }
      },
      description: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(directive) {
          return directive.description;
        }
      },
      isRepeatable: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLBoolean"]),
        resolve: function resolve(directive) {
          return directive.isRepeatable;
        }
      },
      locations: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__DirectiveLocation))),
        resolve: function resolve(directive) {
          return directive.locations;
        }
      },
      args: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__InputValue))),
        resolve: function resolve(directive) {
          return directive.args;
        }
      }
    };
  }
});
var __DirectiveLocation = new _definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLEnumType"]({
  name: '__DirectiveLocation',
  description: 'A Directive can be adjacent to many parts of the GraphQL language, a __DirectiveLocation describes one such possible adjacencies.',
  values: {
    QUERY: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].QUERY,
      description: 'Location adjacent to a query operation.'
    },
    MUTATION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].MUTATION,
      description: 'Location adjacent to a mutation operation.'
    },
    SUBSCRIPTION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].SUBSCRIPTION,
      description: 'Location adjacent to a subscription operation.'
    },
    FIELD: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].FIELD,
      description: 'Location adjacent to a field.'
    },
    FRAGMENT_DEFINITION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].FRAGMENT_DEFINITION,
      description: 'Location adjacent to a fragment definition.'
    },
    FRAGMENT_SPREAD: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].FRAGMENT_SPREAD,
      description: 'Location adjacent to a fragment spread.'
    },
    INLINE_FRAGMENT: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].INLINE_FRAGMENT,
      description: 'Location adjacent to an inline fragment.'
    },
    VARIABLE_DEFINITION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].VARIABLE_DEFINITION,
      description: 'Location adjacent to a variable definition.'
    },
    SCHEMA: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].SCHEMA,
      description: 'Location adjacent to a schema definition.'
    },
    SCALAR: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].SCALAR,
      description: 'Location adjacent to a scalar definition.'
    },
    OBJECT: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].OBJECT,
      description: 'Location adjacent to an object type definition.'
    },
    FIELD_DEFINITION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].FIELD_DEFINITION,
      description: 'Location adjacent to a field definition.'
    },
    ARGUMENT_DEFINITION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].ARGUMENT_DEFINITION,
      description: 'Location adjacent to an argument definition.'
    },
    INTERFACE: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].INTERFACE,
      description: 'Location adjacent to an interface definition.'
    },
    UNION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].UNION,
      description: 'Location adjacent to a union definition.'
    },
    ENUM: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].ENUM,
      description: 'Location adjacent to an enum definition.'
    },
    ENUM_VALUE: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].ENUM_VALUE,
      description: 'Location adjacent to an enum value definition.'
    },
    INPUT_OBJECT: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].INPUT_OBJECT,
      description: 'Location adjacent to an input object type definition.'
    },
    INPUT_FIELD_DEFINITION: {
      value: _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].INPUT_FIELD_DEFINITION,
      description: 'Location adjacent to an input object field definition.'
    }
  }
});
var __Type = new _definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
  name: '__Type',
  description: 'The fundamental unit of any GraphQL Schema is the type. There are many kinds of types in GraphQL as represented by the `__TypeKind` enum.\n\nDepending on the kind of a type, certain fields describe information about that type. Scalar types provide no information beyond a name and description, while Enum types provide their values. Object and Interface types provide the fields they describe. Abstract types, Union and Interface, provide the Object types possible at runtime. List and NonNull types compose other types.',
  fields: function fields() {
    return {
      kind: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__TypeKind),
        resolve: function resolve(type) {
          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isScalarType"])(type)) {
            return TypeKind.SCALAR;
          }

          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isObjectType"])(type)) {
            return TypeKind.OBJECT;
          }

          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInterfaceType"])(type)) {
            return TypeKind.INTERFACE;
          }

          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isUnionType"])(type)) {
            return TypeKind.UNION;
          }

          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isEnumType"])(type)) {
            return TypeKind.ENUM;
          }

          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInputObjectType"])(type)) {
            return TypeKind.INPUT_OBJECT;
          }

          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isListType"])(type)) {
            return TypeKind.LIST;
          }

          /* istanbul ignore else */
          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(type)) {
            return TypeKind.NON_NULL;
          } // Not reachable. All possible types have been considered.


          /* istanbul ignore next */
          Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "Unexpected type: \"".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(type), "\"."));
        }
      },
      name: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(type) {
          return type.name !== undefined ? type.name : undefined;
        }
      },
      description: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(type) {
          return type.description !== undefined ? type.description : undefined;
        }
      },
      fields: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Field)),
        args: {
          includeDeprecated: {
            type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLBoolean"],
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref) {
          var includeDeprecated = _ref.includeDeprecated;

          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isObjectType"])(type) || Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInterfaceType"])(type)) {
            var fields = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields());

            if (!includeDeprecated) {
              fields = fields.filter(function (field) {
                return !field.isDeprecated;
              });
            }

            return fields;
          }

          return null;
        }
      },
      interfaces: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Type)),
        resolve: function resolve(type) {
          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isObjectType"])(type) || Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInterfaceType"])(type)) {
            return type.getInterfaces();
          }
        }
      },
      possibleTypes: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Type)),
        resolve: function resolve(type, _args, _context, _ref2) {
          var schema = _ref2.schema;

          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isAbstractType"])(type)) {
            return schema.getPossibleTypes(type);
          }
        }
      },
      enumValues: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__EnumValue)),
        args: {
          includeDeprecated: {
            type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLBoolean"],
            defaultValue: false
          }
        },
        resolve: function resolve(type, _ref3) {
          var includeDeprecated = _ref3.includeDeprecated;

          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isEnumType"])(type)) {
            var values = type.getValues();

            if (!includeDeprecated) {
              values = values.filter(function (value) {
                return !value.isDeprecated;
              });
            }

            return values;
          }
        }
      },
      inputFields: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__InputValue)),
        resolve: function resolve(type) {
          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInputObjectType"])(type)) {
            return Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields());
          }
        }
      },
      ofType: {
        type: __Type,
        resolve: function resolve(type) {
          return type.ofType !== undefined ? type.ofType : undefined;
        }
      }
    };
  }
});
var __Field = new _definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
  name: '__Field',
  description: 'Object and Interface types are described by a list of Fields, each of which has a name, potentially a list of arguments, and a return type.',
  fields: function fields() {
    return {
      name: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"]),
        resolve: function resolve(field) {
          return field.name;
        }
      },
      description: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(field) {
          return field.description;
        }
      },
      args: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"])(Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__InputValue))),
        resolve: function resolve(field) {
          return field.args;
        }
      },
      type: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Type),
        resolve: function resolve(field) {
          return field.type;
        }
      },
      isDeprecated: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLBoolean"]),
        resolve: function resolve(field) {
          return field.isDeprecated;
        }
      },
      deprecationReason: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(field) {
          return field.deprecationReason;
        }
      }
    };
  }
});
var __InputValue = new _definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
  name: '__InputValue',
  description: 'Arguments provided to Fields or Directives and the input fields of an InputObject are represented as Input Values which describe their type and optionally a default value.',
  fields: function fields() {
    return {
      name: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"]),
        resolve: function resolve(inputValue) {
          return inputValue.name;
        }
      },
      description: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(inputValue) {
          return inputValue.description;
        }
      },
      type: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Type),
        resolve: function resolve(inputValue) {
          return inputValue.type;
        }
      },
      defaultValue: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        description: 'A GraphQL-formatted string representing the default value for this input value.',
        resolve: function resolve(inputValue) {
          var type = inputValue.type,
              defaultValue = inputValue.defaultValue;
          var valueAST = Object(_utilities_astFromValue_mjs__WEBPACK_IMPORTED_MODULE_5__["astFromValue"])(defaultValue, type);
          return valueAST ? Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_3__["print"])(valueAST) : null;
        }
      }
    };
  }
});
var __EnumValue = new _definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"]({
  name: '__EnumValue',
  description: 'One possible value for a given Enum. Enum values are unique values, not a placeholder for a string or numeric value. However an Enum value is returned in a JSON response as a string.',
  fields: function fields() {
    return {
      name: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"]),
        resolve: function resolve(enumValue) {
          return enumValue.name;
        }
      },
      description: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(enumValue) {
          return enumValue.description;
        }
      },
      isDeprecated: {
        type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLBoolean"]),
        resolve: function resolve(enumValue) {
          return enumValue.isDeprecated;
        }
      },
      deprecationReason: {
        type: _scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"],
        resolve: function resolve(enumValue) {
          return enumValue.deprecationReason;
        }
      }
    };
  }
});
var TypeKind = Object.freeze({
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  INPUT_OBJECT: 'INPUT_OBJECT',
  LIST: 'LIST',
  NON_NULL: 'NON_NULL'
});
var __TypeKind = new _definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLEnumType"]({
  name: '__TypeKind',
  description: 'An enum describing what kind of type a given `__Type` is.',
  values: {
    SCALAR: {
      value: TypeKind.SCALAR,
      description: 'Indicates this type is a scalar.'
    },
    OBJECT: {
      value: TypeKind.OBJECT,
      description: 'Indicates this type is an object. `fields` and `interfaces` are valid fields.'
    },
    INTERFACE: {
      value: TypeKind.INTERFACE,
      description: 'Indicates this type is an interface. `fields`, `interfaces`, and `possibleTypes` are valid fields.'
    },
    UNION: {
      value: TypeKind.UNION,
      description: 'Indicates this type is a union. `possibleTypes` is a valid field.'
    },
    ENUM: {
      value: TypeKind.ENUM,
      description: 'Indicates this type is an enum. `enumValues` is a valid field.'
    },
    INPUT_OBJECT: {
      value: TypeKind.INPUT_OBJECT,
      description: 'Indicates this type is an input object. `inputFields` is a valid field.'
    },
    LIST: {
      value: TypeKind.LIST,
      description: 'Indicates this type is a list. `ofType` is a valid field.'
    },
    NON_NULL: {
      value: TypeKind.NON_NULL,
      description: 'Indicates this type is a non-null. `ofType` is a valid field.'
    }
  }
});
/**
 * Note that these are GraphQLField and not GraphQLFieldConfig,
 * so the format for args is different.
 */

var SchemaMetaFieldDef = {
  name: '__schema',
  type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(__Schema),
  description: 'Access the current type schema of this server.',
  args: [],
  resolve: function resolve(_source, _args, _context, _ref4) {
    var schema = _ref4.schema;
    return schema;
  },
  isDeprecated: false,
  deprecationReason: undefined,
  extensions: undefined,
  astNode: undefined
};
var TypeMetaFieldDef = {
  name: '__type',
  type: __Type,
  description: 'Request the type information of a single type.',
  args: [{
    name: 'name',
    description: undefined,
    type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"]),
    defaultValue: undefined,
    extensions: undefined,
    astNode: undefined
  }],
  resolve: function resolve(_source, _ref5, _context, _ref6) {
    var name = _ref5.name;
    var schema = _ref6.schema;
    return schema.getType(name);
  },
  isDeprecated: false,
  deprecationReason: undefined,
  extensions: undefined,
  astNode: undefined
};
var TypeNameMetaFieldDef = {
  name: '__typename',
  type: Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"])(_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"]),
  description: 'The name of the current Object type at runtime.',
  args: [],
  resolve: function resolve(_source, _args, _context, _ref7) {
    var parentType = _ref7.parentType;
    return parentType.name;
  },
  isDeprecated: false,
  deprecationReason: undefined,
  extensions: undefined,
  astNode: undefined
};
var introspectionTypes = Object.freeze([__Schema, __Directive, __DirectiveLocation, __Type, __Field, __InputValue, __EnumValue, __TypeKind]);
function isIntrospectionType(type) {
  return introspectionTypes.some(function (_ref8) {
    var name = _ref8.name;
    return type.name === name;
  });
}


/***/ }),

/***/ "./node_modules/graphql/type/scalars.mjs":
/*!***********************************************!*\
  !*** ./node_modules/graphql/type/scalars.mjs ***!
  \***********************************************/
/*! exports provided: GraphQLInt, GraphQLFloat, GraphQLString, GraphQLBoolean, GraphQLID, specifiedScalarTypes, isSpecifiedScalarType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLInt", function() { return GraphQLInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLFloat", function() { return GraphQLFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLString", function() { return GraphQLString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLBoolean", function() { return GraphQLBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLID", function() { return GraphQLID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedScalarTypes", function() { return specifiedScalarTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSpecifiedScalarType", function() { return isSpecifiedScalarType; });
/* harmony import */ var _polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/isFinite.mjs */ "./node_modules/graphql/polyfills/isFinite.mjs");
/* harmony import */ var _polyfills_isInteger_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/isInteger.mjs */ "./node_modules/graphql/polyfills/isInteger.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _definition_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./definition.mjs */ "./node_modules/graphql/type/definition.mjs");







 // As per the GraphQL Spec, Integers are only treated as valid when a valid
// 32-bit signed integer, providing the broadest support across platforms.
//
// n.b. JavaScript's integers are safe between -(2^53 - 1) and 2^53 - 1 because
// they are internally represented as IEEE 754 doubles.

var MAX_INT = 2147483647;
var MIN_INT = -2147483648;

function serializeInt(outputValue) {
  var coercedValue = serializeObject(outputValue);

  if (typeof coercedValue === 'boolean') {
    return coercedValue ? 1 : 0;
  }

  var num = coercedValue;

  if (typeof coercedValue === 'string' && coercedValue !== '') {
    num = Number(coercedValue);
  }

  if (!Object(_polyfills_isInteger_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(num)) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("Int cannot represent non-integer value: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(coercedValue)));
  }

  if (num > MAX_INT || num < MIN_INT) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]('Int cannot represent non 32-bit signed integer value: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(coercedValue));
  }

  return num;
}

function coerceInt(inputValue) {
  if (!Object(_polyfills_isInteger_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(inputValue)) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("Int cannot represent non-integer value: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(inputValue)));
  }

  if (inputValue > MAX_INT || inputValue < MIN_INT) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("Int cannot represent non 32-bit signed integer value: ".concat(inputValue));
  }

  return inputValue;
}

var GraphQLInt = new _definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLScalarType"]({
  name: 'Int',
  description: 'The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.',
  serialize: serializeInt,
  parseValue: coerceInt,
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("Int cannot represent non-integer value: ".concat(Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__["print"])(valueNode)), valueNode);
    }

    var num = parseInt(valueNode.value, 10);

    if (num > MAX_INT || num < MIN_INT) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("Int cannot represent non 32-bit signed integer value: ".concat(valueNode.value), valueNode);
    }

    return num;
  }
});

function serializeFloat(outputValue) {
  var coercedValue = serializeObject(outputValue);

  if (typeof coercedValue === 'boolean') {
    return coercedValue ? 1 : 0;
  }

  var num = coercedValue;

  if (typeof coercedValue === 'string' && coercedValue !== '') {
    num = Number(coercedValue);
  }

  if (!Object(_polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(num)) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("Float cannot represent non numeric value: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(coercedValue)));
  }

  return num;
}

function coerceFloat(inputValue) {
  if (!Object(_polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(inputValue)) {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("Float cannot represent non numeric value: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(inputValue)));
  }

  return inputValue;
}

var GraphQLFloat = new _definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLScalarType"]({
  name: 'Float',
  description: 'The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).',
  serialize: serializeFloat,
  parseValue: coerceFloat,
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].FLOAT && valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("Float cannot represent non numeric value: ".concat(Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__["print"])(valueNode)), valueNode);
    }

    return parseFloat(valueNode.value);
  }
}); // Support serializing objects with custom valueOf() or toJSON() functions -
// a common way to represent a complex value which can be represented as
// a string (ex: MongoDB id objects).

function serializeObject(outputValue) {
  if (Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(outputValue)) {
    if (typeof outputValue.valueOf === 'function') {
      var valueOfResult = outputValue.valueOf();

      if (!Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(valueOfResult)) {
        return valueOfResult;
      }
    }

    if (typeof outputValue.toJSON === 'function') {
      // $FlowFixMe(>=0.90.0)
      return outputValue.toJSON();
    }
  }

  return outputValue;
}

function serializeString(outputValue) {
  var coercedValue = serializeObject(outputValue); // Serialize string, boolean and number values to a string, but do not
  // attempt to coerce object, function, symbol, or other types as strings.

  if (typeof coercedValue === 'string') {
    return coercedValue;
  }

  if (typeof coercedValue === 'boolean') {
    return coercedValue ? 'true' : 'false';
  }

  if (Object(_polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(coercedValue)) {
    return coercedValue.toString();
  }

  throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("String cannot represent value: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(outputValue)));
}

function coerceString(inputValue) {
  if (typeof inputValue !== 'string') {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("String cannot represent a non string value: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(inputValue)));
  }

  return inputValue;
}

var GraphQLString = new _definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLScalarType"]({
  name: 'String',
  description: 'The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.',
  serialize: serializeString,
  parseValue: coerceString,
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].STRING) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("String cannot represent a non string value: ".concat(Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__["print"])(valueNode)), valueNode);
    }

    return valueNode.value;
  }
});

function serializeBoolean(outputValue) {
  var coercedValue = serializeObject(outputValue);

  if (typeof coercedValue === 'boolean') {
    return coercedValue;
  }

  if (Object(_polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(coercedValue)) {
    return coercedValue !== 0;
  }

  throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("Boolean cannot represent a non boolean value: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(coercedValue)));
}

function coerceBoolean(inputValue) {
  if (typeof inputValue !== 'boolean') {
    throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("Boolean cannot represent a non boolean value: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(inputValue)));
  }

  return inputValue;
}

var GraphQLBoolean = new _definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLScalarType"]({
  name: 'Boolean',
  description: 'The `Boolean` scalar type represents `true` or `false`.',
  serialize: serializeBoolean,
  parseValue: coerceBoolean,
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].BOOLEAN) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("Boolean cannot represent a non boolean value: ".concat(Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__["print"])(valueNode)), valueNode);
    }

    return valueNode.value;
  }
});

function serializeID(outputValue) {
  var coercedValue = serializeObject(outputValue);

  if (typeof coercedValue === 'string') {
    return coercedValue;
  }

  if (Object(_polyfills_isInteger_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(coercedValue)) {
    return String(coercedValue);
  }

  throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("ID cannot represent value: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(outputValue)));
}

function coerceID(inputValue) {
  if (typeof inputValue === 'string') {
    return inputValue;
  }

  if (Object(_polyfills_isInteger_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(inputValue)) {
    return inputValue.toString();
  }

  throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]("ID cannot represent value: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(inputValue)));
}

var GraphQLID = new _definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLScalarType"]({
  name: 'ID',
  description: 'The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.',
  serialize: serializeID,
  parseValue: coerceID,
  parseLiteral: function parseLiteral(valueNode) {
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].STRING && valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].INT) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLError"]('ID cannot represent a non-string and non-integer value: ' + Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__["print"])(valueNode), valueNode);
    }

    return valueNode.value;
  }
});
var specifiedScalarTypes = Object.freeze([GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID]);
function isSpecifiedScalarType(type) {
  return specifiedScalarTypes.some(function (_ref) {
    var name = _ref.name;
    return type.name === name;
  });
}


/***/ }),

/***/ "./node_modules/graphql/type/schema.mjs":
/*!**********************************************!*\
  !*** ./node_modules/graphql/type/schema.mjs ***!
  \**********************************************/
/*! exports provided: isSchema, assertSchema, GraphQLSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSchema", function() { return isSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertSchema", function() { return assertSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLSchema", function() { return GraphQLSchema; });
/* harmony import */ var _polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/find.mjs */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/arrayFrom.mjs */ "./node_modules/graphql/polyfills/arrayFrom.mjs");
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polyfills/symbols.mjs */ "./node_modules/graphql/polyfills/symbols.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/toObjMap.mjs */ "./node_modules/graphql/jsutils/toObjMap.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/instanceOf.mjs */ "./node_modules/graphql/jsutils/instanceOf.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _introspection_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _directives_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _definition_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./definition.mjs */ "./node_modules/graphql/type/definition.mjs");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }













/**
 * Test if the given value is a GraphQL schema.
 */

// eslint-disable-next-line no-redeclare
function isSchema(schema) {
  return Object(_jsutils_instanceOf_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])(schema, GraphQLSchema);
}
function assertSchema(schema) {
  if (!isSchema(schema)) {
    throw new Error("Expected ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(schema), " to be a GraphQL schema."));
  }

  return schema;
}
/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       query: MyAppQueryRootType,
 *       mutation: MyAppMutationRootType,
 *     })
 *
 * Note: When the schema is constructed, by default only the types that are
 * reachable by traversing the root types are included, other types must be
 * explicitly referenced.
 *
 * Example:
 *
 *     const characterInterface = new GraphQLInterfaceType({
 *       name: 'Character',
 *       ...
 *     });
 *
 *     const humanType = new GraphQLObjectType({
 *       name: 'Human',
 *       interfaces: [characterInterface],
 *       ...
 *     });
 *
 *     const droidType = new GraphQLObjectType({
 *       name: 'Droid',
 *       interfaces: [characterInterface],
 *       ...
 *     });
 *
 *     const schema = new GraphQLSchema({
 *       query: new GraphQLObjectType({
 *         name: 'Query',
 *         fields: {
 *           hero: { type: characterInterface, ... },
 *         }
 *       }),
 *       ...
 *       // Since this schema references only the `Character` interface it's
 *       // necessary to explicitly list the types that implement it if
 *       // you want them to be included in the final schema.
 *       types: [humanType, droidType],
 *     })
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. @include and
 * @skip) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       ...
 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
 *     })
 *
 */

var GraphQLSchema = /*#__PURE__*/function () {
  // Used as a cache for validateSchema().
  function GraphQLSchema(config) {
    var _config$directives;

    // If this schema was built from a source known to be valid, then it may be
    // marked with assumeValid to avoid an additional type system validation.
    this.__validationErrors = config.assumeValid === true ? [] : undefined; // Check for common mistakes during construction to produce early errors.

    Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_8__["default"])(config) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, 'Must provide configuration object.');
    !config.types || Array.isArray(config.types) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, "\"types\" must be Array if provided but got: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(config.types), "."));
    !config.directives || Array.isArray(config.directives) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, '"directives" must be Array if provided but got: ' + "".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(config.directives), "."));
    this.description = config.description;
    this.extensions = config.extensions && Object(_jsutils_toObjMap_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(config.extensions);
    this.astNode = config.astNode;
    this.extensionASTNodes = config.extensionASTNodes;
    this._queryType = config.query;
    this._mutationType = config.mutation;
    this._subscriptionType = config.subscription; // Provide specified directives (e.g. @include and @skip) by default.

    this._directives = (_config$directives = config.directives) !== null && _config$directives !== void 0 ? _config$directives : _directives_mjs__WEBPACK_IMPORTED_MODULE_10__["specifiedDirectives"]; // To preserve order of user-provided types, we add first to add them to
    // the set of "collected" types, so `collectReferencedTypes` ignore them.

    var allReferencedTypes = new Set(config.types);

    if (config.types != null) {
      for (var _i2 = 0, _config$types2 = config.types; _i2 < _config$types2.length; _i2++) {
        var type = _config$types2[_i2];
        // When we ready to process this type, we remove it from "collected" types
        // and then add it together with all dependent types in the correct position.
        allReferencedTypes.delete(type);
        collectReferencedTypes(type, allReferencedTypes);
      }
    }

    if (this._queryType != null) {
      collectReferencedTypes(this._queryType, allReferencedTypes);
    }

    if (this._mutationType != null) {
      collectReferencedTypes(this._mutationType, allReferencedTypes);
    }

    if (this._subscriptionType != null) {
      collectReferencedTypes(this._subscriptionType, allReferencedTypes);
    }

    for (var _i4 = 0, _this$_directives2 = this._directives; _i4 < _this$_directives2.length; _i4++) {
      var directive = _this$_directives2[_i4];

      // Directives are not validated until validateSchema() is called.
      if (Object(_directives_mjs__WEBPACK_IMPORTED_MODULE_10__["isDirective"])(directive)) {
        for (var _i6 = 0, _directive$args2 = directive.args; _i6 < _directive$args2.length; _i6++) {
          var arg = _directive$args2[_i6];
          collectReferencedTypes(arg.type, allReferencedTypes);
        }
      }
    }

    collectReferencedTypes(_introspection_mjs__WEBPACK_IMPORTED_MODULE_9__["__Schema"], allReferencedTypes); // Storing the resulting map for reference by the schema.

    this._typeMap = Object.create(null);
    this._subTypeMap = Object.create(null); // Keep track of all implementations by interface name.

    this._implementationsMap = Object.create(null);

    for (var _i8 = 0, _arrayFrom2 = Object(_polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(allReferencedTypes); _i8 < _arrayFrom2.length; _i8++) {
      var namedType = _arrayFrom2[_i8];

      if (namedType == null) {
        continue;
      }

      var typeName = namedType.name;
      typeName || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(0, 'One of the provided types for building the Schema is missing a name.');

      if (this._typeMap[typeName] !== undefined) {
        throw new Error("Schema must contain uniquely named types but contains multiple types named \"".concat(typeName, "\"."));
      }

      this._typeMap[typeName] = namedType;

      if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isInterfaceType"])(namedType)) {
        // Store implementations by interface.
        for (var _i10 = 0, _namedType$getInterfa2 = namedType.getInterfaces(); _i10 < _namedType$getInterfa2.length; _i10++) {
          var iface = _namedType$getInterfa2[_i10];

          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isInterfaceType"])(iface)) {
            var implementations = this._implementationsMap[iface.name];

            if (implementations === undefined) {
              implementations = this._implementationsMap[iface.name] = {
                objects: [],
                interfaces: []
              };
            }

            implementations.interfaces.push(namedType);
          }
        }
      } else if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isObjectType"])(namedType)) {
        // Store implementations by objects.
        for (var _i12 = 0, _namedType$getInterfa4 = namedType.getInterfaces(); _i12 < _namedType$getInterfa4.length; _i12++) {
          var _iface = _namedType$getInterfa4[_i12];

          if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isInterfaceType"])(_iface)) {
            var _implementations = this._implementationsMap[_iface.name];

            if (_implementations === undefined) {
              _implementations = this._implementationsMap[_iface.name] = {
                objects: [],
                interfaces: []
              };
            }

            _implementations.objects.push(namedType);
          }
        }
      }
    }
  }

  var _proto = GraphQLSchema.prototype;

  _proto.getQueryType = function getQueryType() {
    return this._queryType;
  };

  _proto.getMutationType = function getMutationType() {
    return this._mutationType;
  };

  _proto.getSubscriptionType = function getSubscriptionType() {
    return this._subscriptionType;
  };

  _proto.getTypeMap = function getTypeMap() {
    return this._typeMap;
  };

  _proto.getType = function getType(name) {
    return this.getTypeMap()[name];
  };

  _proto.getPossibleTypes = function getPossibleTypes(abstractType) {
    return Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isUnionType"])(abstractType) ? abstractType.getTypes() : this.getImplementations(abstractType).objects;
  };

  _proto.getImplementations = function getImplementations(interfaceType) {
    var implementations = this._implementationsMap[interfaceType.name];
    return implementations !== null && implementations !== void 0 ? implementations : {
      objects: [],
      interfaces: []
    };
  } // @deprecated: use isSubType instead - will be removed in v16.
  ;

  _proto.isPossibleType = function isPossibleType(abstractType, possibleType) {
    return this.isSubType(abstractType, possibleType);
  };

  _proto.isSubType = function isSubType(abstractType, maybeSubType) {
    var map = this._subTypeMap[abstractType.name];

    if (map === undefined) {
      map = Object.create(null);

      if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isUnionType"])(abstractType)) {
        for (var _i14 = 0, _abstractType$getType2 = abstractType.getTypes(); _i14 < _abstractType$getType2.length; _i14++) {
          var type = _abstractType$getType2[_i14];
          map[type.name] = true;
        }
      } else {
        var implementations = this.getImplementations(abstractType);

        for (var _i16 = 0, _implementations$obje2 = implementations.objects; _i16 < _implementations$obje2.length; _i16++) {
          var _type = _implementations$obje2[_i16];
          map[_type.name] = true;
        }

        for (var _i18 = 0, _implementations$inte2 = implementations.interfaces; _i18 < _implementations$inte2.length; _i18++) {
          var _type2 = _implementations$inte2[_i18];
          map[_type2.name] = true;
        }
      }

      this._subTypeMap[abstractType.name] = map;
    }

    return map[maybeSubType.name] !== undefined;
  };

  _proto.getDirectives = function getDirectives() {
    return this._directives;
  };

  _proto.getDirective = function getDirective(name) {
    return Object(_polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(this.getDirectives(), function (directive) {
      return directive.name === name;
    });
  };

  _proto.toConfig = function toConfig() {
    var _this$extensionASTNod;

    return {
      description: this.description,
      query: this.getQueryType(),
      mutation: this.getMutationType(),
      subscription: this.getSubscriptionType(),
      types: Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(this.getTypeMap()),
      directives: this.getDirectives().slice(),
      extensions: this.extensions,
      astNode: this.astNode,
      extensionASTNodes: (_this$extensionASTNod = this.extensionASTNodes) !== null && _this$extensionASTNod !== void 0 ? _this$extensionASTNod : [],
      assumeValid: this.__validationErrors !== undefined
    };
  } // $FlowFixMe Flow doesn't support computed properties yet
  ;

  _createClass(GraphQLSchema, [{
    key: _polyfills_symbols_mjs__WEBPACK_IMPORTED_MODULE_3__["SYMBOL_TO_STRING_TAG"],
    get: function get() {
      return 'GraphQLSchema';
    }
  }]);

  return GraphQLSchema;
}();

function collectReferencedTypes(type, typeSet) {
  var namedType = Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["getNamedType"])(type);

  if (!typeSet.has(namedType)) {
    typeSet.add(namedType);

    if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isUnionType"])(namedType)) {
      for (var _i20 = 0, _namedType$getTypes2 = namedType.getTypes(); _i20 < _namedType$getTypes2.length; _i20++) {
        var memberType = _namedType$getTypes2[_i20];
        collectReferencedTypes(memberType, typeSet);
      }
    } else if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isObjectType"])(namedType) || Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isInterfaceType"])(namedType)) {
      for (var _i22 = 0, _namedType$getInterfa6 = namedType.getInterfaces(); _i22 < _namedType$getInterfa6.length; _i22++) {
        var interfaceType = _namedType$getInterfa6[_i22];
        collectReferencedTypes(interfaceType, typeSet);
      }

      for (var _i24 = 0, _objectValues2 = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(namedType.getFields()); _i24 < _objectValues2.length; _i24++) {
        var field = _objectValues2[_i24];
        collectReferencedTypes(field.type, typeSet);

        for (var _i26 = 0, _field$args2 = field.args; _i26 < _field$args2.length; _i26++) {
          var arg = _field$args2[_i26];
          collectReferencedTypes(arg.type, typeSet);
        }
      }
    } else if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isInputObjectType"])(namedType)) {
      for (var _i28 = 0, _objectValues4 = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(namedType.getFields()); _i28 < _objectValues4.length; _i28++) {
        var _field = _objectValues4[_i28];
        collectReferencedTypes(_field.type, typeSet);
      }
    }
  }

  return typeSet;
}


/***/ }),

/***/ "./node_modules/graphql/type/validate.mjs":
/*!************************************************!*\
  !*** ./node_modules/graphql/type/validate.mjs ***!
  \************************************************/
/*! exports provided: validateSchema, assertValidSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSchema", function() { return validateSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidSchema", function() { return assertValidSchema; });
/* harmony import */ var _polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/find.mjs */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _polyfills_flatMap_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/flatMap.mjs */ "./node_modules/graphql/polyfills/flatMap.mjs");
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../error/locatedError.mjs */ "./node_modules/graphql/error/locatedError.mjs");
/* harmony import */ var _utilities_assertValidName_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utilities/assertValidName.mjs */ "./node_modules/graphql/utilities/assertValidName.mjs");
/* harmony import */ var _utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utilities/typeComparators.mjs */ "./node_modules/graphql/utilities/typeComparators.mjs");
/* harmony import */ var _directives_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _introspection_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./schema.mjs */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _definition_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./definition.mjs */ "./node_modules/graphql/type/definition.mjs");












/**
 * Implements the "Type Validation" sub-sections of the specification's
 * "Type System" section.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the Schema is valid.
 */

function validateSchema(schema) {
  // First check to ensure the provided value is in fact a GraphQLSchema.
  Object(_schema_mjs__WEBPACK_IMPORTED_MODULE_10__["assertSchema"])(schema); // If this Schema has already been validated, return the previous results.

  if (schema.__validationErrors) {
    return schema.__validationErrors;
  } // Validate the schema, producing a list of errors.


  var context = new SchemaValidationContext(schema);
  validateRootTypes(context);
  validateDirectives(context);
  validateTypes(context); // Persist the results of validation before returning to ensure validation
  // does not run multiple times for this schema.

  var errors = context.getErrors();
  schema.__validationErrors = errors;
  return errors;
}
/**
 * Utility function which asserts a schema is valid by throwing an error if
 * it is invalid.
 */

function assertValidSchema(schema) {
  var errors = validateSchema(schema);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}

var SchemaValidationContext = /*#__PURE__*/function () {
  function SchemaValidationContext(schema) {
    this._errors = [];
    this.schema = schema;
  }

  var _proto = SchemaValidationContext.prototype;

  _proto.reportError = function reportError(message, nodes) {
    var _nodes = Array.isArray(nodes) ? nodes.filter(Boolean) : nodes;

    this.addError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"](message, _nodes));
  };

  _proto.addError = function addError(error) {
    this._errors.push(error);
  };

  _proto.getErrors = function getErrors() {
    return this._errors;
  };

  return SchemaValidationContext;
}();

function validateRootTypes(context) {
  var schema = context.schema;
  var queryType = schema.getQueryType();

  if (!queryType) {
    context.reportError('Query root type must be provided.', schema.astNode);
  } else if (!Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isObjectType"])(queryType)) {
    context.reportError("Query root type must be Object type, it cannot be ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(queryType), "."), getOperationTypeNode(schema, queryType, 'query'));
  }

  var mutationType = schema.getMutationType();

  if (mutationType && !Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isObjectType"])(mutationType)) {
    context.reportError('Mutation root type must be Object type if provided, it cannot be ' + "".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(mutationType), "."), getOperationTypeNode(schema, mutationType, 'mutation'));
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType && !Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isObjectType"])(subscriptionType)) {
    context.reportError('Subscription root type must be Object type if provided, it cannot be ' + "".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(subscriptionType), "."), getOperationTypeNode(schema, subscriptionType, 'subscription'));
  }
}

function getOperationTypeNode(schema, type, operation) {
  var operationNodes = getAllSubNodes(schema, function (node) {
    return node.operationTypes;
  });

  for (var _i2 = 0; _i2 < operationNodes.length; _i2++) {
    var node = operationNodes[_i2];

    if (node.operation === operation) {
      return node.type;
    }
  }

  return type.astNode;
}

function validateDirectives(context) {
  for (var _i4 = 0, _context$schema$getDi2 = context.schema.getDirectives(); _i4 < _context$schema$getDi2.length; _i4++) {
    var directive = _context$schema$getDi2[_i4];

    // Ensure all directives are in fact GraphQL directives.
    if (!Object(_directives_mjs__WEBPACK_IMPORTED_MODULE_8__["isDirective"])(directive)) {
      context.reportError("Expected directive but got: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(directive), "."), directive === null || directive === void 0 ? void 0 : directive.astNode);
      continue;
    } // Ensure they are named correctly.


    validateName(context, directive); // TODO: Ensure proper locations.
    // Ensure the arguments are valid.

    for (var _i6 = 0, _directive$args2 = directive.args; _i6 < _directive$args2.length; _i6++) {
      var arg = _directive$args2[_i6];
      // Ensure they are named correctly.
      validateName(context, arg); // Ensure the type is an input type.

      if (!Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isInputType"])(arg.type)) {
        context.reportError("The type of @".concat(directive.name, "(").concat(arg.name, ":) must be Input Type ") + "but got: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(arg.type), "."), arg.astNode);
      }
    }
  }
}

function validateName(context, node) {
  // Ensure names are valid, however introspection types opt out.
  var error = Object(_utilities_assertValidName_mjs__WEBPACK_IMPORTED_MODULE_6__["isValidNameError"])(node.name);

  if (error) {
    context.addError(Object(_error_locatedError_mjs__WEBPACK_IMPORTED_MODULE_5__["locatedError"])(error, node.astNode));
  }
}

function validateTypes(context) {
  var validateInputObjectCircularRefs = createInputObjectCircularRefsValidator(context);
  var typeMap = context.schema.getTypeMap();

  for (var _i8 = 0, _objectValues2 = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(typeMap); _i8 < _objectValues2.length; _i8++) {
    var type = _objectValues2[_i8];

    // Ensure all provided types are in fact GraphQL type.
    if (!Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isNamedType"])(type)) {
      context.reportError("Expected GraphQL named type but got: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(type), "."), type.astNode);
      continue;
    } // Ensure it is named correctly (excluding introspection types).


    if (!Object(_introspection_mjs__WEBPACK_IMPORTED_MODULE_9__["isIntrospectionType"])(type)) {
      validateName(context, type);
    }

    if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isObjectType"])(type)) {
      // Ensure fields are valid
      validateFields(context, type); // Ensure objects implement the interfaces they claim to.

      validateInterfaces(context, type);
    } else if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isInterfaceType"])(type)) {
      // Ensure fields are valid.
      validateFields(context, type); // Ensure interfaces implement the interfaces they claim to.

      validateInterfaces(context, type);
    } else if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isUnionType"])(type)) {
      // Ensure Unions include valid member types.
      validateUnionMembers(context, type);
    } else if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isEnumType"])(type)) {
      // Ensure Enums have valid values.
      validateEnumValues(context, type);
    } else if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isInputObjectType"])(type)) {
      // Ensure Input Object fields are valid.
      validateInputFields(context, type); // Ensure Input Objects do not contain non-nullable circular references

      validateInputObjectCircularRefs(type);
    }
  }
}

function validateFields(context, type) {
  var fields = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type.getFields()); // Objects and Interfaces both must define one or more fields.

  if (fields.length === 0) {
    context.reportError("Type ".concat(type.name, " must define one or more fields."), getAllNodes(type));
  }

  for (var _i10 = 0; _i10 < fields.length; _i10++) {
    var field = fields[_i10];
    // Ensure they are named correctly.
    validateName(context, field); // Ensure the type is an output type

    if (!Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isOutputType"])(field.type)) {
      var _field$astNode;

      context.reportError("The type of ".concat(type.name, ".").concat(field.name, " must be Output Type ") + "but got: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(field.type), "."), (_field$astNode = field.astNode) === null || _field$astNode === void 0 ? void 0 : _field$astNode.type);
    } // Ensure the arguments are valid


    for (var _i12 = 0, _field$args2 = field.args; _i12 < _field$args2.length; _i12++) {
      var arg = _field$args2[_i12];
      var argName = arg.name; // Ensure they are named correctly.

      validateName(context, arg); // Ensure the type is an input type

      if (!Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isInputType"])(arg.type)) {
        var _arg$astNode;

        context.reportError("The type of ".concat(type.name, ".").concat(field.name, "(").concat(argName, ":) must be Input ") + "Type but got: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(arg.type), "."), (_arg$astNode = arg.astNode) === null || _arg$astNode === void 0 ? void 0 : _arg$astNode.type);
      }
    }
  }
}

function validateInterfaces(context, type) {
  var ifaceTypeNames = Object.create(null);

  for (var _i14 = 0, _type$getInterfaces2 = type.getInterfaces(); _i14 < _type$getInterfaces2.length; _i14++) {
    var iface = _type$getInterfaces2[_i14];

    if (!Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isInterfaceType"])(iface)) {
      context.reportError("Type ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(type), " must only implement Interface types, ") + "it cannot implement ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(iface), "."), getAllImplementsInterfaceNodes(type, iface));
      continue;
    }

    if (type === iface) {
      context.reportError("Type ".concat(type.name, " cannot implement itself because it would create a circular reference."), getAllImplementsInterfaceNodes(type, iface));
      continue;
    }

    if (ifaceTypeNames[iface.name]) {
      context.reportError("Type ".concat(type.name, " can only implement ").concat(iface.name, " once."), getAllImplementsInterfaceNodes(type, iface));
      continue;
    }

    ifaceTypeNames[iface.name] = true;
    validateTypeImplementsAncestors(context, type, iface);
    validateTypeImplementsInterface(context, type, iface);
  }
}

function validateTypeImplementsInterface(context, type, iface) {
  var typeFieldMap = type.getFields(); // Assert each interface field is implemented.

  for (var _i16 = 0, _objectValues4 = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(iface.getFields()); _i16 < _objectValues4.length; _i16++) {
    var ifaceField = _objectValues4[_i16];
    var fieldName = ifaceField.name;
    var typeField = typeFieldMap[fieldName]; // Assert interface field exists on type.

    if (!typeField) {
      context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expected but ").concat(type.name, " does not provide it."), [ifaceField.astNode].concat(getAllNodes(type)));
      continue;
    } // Assert interface field type is satisfied by type field type, by being
    // a valid subtype. (covariant)


    if (!Object(_utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_7__["isTypeSubTypeOf"])(context.schema, typeField.type, ifaceField.type)) {
      context.reportError("Interface field ".concat(iface.name, ".").concat(fieldName, " expects type ") + "".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(ifaceField.type), " but ").concat(type.name, ".").concat(fieldName, " ") + "is type ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(typeField.type), "."), [ifaceField.astNode.type, typeField.astNode.type]);
    } // Assert each interface field arg is implemented.


    var _loop = function _loop(_i18, _ifaceField$args2) {
      var ifaceArg = _ifaceField$args2[_i18];
      var argName = ifaceArg.name;
      var typeArg = Object(_polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(typeField.args, function (arg) {
        return arg.name === argName;
      }); // Assert interface field arg exists on object field.

      if (!typeArg) {
        context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) expected but ").concat(type.name, ".").concat(fieldName, " does not provide it."), [ifaceArg.astNode, typeField.astNode]);
        return "continue";
      } // Assert interface field arg type matches object field arg type.
      // (invariant)
      // TODO: change to contravariant?


      if (!Object(_utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_7__["isEqualType"])(ifaceArg.type, typeArg.type)) {
        context.reportError("Interface field argument ".concat(iface.name, ".").concat(fieldName, "(").concat(argName, ":) ") + "expects type ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(ifaceArg.type), " but ") + "".concat(type.name, ".").concat(fieldName, "(").concat(argName, ":) is type ") + "".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(typeArg.type), "."), [ifaceArg.astNode.type, typeArg.astNode.type]);
      } // TODO: validate default values?

    };

    for (var _i18 = 0, _ifaceField$args2 = ifaceField.args; _i18 < _ifaceField$args2.length; _i18++) {
      var _ret = _loop(_i18, _ifaceField$args2);

      if (_ret === "continue") continue;
    } // Assert additional arguments must not be required.


    var _loop2 = function _loop2(_i20, _typeField$args2) {
      var typeArg = _typeField$args2[_i20];
      var argName = typeArg.name;
      var ifaceArg = Object(_polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(ifaceField.args, function (arg) {
        return arg.name === argName;
      });

      if (!ifaceArg && Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isRequiredArgument"])(typeArg)) {
        context.reportError("Object field ".concat(type.name, ".").concat(fieldName, " includes required argument ").concat(argName, " that is missing from the Interface field ").concat(iface.name, ".").concat(fieldName, "."), [typeArg.astNode, ifaceField.astNode]);
      }
    };

    for (var _i20 = 0, _typeField$args2 = typeField.args; _i20 < _typeField$args2.length; _i20++) {
      _loop2(_i20, _typeField$args2);
    }
  }
}

function validateTypeImplementsAncestors(context, type, iface) {
  var ifaceInterfaces = type.getInterfaces();

  for (var _i22 = 0, _iface$getInterfaces2 = iface.getInterfaces(); _i22 < _iface$getInterfaces2.length; _i22++) {
    var transitive = _iface$getInterfaces2[_i22];

    if (ifaceInterfaces.indexOf(transitive) === -1) {
      context.reportError(transitive === type ? "Type ".concat(type.name, " cannot implement ").concat(iface.name, " because it would create a circular reference.") : "Type ".concat(type.name, " must implement ").concat(transitive.name, " because it is implemented by ").concat(iface.name, "."), [].concat(getAllImplementsInterfaceNodes(iface, transitive), getAllImplementsInterfaceNodes(type, iface)));
    }
  }
}

function validateUnionMembers(context, union) {
  var memberTypes = union.getTypes();

  if (memberTypes.length === 0) {
    context.reportError("Union type ".concat(union.name, " must define one or more member types."), getAllNodes(union));
  }

  var includedTypeNames = Object.create(null);

  for (var _i24 = 0; _i24 < memberTypes.length; _i24++) {
    var memberType = memberTypes[_i24];

    if (includedTypeNames[memberType.name]) {
      context.reportError("Union type ".concat(union.name, " can only include type ").concat(memberType.name, " once."), getUnionMemberTypeNodes(union, memberType.name));
      continue;
    }

    includedTypeNames[memberType.name] = true;

    if (!Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isObjectType"])(memberType)) {
      context.reportError("Union type ".concat(union.name, " can only include Object types, ") + "it cannot include ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(memberType), "."), getUnionMemberTypeNodes(union, String(memberType)));
    }
  }
}

function validateEnumValues(context, enumType) {
  var enumValues = enumType.getValues();

  if (enumValues.length === 0) {
    context.reportError("Enum type ".concat(enumType.name, " must define one or more values."), getAllNodes(enumType));
  }

  for (var _i26 = 0; _i26 < enumValues.length; _i26++) {
    var enumValue = enumValues[_i26];
    var valueName = enumValue.name; // Ensure valid name.

    validateName(context, enumValue);

    if (valueName === 'true' || valueName === 'false' || valueName === 'null') {
      context.reportError("Enum type ".concat(enumType.name, " cannot include value: ").concat(valueName, "."), enumValue.astNode);
    }
  }
}

function validateInputFields(context, inputObj) {
  var fields = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(inputObj.getFields());

  if (fields.length === 0) {
    context.reportError("Input Object type ".concat(inputObj.name, " must define one or more fields."), getAllNodes(inputObj));
  } // Ensure the arguments are valid


  for (var _i28 = 0; _i28 < fields.length; _i28++) {
    var field = fields[_i28];
    // Ensure they are named correctly.
    validateName(context, field); // Ensure the type is an input type

    if (!Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isInputType"])(field.type)) {
      var _field$astNode2;

      context.reportError("The type of ".concat(inputObj.name, ".").concat(field.name, " must be Input Type ") + "but got: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(field.type), "."), (_field$astNode2 = field.astNode) === null || _field$astNode2 === void 0 ? void 0 : _field$astNode2.type);
    }
  }
}

function createInputObjectCircularRefsValidator(context) {
  // Modified copy of algorithm from 'src/validation/rules/NoFragmentCycles.js'.
  // Tracks already visited types to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedTypes = Object.create(null); // Array of types nodes used to produce meaningful errors

  var fieldPath = []; // Position in the type path

  var fieldPathIndexByTypeName = Object.create(null);
  return detectCycleRecursive; // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.

  function detectCycleRecursive(inputObj) {
    if (visitedTypes[inputObj.name]) {
      return;
    }

    visitedTypes[inputObj.name] = true;
    fieldPathIndexByTypeName[inputObj.name] = fieldPath.length;
    var fields = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(inputObj.getFields());

    for (var _i30 = 0; _i30 < fields.length; _i30++) {
      var field = fields[_i30];

      if (Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isNonNullType"])(field.type) && Object(_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isInputObjectType"])(field.type.ofType)) {
        var fieldType = field.type.ofType;
        var cycleIndex = fieldPathIndexByTypeName[fieldType.name];
        fieldPath.push(field);

        if (cycleIndex === undefined) {
          detectCycleRecursive(fieldType);
        } else {
          var cyclePath = fieldPath.slice(cycleIndex);
          var pathStr = cyclePath.map(function (fieldObj) {
            return fieldObj.name;
          }).join('.');
          context.reportError("Cannot reference Input Object \"".concat(fieldType.name, "\" within itself through a series of non-null fields: \"").concat(pathStr, "\"."), cyclePath.map(function (fieldObj) {
            return fieldObj.astNode;
          }));
        }

        fieldPath.pop();
      }
    }

    fieldPathIndexByTypeName[inputObj.name] = undefined;
  }
}

function getAllNodes(object) {
  var astNode = object.astNode,
      extensionASTNodes = object.extensionASTNodes;
  return astNode ? extensionASTNodes ? [astNode].concat(extensionASTNodes) : [astNode] : extensionASTNodes !== null && extensionASTNodes !== void 0 ? extensionASTNodes : [];
}

function getAllSubNodes(object, getter) {
  /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */
  return Object(_polyfills_flatMap_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(getAllNodes(object), function (item) {
    var _getter;

    return (_getter = getter(item)) !== null && _getter !== void 0 ? _getter : [];
  });
}

function getAllImplementsInterfaceNodes(type, iface) {
  return getAllSubNodes(type, function (typeNode) {
    return typeNode.interfaces;
  }).filter(function (ifaceNode) {
    return ifaceNode.name.value === iface.name;
  });
}

function getUnionMemberTypeNodes(union, typeName) {
  return getAllSubNodes(union, function (unionNode) {
    return unionNode.types;
  }).filter(function (typeNode) {
    return typeNode.name.value === typeName;
  });
}


/***/ }),

/***/ "./node_modules/graphql/utilities/TypeInfo.mjs":
/*!*****************************************************!*\
  !*** ./node_modules/graphql/utilities/TypeInfo.mjs ***!
  \*****************************************************/
/*! exports provided: TypeInfo, visitWithTypeInfo */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeInfo", function() { return TypeInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitWithTypeInfo", function() { return visitWithTypeInfo; });
/* harmony import */ var _polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/find.mjs */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _language_ast_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/ast.mjs */ "./node_modules/graphql/language/ast.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");







/**
 * TypeInfo is a utility class which, given a GraphQL schema, can keep track
 * of the current field and type definitions at any point in a GraphQL document
 * AST during a recursive descent by calling `enter(node)` and `leave(node)`.
 */

var TypeInfo = /*#__PURE__*/function () {
  function TypeInfo(schema, // NOTE: this experimental optional second parameter is only needed in order
  // to support non-spec-compliant code bases. You should never need to use it.
  // It may disappear in the future.
  getFieldDefFn, // Initial type may be provided in rare cases to facilitate traversals
  // beginning somewhere other than documents.
  initialType) {
    this._schema = schema;
    this._typeStack = [];
    this._parentTypeStack = [];
    this._inputTypeStack = [];
    this._fieldDefStack = [];
    this._defaultValueStack = [];
    this._directive = null;
    this._argument = null;
    this._enumValue = null;
    this._getFieldDef = getFieldDefFn !== null && getFieldDefFn !== void 0 ? getFieldDefFn : getFieldDef;

    if (initialType) {
      if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isInputType"])(initialType)) {
        this._inputTypeStack.push(initialType);
      }

      if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isCompositeType"])(initialType)) {
        this._parentTypeStack.push(initialType);
      }

      if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isOutputType"])(initialType)) {
        this._typeStack.push(initialType);
      }
    }
  }

  var _proto = TypeInfo.prototype;

  _proto.getType = function getType() {
    if (this._typeStack.length > 0) {
      return this._typeStack[this._typeStack.length - 1];
    }
  };

  _proto.getParentType = function getParentType() {
    if (this._parentTypeStack.length > 0) {
      return this._parentTypeStack[this._parentTypeStack.length - 1];
    }
  };

  _proto.getInputType = function getInputType() {
    if (this._inputTypeStack.length > 0) {
      return this._inputTypeStack[this._inputTypeStack.length - 1];
    }
  };

  _proto.getParentInputType = function getParentInputType() {
    if (this._inputTypeStack.length > 1) {
      return this._inputTypeStack[this._inputTypeStack.length - 2];
    }
  };

  _proto.getFieldDef = function getFieldDef() {
    if (this._fieldDefStack.length > 0) {
      return this._fieldDefStack[this._fieldDefStack.length - 1];
    }
  };

  _proto.getDefaultValue = function getDefaultValue() {
    if (this._defaultValueStack.length > 0) {
      return this._defaultValueStack[this._defaultValueStack.length - 1];
    }
  };

  _proto.getDirective = function getDirective() {
    return this._directive;
  };

  _proto.getArgument = function getArgument() {
    return this._argument;
  };

  _proto.getEnumValue = function getEnumValue() {
    return this._enumValue;
  };

  _proto.enter = function enter(node) {
    var schema = this._schema; // Note: many of the types below are explicitly typed as "mixed" to drop
    // any assumptions of a valid schema to ensure runtime types are properly
    // checked before continuing since TypeInfo is used as part of validation
    // which occurs before guarantees of schema and document validity.

    switch (node.kind) {
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SELECTION_SET:
        {
          var namedType = Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["getNamedType"])(this.getType());

          this._parentTypeStack.push(Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isCompositeType"])(namedType) ? namedType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD:
        {
          var parentType = this.getParentType();
          var fieldDef;
          var fieldType;

          if (parentType) {
            fieldDef = this._getFieldDef(schema, parentType, node);

            if (fieldDef) {
              fieldType = fieldDef.type;
            }
          }

          this._fieldDefStack.push(fieldDef);

          this._typeStack.push(Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isOutputType"])(fieldType) ? fieldType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE:
        this._directive = schema.getDirective(node.name.value);
        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION:
        {
          var type;

          switch (node.operation) {
            case 'query':
              type = schema.getQueryType();
              break;

            case 'mutation':
              type = schema.getMutationType();
              break;

            case 'subscription':
              type = schema.getSubscriptionType();
              break;
          }

          this._typeStack.push(Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isObjectType"])(type) ? type : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INLINE_FRAGMENT:
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_DEFINITION:
        {
          var typeConditionAST = node.typeCondition;
          var outputType = typeConditionAST ? Object(_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_6__["typeFromAST"])(schema, typeConditionAST) : Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["getNamedType"])(this.getType());

          this._typeStack.push(Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isOutputType"])(outputType) ? outputType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].VARIABLE_DEFINITION:
        {
          var inputType = Object(_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_6__["typeFromAST"])(schema, node.type);

          this._inputTypeStack.push(Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isInputType"])(inputType) ? inputType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ARGUMENT:
        {
          var _this$getDirective;

          var argDef;
          var argType;
          var fieldOrDirective = (_this$getDirective = this.getDirective()) !== null && _this$getDirective !== void 0 ? _this$getDirective : this.getFieldDef();

          if (fieldOrDirective) {
            argDef = Object(_polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(fieldOrDirective.args, function (arg) {
              return arg.name === node.name.value;
            });

            if (argDef) {
              argType = argDef.type;
            }
          }

          this._argument = argDef;

          this._defaultValueStack.push(argDef ? argDef.defaultValue : undefined);

          this._inputTypeStack.push(Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isInputType"])(argType) ? argType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].LIST:
        {
          var listType = Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["getNullableType"])(this.getInputType());
          var itemType = Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isListType"])(listType) ? listType.ofType : listType; // List positions never have a default value.

          this._defaultValueStack.push(undefined);

          this._inputTypeStack.push(Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isInputType"])(itemType) ? itemType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_FIELD:
        {
          var objectType = Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["getNamedType"])(this.getInputType());
          var inputFieldType;
          var inputField;

          if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isInputObjectType"])(objectType)) {
            inputField = objectType.getFields()[node.name.value];

            if (inputField) {
              inputFieldType = inputField.type;
            }
          }

          this._defaultValueStack.push(inputField ? inputField.defaultValue : undefined);

          this._inputTypeStack.push(Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isInputType"])(inputFieldType) ? inputFieldType : undefined);

          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM:
        {
          var enumType = Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["getNamedType"])(this.getInputType());
          var enumValue;

          if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isEnumType"])(enumType)) {
            enumValue = enumType.getValue(node.value);
          }

          this._enumValue = enumValue;
          break;
        }
    }
  };

  _proto.leave = function leave(node) {
    switch (node.kind) {
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SELECTION_SET:
        this._parentTypeStack.pop();

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FIELD:
        this._fieldDefStack.pop();

        this._typeStack.pop();

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE:
        this._directive = null;
        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION:
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].INLINE_FRAGMENT:
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].FRAGMENT_DEFINITION:
        this._typeStack.pop();

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].VARIABLE_DEFINITION:
        this._inputTypeStack.pop();

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ARGUMENT:
        this._argument = null;

        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].LIST:
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OBJECT_FIELD:
        this._defaultValueStack.pop();

        this._inputTypeStack.pop();

        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].ENUM:
        this._enumValue = null;
        break;
    }
  };

  return TypeInfo;
}();
/**
 * Not exactly the same as the executor's definition of getFieldDef, in this
 * statically evaluated environment we do not always have an Object type,
 * and need to handle Interface and Union types.
 */

function getFieldDef(schema, parentType, fieldNode) {
  var name = fieldNode.name.value;

  if (name === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__["SchemaMetaFieldDef"].name && schema.getQueryType() === parentType) {
    return _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__["SchemaMetaFieldDef"];
  }

  if (name === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__["TypeMetaFieldDef"].name && schema.getQueryType() === parentType) {
    return _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__["TypeMetaFieldDef"];
  }

  if (name === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__["TypeNameMetaFieldDef"].name && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isCompositeType"])(parentType)) {
    return _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__["TypeNameMetaFieldDef"];
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isObjectType"])(parentType) || Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isInterfaceType"])(parentType)) {
    return parentType.getFields()[name];
  }
}
/**
 * Creates a new visitor instance which maintains a provided TypeInfo instance
 * along with visiting visitor.
 */


function visitWithTypeInfo(typeInfo, visitor) {
  return {
    enter: function enter(node) {
      typeInfo.enter(node);
      var fn = Object(_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__["getVisitFn"])(visitor, node.kind,
      /* isLeaving */
      false);

      if (fn) {
        var result = fn.apply(visitor, arguments);

        if (result !== undefined) {
          typeInfo.leave(node);

          if (Object(_language_ast_mjs__WEBPACK_IMPORTED_MODULE_3__["isNode"])(result)) {
            typeInfo.enter(result);
          }
        }

        return result;
      }
    },
    leave: function leave(node) {
      var fn = Object(_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__["getVisitFn"])(visitor, node.kind,
      /* isLeaving */
      true);
      var result;

      if (fn) {
        result = fn.apply(visitor, arguments);
      }

      typeInfo.leave(node);
      return result;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/utilities/assertValidName.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/utilities/assertValidName.mjs ***!
  \************************************************************/
/*! exports provided: assertValidName, isValidNameError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidName", function() { return assertValidName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidNameError", function() { return isValidNameError; });
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


var NAME_RX = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
/**
 * Upholds the spec rules about naming.
 */

function assertValidName(name) {
  var error = isValidNameError(name);

  if (error) {
    throw error;
  }

  return name;
}
/**
 * Returns an Error if a name is invalid.
 */

function isValidNameError(name) {
  typeof name === 'string' || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'Expected name to be a string.');

  if (name.length > 1 && name[0] === '_' && name[1] === '_') {
    return new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Name \"".concat(name, "\" must not begin with \"__\", which is reserved by GraphQL introspection."));
  }

  if (!NAME_RX.test(name)) {
    return new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Names must match /^[_a-zA-Z][_a-zA-Z0-9]*$/ but \"".concat(name, "\" does not."));
  }
}


/***/ }),

/***/ "./node_modules/graphql/utilities/astFromValue.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/utilities/astFromValue.mjs ***!
  \*********************************************************/
/*! exports provided: astFromValue */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "astFromValue", function() { return astFromValue; });
/* harmony import */ var _polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/isFinite.mjs */ "./node_modules/graphql/polyfills/isFinite.mjs");
/* harmony import */ var _polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/arrayFrom.mjs */ "./node_modules/graphql/polyfills/arrayFrom.mjs");
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_isCollection_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/isCollection.mjs */ "./node_modules/graphql/jsutils/isCollection.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../type/scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");










/**
 * Produces a GraphQL Value AST given a JavaScript object.
 * Function will match JavaScript/JSON values to GraphQL AST schema format
 * by using suggested GraphQLInputType. For example:
 *
 *     astFromValue("value", GraphQLString)
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * JavaScript values.
 *
 * | JSON Value    | GraphQL Value        |
 * | ------------- | -------------------- |
 * | Object        | Input Object         |
 * | Array         | List                 |
 * | Boolean       | Boolean              |
 * | String        | String / Enum Value  |
 * | Number        | Int / Float          |
 * | Mixed         | Enum Value           |
 * | null          | NullValue            |
 *
 */

function astFromValue(value, type) {
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_9__["isNonNullType"])(type)) {
    var astValue = astFromValue(value, type.ofType);

    if ((astValue === null || astValue === void 0 ? void 0 : astValue.kind) === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__["Kind"].NULL) {
      return null;
    }

    return astValue;
  } // only explicit null, not undefined, NaN


  if (value === null) {
    return {
      kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__["Kind"].NULL
    };
  } // undefined


  if (value === undefined) {
    return null;
  } // Convert JavaScript array to GraphQL list. If the GraphQLType is a list, but
  // the value is not an array, convert the value using the list's item type.


  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_9__["isListType"])(type)) {
    var itemType = type.ofType;

    if (Object(_jsutils_isCollection_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(value)) {
      var valuesNodes = []; // Since we transpile for-of in loose mode it doesn't support iterators
      // and it's required to first convert iteratable into array

      for (var _i2 = 0, _arrayFrom2 = Object(_polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(value); _i2 < _arrayFrom2.length; _i2++) {
        var item = _arrayFrom2[_i2];
        var itemNode = astFromValue(item, itemType);

        if (itemNode != null) {
          valuesNodes.push(itemNode);
        }
      }

      return {
        kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__["Kind"].LIST,
        values: valuesNodes
      };
    }

    return astFromValue(value, itemType);
  } // Populate the fields of the input object by creating ASTs from each value
  // in the JavaScript object according to the fields in the input type.


  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_9__["isInputObjectType"])(type)) {
    if (!Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(value)) {
      return null;
    }

    var fieldNodes = [];

    for (var _i4 = 0, _objectValues2 = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type.getFields()); _i4 < _objectValues2.length; _i4++) {
      var field = _objectValues2[_i4];
      var fieldValue = astFromValue(value[field.name], field.type);

      if (fieldValue) {
        fieldNodes.push({
          kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__["Kind"].OBJECT_FIELD,
          name: {
            kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__["Kind"].NAME,
            value: field.name
          },
          value: fieldValue
        });
      }
    }

    return {
      kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__["Kind"].OBJECT,
      fields: fieldNodes
    };
  }

  /* istanbul ignore else */
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_9__["isLeafType"])(type)) {
    // Since value is an internally represented value, it must be serialized
    // to an externally represented value before converting into an AST.
    var serialized = type.serialize(value);

    if (serialized == null) {
      return null;
    } // Others serialize based on their corresponding JavaScript scalar types.


    if (typeof serialized === 'boolean') {
      return {
        kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__["Kind"].BOOLEAN,
        value: serialized
      };
    } // JavaScript numbers can be Int or Float values.


    if (typeof serialized === 'number' && Object(_polyfills_isFinite_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(serialized)) {
      var stringNum = String(serialized);
      return integerStringRegExp.test(stringNum) ? {
        kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__["Kind"].INT,
        value: stringNum
      } : {
        kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__["Kind"].FLOAT,
        value: stringNum
      };
    }

    if (typeof serialized === 'string') {
      // Enum types use Enum literals.
      if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_9__["isEnumType"])(type)) {
        return {
          kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__["Kind"].ENUM,
          value: serialized
        };
      } // ID types can use Int literals.


      if (type === _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_8__["GraphQLID"] && integerStringRegExp.test(serialized)) {
        return {
          kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__["Kind"].INT,
          value: serialized
        };
      }

      return {
        kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_7__["Kind"].STRING,
        value: serialized
      };
    }

    throw new TypeError("Cannot convert value to AST: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(serialized), "."));
  } // Not reachable. All possible input types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Unexpected input type: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(type));
}
/**
 * IntValue:
 *   - NegativeSign? 0
 *   - NegativeSign? NonZeroDigit ( Digit+ )?
 */

var integerStringRegExp = /^-?(?:0|[1-9][0-9]*)$/;


/***/ }),

/***/ "./node_modules/graphql/utilities/buildASTSchema.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/graphql/utilities/buildASTSchema.mjs ***!
  \***********************************************************/
/*! exports provided: buildASTSchema, buildSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildASTSchema", function() { return buildASTSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildSchema", function() { return buildSchema; });
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_parser_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var _validation_validate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validation/validate.mjs */ "./node_modules/graphql/validation/validate.mjs");
/* harmony import */ var _type_schema_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/schema.mjs */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _extendSchema_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extendSchema.mjs */ "./node_modules/graphql/utilities/extendSchema.mjs");








/**
 * This takes the ast of a schema document produced by the parse function in
 * src/language/parser.js.
 *
 * If no schema definition is provided, then it will look for types named Query
 * and Mutation.
 *
 * Given that AST it constructs a GraphQLSchema. The resulting schema
 * has no resolve methods, so execution will use default resolvers.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function buildASTSchema(documentAST, options) {
  documentAST != null && documentAST.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].DOCUMENT || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'Must provide valid Document AST.');

  if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
    Object(_validation_validate_mjs__WEBPACK_IMPORTED_MODULE_3__["assertValidSDL"])(documentAST);
  }

  var config = Object(_extendSchema_mjs__WEBPACK_IMPORTED_MODULE_6__["extendSchemaImpl"])(emptySchemaConfig, documentAST, options);

  if (config.astNode == null) {
    for (var _i2 = 0, _config$types2 = config.types; _i2 < _config$types2.length; _i2++) {
      var type = _config$types2[_i2];

      switch (type.name) {
        // Note: While this could make early assertions to get the correctly
        // typed values below, that would throw immediately while type system
        // validation with validateSchema() will produce more actionable results.
        case 'Query':
          config.query = type;
          break;

        case 'Mutation':
          config.mutation = type;
          break;

        case 'Subscription':
          config.subscription = type;
          break;
      }
    }
  }

  var directives = config.directives; // If specified directives were not explicitly declared, add them.

  if (!directives.some(function (directive) {
    return directive.name === 'skip';
  })) {
    directives.push(_type_directives_mjs__WEBPACK_IMPORTED_MODULE_5__["GraphQLSkipDirective"]);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'include';
  })) {
    directives.push(_type_directives_mjs__WEBPACK_IMPORTED_MODULE_5__["GraphQLIncludeDirective"]);
  }

  if (!directives.some(function (directive) {
    return directive.name === 'deprecated';
  })) {
    directives.push(_type_directives_mjs__WEBPACK_IMPORTED_MODULE_5__["GraphQLDeprecatedDirective"]);
  }

  return new _type_schema_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLSchema"](config);
}
var emptySchemaConfig = new _type_schema_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLSchema"]({
  directives: []
}).toConfig();
/**
 * A helper function to build a GraphQLSchema directly from a source
 * document.
 */

function buildSchema(source, options) {
  var document = Object(_language_parser_mjs__WEBPACK_IMPORTED_MODULE_2__["parse"])(source, {
    noLocation: options === null || options === void 0 ? void 0 : options.noLocation,
    allowLegacySDLEmptyFields: options === null || options === void 0 ? void 0 : options.allowLegacySDLEmptyFields,
    allowLegacySDLImplementsInterfaces: options === null || options === void 0 ? void 0 : options.allowLegacySDLImplementsInterfaces,
    experimentalFragmentVariables: options === null || options === void 0 ? void 0 : options.experimentalFragmentVariables
  });
  return buildASTSchema(document, {
    commentDescriptions: options === null || options === void 0 ? void 0 : options.commentDescriptions,
    assumeValidSDL: options === null || options === void 0 ? void 0 : options.assumeValidSDL,
    assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
  });
}


/***/ }),

/***/ "./node_modules/graphql/utilities/buildClientSchema.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/graphql/utilities/buildClientSchema.mjs ***!
  \**************************************************************/
/*! exports provided: buildClientSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildClientSchema", function() { return buildClientSchema; });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/keyValMap.mjs */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_parser_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_schema_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../type/schema.mjs */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./valueFromAST.mjs */ "./node_modules/graphql/utilities/valueFromAST.mjs");













/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 *
 * This function expects a complete introspection result. Don't forget to check
 * the "errors" field of a server response before calling this function.
 */
function buildClientSchema(introspection, options) {
  Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(introspection) && Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(introspection.__schema) || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(0, "Invalid or incomplete introspection result. Ensure that you are passing \"data\" property of introspection response and no \"errors\" was returned alongside: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(introspection), ".")); // Get the schema from the introspection result.

  var schemaIntrospection = introspection.__schema; // Iterate through all types, getting the type definition for each.

  var typeMap = Object(_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(schemaIntrospection.types, function (typeIntrospection) {
    return typeIntrospection.name;
  }, function (typeIntrospection) {
    return buildType(typeIntrospection);
  }); // Include standard types only if they are used.

  for (var _i2 = 0, _ref2 = [].concat(_type_scalars_mjs__WEBPACK_IMPORTED_MODULE_7__["specifiedScalarTypes"], _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_8__["introspectionTypes"]); _i2 < _ref2.length; _i2++) {
    var stdType = _ref2[_i2];

    if (typeMap[stdType.name]) {
      typeMap[stdType.name] = stdType;
    }
  } // Get the root Query, Mutation, and Subscription types.


  var queryType = schemaIntrospection.queryType ? getObjectType(schemaIntrospection.queryType) : null;
  var mutationType = schemaIntrospection.mutationType ? getObjectType(schemaIntrospection.mutationType) : null;
  var subscriptionType = schemaIntrospection.subscriptionType ? getObjectType(schemaIntrospection.subscriptionType) : null; // Get the directives supported by Introspection, assuming empty-set if
  // directives were not queried for.

  var directives = schemaIntrospection.directives ? schemaIntrospection.directives.map(buildDirective) : []; // Then produce and return a Schema with these types.

  return new _type_schema_mjs__WEBPACK_IMPORTED_MODULE_9__["GraphQLSchema"]({
    description: schemaIntrospection.description,
    query: queryType,
    mutation: mutationType,
    subscription: subscriptionType,
    types: Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(typeMap),
    directives: directives,
    assumeValid: options === null || options === void 0 ? void 0 : options.assumeValid
  }); // Given a type reference in introspection, return the GraphQLType instance.
  // preferring cached instances before building new instances.

  function getType(typeRef) {
    if (typeRef.kind === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].LIST) {
      var itemRef = typeRef.ofType;

      if (!itemRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      return Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLList"])(getType(itemRef));
    }

    if (typeRef.kind === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].NON_NULL) {
      var nullableRef = typeRef.ofType;

      if (!nullableRef) {
        throw new Error('Decorated type deeper than introspection query.');
      }

      var nullableType = getType(nullableRef);
      return Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLNonNull"])(Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["assertNullableType"])(nullableType));
    }

    return getNamedType(typeRef);
  }

  function getNamedType(typeRef) {
    var typeName = typeRef.name;

    if (!typeName) {
      throw new Error("Unknown type reference: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(typeRef), "."));
    }

    var type = typeMap[typeName];

    if (!type) {
      throw new Error("Invalid or incomplete schema, unknown type: ".concat(typeName, ". Ensure that a full introspection query is used in order to build a client schema."));
    }

    return type;
  }

  function getObjectType(typeRef) {
    return Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["assertObjectType"])(getNamedType(typeRef));
  }

  function getInterfaceType(typeRef) {
    return Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["assertInterfaceType"])(getNamedType(typeRef));
  } // Given a type's introspection result, construct the correct
  // GraphQLType instance.


  function buildType(type) {
    if (type != null && type.name != null && type.kind != null) {
      switch (type.kind) {
        case _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].SCALAR:
          return buildScalarDef(type);

        case _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].OBJECT:
          return buildObjectDef(type);

        case _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].INTERFACE:
          return buildInterfaceDef(type);

        case _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].UNION:
          return buildUnionDef(type);

        case _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].ENUM:
          return buildEnumDef(type);

        case _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].INPUT_OBJECT:
          return buildInputObjectDef(type);
      }
    }

    var typeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(type);
    throw new Error("Invalid or incomplete introspection result. Ensure that a full introspection query is used in order to build a client schema: ".concat(typeStr, "."));
  }

  function buildScalarDef(scalarIntrospection) {
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLScalarType"]({
      name: scalarIntrospection.name,
      description: scalarIntrospection.description
    });
  }

  function buildImplementationsList(implementingIntrospection) {
    // TODO: Temporary workaround until GraphQL ecosystem will fully support
    // 'interfaces' on interface types.
    if (implementingIntrospection.interfaces === null && implementingIntrospection.kind === _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_8__["TypeKind"].INTERFACE) {
      return [];
    }

    if (!implementingIntrospection.interfaces) {
      var implementingIntrospectionStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(implementingIntrospection);
      throw new Error("Introspection result missing interfaces: ".concat(implementingIntrospectionStr, "."));
    }

    return implementingIntrospection.interfaces.map(getInterfaceType);
  }

  function buildObjectDef(objectIntrospection) {
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLObjectType"]({
      name: objectIntrospection.name,
      description: objectIntrospection.description,
      interfaces: function interfaces() {
        return buildImplementationsList(objectIntrospection);
      },
      fields: function fields() {
        return buildFieldDefMap(objectIntrospection);
      }
    });
  }

  function buildInterfaceDef(interfaceIntrospection) {
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLInterfaceType"]({
      name: interfaceIntrospection.name,
      description: interfaceIntrospection.description,
      interfaces: function interfaces() {
        return buildImplementationsList(interfaceIntrospection);
      },
      fields: function fields() {
        return buildFieldDefMap(interfaceIntrospection);
      }
    });
  }

  function buildUnionDef(unionIntrospection) {
    if (!unionIntrospection.possibleTypes) {
      var unionIntrospectionStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(unionIntrospection);
      throw new Error("Introspection result missing possibleTypes: ".concat(unionIntrospectionStr, "."));
    }

    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLUnionType"]({
      name: unionIntrospection.name,
      description: unionIntrospection.description,
      types: function types() {
        return unionIntrospection.possibleTypes.map(getObjectType);
      }
    });
  }

  function buildEnumDef(enumIntrospection) {
    if (!enumIntrospection.enumValues) {
      var enumIntrospectionStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(enumIntrospection);
      throw new Error("Introspection result missing enumValues: ".concat(enumIntrospectionStr, "."));
    }

    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLEnumType"]({
      name: enumIntrospection.name,
      description: enumIntrospection.description,
      values: Object(_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(enumIntrospection.enumValues, function (valueIntrospection) {
        return valueIntrospection.name;
      }, function (valueIntrospection) {
        return {
          description: valueIntrospection.description,
          deprecationReason: valueIntrospection.deprecationReason
        };
      })
    });
  }

  function buildInputObjectDef(inputObjectIntrospection) {
    if (!inputObjectIntrospection.inputFields) {
      var inputObjectIntrospectionStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(inputObjectIntrospection);
      throw new Error("Introspection result missing inputFields: ".concat(inputObjectIntrospectionStr, "."));
    }

    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLInputObjectType"]({
      name: inputObjectIntrospection.name,
      description: inputObjectIntrospection.description,
      fields: function fields() {
        return buildInputValueDefMap(inputObjectIntrospection.inputFields);
      }
    });
  }

  function buildFieldDefMap(typeIntrospection) {
    if (!typeIntrospection.fields) {
      throw new Error("Introspection result missing fields: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(typeIntrospection), "."));
    }

    return Object(_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(typeIntrospection.fields, function (fieldIntrospection) {
      return fieldIntrospection.name;
    }, buildField);
  }

  function buildField(fieldIntrospection) {
    var type = getType(fieldIntrospection.type);

    if (!Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["isOutputType"])(type)) {
      var typeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(type);
      throw new Error("Introspection must provide output type for fields, but received: ".concat(typeStr, "."));
    }

    if (!fieldIntrospection.args) {
      var fieldIntrospectionStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(fieldIntrospection);
      throw new Error("Introspection result missing field args: ".concat(fieldIntrospectionStr, "."));
    }

    return {
      description: fieldIntrospection.description,
      deprecationReason: fieldIntrospection.deprecationReason,
      type: type,
      args: buildInputValueDefMap(fieldIntrospection.args)
    };
  }

  function buildInputValueDefMap(inputValueIntrospections) {
    return Object(_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(inputValueIntrospections, function (inputValue) {
      return inputValue.name;
    }, buildInputValue);
  }

  function buildInputValue(inputValueIntrospection) {
    var type = getType(inputValueIntrospection.type);

    if (!Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_10__["isInputType"])(type)) {
      var typeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(type);
      throw new Error("Introspection must provide input type for arguments, but received: ".concat(typeStr, "."));
    }

    var defaultValue = inputValueIntrospection.defaultValue != null ? Object(_valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_11__["valueFromAST"])(Object(_language_parser_mjs__WEBPACK_IMPORTED_MODULE_5__["parseValue"])(inputValueIntrospection.defaultValue), type) : undefined;
    return {
      description: inputValueIntrospection.description,
      type: type,
      defaultValue: defaultValue
    };
  }

  function buildDirective(directiveIntrospection) {
    if (!directiveIntrospection.args) {
      var directiveIntrospectionStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(directiveIntrospection);
      throw new Error("Introspection result missing directive args: ".concat(directiveIntrospectionStr, "."));
    }

    if (!directiveIntrospection.locations) {
      var _directiveIntrospectionStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(directiveIntrospection);

      throw new Error("Introspection result missing directive locations: ".concat(_directiveIntrospectionStr, "."));
    }

    return new _type_directives_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLDirective"]({
      name: directiveIntrospection.name,
      description: directiveIntrospection.description,
      isRepeatable: directiveIntrospection.isRepeatable,
      locations: directiveIntrospection.locations.slice(),
      args: buildInputValueDefMap(directiveIntrospection.args)
    });
  }
}


/***/ }),

/***/ "./node_modules/graphql/utilities/coerceInputValue.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/graphql/utilities/coerceInputValue.mjs ***!
  \*************************************************************/
/*! exports provided: coerceInputValue */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceInputValue", function() { return coerceInputValue; });
/* harmony import */ var _polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/arrayFrom.mjs */ "./node_modules/graphql/polyfills/arrayFrom.mjs");
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/isObjectLike.mjs */ "./node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_isCollection_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/isCollection.mjs */ "./node_modules/graphql/jsutils/isCollection.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _jsutils_printPathArray_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/printPathArray.mjs */ "./node_modules/graphql/jsutils/printPathArray.mjs");
/* harmony import */ var _jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jsutils/Path.mjs */ "./node_modules/graphql/jsutils/Path.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");













/**
 * Coerces a JavaScript value given a GraphQL Input Type.
 */
function coerceInputValue(inputValue, type) {
  var onError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOnError;
  return coerceInputValueImpl(inputValue, type, onError);
}

function defaultOnError(path, invalidValue, error) {
  var errorPrefix = 'Invalid value ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(invalidValue);

  if (path.length > 0) {
    errorPrefix += " at \"value".concat(Object(_jsutils_printPathArray_mjs__WEBPACK_IMPORTED_MODULE_8__["default"])(path), "\"");
  }

  error.message = errorPrefix + ': ' + error.message;
  throw error;
}

function coerceInputValueImpl(inputValue, type, onError, path) {
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isNonNullType"])(type)) {
    if (inputValue != null) {
      return coerceInputValueImpl(inputValue, type.ofType, onError, path);
    }

    onError(Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__["pathToArray"])(path), inputValue, new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLError"]("Expected non-nullable type \"".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), "\" not to be null.")));
    return;
  }

  if (inputValue == null) {
    // Explicitly return the value null.
    return null;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isListType"])(type)) {
    var itemType = type.ofType;

    if (Object(_jsutils_isCollection_mjs__WEBPACK_IMPORTED_MODULE_6__["default"])(inputValue)) {
      return Object(_polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(inputValue, function (itemValue, index) {
        var itemPath = Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__["addPath"])(path, index);
        return coerceInputValueImpl(itemValue, itemType, onError, itemPath);
      });
    } // Lists accept a non-list value as a list of one.


    return [coerceInputValueImpl(inputValue, itemType, onError, path)];
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isInputObjectType"])(type)) {
    if (!Object(_jsutils_isObjectLike_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(inputValue)) {
      onError(Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__["pathToArray"])(path), inputValue, new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLError"]("Expected type \"".concat(type.name, "\" to be an object.")));
      return;
    }

    var coercedValue = {};
    var fieldDefs = type.getFields();

    for (var _i2 = 0, _objectValues2 = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(fieldDefs); _i2 < _objectValues2.length; _i2++) {
      var field = _objectValues2[_i2];
      var fieldValue = inputValue[field.name];

      if (fieldValue === undefined) {
        if (field.defaultValue !== undefined) {
          coercedValue[field.name] = field.defaultValue;
        } else if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isNonNullType"])(field.type)) {
          var typeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(field.type);
          onError(Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__["pathToArray"])(path), inputValue, new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLError"]("Field \"".concat(field.name, "\" of required type \"").concat(typeStr, "\" was not provided.")));
        }

        continue;
      }

      coercedValue[field.name] = coerceInputValueImpl(fieldValue, field.type, onError, Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__["addPath"])(path, field.name));
    } // Ensure every provided field is defined.


    for (var _i4 = 0, _Object$keys2 = Object.keys(inputValue); _i4 < _Object$keys2.length; _i4++) {
      var fieldName = _Object$keys2[_i4];

      if (!fieldDefs[fieldName]) {
        var suggestions = Object(_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_7__["default"])(fieldName, Object.keys(type.getFields()));
        onError(Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__["pathToArray"])(path), inputValue, new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLError"]("Field \"".concat(fieldName, "\" is not defined by type \"").concat(type.name, "\".") + Object(_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(suggestions)));
      }
    }

    return coercedValue;
  }

  /* istanbul ignore else */
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_11__["isLeafType"])(type)) {
    var parseResult; // Scalars and Enums determine if a input value is valid via parseValue(),
    // which can throw to indicate failure. If it throws, maintain a reference
    // to the original error.

    try {
      parseResult = type.parseValue(inputValue);
    } catch (error) {
      if (error instanceof _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLError"]) {
        onError(Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__["pathToArray"])(path), inputValue, error);
      } else {
        onError(Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__["pathToArray"])(path), inputValue, new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLError"]("Expected type \"".concat(type.name, "\". ") + error.message, undefined, undefined, undefined, undefined, error));
      }

      return;
    }

    if (parseResult === undefined) {
      onError(Object(_jsutils_Path_mjs__WEBPACK_IMPORTED_MODULE_9__["pathToArray"])(path), inputValue, new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_10__["GraphQLError"]("Expected type \"".concat(type.name, "\".")));
    }

    return parseResult;
  } // Not reachable. All possible input types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Unexpected input type: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type));
}


/***/ }),

/***/ "./node_modules/graphql/utilities/concatAST.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/utilities/concatAST.mjs ***!
  \******************************************************/
/*! exports provided: concatAST */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatAST", function() { return concatAST; });
/* harmony import */ var _polyfills_flatMap_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/flatMap.mjs */ "./node_modules/graphql/polyfills/flatMap.mjs");


/**
 * Provided a collection of ASTs, presumably each from different files,
 * concatenate the ASTs together into batched AST, useful for validating many
 * GraphQL source files which together represent one conceptual application.
 */
function concatAST(asts) {
  return {
    kind: 'Document',
    definitions: Object(_polyfills_flatMap_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(asts, function (ast) {
      return ast.definitions;
    })
  };
}


/***/ }),

/***/ "./node_modules/graphql/utilities/extendSchema.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/utilities/extendSchema.mjs ***!
  \*********************************************************/
/*! exports provided: extendSchema, extendSchemaImpl, getDescription */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendSchema", function() { return extendSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendSchemaImpl", function() { return extendSchemaImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return getDescription; });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/mapValue.mjs */ "./node_modules/graphql/jsutils/mapValue.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../language/tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _language_blockString_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../language/blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");
/* harmony import */ var _language_predicates_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../language/predicates.mjs */ "./node_modules/graphql/language/predicates.mjs");
/* harmony import */ var _validation_validate_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../validation/validate.mjs */ "./node_modules/graphql/validation/validate.mjs");
/* harmony import */ var _execution_values_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../execution/values.mjs */ "./node_modules/graphql/execution/values.mjs");
/* harmony import */ var _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../type/scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_schema_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../type/schema.mjs */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./valueFromAST.mjs */ "./node_modules/graphql/utilities/valueFromAST.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




















/**
 * Produces a new schema given an existing schema and a document which may
 * contain GraphQL type extensions and definitions. The original schema will
 * remain unaltered.
 *
 * Because a schema represents a graph of references, a schema cannot be
 * extended without effectively making an entire copy. We do not know until it's
 * too late if subgraphs remain unchanged.
 *
 * This algorithm copies the provided schema, applying extensions while
 * producing the copy. The original schema remains unaltered.
 *
 * Accepts options as a third argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function extendSchema(schema, documentAST, options) {
  Object(_type_schema_mjs__WEBPACK_IMPORTED_MODULE_15__["assertSchema"])(schema);
  documentAST != null && documentAST.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_6__["Kind"].DOCUMENT || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_5__["default"])(0, 'Must provide valid Document AST.');

  if ((options === null || options === void 0 ? void 0 : options.assumeValid) !== true && (options === null || options === void 0 ? void 0 : options.assumeValidSDL) !== true) {
    Object(_validation_validate_mjs__WEBPACK_IMPORTED_MODULE_10__["assertValidSDLExtension"])(documentAST, schema);
  }

  var schemaConfig = schema.toConfig();
  var extendedConfig = extendSchemaImpl(schemaConfig, documentAST, options);
  return schemaConfig === extendedConfig ? schema : new _type_schema_mjs__WEBPACK_IMPORTED_MODULE_15__["GraphQLSchema"](extendedConfig);
}
/**
 * @internal
 */

function extendSchemaImpl(schemaConfig, documentAST, options) {
  var _schemaDef, _schemaDef$descriptio, _schemaDef2, _options$assumeValid;

  // Collect the type definitions and extensions found in the document.
  var typeDefs = [];
  var typeExtensionsMap = Object.create(null); // New directives and types are separate because a directives and types can
  // have the same name. For example, a type named "skip".

  var directiveDefs = [];
  var schemaDef; // Schema extensions are collected which may add additional operation types.

  var schemaExtensions = [];

  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
    var def = _documentAST$definiti2[_i2];

    if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_6__["Kind"].SCHEMA_DEFINITION) {
      schemaDef = def;
    } else if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_6__["Kind"].SCHEMA_EXTENSION) {
      schemaExtensions.push(def);
    } else if (Object(_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_9__["isTypeDefinitionNode"])(def)) {
      typeDefs.push(def);
    } else if (Object(_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_9__["isTypeExtensionNode"])(def)) {
      var extendedTypeName = def.name.value;
      var existingTypeExtensions = typeExtensionsMap[extendedTypeName];
      typeExtensionsMap[extendedTypeName] = existingTypeExtensions ? existingTypeExtensions.concat([def]) : [def];
    } else if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_6__["Kind"].DIRECTIVE_DEFINITION) {
      directiveDefs.push(def);
    }
  } // If this document contains no new types, extensions, or directives then
  // return the same unmodified GraphQLSchema instance.


  if (Object.keys(typeExtensionsMap).length === 0 && typeDefs.length === 0 && directiveDefs.length === 0 && schemaExtensions.length === 0 && schemaDef == null) {
    return schemaConfig;
  }

  var typeMap = Object.create(null);

  for (var _i4 = 0, _schemaConfig$types2 = schemaConfig.types; _i4 < _schemaConfig$types2.length; _i4++) {
    var existingType = _schemaConfig$types2[_i4];
    typeMap[existingType.name] = extendNamedType(existingType);
  }

  for (var _i6 = 0; _i6 < typeDefs.length; _i6++) {
    var _stdTypeMap$name;

    var typeNode = typeDefs[_i6];
    var name = typeNode.name.value;
    typeMap[name] = (_stdTypeMap$name = stdTypeMap[name]) !== null && _stdTypeMap$name !== void 0 ? _stdTypeMap$name : buildType(typeNode);
  }

  var operationTypes = _objectSpread({
    // Get the extended root operation types.
    query: schemaConfig.query && replaceNamedType(schemaConfig.query),
    mutation: schemaConfig.mutation && replaceNamedType(schemaConfig.mutation),
    subscription: schemaConfig.subscription && replaceNamedType(schemaConfig.subscription)
  }, schemaDef && getOperationTypes([schemaDef]), {}, getOperationTypes(schemaExtensions)); // Then produce and return a Schema config with these types.


  return _objectSpread({
    description: (_schemaDef = schemaDef) === null || _schemaDef === void 0 ? void 0 : (_schemaDef$descriptio = _schemaDef.description) === null || _schemaDef$descriptio === void 0 ? void 0 : _schemaDef$descriptio.value
  }, operationTypes, {
    types: Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(typeMap),
    directives: [].concat(schemaConfig.directives.map(replaceDirective), directiveDefs.map(buildDirective)),
    extensions: undefined,
    astNode: (_schemaDef2 = schemaDef) !== null && _schemaDef2 !== void 0 ? _schemaDef2 : schemaConfig.astNode,
    extensionASTNodes: schemaConfig.extensionASTNodes.concat(schemaExtensions),
    assumeValid: (_options$assumeValid = options === null || options === void 0 ? void 0 : options.assumeValid) !== null && _options$assumeValid !== void 0 ? _options$assumeValid : false
  }); // Below are functions used for producing this schema that have closed over
  // this scope and have access to the schema, cache, and newly defined types.

  function replaceType(type) {
    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["isListType"])(type)) {
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLList"](replaceType(type.ofType));
    } else if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["isNonNullType"])(type)) {
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLNonNull"](replaceType(type.ofType));
    }

    return replaceNamedType(type);
  }

  function replaceNamedType(type) {
    // Note: While this could make early assertions to get the correctly
    // typed values, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.
    return typeMap[type.name];
  }

  function replaceDirective(directive) {
    var config = directive.toConfig();
    return new _type_directives_mjs__WEBPACK_IMPORTED_MODULE_14__["GraphQLDirective"](_objectSpread({}, config, {
      args: Object(_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(config.args, extendArg)
    }));
  }

  function extendNamedType(type) {
    if (Object(_type_introspection_mjs__WEBPACK_IMPORTED_MODULE_13__["isIntrospectionType"])(type) || Object(_type_scalars_mjs__WEBPACK_IMPORTED_MODULE_12__["isSpecifiedScalarType"])(type)) {
      // Builtin types are not extended.
      return type;
    }

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["isScalarType"])(type)) {
      return extendScalarType(type);
    }

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["isObjectType"])(type)) {
      return extendObjectType(type);
    }

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["isInterfaceType"])(type)) {
      return extendInterfaceType(type);
    }

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["isUnionType"])(type)) {
      return extendUnionType(type);
    }

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["isEnumType"])(type)) {
      return extendEnumType(type);
    }

    /* istanbul ignore else */
    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["isInputObjectType"])(type)) {
      return extendInputObjectType(type);
    } // Not reachable. All possible types have been considered.


    /* istanbul ignore next */
    Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Unexpected type: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type));
  }

  function extendInputObjectType(type) {
    var _typeExtensionsMap$co;

    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co !== void 0 ? _typeExtensionsMap$co : [];
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLInputObjectType"](_objectSpread({}, config, {
      fields: function fields() {
        return _objectSpread({}, Object(_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(config.fields, function (field) {
          return _objectSpread({}, field, {
            type: replaceType(field.type)
          });
        }), {}, buildInputFieldMap(extensions));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendEnumType(type) {
    var _typeExtensionsMap$ty;

    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$ty = typeExtensionsMap[type.name]) !== null && _typeExtensionsMap$ty !== void 0 ? _typeExtensionsMap$ty : [];
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLEnumType"](_objectSpread({}, config, {
      values: _objectSpread({}, config.values, {}, buildEnumValueMap(extensions)),
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendScalarType(type) {
    var _typeExtensionsMap$co2;

    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co2 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co2 !== void 0 ? _typeExtensionsMap$co2 : [];
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLScalarType"](_objectSpread({}, config, {
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendObjectType(type) {
    var _typeExtensionsMap$co3;

    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co3 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co3 !== void 0 ? _typeExtensionsMap$co3 : [];
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLObjectType"](_objectSpread({}, config, {
      interfaces: function interfaces() {
        return [].concat(type.getInterfaces().map(replaceNamedType), buildInterfaces(extensions));
      },
      fields: function fields() {
        return _objectSpread({}, Object(_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(config.fields, extendField), {}, buildFieldMap(extensions));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendInterfaceType(type) {
    var _typeExtensionsMap$co4;

    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co4 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co4 !== void 0 ? _typeExtensionsMap$co4 : [];
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLInterfaceType"](_objectSpread({}, config, {
      interfaces: function interfaces() {
        return [].concat(type.getInterfaces().map(replaceNamedType), buildInterfaces(extensions));
      },
      fields: function fields() {
        return _objectSpread({}, Object(_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(config.fields, extendField), {}, buildFieldMap(extensions));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendUnionType(type) {
    var _typeExtensionsMap$co5;

    var config = type.toConfig();
    var extensions = (_typeExtensionsMap$co5 = typeExtensionsMap[config.name]) !== null && _typeExtensionsMap$co5 !== void 0 ? _typeExtensionsMap$co5 : [];
    return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLUnionType"](_objectSpread({}, config, {
      types: function types() {
        return [].concat(type.getTypes().map(replaceNamedType), buildUnionTypes(extensions));
      },
      extensionASTNodes: config.extensionASTNodes.concat(extensions)
    }));
  }

  function extendField(field) {
    return _objectSpread({}, field, {
      type: replaceType(field.type),
      args: Object(_jsutils_mapValue_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(field.args, extendArg)
    });
  }

  function extendArg(arg) {
    return _objectSpread({}, arg, {
      type: replaceType(arg.type)
    });
  }

  function getOperationTypes(nodes) {
    var opTypes = {};

    for (var _i8 = 0; _i8 < nodes.length; _i8++) {
      var _node$operationTypes;

      var node = nodes[_i8];

      /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */
      var operationTypesNodes = (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];

      for (var _i10 = 0; _i10 < operationTypesNodes.length; _i10++) {
        var operationType = operationTypesNodes[_i10];
        opTypes[operationType.operation] = getNamedType(operationType.type);
      }
    } // Note: While this could make early assertions to get the correctly
    // typed values below, that would throw immediately while type system
    // validation with validateSchema() will produce more actionable results.


    return opTypes;
  }

  function getNamedType(node) {
    var _stdTypeMap$name2;

    var name = node.name.value;
    var type = (_stdTypeMap$name2 = stdTypeMap[name]) !== null && _stdTypeMap$name2 !== void 0 ? _stdTypeMap$name2 : typeMap[name];

    if (type === undefined) {
      throw new Error("Unknown type: \"".concat(name, "\"."));
    }

    return type;
  }

  function getWrappedType(node) {
    if (node.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_6__["Kind"].LIST_TYPE) {
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLList"](getWrappedType(node.type));
    }

    if (node.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_6__["Kind"].NON_NULL_TYPE) {
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLNonNull"](getWrappedType(node.type));
    }

    return getNamedType(node);
  }

  function buildDirective(node) {
    var locations = node.locations.map(function (_ref) {
      var value = _ref.value;
      return value;
    });
    return new _type_directives_mjs__WEBPACK_IMPORTED_MODULE_14__["GraphQLDirective"]({
      name: node.name.value,
      description: getDescription(node, options),
      locations: locations,
      isRepeatable: node.repeatable,
      args: buildArgumentMap(node.arguments),
      astNode: node
    });
  }

  function buildFieldMap(nodes) {
    var fieldConfigMap = Object.create(null);

    for (var _i12 = 0; _i12 < nodes.length; _i12++) {
      var _node$fields;

      var node = nodes[_i12];

      /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */
      var nodeFields = (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];

      for (var _i14 = 0; _i14 < nodeFields.length; _i14++) {
        var field = nodeFields[_i14];
        fieldConfigMap[field.name.value] = {
          // Note: While this could make assertions to get the correctly typed
          // value, that would throw immediately while type system validation
          // with validateSchema() will produce more actionable results.
          type: getWrappedType(field.type),
          description: getDescription(field, options),
          args: buildArgumentMap(field.arguments),
          deprecationReason: getDeprecationReason(field),
          astNode: field
        };
      }
    }

    return fieldConfigMap;
  }

  function buildArgumentMap(args) {
    /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */
    var argsNodes = args !== null && args !== void 0 ? args : [];
    var argConfigMap = Object.create(null);

    for (var _i16 = 0; _i16 < argsNodes.length; _i16++) {
      var arg = argsNodes[_i16];
      // Note: While this could make assertions to get the correctly typed
      // value, that would throw immediately while type system validation
      // with validateSchema() will produce more actionable results.
      var type = getWrappedType(arg.type);
      argConfigMap[arg.name.value] = {
        type: type,
        description: getDescription(arg, options),
        defaultValue: Object(_valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_17__["valueFromAST"])(arg.defaultValue, type),
        astNode: arg
      };
    }

    return argConfigMap;
  }

  function buildInputFieldMap(nodes) {
    var inputFieldMap = Object.create(null);

    for (var _i18 = 0; _i18 < nodes.length; _i18++) {
      var _node$fields2;

      var node = nodes[_i18];

      /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */
      var fieldsNodes = (_node$fields2 = node.fields) !== null && _node$fields2 !== void 0 ? _node$fields2 : [];

      for (var _i20 = 0; _i20 < fieldsNodes.length; _i20++) {
        var field = fieldsNodes[_i20];
        // Note: While this could make assertions to get the correctly typed
        // value, that would throw immediately while type system validation
        // with validateSchema() will produce more actionable results.
        var type = getWrappedType(field.type);
        inputFieldMap[field.name.value] = {
          type: type,
          description: getDescription(field, options),
          defaultValue: Object(_valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_17__["valueFromAST"])(field.defaultValue, type),
          astNode: field
        };
      }
    }

    return inputFieldMap;
  }

  function buildEnumValueMap(nodes) {
    var enumValueMap = Object.create(null);

    for (var _i22 = 0; _i22 < nodes.length; _i22++) {
      var _node$values;

      var node = nodes[_i22];

      /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */
      var valuesNodes = (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];

      for (var _i24 = 0; _i24 < valuesNodes.length; _i24++) {
        var value = valuesNodes[_i24];
        enumValueMap[value.name.value] = {
          description: getDescription(value, options),
          deprecationReason: getDeprecationReason(value),
          astNode: value
        };
      }
    }

    return enumValueMap;
  }

  function buildInterfaces(nodes) {
    var interfaces = [];

    for (var _i26 = 0; _i26 < nodes.length; _i26++) {
      var _node$interfaces;

      var node = nodes[_i26];

      /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */
      var interfacesNodes = (_node$interfaces = node.interfaces) !== null && _node$interfaces !== void 0 ? _node$interfaces : [];

      for (var _i28 = 0; _i28 < interfacesNodes.length; _i28++) {
        var type = interfacesNodes[_i28];
        // Note: While this could make assertions to get the correctly typed
        // values below, that would throw immediately while type system
        // validation with validateSchema() will produce more actionable
        // results.
        interfaces.push(getNamedType(type));
      }
    }

    return interfaces;
  }

  function buildUnionTypes(nodes) {
    var types = [];

    for (var _i30 = 0; _i30 < nodes.length; _i30++) {
      var _node$types;

      var node = nodes[_i30];

      /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */
      var typeNodes = (_node$types = node.types) !== null && _node$types !== void 0 ? _node$types : [];

      for (var _i32 = 0; _i32 < typeNodes.length; _i32++) {
        var type = typeNodes[_i32];
        // Note: While this could make assertions to get the correctly typed
        // values below, that would throw immediately while type system
        // validation with validateSchema() will produce more actionable
        // results.
        types.push(getNamedType(type));
      }
    }

    return types;
  }

  function buildType(astNode) {
    var _typeExtensionsMap$na;

    var name = astNode.name.value;
    var description = getDescription(astNode, options);
    var extensionNodes = (_typeExtensionsMap$na = typeExtensionsMap[name]) !== null && _typeExtensionsMap$na !== void 0 ? _typeExtensionsMap$na : [];

    switch (astNode.kind) {
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_6__["Kind"].OBJECT_TYPE_DEFINITION:
        {
          var extensionASTNodes = extensionNodes;
          var allNodes = [astNode].concat(extensionASTNodes);
          return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLObjectType"]({
            name: name,
            description: description,
            interfaces: function interfaces() {
              return buildInterfaces(allNodes);
            },
            fields: function fields() {
              return buildFieldMap(allNodes);
            },
            astNode: astNode,
            extensionASTNodes: extensionASTNodes
          });
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_6__["Kind"].INTERFACE_TYPE_DEFINITION:
        {
          var _extensionASTNodes = extensionNodes;

          var _allNodes = [astNode].concat(_extensionASTNodes);

          return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLInterfaceType"]({
            name: name,
            description: description,
            interfaces: function interfaces() {
              return buildInterfaces(_allNodes);
            },
            fields: function fields() {
              return buildFieldMap(_allNodes);
            },
            astNode: astNode,
            extensionASTNodes: _extensionASTNodes
          });
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_6__["Kind"].ENUM_TYPE_DEFINITION:
        {
          var _extensionASTNodes2 = extensionNodes;

          var _allNodes2 = [astNode].concat(_extensionASTNodes2);

          return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLEnumType"]({
            name: name,
            description: description,
            values: buildEnumValueMap(_allNodes2),
            astNode: astNode,
            extensionASTNodes: _extensionASTNodes2
          });
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_6__["Kind"].UNION_TYPE_DEFINITION:
        {
          var _extensionASTNodes3 = extensionNodes;

          var _allNodes3 = [astNode].concat(_extensionASTNodes3);

          return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLUnionType"]({
            name: name,
            description: description,
            types: function types() {
              return buildUnionTypes(_allNodes3);
            },
            astNode: astNode,
            extensionASTNodes: _extensionASTNodes3
          });
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_6__["Kind"].SCALAR_TYPE_DEFINITION:
        {
          var _extensionASTNodes4 = extensionNodes;
          return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLScalarType"]({
            name: name,
            description: description,
            astNode: astNode,
            extensionASTNodes: _extensionASTNodes4
          });
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_6__["Kind"].INPUT_OBJECT_TYPE_DEFINITION:
        {
          var _extensionASTNodes5 = extensionNodes;

          var _allNodes4 = [astNode].concat(_extensionASTNodes5);

          return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_16__["GraphQLInputObjectType"]({
            name: name,
            description: description,
            fields: function fields() {
              return buildInputFieldMap(_allNodes4);
            },
            astNode: astNode,
            extensionASTNodes: _extensionASTNodes5
          });
        }
    } // Not reachable. All possible type definition nodes have been considered.


    /* istanbul ignore next */
    Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(false, 'Unexpected type definition node: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(astNode));
  }
}
var stdTypeMap = Object(_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(_type_scalars_mjs__WEBPACK_IMPORTED_MODULE_12__["specifiedScalarTypes"].concat(_type_introspection_mjs__WEBPACK_IMPORTED_MODULE_13__["introspectionTypes"]), function (type) {
  return type.name;
});
/**
 * Given a field or enum value node, returns the string value for the
 * deprecation reason.
 */

function getDeprecationReason(node) {
  var deprecated = Object(_execution_values_mjs__WEBPACK_IMPORTED_MODULE_11__["getDirectiveValues"])(_type_directives_mjs__WEBPACK_IMPORTED_MODULE_14__["GraphQLDeprecatedDirective"], node);
  return deprecated === null || deprecated === void 0 ? void 0 : deprecated.reason;
}
/**
 * Given an ast node, returns its string description.
 * @deprecated: provided to ease adoption and will be removed in v16.
 *
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */


function getDescription(node, options) {
  if (node.description) {
    return node.description.value;
  }

  if ((options === null || options === void 0 ? void 0 : options.commentDescriptions) === true) {
    var rawValue = getLeadingCommentBlock(node);

    if (rawValue !== undefined) {
      return Object(_language_blockString_mjs__WEBPACK_IMPORTED_MODULE_8__["dedentBlockStringValue"])('\n' + rawValue);
    }
  }
}

function getLeadingCommentBlock(node) {
  var loc = node.loc;

  if (!loc) {
    return;
  }

  var comments = [];
  var token = loc.startToken.prev;

  while (token != null && token.kind === _language_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_7__["TokenKind"].COMMENT && token.next && token.prev && token.line + 1 === token.next.line && token.line !== token.prev.line) {
    var value = String(token.value);
    comments.push(value);
    token = token.prev;
  }

  return comments.length > 0 ? comments.reverse().join('\n') : undefined;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/findBreakingChanges.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/graphql/utilities/findBreakingChanges.mjs ***!
  \****************************************************************/
/*! exports provided: BreakingChangeType, DangerousChangeType, findBreakingChanges, findDangerousChanges */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakingChangeType", function() { return BreakingChangeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DangerousChangeType", function() { return DangerousChangeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findBreakingChanges", function() { return findBreakingChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDangerousChanges", function() { return findDangerousChanges; });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _language_visitor_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _astFromValue_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./astFromValue.mjs */ "./node_modules/graphql/utilities/astFromValue.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var BreakingChangeType = Object.freeze({
  TYPE_REMOVED: 'TYPE_REMOVED',
  TYPE_CHANGED_KIND: 'TYPE_CHANGED_KIND',
  TYPE_REMOVED_FROM_UNION: 'TYPE_REMOVED_FROM_UNION',
  VALUE_REMOVED_FROM_ENUM: 'VALUE_REMOVED_FROM_ENUM',
  REQUIRED_INPUT_FIELD_ADDED: 'REQUIRED_INPUT_FIELD_ADDED',
  IMPLEMENTED_INTERFACE_REMOVED: 'IMPLEMENTED_INTERFACE_REMOVED',
  FIELD_REMOVED: 'FIELD_REMOVED',
  FIELD_CHANGED_KIND: 'FIELD_CHANGED_KIND',
  REQUIRED_ARG_ADDED: 'REQUIRED_ARG_ADDED',
  ARG_REMOVED: 'ARG_REMOVED',
  ARG_CHANGED_KIND: 'ARG_CHANGED_KIND',
  DIRECTIVE_REMOVED: 'DIRECTIVE_REMOVED',
  DIRECTIVE_ARG_REMOVED: 'DIRECTIVE_ARG_REMOVED',
  REQUIRED_DIRECTIVE_ARG_ADDED: 'REQUIRED_DIRECTIVE_ARG_ADDED',
  DIRECTIVE_REPEATABLE_REMOVED: 'DIRECTIVE_REPEATABLE_REMOVED',
  DIRECTIVE_LOCATION_REMOVED: 'DIRECTIVE_LOCATION_REMOVED'
});
var DangerousChangeType = Object.freeze({
  VALUE_ADDED_TO_ENUM: 'VALUE_ADDED_TO_ENUM',
  TYPE_ADDED_TO_UNION: 'TYPE_ADDED_TO_UNION',
  OPTIONAL_INPUT_FIELD_ADDED: 'OPTIONAL_INPUT_FIELD_ADDED',
  OPTIONAL_ARG_ADDED: 'OPTIONAL_ARG_ADDED',
  IMPLEMENTED_INTERFACE_ADDED: 'IMPLEMENTED_INTERFACE_ADDED',
  ARG_DEFAULT_VALUE_CHANGE: 'ARG_DEFAULT_VALUE_CHANGE'
});

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
function findBreakingChanges(oldSchema, newSchema) {
  var breakingChanges = findSchemaChanges(oldSchema, newSchema).filter(function (change) {
    return change.type in BreakingChangeType;
  });
  return breakingChanges;
}
/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */

function findDangerousChanges(oldSchema, newSchema) {
  var dangerousChanges = findSchemaChanges(oldSchema, newSchema).filter(function (change) {
    return change.type in DangerousChangeType;
  });
  return dangerousChanges;
}

function findSchemaChanges(oldSchema, newSchema) {
  return [].concat(findTypeChanges(oldSchema, newSchema), findDirectiveChanges(oldSchema, newSchema));
}

function findDirectiveChanges(oldSchema, newSchema) {
  var schemaChanges = [];
  var directivesDiff = diff(oldSchema.getDirectives(), newSchema.getDirectives());

  for (var _i2 = 0, _directivesDiff$remov2 = directivesDiff.removed; _i2 < _directivesDiff$remov2.length; _i2++) {
    var oldDirective = _directivesDiff$remov2[_i2];
    schemaChanges.push({
      type: BreakingChangeType.DIRECTIVE_REMOVED,
      description: "".concat(oldDirective.name, " was removed.")
    });
  }

  for (var _i4 = 0, _directivesDiff$persi2 = directivesDiff.persisted; _i4 < _directivesDiff$persi2.length; _i4++) {
    var _ref2 = _directivesDiff$persi2[_i4];
    var _oldDirective = _ref2[0];
    var newDirective = _ref2[1];
    var argsDiff = diff(_oldDirective.args, newDirective.args);

    for (var _i6 = 0, _argsDiff$added2 = argsDiff.added; _i6 < _argsDiff$added2.length; _i6++) {
      var newArg = _argsDiff$added2[_i6];

      if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isRequiredArgument"])(newArg)) {
        schemaChanges.push({
          type: BreakingChangeType.REQUIRED_DIRECTIVE_ARG_ADDED,
          description: "A required arg ".concat(newArg.name, " on directive ").concat(_oldDirective.name, " was added.")
        });
      }
    }

    for (var _i8 = 0, _argsDiff$removed2 = argsDiff.removed; _i8 < _argsDiff$removed2.length; _i8++) {
      var oldArg = _argsDiff$removed2[_i8];
      schemaChanges.push({
        type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
        description: "".concat(oldArg.name, " was removed from ").concat(_oldDirective.name, ".")
      });
    }

    if (_oldDirective.isRepeatable && !newDirective.isRepeatable) {
      schemaChanges.push({
        type: BreakingChangeType.DIRECTIVE_REPEATABLE_REMOVED,
        description: "Repeatable flag was removed from ".concat(_oldDirective.name, ".")
      });
    }

    for (var _i10 = 0, _oldDirective$locatio2 = _oldDirective.locations; _i10 < _oldDirective$locatio2.length; _i10++) {
      var location = _oldDirective$locatio2[_i10];

      if (newDirective.locations.indexOf(location) === -1) {
        schemaChanges.push({
          type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
          description: "".concat(location, " was removed from ").concat(_oldDirective.name, ".")
        });
      }
    }
  }

  return schemaChanges;
}

function findTypeChanges(oldSchema, newSchema) {
  var schemaChanges = [];
  var typesDiff = diff(Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(oldSchema.getTypeMap()), Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(newSchema.getTypeMap()));

  for (var _i12 = 0, _typesDiff$removed2 = typesDiff.removed; _i12 < _typesDiff$removed2.length; _i12++) {
    var oldType = _typesDiff$removed2[_i12];
    schemaChanges.push({
      type: BreakingChangeType.TYPE_REMOVED,
      description: Object(_type_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["isSpecifiedScalarType"])(oldType) ? "Standard scalar ".concat(oldType.name, " was removed because it is not referenced anymore.") : "".concat(oldType.name, " was removed.")
    });
  }

  for (var _i14 = 0, _typesDiff$persisted2 = typesDiff.persisted; _i14 < _typesDiff$persisted2.length; _i14++) {
    var _ref4 = _typesDiff$persisted2[_i14];
    var _oldType = _ref4[0];
    var newType = _ref4[1];

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isEnumType"])(_oldType) && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isEnumType"])(newType)) {
      schemaChanges.push.apply(schemaChanges, findEnumTypeChanges(_oldType, newType));
    } else if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isUnionType"])(_oldType) && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isUnionType"])(newType)) {
      schemaChanges.push.apply(schemaChanges, findUnionTypeChanges(_oldType, newType));
    } else if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInputObjectType"])(_oldType) && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInputObjectType"])(newType)) {
      schemaChanges.push.apply(schemaChanges, findInputObjectTypeChanges(_oldType, newType));
    } else if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isObjectType"])(_oldType) && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isObjectType"])(newType)) {
      schemaChanges.push.apply(schemaChanges, findFieldChanges(_oldType, newType).concat(findImplementedInterfacesChanges(_oldType, newType)));
    } else if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInterfaceType"])(_oldType) && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInterfaceType"])(newType)) {
      schemaChanges.push.apply(schemaChanges, findFieldChanges(_oldType, newType).concat(findImplementedInterfacesChanges(_oldType, newType)));
    } else if (_oldType.constructor !== newType.constructor) {
      schemaChanges.push({
        type: BreakingChangeType.TYPE_CHANGED_KIND,
        description: "".concat(_oldType.name, " changed from ") + "".concat(typeKindName(_oldType), " to ").concat(typeKindName(newType), ".")
      });
    }
  }

  return schemaChanges;
}

function findInputObjectTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var fieldsDiff = diff(Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(oldType.getFields()), Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(newType.getFields()));

  for (var _i16 = 0, _fieldsDiff$added2 = fieldsDiff.added; _i16 < _fieldsDiff$added2.length; _i16++) {
    var newField = _fieldsDiff$added2[_i16];

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isRequiredInputField"])(newField)) {
      schemaChanges.push({
        type: BreakingChangeType.REQUIRED_INPUT_FIELD_ADDED,
        description: "A required field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
      });
    } else {
      schemaChanges.push({
        type: DangerousChangeType.OPTIONAL_INPUT_FIELD_ADDED,
        description: "An optional field ".concat(newField.name, " on input type ").concat(oldType.name, " was added.")
      });
    }
  }

  for (var _i18 = 0, _fieldsDiff$removed2 = fieldsDiff.removed; _i18 < _fieldsDiff$removed2.length; _i18++) {
    var oldField = _fieldsDiff$removed2[_i18];
    schemaChanges.push({
      type: BreakingChangeType.FIELD_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
    });
  }

  for (var _i20 = 0, _fieldsDiff$persisted2 = fieldsDiff.persisted; _i20 < _fieldsDiff$persisted2.length; _i20++) {
    var _ref6 = _fieldsDiff$persisted2[_i20];
    var _oldField = _ref6[0];
    var _newField = _ref6[1];
    var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldField.type, _newField.type);

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(_oldField.name, " changed type from ") + "".concat(String(_oldField.type), " to ").concat(String(_newField.type), ".")
      });
    }
  }

  return schemaChanges;
}

function findUnionTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var possibleTypesDiff = diff(oldType.getTypes(), newType.getTypes());

  for (var _i22 = 0, _possibleTypesDiff$ad2 = possibleTypesDiff.added; _i22 < _possibleTypesDiff$ad2.length; _i22++) {
    var newPossibleType = _possibleTypesDiff$ad2[_i22];
    schemaChanges.push({
      type: DangerousChangeType.TYPE_ADDED_TO_UNION,
      description: "".concat(newPossibleType.name, " was added to union type ").concat(oldType.name, ".")
    });
  }

  for (var _i24 = 0, _possibleTypesDiff$re2 = possibleTypesDiff.removed; _i24 < _possibleTypesDiff$re2.length; _i24++) {
    var oldPossibleType = _possibleTypesDiff$re2[_i24];
    schemaChanges.push({
      type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
      description: "".concat(oldPossibleType.name, " was removed from union type ").concat(oldType.name, ".")
    });
  }

  return schemaChanges;
}

function findEnumTypeChanges(oldType, newType) {
  var schemaChanges = [];
  var valuesDiff = diff(oldType.getValues(), newType.getValues());

  for (var _i26 = 0, _valuesDiff$added2 = valuesDiff.added; _i26 < _valuesDiff$added2.length; _i26++) {
    var newValue = _valuesDiff$added2[_i26];
    schemaChanges.push({
      type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
      description: "".concat(newValue.name, " was added to enum type ").concat(oldType.name, ".")
    });
  }

  for (var _i28 = 0, _valuesDiff$removed2 = valuesDiff.removed; _i28 < _valuesDiff$removed2.length; _i28++) {
    var oldValue = _valuesDiff$removed2[_i28];
    schemaChanges.push({
      type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
      description: "".concat(oldValue.name, " was removed from enum type ").concat(oldType.name, ".")
    });
  }

  return schemaChanges;
}

function findImplementedInterfacesChanges(oldType, newType) {
  var schemaChanges = [];
  var interfacesDiff = diff(oldType.getInterfaces(), newType.getInterfaces());

  for (var _i30 = 0, _interfacesDiff$added2 = interfacesDiff.added; _i30 < _interfacesDiff$added2.length; _i30++) {
    var newInterface = _interfacesDiff$added2[_i30];
    schemaChanges.push({
      type: DangerousChangeType.IMPLEMENTED_INTERFACE_ADDED,
      description: "".concat(newInterface.name, " added to interfaces implemented by ").concat(oldType.name, ".")
    });
  }

  for (var _i32 = 0, _interfacesDiff$remov2 = interfacesDiff.removed; _i32 < _interfacesDiff$remov2.length; _i32++) {
    var oldInterface = _interfacesDiff$remov2[_i32];
    schemaChanges.push({
      type: BreakingChangeType.IMPLEMENTED_INTERFACE_REMOVED,
      description: "".concat(oldType.name, " no longer implements interface ").concat(oldInterface.name, ".")
    });
  }

  return schemaChanges;
}

function findFieldChanges(oldType, newType) {
  var schemaChanges = [];
  var fieldsDiff = diff(Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(oldType.getFields()), Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(newType.getFields()));

  for (var _i34 = 0, _fieldsDiff$removed4 = fieldsDiff.removed; _i34 < _fieldsDiff$removed4.length; _i34++) {
    var oldField = _fieldsDiff$removed4[_i34];
    schemaChanges.push({
      type: BreakingChangeType.FIELD_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " was removed.")
    });
  }

  for (var _i36 = 0, _fieldsDiff$persisted4 = fieldsDiff.persisted; _i36 < _fieldsDiff$persisted4.length; _i36++) {
    var _ref8 = _fieldsDiff$persisted4[_i36];
    var _oldField2 = _ref8[0];
    var newField = _ref8[1];
    schemaChanges.push.apply(schemaChanges, findArgChanges(oldType, _oldField2, newField));
    var isSafe = isChangeSafeForObjectOrInterfaceField(_oldField2.type, newField.type);

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(_oldField2.name, " changed type from ") + "".concat(String(_oldField2.type), " to ").concat(String(newField.type), ".")
      });
    }
  }

  return schemaChanges;
}

function findArgChanges(oldType, oldField, newField) {
  var schemaChanges = [];
  var argsDiff = diff(oldField.args, newField.args);

  for (var _i38 = 0, _argsDiff$removed4 = argsDiff.removed; _i38 < _argsDiff$removed4.length; _i38++) {
    var oldArg = _argsDiff$removed4[_i38];
    schemaChanges.push({
      type: BreakingChangeType.ARG_REMOVED,
      description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(oldArg.name, " was removed.")
    });
  }

  for (var _i40 = 0, _argsDiff$persisted2 = argsDiff.persisted; _i40 < _argsDiff$persisted2.length; _i40++) {
    var _ref10 = _argsDiff$persisted2[_i40];
    var _oldArg = _ref10[0];
    var newArg = _ref10[1];
    var isSafe = isChangeSafeForInputObjectFieldOrFieldArg(_oldArg.type, newArg.type);

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.ARG_CHANGED_KIND,
        description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed type from ") + "".concat(String(_oldArg.type), " to ").concat(String(newArg.type), ".")
      });
    } else if (_oldArg.defaultValue !== undefined) {
      if (newArg.defaultValue === undefined) {
        schemaChanges.push({
          type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
          description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " defaultValue was removed.")
        });
      } else {
        // Since we looking only for client's observable changes we should
        // compare default values in the same representation as they are
        // represented inside introspection.
        var oldValueStr = stringifyValue(_oldArg.defaultValue, _oldArg.type);
        var newValueStr = stringifyValue(newArg.defaultValue, newArg.type);

        if (oldValueStr !== newValueStr) {
          schemaChanges.push({
            type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
            description: "".concat(oldType.name, ".").concat(oldField.name, " arg ").concat(_oldArg.name, " has changed defaultValue from ").concat(oldValueStr, " to ").concat(newValueStr, ".")
          });
        }
      }
    }
  }

  for (var _i42 = 0, _argsDiff$added4 = argsDiff.added; _i42 < _argsDiff$added4.length; _i42++) {
    var _newArg = _argsDiff$added4[_i42];

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isRequiredArgument"])(_newArg)) {
      schemaChanges.push({
        type: BreakingChangeType.REQUIRED_ARG_ADDED,
        description: "A required arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
      });
    } else {
      schemaChanges.push({
        type: DangerousChangeType.OPTIONAL_ARG_ADDED,
        description: "An optional arg ".concat(_newArg.name, " on ").concat(oldType.name, ".").concat(oldField.name, " was added.")
      });
    }
  }

  return schemaChanges;
}

function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isListType"])(oldType)) {
    return (// if they're both lists, make sure the underlying types are compatible
      Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isListType"])(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType) || // moving from nullable to non-null of the same underlying type is safe
      Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
    );
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(oldType)) {
    // if they're both non-null, make sure the underlying types are compatible
    return Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(newType) && isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType);
  }

  return (// if they're both named types, see if their names are equivalent
    Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNamedType"])(newType) && oldType.name === newType.name || // moving from nullable to non-null of the same underlying type is safe
    Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(newType) && isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType)
  );
}

function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isListType"])(oldType)) {
    // if they're both lists, make sure the underlying types are compatible
    return Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isListType"])(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType);
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(oldType)) {
    return (// if they're both non-null, make sure the underlying types are
      // compatible
      Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType) || // moving from non-null to nullable of the same underlying type is safe
      !Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(newType) && isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType)
    );
  } // if they're both named types, see if their names are equivalent


  return Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNamedType"])(newType) && oldType.name === newType.name;
}

function typeKindName(type) {
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isScalarType"])(type)) {
    return 'a Scalar type';
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isObjectType"])(type)) {
    return 'an Object type';
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInterfaceType"])(type)) {
    return 'an Interface type';
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isUnionType"])(type)) {
    return 'a Union type';
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isEnumType"])(type)) {
    return 'an Enum type';
  }

  /* istanbul ignore else */
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInputObjectType"])(type)) {
    return 'an Input type';
  } // Not reachable. All possible named types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Unexpected type: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type));
}

function stringifyValue(value, type) {
  var ast = Object(_astFromValue_mjs__WEBPACK_IMPORTED_MODULE_8__["astFromValue"])(value, type);

  /* istanbul ignore next */
  ast != null || Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(0);
  var sortedAST = Object(_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_5__["visit"])(ast, {
    ObjectValue: function ObjectValue(objectNode) {
      var fields = [].concat(objectNode.fields).sort(function (fieldA, fieldB) {
        return fieldA.name.value.localeCompare(fieldB.name.value);
      });
      return _objectSpread({}, objectNode, {
        fields: fields
      });
    }
  });
  return Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__["print"])(sortedAST);
}

function diff(oldArray, newArray) {
  var added = [];
  var removed = [];
  var persisted = [];
  var oldMap = Object(_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(oldArray, function (_ref11) {
    var name = _ref11.name;
    return name;
  });
  var newMap = Object(_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(newArray, function (_ref12) {
    var name = _ref12.name;
    return name;
  });

  for (var _i44 = 0; _i44 < oldArray.length; _i44++) {
    var oldItem = oldArray[_i44];
    var newItem = newMap[oldItem.name];

    if (newItem === undefined) {
      removed.push(oldItem);
    } else {
      persisted.push([oldItem, newItem]);
    }
  }

  for (var _i46 = 0; _i46 < newArray.length; _i46++) {
    var _newItem = newArray[_i46];

    if (oldMap[_newItem.name] === undefined) {
      added.push(_newItem);
    }
  }

  return {
    added: added,
    persisted: persisted,
    removed: removed
  };
}


/***/ }),

/***/ "./node_modules/graphql/utilities/findDeprecatedUsages.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/graphql/utilities/findDeprecatedUsages.mjs ***!
  \*****************************************************************/
/*! exports provided: findDeprecatedUsages */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDeprecatedUsages", function() { return findDeprecatedUsages; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_visitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TypeInfo.mjs */ "./node_modules/graphql/utilities/TypeInfo.mjs");




/**
 * A validation rule which reports deprecated usages.
 *
 * Returns a list of GraphQLError instances describing each deprecated use.
 */

function findDeprecatedUsages(schema, ast) {
  var errors = [];
  var typeInfo = new _TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_3__["TypeInfo"](schema);
  Object(_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_1__["visit"])(ast, Object(_TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_3__["visitWithTypeInfo"])(typeInfo, {
    Field: function Field(node) {
      var parentType = typeInfo.getParentType();
      var fieldDef = typeInfo.getFieldDef();

      if (parentType && (fieldDef === null || fieldDef === void 0 ? void 0 : fieldDef.deprecationReason) != null) {
        errors.push(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("The field \"".concat(parentType.name, ".").concat(fieldDef.name, "\" is deprecated. ") + fieldDef.deprecationReason, node));
      }
    },
    EnumValue: function EnumValue(node) {
      var type = Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(typeInfo.getInputType());
      var enumVal = typeInfo.getEnumValue();

      if (type && (enumVal === null || enumVal === void 0 ? void 0 : enumVal.deprecationReason) != null) {
        errors.push(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("The enum value \"".concat(type.name, ".").concat(enumVal.name, "\" is deprecated. ") + enumVal.deprecationReason, node));
      }
    }
  }));
  return errors;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/getIntrospectionQuery.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/graphql/utilities/getIntrospectionQuery.mjs ***!
  \******************************************************************/
/*! exports provided: getIntrospectionQuery */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIntrospectionQuery", function() { return getIntrospectionQuery; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getIntrospectionQuery(options) {
  var optionsWithDefault = _objectSpread({
    descriptions: true,
    directiveIsRepeatable: false,
    schemaDescription: false
  }, options);

  var descriptions = optionsWithDefault.descriptions ? 'description' : '';
  var directiveIsRepeatable = optionsWithDefault.directiveIsRepeatable ? 'isRepeatable' : '';
  var schemaDescription = optionsWithDefault.schemaDescription ? descriptions : '';
  return "\n    query IntrospectionQuery {\n      __schema {\n        ".concat(schemaDescription, "\n        queryType { name }\n        mutationType { name }\n        subscriptionType { name }\n        types {\n          ...FullType\n        }\n        directives {\n          name\n          ").concat(descriptions, "\n          ").concat(directiveIsRepeatable, "\n          locations\n          args {\n            ...InputValue\n          }\n        }\n      }\n    }\n\n    fragment FullType on __Type {\n      kind\n      name\n      ").concat(descriptions, "\n      fields(includeDeprecated: true) {\n        name\n        ").concat(descriptions, "\n        args {\n          ...InputValue\n        }\n        type {\n          ...TypeRef\n        }\n        isDeprecated\n        deprecationReason\n      }\n      inputFields {\n        ...InputValue\n      }\n      interfaces {\n        ...TypeRef\n      }\n      enumValues(includeDeprecated: true) {\n        name\n        ").concat(descriptions, "\n        isDeprecated\n        deprecationReason\n      }\n      possibleTypes {\n        ...TypeRef\n      }\n    }\n\n    fragment InputValue on __InputValue {\n      name\n      ").concat(descriptions, "\n      type { ...TypeRef }\n      defaultValue\n    }\n\n    fragment TypeRef on __Type {\n      kind\n      name\n      ofType {\n        kind\n        name\n        ofType {\n          kind\n          name\n          ofType {\n            kind\n            name\n            ofType {\n              kind\n              name\n              ofType {\n                kind\n                name\n                ofType {\n                  kind\n                  name\n                  ofType {\n                    kind\n                    name\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  ");
}


/***/ }),

/***/ "./node_modules/graphql/utilities/getOperationAST.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/utilities/getOperationAST.mjs ***!
  \************************************************************/
/*! exports provided: getOperationAST */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationAST", function() { return getOperationAST; });
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");


/**
 * Returns an operation AST given a document AST and optionally an operation
 * name. If a name is not provided, an operation is only returned if only one is
 * provided in the document.
 */
function getOperationAST(documentAST, operationName) {
  var operation = null;

  for (var _i2 = 0, _documentAST$definiti2 = documentAST.definitions; _i2 < _documentAST$definiti2.length; _i2++) {
    var definition = _documentAST$definiti2[_i2];

    if (definition.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].OPERATION_DEFINITION) {
      var _definition$name;

      if (operationName == null) {
        // If no operation name was provided, only return an Operation if there
        // is one defined in the document. Upon encountering the second, return
        // null.
        if (operation) {
          return null;
        }

        operation = definition;
      } else if (((_definition$name = definition.name) === null || _definition$name === void 0 ? void 0 : _definition$name.value) === operationName) {
        return definition;
      }
    }
  }

  return operation;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/getOperationRootType.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/graphql/utilities/getOperationRootType.mjs ***!
  \*****************************************************************/
/*! exports provided: getOperationRootType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationRootType", function() { return getOperationRootType; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Extracts the root type of the operation from the schema.
 */
function getOperationRootType(schema, operation) {
  if (operation.operation === 'query') {
    var queryType = schema.getQueryType();

    if (!queryType) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Schema does not define the required query root type.', operation);
    }

    return queryType;
  }

  if (operation.operation === 'mutation') {
    var mutationType = schema.getMutationType();

    if (!mutationType) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Schema is not configured for mutations.', operation);
    }

    return mutationType;
  }

  if (operation.operation === 'subscription') {
    var subscriptionType = schema.getSubscriptionType();

    if (!subscriptionType) {
      throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Schema is not configured for subscriptions.', operation);
    }

    return subscriptionType;
  }

  throw new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Can only have query, mutation and subscription operations.', operation);
}


/***/ }),

/***/ "./node_modules/graphql/utilities/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/graphql/utilities/index.mjs ***!
  \**************************************************/
/*! exports provided: getIntrospectionQuery, getOperationAST, getOperationRootType, introspectionFromSchema, buildClientSchema, buildASTSchema, buildSchema, extendSchema, getDescription, lexicographicSortSchema, printSchema, printType, printIntrospectionSchema, typeFromAST, valueFromAST, valueFromASTUntyped, astFromValue, TypeInfo, visitWithTypeInfo, coerceInputValue, concatAST, separateOperations, stripIgnoredCharacters, isEqualType, isTypeSubTypeOf, doTypesOverlap, assertValidName, isValidNameError, BreakingChangeType, DangerousChangeType, findBreakingChanges, findDangerousChanges, findDeprecatedUsages */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getIntrospectionQuery_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getIntrospectionQuery.mjs */ "./node_modules/graphql/utilities/getIntrospectionQuery.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getIntrospectionQuery", function() { return _getIntrospectionQuery_mjs__WEBPACK_IMPORTED_MODULE_0__["getIntrospectionQuery"]; });

/* harmony import */ var _getOperationAST_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOperationAST.mjs */ "./node_modules/graphql/utilities/getOperationAST.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationAST", function() { return _getOperationAST_mjs__WEBPACK_IMPORTED_MODULE_1__["getOperationAST"]; });

/* harmony import */ var _getOperationRootType_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getOperationRootType.mjs */ "./node_modules/graphql/utilities/getOperationRootType.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationRootType", function() { return _getOperationRootType_mjs__WEBPACK_IMPORTED_MODULE_2__["getOperationRootType"]; });

/* harmony import */ var _introspectionFromSchema_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./introspectionFromSchema.mjs */ "./node_modules/graphql/utilities/introspectionFromSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "introspectionFromSchema", function() { return _introspectionFromSchema_mjs__WEBPACK_IMPORTED_MODULE_3__["introspectionFromSchema"]; });

/* harmony import */ var _buildClientSchema_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buildClientSchema.mjs */ "./node_modules/graphql/utilities/buildClientSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildClientSchema", function() { return _buildClientSchema_mjs__WEBPACK_IMPORTED_MODULE_4__["buildClientSchema"]; });

/* harmony import */ var _buildASTSchema_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buildASTSchema.mjs */ "./node_modules/graphql/utilities/buildASTSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildASTSchema", function() { return _buildASTSchema_mjs__WEBPACK_IMPORTED_MODULE_5__["buildASTSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildSchema", function() { return _buildASTSchema_mjs__WEBPACK_IMPORTED_MODULE_5__["buildSchema"]; });

/* harmony import */ var _extendSchema_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extendSchema.mjs */ "./node_modules/graphql/utilities/extendSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendSchema", function() { return _extendSchema_mjs__WEBPACK_IMPORTED_MODULE_6__["extendSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return _extendSchema_mjs__WEBPACK_IMPORTED_MODULE_6__["getDescription"]; });

/* harmony import */ var _lexicographicSortSchema_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lexicographicSortSchema.mjs */ "./node_modules/graphql/utilities/lexicographicSortSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexicographicSortSchema", function() { return _lexicographicSortSchema_mjs__WEBPACK_IMPORTED_MODULE_7__["lexicographicSortSchema"]; });

/* harmony import */ var _printSchema_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./printSchema.mjs */ "./node_modules/graphql/utilities/printSchema.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printSchema", function() { return _printSchema_mjs__WEBPACK_IMPORTED_MODULE_8__["printSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printType", function() { return _printSchema_mjs__WEBPACK_IMPORTED_MODULE_8__["printType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printIntrospectionSchema", function() { return _printSchema_mjs__WEBPACK_IMPORTED_MODULE_8__["printIntrospectionSchema"]; });

/* harmony import */ var _typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeFromAST", function() { return _typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_9__["typeFromAST"]; });

/* harmony import */ var _valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./valueFromAST.mjs */ "./node_modules/graphql/utilities/valueFromAST.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromAST", function() { return _valueFromAST_mjs__WEBPACK_IMPORTED_MODULE_10__["valueFromAST"]; });

/* harmony import */ var _valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./valueFromASTUntyped.mjs */ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueFromASTUntyped", function() { return _valueFromASTUntyped_mjs__WEBPACK_IMPORTED_MODULE_11__["valueFromASTUntyped"]; });

/* harmony import */ var _astFromValue_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./astFromValue.mjs */ "./node_modules/graphql/utilities/astFromValue.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "astFromValue", function() { return _astFromValue_mjs__WEBPACK_IMPORTED_MODULE_12__["astFromValue"]; });

/* harmony import */ var _TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TypeInfo.mjs */ "./node_modules/graphql/utilities/TypeInfo.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeInfo", function() { return _TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_13__["TypeInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "visitWithTypeInfo", function() { return _TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_13__["visitWithTypeInfo"]; });

/* harmony import */ var _coerceInputValue_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./coerceInputValue.mjs */ "./node_modules/graphql/utilities/coerceInputValue.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "coerceInputValue", function() { return _coerceInputValue_mjs__WEBPACK_IMPORTED_MODULE_14__["coerceInputValue"]; });

/* harmony import */ var _concatAST_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./concatAST.mjs */ "./node_modules/graphql/utilities/concatAST.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatAST", function() { return _concatAST_mjs__WEBPACK_IMPORTED_MODULE_15__["concatAST"]; });

/* harmony import */ var _separateOperations_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./separateOperations.mjs */ "./node_modules/graphql/utilities/separateOperations.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "separateOperations", function() { return _separateOperations_mjs__WEBPACK_IMPORTED_MODULE_16__["separateOperations"]; });

/* harmony import */ var _stripIgnoredCharacters_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stripIgnoredCharacters.mjs */ "./node_modules/graphql/utilities/stripIgnoredCharacters.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stripIgnoredCharacters", function() { return _stripIgnoredCharacters_mjs__WEBPACK_IMPORTED_MODULE_17__["stripIgnoredCharacters"]; });

/* harmony import */ var _typeComparators_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./typeComparators.mjs */ "./node_modules/graphql/utilities/typeComparators.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqualType", function() { return _typeComparators_mjs__WEBPACK_IMPORTED_MODULE_18__["isEqualType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTypeSubTypeOf", function() { return _typeComparators_mjs__WEBPACK_IMPORTED_MODULE_18__["isTypeSubTypeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doTypesOverlap", function() { return _typeComparators_mjs__WEBPACK_IMPORTED_MODULE_18__["doTypesOverlap"]; });

/* harmony import */ var _assertValidName_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assertValidName.mjs */ "./node_modules/graphql/utilities/assertValidName.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assertValidName", function() { return _assertValidName_mjs__WEBPACK_IMPORTED_MODULE_19__["assertValidName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidNameError", function() { return _assertValidName_mjs__WEBPACK_IMPORTED_MODULE_19__["isValidNameError"]; });

/* harmony import */ var _findBreakingChanges_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./findBreakingChanges.mjs */ "./node_modules/graphql/utilities/findBreakingChanges.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakingChangeType", function() { return _findBreakingChanges_mjs__WEBPACK_IMPORTED_MODULE_20__["BreakingChangeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DangerousChangeType", function() { return _findBreakingChanges_mjs__WEBPACK_IMPORTED_MODULE_20__["DangerousChangeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findBreakingChanges", function() { return _findBreakingChanges_mjs__WEBPACK_IMPORTED_MODULE_20__["findBreakingChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDangerousChanges", function() { return _findBreakingChanges_mjs__WEBPACK_IMPORTED_MODULE_20__["findDangerousChanges"]; });

/* harmony import */ var _findDeprecatedUsages_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./findDeprecatedUsages.mjs */ "./node_modules/graphql/utilities/findDeprecatedUsages.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findDeprecatedUsages", function() { return _findDeprecatedUsages_mjs__WEBPACK_IMPORTED_MODULE_21__["findDeprecatedUsages"]; });

// Produce the GraphQL query recommended for a full schema introspection.
// Accepts optional IntrospectionOptions.

// Gets the target Operation from a Document.
 // Gets the Type for the target Operation AST.

 // Convert a GraphQLSchema to an IntrospectionQuery.

 // Build a GraphQLSchema from an introspection result.

 // Build a GraphQLSchema from GraphQL Schema language.


// Extends an existing GraphQLSchema from a parsed GraphQL Schema language AST.
 // Sort a GraphQLSchema.

 // Print a GraphQLSchema to GraphQL Schema language.

 // Create a GraphQLType from a GraphQL language AST.

 // Create a JavaScript value from a GraphQL language AST with a type.

 // Create a JavaScript value from a GraphQL language AST without a type.

 // Create a GraphQL language AST from a JavaScript value.

 // A helper to use within recursive-descent visitors which need to be aware of
// the GraphQL type system.

 // Coerces a JavaScript value to a GraphQL type, or produces errors.

 // Concatenates multiple AST together.

 // Separates an AST into an AST per Operation.

 // Strips characters that are not significant to the validity or execution
// of a GraphQL document.

 // Comparators for types

 // Asserts that a string is a valid GraphQL name

 // Compares two GraphQLSchemas and detects breaking changes.


// Report all deprecated usage within a GraphQL document.



/***/ }),

/***/ "./node_modules/graphql/utilities/introspectionFromSchema.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/utilities/introspectionFromSchema.mjs ***!
  \********************************************************************/
/*! exports provided: introspectionFromSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "introspectionFromSchema", function() { return introspectionFromSchema; });
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/isPromise.mjs */ "./node_modules/graphql/jsutils/isPromise.mjs");
/* harmony import */ var _language_parser_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/parser.mjs */ "./node_modules/graphql/language/parser.mjs");
/* harmony import */ var _execution_execute_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../execution/execute.mjs */ "./node_modules/graphql/execution/execute.mjs");
/* harmony import */ var _getIntrospectionQuery_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getIntrospectionQuery.mjs */ "./node_modules/graphql/utilities/getIntrospectionQuery.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Build an IntrospectionQuery from a GraphQLSchema
 *
 * IntrospectionQuery is useful for utilities that care about type and field
 * relationships, but do not need to traverse through those relationships.
 *
 * This is the inverse of buildClientSchema. The primary use case is outside
 * of the server context, for instance when doing schema comparisons.
 */

function introspectionFromSchema(schema, options) {
  var optionsWithDefaults = _objectSpread({
    directiveIsRepeatable: true,
    schemaDescription: true
  }, options);

  var document = Object(_language_parser_mjs__WEBPACK_IMPORTED_MODULE_2__["parse"])(Object(_getIntrospectionQuery_mjs__WEBPACK_IMPORTED_MODULE_4__["getIntrospectionQuery"])(optionsWithDefaults));
  var result = Object(_execution_execute_mjs__WEBPACK_IMPORTED_MODULE_3__["execute"])({
    schema: schema,
    document: document
  });

  /* istanbul ignore next */
  !Object(_jsutils_isPromise_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(result) && !result.errors && result.data || Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(0);
  return result.data;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/lexicographicSortSchema.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/graphql/utilities/lexicographicSortSchema.mjs ***!
  \********************************************************************/
/*! exports provided: lexicographicSortSchema */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lexicographicSortSchema", function() { return lexicographicSortSchema; });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/keyValMap.mjs */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _type_schema_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type/schema.mjs */ "./node_modules/graphql/type/schema.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/**
 * Sort GraphQLSchema.
 *
 * This function returns a sorted copy of the given GraphQLSchema.
 */

function lexicographicSortSchema(schema) {
  var schemaConfig = schema.toConfig();
  var typeMap = Object(_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(sortByName(schemaConfig.types), function (type) {
    return type.name;
  }, sortNamedType);
  return new _type_schema_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLSchema"](_objectSpread({}, schemaConfig, {
    types: Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(typeMap),
    directives: sortByName(schemaConfig.directives).map(sortDirective),
    query: replaceMaybeType(schemaConfig.query),
    mutation: replaceMaybeType(schemaConfig.mutation),
    subscription: replaceMaybeType(schemaConfig.subscription)
  }));

  function replaceType(type) {
    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isListType"])(type)) {
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLList"](replaceType(type.ofType));
    } else if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(type)) {
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLNonNull"](replaceType(type.ofType));
    }

    return replaceNamedType(type);
  }

  function replaceNamedType(type) {
    return typeMap[type.name];
  }

  function replaceMaybeType(maybeType) {
    return maybeType && replaceNamedType(maybeType);
  }

  function sortDirective(directive) {
    var config = directive.toConfig();
    return new _type_directives_mjs__WEBPACK_IMPORTED_MODULE_5__["GraphQLDirective"](_objectSpread({}, config, {
      locations: sortBy(config.locations, function (x) {
        return x;
      }),
      args: sortArgs(config.args)
    }));
  }

  function sortArgs(args) {
    return sortObjMap(args, function (arg) {
      return _objectSpread({}, arg, {
        type: replaceType(arg.type)
      });
    });
  }

  function sortFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread({}, field, {
        type: replaceType(field.type),
        args: sortArgs(field.args)
      });
    });
  }

  function sortInputFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread({}, field, {
        type: replaceType(field.type)
      });
    });
  }

  function sortTypes(arr) {
    return sortByName(arr).map(replaceNamedType);
  }

  function sortNamedType(type) {
    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isScalarType"])(type) || Object(_type_introspection_mjs__WEBPACK_IMPORTED_MODULE_6__["isIntrospectionType"])(type)) {
      return type;
    }

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isObjectType"])(type)) {
      var config = type.toConfig();
      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLObjectType"](_objectSpread({}, config, {
        interfaces: function interfaces() {
          return sortTypes(config.interfaces);
        },
        fields: function fields() {
          return sortFields(config.fields);
        }
      }));
    }

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInterfaceType"])(type)) {
      var _config = type.toConfig();

      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLInterfaceType"](_objectSpread({}, _config, {
        interfaces: function interfaces() {
          return sortTypes(_config.interfaces);
        },
        fields: function fields() {
          return sortFields(_config.fields);
        }
      }));
    }

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isUnionType"])(type)) {
      var _config2 = type.toConfig();

      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLUnionType"](_objectSpread({}, _config2, {
        types: function types() {
          return sortTypes(_config2.types);
        }
      }));
    }

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isEnumType"])(type)) {
      var _config3 = type.toConfig();

      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLEnumType"](_objectSpread({}, _config3, {
        values: sortObjMap(_config3.values)
      }));
    }

    /* istanbul ignore else */
    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInputObjectType"])(type)) {
      var _config4 = type.toConfig();

      return new _type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["GraphQLInputObjectType"](_objectSpread({}, _config4, {
        fields: function fields() {
          return sortInputFields(_config4.fields);
        }
      }));
    } // Not reachable. All possible types have been considered.


    /* istanbul ignore next */
    Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'Unexpected type: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(type));
  }
}

function sortObjMap(map, sortValueFn) {
  var sortedMap = Object.create(null);
  var sortedKeys = sortBy(Object.keys(map), function (x) {
    return x;
  });

  for (var _i2 = 0; _i2 < sortedKeys.length; _i2++) {
    var key = sortedKeys[_i2];
    var value = map[key];
    sortedMap[key] = sortValueFn ? sortValueFn(value) : value;
  }

  return sortedMap;
}

function sortByName(array) {
  return sortBy(array, function (obj) {
    return obj.name;
  });
}

function sortBy(array, mapToKey) {
  return array.slice().sort(function (obj1, obj2) {
    var key1 = mapToKey(obj1);
    var key2 = mapToKey(obj2);
    return key1.localeCompare(key2);
  });
}


/***/ }),

/***/ "./node_modules/graphql/utilities/printSchema.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/utilities/printSchema.mjs ***!
  \********************************************************/
/*! exports provided: printSchema, printIntrospectionSchema, printType */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printSchema", function() { return printSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printIntrospectionSchema", function() { return printIntrospectionSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printType", function() { return printType; });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _language_blockString_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");
/* harmony import */ var _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/introspection.mjs */ "./node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../type/scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _astFromValue_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./astFromValue.mjs */ "./node_modules/graphql/utilities/astFromValue.mjs");











/**
 * Accepts options as a second argument:
 *
 *    - commentDescriptions:
 *        Provide true to use preceding comments as the description.
 *
 */
function printSchema(schema, options) {
  return printFilteredSchema(schema, function (n) {
    return !Object(_type_directives_mjs__WEBPACK_IMPORTED_MODULE_7__["isSpecifiedDirective"])(n);
  }, isDefinedType, options);
}
function printIntrospectionSchema(schema, options) {
  return printFilteredSchema(schema, _type_directives_mjs__WEBPACK_IMPORTED_MODULE_7__["isSpecifiedDirective"], _type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__["isIntrospectionType"], options);
}

function isDefinedType(type) {
  return !Object(_type_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["isSpecifiedScalarType"])(type) && !Object(_type_introspection_mjs__WEBPACK_IMPORTED_MODULE_5__["isIntrospectionType"])(type);
}

function printFilteredSchema(schema, directiveFilter, typeFilter, options) {
  var directives = schema.getDirectives().filter(directiveFilter);
  var types = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(schema.getTypeMap()).filter(typeFilter);
  return [printSchemaDefinition(schema)].concat(directives.map(function (directive) {
    return printDirective(directive, options);
  }), types.map(function (type) {
    return printType(type, options);
  })).filter(Boolean).join('\n\n') + '\n';
}

function printSchemaDefinition(schema) {
  if (schema.description == null && isSchemaOfCommonNames(schema)) {
    return;
  }

  var operationTypes = [];
  var queryType = schema.getQueryType();

  if (queryType) {
    operationTypes.push("  query: ".concat(queryType.name));
  }

  var mutationType = schema.getMutationType();

  if (mutationType) {
    operationTypes.push("  mutation: ".concat(mutationType.name));
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType) {
    operationTypes.push("  subscription: ".concat(subscriptionType.name));
  }

  return printDescription({}, schema) + "schema {\n".concat(operationTypes.join('\n'), "\n}");
}
/**
 * GraphQL schema define root types for each type of operation. These types are
 * the same as any other type and can be named in any manner, however there is
 * a common naming convention:
 *
 *   schema {
 *     query: Query
 *     mutation: Mutation
 *   }
 *
 * When using this naming convention, the schema description can be omitted.
 */


function isSchemaOfCommonNames(schema) {
  var queryType = schema.getQueryType();

  if (queryType && queryType.name !== 'Query') {
    return false;
  }

  var mutationType = schema.getMutationType();

  if (mutationType && mutationType.name !== 'Mutation') {
    return false;
  }

  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType && subscriptionType.name !== 'Subscription') {
    return false;
  }

  return true;
}

function printType(type, options) {
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__["isScalarType"])(type)) {
    return printScalar(type, options);
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__["isObjectType"])(type)) {
    return printObject(type, options);
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__["isInterfaceType"])(type)) {
    return printInterface(type, options);
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__["isUnionType"])(type)) {
    return printUnion(type, options);
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__["isEnumType"])(type)) {
    return printEnum(type, options);
  }

  /* istanbul ignore else */
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_8__["isInputObjectType"])(type)) {
    return printInputObject(type, options);
  } // Not reachable. All possible types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(false, 'Unexpected type: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(type));
}

function printScalar(type, options) {
  return printDescription(options, type) + "scalar ".concat(type.name);
}

function printImplementedInterfaces(type) {
  var interfaces = type.getInterfaces();
  return interfaces.length ? ' implements ' + interfaces.map(function (i) {
    return i.name;
  }).join(' & ') : '';
}

function printObject(type, options) {
  return printDescription(options, type) + "type ".concat(type.name) + printImplementedInterfaces(type) + printFields(options, type);
}

function printInterface(type, options) {
  return printDescription(options, type) + "interface ".concat(type.name) + printImplementedInterfaces(type) + printFields(options, type);
}

function printUnion(type, options) {
  var types = type.getTypes();
  var possibleTypes = types.length ? ' = ' + types.join(' | ') : '';
  return printDescription(options, type) + 'union ' + type.name + possibleTypes;
}

function printEnum(type, options) {
  var values = type.getValues().map(function (value, i) {
    return printDescription(options, value, '  ', !i) + '  ' + value.name + printDeprecated(value);
  });
  return printDescription(options, type) + "enum ".concat(type.name) + printBlock(values);
}

function printInputObject(type, options) {
  var fields = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields()).map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + printInputValue(f);
  });
  return printDescription(options, type) + "input ".concat(type.name) + printBlock(fields);
}

function printFields(options, type) {
  var fields = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields()).map(function (f, i) {
    return printDescription(options, f, '  ', !i) + '  ' + f.name + printArgs(options, f.args, '  ') + ': ' + String(f.type) + printDeprecated(f);
  });
  return printBlock(fields);
}

function printBlock(items) {
  return items.length !== 0 ? ' {\n' + items.join('\n') + '\n}' : '';
}

function printArgs(options, args) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (args.length === 0) {
    return '';
  } // If every arg does not have a description, print them on one line.


  if (args.every(function (arg) {
    return !arg.description;
  })) {
    return '(' + args.map(printInputValue).join(', ') + ')';
  }

  return '(\n' + args.map(function (arg, i) {
    return printDescription(options, arg, '  ' + indentation, !i) + '  ' + indentation + printInputValue(arg);
  }).join('\n') + '\n' + indentation + ')';
}

function printInputValue(arg) {
  var defaultAST = Object(_astFromValue_mjs__WEBPACK_IMPORTED_MODULE_9__["astFromValue"])(arg.defaultValue, arg.type);
  var argDecl = arg.name + ': ' + String(arg.type);

  if (defaultAST) {
    argDecl += " = ".concat(Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_3__["print"])(defaultAST));
  }

  return argDecl;
}

function printDirective(directive, options) {
  return printDescription(options, directive) + 'directive @' + directive.name + printArgs(options, directive.args) + (directive.isRepeatable ? ' repeatable' : '') + ' on ' + directive.locations.join(' | ');
}

function printDeprecated(fieldOrEnumVal) {
  if (!fieldOrEnumVal.isDeprecated) {
    return '';
  }

  var reason = fieldOrEnumVal.deprecationReason;
  var reasonAST = Object(_astFromValue_mjs__WEBPACK_IMPORTED_MODULE_9__["astFromValue"])(reason, _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_6__["GraphQLString"]);

  if (reasonAST && reason !== _type_directives_mjs__WEBPACK_IMPORTED_MODULE_7__["DEFAULT_DEPRECATION_REASON"]) {
    return ' @deprecated(reason: ' + Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_3__["print"])(reasonAST) + ')';
  }

  return ' @deprecated';
}

function printDescription(options, def) {
  var indentation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var firstInBlock = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var description = def.description;

  if (description == null) {
    return '';
  }

  if ((options === null || options === void 0 ? void 0 : options.commentDescriptions) === true) {
    return printDescriptionWithComments(description, indentation, firstInBlock);
  }

  var preferMultipleLines = description.length > 70;
  var blockString = Object(_language_blockString_mjs__WEBPACK_IMPORTED_MODULE_4__["printBlockString"])(description, '', preferMultipleLines);
  var prefix = indentation && !firstInBlock ? '\n' + indentation : indentation;
  return prefix + blockString.replace(/\n/g, '\n' + indentation) + '\n';
}

function printDescriptionWithComments(description, indentation, firstInBlock) {
  var prefix = indentation && !firstInBlock ? '\n' : '';
  var comment = description.split('\n').map(function (line) {
    return indentation + (line !== '' ? '# ' + line : '#');
  }).join('\n');
  return prefix + comment + '\n';
}


/***/ }),

/***/ "./node_modules/graphql/utilities/separateOperations.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/graphql/utilities/separateOperations.mjs ***!
  \***************************************************************/
/*! exports provided: separateOperations */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "separateOperations", function() { return separateOperations; });
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_visitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");



/**
 * separateOperations accepts a single AST document which may contain many
 * operations and fragments and returns a collection of AST documents each of
 * which contains a single operation as well the fragment definitions it
 * refers to.
 */
function separateOperations(documentAST) {
  var operations = [];
  var depGraph = Object.create(null);
  var fromName; // Populate metadata and build a dependency graph.

  Object(_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_1__["visit"])(documentAST, {
    OperationDefinition: function OperationDefinition(node) {
      fromName = opName(node);
      operations.push(node);
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fromName = node.name.value;
    },
    FragmentSpread: function FragmentSpread(node) {
      var toName = node.name.value;
      var dependents = depGraph[fromName];

      if (dependents === undefined) {
        dependents = depGraph[fromName] = Object.create(null);
      }

      dependents[toName] = true;
    }
  }); // For each operation, produce a new synthesized AST which includes only what
  // is necessary for completing that operation.

  var separatedDocumentASTs = Object.create(null);

  var _loop = function _loop(_i2) {
    var operation = operations[_i2];
    var operationName = opName(operation);
    var dependencies = Object.create(null);
    collectTransitiveDependencies(dependencies, depGraph, operationName); // The list of definition nodes to be included for this operation, sorted
    // to retain the same order as the original document.

    separatedDocumentASTs[operationName] = {
      kind: _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].DOCUMENT,
      definitions: documentAST.definitions.filter(function (node) {
        return node === operation || node.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].FRAGMENT_DEFINITION && dependencies[node.name.value];
      })
    };
  };

  for (var _i2 = 0; _i2 < operations.length; _i2++) {
    _loop(_i2);
  }

  return separatedDocumentASTs;
}

// Provides the empty string for anonymous operations.
function opName(operation) {
  return operation.name ? operation.name.value : '';
} // From a dependency graph, collects a list of transitive dependencies by
// recursing through a dependency graph.


function collectTransitiveDependencies(collected, depGraph, fromName) {
  var immediateDeps = depGraph[fromName];

  if (immediateDeps) {
    for (var _i4 = 0, _Object$keys2 = Object.keys(immediateDeps); _i4 < _Object$keys2.length; _i4++) {
      var toName = _Object$keys2[_i4];

      if (!collected[toName]) {
        collected[toName] = true;
        collectTransitiveDependencies(collected, depGraph, toName);
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/utilities/stripIgnoredCharacters.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/graphql/utilities/stripIgnoredCharacters.mjs ***!
  \*******************************************************************/
/*! exports provided: stripIgnoredCharacters */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripIgnoredCharacters", function() { return stripIgnoredCharacters; });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _language_source_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/source.mjs */ "./node_modules/graphql/language/source.mjs");
/* harmony import */ var _language_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/tokenKind.mjs */ "./node_modules/graphql/language/tokenKind.mjs");
/* harmony import */ var _language_lexer_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/lexer.mjs */ "./node_modules/graphql/language/lexer.mjs");
/* harmony import */ var _language_blockString_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/blockString.mjs */ "./node_modules/graphql/language/blockString.mjs");





/**
 * Strips characters that are not significant to the validity or execution
 * of a GraphQL document:
 *   - UnicodeBOM
 *   - WhiteSpace
 *   - LineTerminator
 *   - Comment
 *   - Comma
 *   - BlockString indentation
 *
 * Note: It is required to have a delimiter character between neighboring
 * non-punctuator tokens and this function always uses single space as delimiter.
 *
 * It is guaranteed that both input and output documents if parsed would result
 * in the exact same AST except for nodes location.
 *
 * Warning: It is guaranteed that this function will always produce stable results.
 * However, it's not guaranteed that it will stay the same between different
 * releases due to bugfixes or changes in the GraphQL specification.
 *
 * Query example:
 *
 * query SomeQuery($foo: String!, $bar: String) {
 *   someField(foo: $foo, bar: $bar) {
 *     a
 *     b {
 *       c
 *       d
 *     }
 *   }
 * }
 *
 * Becomes:
 *
 * query SomeQuery($foo:String!$bar:String){someField(foo:$foo bar:$bar){a b{c d}}}
 *
 * SDL example:
 *
 * """
 * Type description
 * """
 * type Foo {
 *   """
 *   Field description
 *   """
 *   bar: String
 * }
 *
 * Becomes:
 *
 * """Type description""" type Foo{"""Field description""" bar:String}
 */

function stripIgnoredCharacters(source) {
  var sourceObj = typeof source === 'string' ? new _language_source_mjs__WEBPACK_IMPORTED_MODULE_1__["Source"](source) : source;

  if (!(sourceObj instanceof _language_source_mjs__WEBPACK_IMPORTED_MODULE_1__["Source"])) {
    throw new TypeError("Must provide string or Source. Received: ".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(sourceObj), "."));
  }

  var body = sourceObj.body;
  var lexer = new _language_lexer_mjs__WEBPACK_IMPORTED_MODULE_3__["Lexer"](sourceObj);
  var strippedBody = '';
  var wasLastAddedTokenNonPunctuator = false;

  while (lexer.advance().kind !== _language_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].EOF) {
    var currentToken = lexer.token;
    var tokenKind = currentToken.kind;
    /**
     * Every two non-punctuator tokens should have space between them.
     * Also prevent case of non-punctuator token following by spread resulting
     * in invalid token (e.g. `1...` is invalid Float token).
     */

    var isNonPunctuator = !Object(_language_lexer_mjs__WEBPACK_IMPORTED_MODULE_3__["isPunctuatorTokenKind"])(currentToken.kind);

    if (wasLastAddedTokenNonPunctuator) {
      if (isNonPunctuator || currentToken.kind === _language_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].SPREAD) {
        strippedBody += ' ';
      }
    }

    var tokenBody = body.slice(currentToken.start, currentToken.end);

    if (tokenKind === _language_tokenKind_mjs__WEBPACK_IMPORTED_MODULE_2__["TokenKind"].BLOCK_STRING) {
      strippedBody += dedentBlockString(tokenBody);
    } else {
      strippedBody += tokenBody;
    }

    wasLastAddedTokenNonPunctuator = isNonPunctuator;
  }

  return strippedBody;
}

function dedentBlockString(blockStr) {
  // skip leading and trailing triple quotations
  var rawStr = blockStr.slice(3, -3);
  var body = Object(_language_blockString_mjs__WEBPACK_IMPORTED_MODULE_4__["dedentBlockStringValue"])(rawStr);
  var lines = body.split(/\r\n|[\n\r]/g);

  if (Object(_language_blockString_mjs__WEBPACK_IMPORTED_MODULE_4__["getBlockStringIndentation"])(lines) > 0) {
    body = '\n' + body;
  }

  var lastChar = body[body.length - 1];
  var hasTrailingQuote = lastChar === '"' && body.slice(-4) !== '\\"""';

  if (hasTrailingQuote || lastChar === '\\') {
    body += '\n';
  }

  return '"""' + body + '"""';
}


/***/ }),

/***/ "./node_modules/graphql/utilities/typeComparators.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/utilities/typeComparators.mjs ***!
  \************************************************************/
/*! exports provided: isEqualType, isTypeSubTypeOf, doTypesOverlap */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqualType", function() { return isEqualType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTypeSubTypeOf", function() { return isTypeSubTypeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doTypesOverlap", function() { return doTypesOverlap; });
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");

/**
 * Provided two types, return true if the types are equal (invariant).
 */

function isEqualType(typeA, typeB) {
  // Equivalent types are equal.
  if (typeA === typeB) {
    return true;
  } // If either type is non-null, the other must also be non-null.


  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(typeA) && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // If either type is a list, the other must also be a list.


  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isListType"])(typeA) && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isListType"])(typeB)) {
    return isEqualType(typeA.ofType, typeB.ofType);
  } // Otherwise the types are not equal.


  return false;
}
/**
 * Provided a type and a super type, return true if the first type is either
 * equal or a subset of the second super type (covariant).
 */

function isTypeSubTypeOf(schema, maybeSubType, superType) {
  // Equivalent type is a valid subtype
  if (maybeSubType === superType) {
    return true;
  } // If superType is non-null, maybeSubType must also be non-null.


  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(superType)) {
    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isNonNullType"])(maybeSubType)) {
    // If superType is nullable, maybeSubType may be non-null or nullable.
    return isTypeSubTypeOf(schema, maybeSubType.ofType, superType);
  } // If superType type is a list, maybeSubType type must also be a list.


  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isListType"])(superType)) {
    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isListType"])(maybeSubType)) {
      return isTypeSubTypeOf(schema, maybeSubType.ofType, superType.ofType);
    }

    return false;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isListType"])(maybeSubType)) {
    // If superType is not a list, maybeSubType must also be not a list.
    return false;
  } // If superType type is an abstract type, check if it is super type of maybeSubType.
  // Otherwise, the child type is not a valid subtype of the parent type.


  return Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(superType) && (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isInterfaceType"])(maybeSubType) || Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isObjectType"])(maybeSubType)) && schema.isSubType(superType, maybeSubType);
}
/**
 * Provided two composite types, determine if they "overlap". Two composite
 * types overlap when the Sets of possible concrete types for each intersect.
 *
 * This is often used to determine if a fragment of a given type could possibly
 * be visited in a context of another type.
 *
 * This function is commutative.
 */

function doTypesOverlap(schema, typeA, typeB) {
  // Equivalent types overlap
  if (typeA === typeB) {
    return true;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(typeA)) {
    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(typeB)) {
      // If both types are abstract, then determine if there is any intersection
      // between possible concrete types of each.
      return schema.getPossibleTypes(typeA).some(function (type) {
        return schema.isSubType(typeB, type);
      });
    } // Determine if the latter type is a possible concrete type of the former.


    return schema.isSubType(typeA, typeB);
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_0__["isAbstractType"])(typeB)) {
    // Determine if the former type is a possible concrete type of the latter.
    return schema.isSubType(typeB, typeA);
  } // Otherwise the types do not overlap.


  return false;
}


/***/ }),

/***/ "./node_modules/graphql/utilities/typeFromAST.mjs":
/*!********************************************************!*\
  !*** ./node_modules/graphql/utilities/typeFromAST.mjs ***!
  \********************************************************/
/*! exports provided: typeFromAST */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeFromAST", function() { return typeFromAST; });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");




/**
 * Given a Schema and an AST node describing a type, return a GraphQLType
 * definition which applies to that type. For example, if provided the parsed
 * AST node for `[User]`, a GraphQLList instance will be returned, containing
 * the type called "User" found in the schema. If a type called "User" is not
 * found in the schema, then undefined will be returned.
 */

/* eslint-disable no-redeclare */

function typeFromAST(schema, typeNode) {
  /* eslint-enable no-redeclare */
  var innerType;

  if (typeNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_2__["Kind"].LIST_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__["GraphQLList"])(innerType);
  }

  if (typeNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_2__["Kind"].NON_NULL_TYPE) {
    innerType = typeFromAST(schema, typeNode.type);
    return innerType && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__["GraphQLNonNull"])(innerType);
  }

  /* istanbul ignore else */
  if (typeNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_2__["Kind"].NAMED_TYPE) {
    return schema.getType(typeNode.name.value);
  } // Not reachable. All possible type nodes have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Unexpected type node: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(typeNode));
}


/***/ }),

/***/ "./node_modules/graphql/utilities/valueFromAST.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/graphql/utilities/valueFromAST.mjs ***!
  \*********************************************************/
/*! exports provided: valueFromAST */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromAST", function() { return valueFromAST; });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");






/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * A GraphQL type must be provided, which will be used to interpret different
 * GraphQL Value literals.
 *
 * Returns `undefined` when the value could not be validly coerced according to
 * the provided type.
 *
 * | GraphQL Value        | JSON Value    |
 * | -------------------- | ------------- |
 * | Input Object         | Object        |
 * | List                 | Array         |
 * | Boolean              | Boolean       |
 * | String               | String        |
 * | Int / Float          | Number        |
 * | Enum Value           | Mixed         |
 * | NullValue            | null          |
 *
 */

function valueFromAST(valueNode, type, variables) {
  if (!valueNode) {
    // When there is no node, then there is also no value.
    // Importantly, this is different from returning the value null.
    return;
  }

  if (valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].VARIABLE) {
    var variableName = valueNode.name.value;

    if (variables == null || variables[variableName] === undefined) {
      // No valid return value.
      return;
    }

    var variableValue = variables[variableName];

    if (variableValue === null && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__["isNonNullType"])(type)) {
      return; // Invalid: intentionally return no value.
    } // Note: This does no further checking that this variable is correct.
    // This assumes that this query has been validated and the variable
    // usage here is of the correct type.


    return variableValue;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__["isNonNullType"])(type)) {
    if (valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].NULL) {
      return; // Invalid: intentionally return no value.
    }

    return valueFromAST(valueNode, type.ofType, variables);
  }

  if (valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].NULL) {
    // This is explicitly returning the value null.
    return null;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__["isListType"])(type)) {
    var itemType = type.ofType;

    if (valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].LIST) {
      var coercedValues = [];

      for (var _i2 = 0, _valueNode$values2 = valueNode.values; _i2 < _valueNode$values2.length; _i2++) {
        var itemNode = _valueNode$values2[_i2];

        if (isMissingVariable(itemNode, variables)) {
          // If an array contains a missing variable, it is either coerced to
          // null or if the item type is non-null, it considered invalid.
          if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__["isNonNullType"])(itemType)) {
            return; // Invalid: intentionally return no value.
          }

          coercedValues.push(null);
        } else {
          var itemValue = valueFromAST(itemNode, itemType, variables);

          if (itemValue === undefined) {
            return; // Invalid: intentionally return no value.
          }

          coercedValues.push(itemValue);
        }
      }

      return coercedValues;
    }

    var coercedValue = valueFromAST(valueNode, itemType, variables);

    if (coercedValue === undefined) {
      return; // Invalid: intentionally return no value.
    }

    return [coercedValue];
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__["isInputObjectType"])(type)) {
    if (valueNode.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].OBJECT) {
      return; // Invalid: intentionally return no value.
    }

    var coercedObj = Object.create(null);
    var fieldNodes = Object(_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(valueNode.fields, function (field) {
      return field.name.value;
    });

    for (var _i4 = 0, _objectValues2 = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields()); _i4 < _objectValues2.length; _i4++) {
      var field = _objectValues2[_i4];
      var fieldNode = fieldNodes[field.name];

      if (!fieldNode || isMissingVariable(fieldNode.value, variables)) {
        if (field.defaultValue !== undefined) {
          coercedObj[field.name] = field.defaultValue;
        } else if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__["isNonNullType"])(field.type)) {
          return; // Invalid: intentionally return no value.
        }

        continue;
      }

      var fieldValue = valueFromAST(fieldNode.value, field.type, variables);

      if (fieldValue === undefined) {
        return; // Invalid: intentionally return no value.
      }

      coercedObj[field.name] = fieldValue;
    }

    return coercedObj;
  }

  /* istanbul ignore else */
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_5__["isLeafType"])(type)) {
    // Scalars and Enums fulfill parsing a literal value via parseLiteral().
    // Invalid values represent a failure to parse correctly, in which case
    // no value is returned.
    var result;

    try {
      result = type.parseLiteral(valueNode, variables);
    } catch (_error) {
      return; // Invalid: intentionally return no value.
    }

    if (result === undefined) {
      return; // Invalid: intentionally return no value.
    }

    return result;
  } // Not reachable. All possible input types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(false, 'Unexpected input type: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type));
} // Returns true if the provided valueNode is a variable which is not defined
// in the set of variables.

function isMissingVariable(valueNode, variables) {
  return valueNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].VARIABLE && (variables == null || variables[valueNode.name.value] === undefined);
}


/***/ }),

/***/ "./node_modules/graphql/utilities/valueFromASTUntyped.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/graphql/utilities/valueFromASTUntyped.mjs ***!
  \****************************************************************/
/*! exports provided: valueFromASTUntyped */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromASTUntyped", function() { return valueFromASTUntyped; });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/keyValMap.mjs */ "./node_modules/graphql/jsutils/keyValMap.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");





/**
 * Produces a JavaScript value given a GraphQL Value AST.
 *
 * Unlike `valueFromAST()`, no type is provided. The resulting JavaScript value
 * will reflect the provided GraphQL value AST.
 *
 * | GraphQL Value        | JavaScript Value |
 * | -------------------- | ---------------- |
 * | Input Object         | Object           |
 * | List                 | Array            |
 * | Boolean              | Boolean          |
 * | String / Enum        | String           |
 * | Int / Float          | Number           |
 * | Null                 | null             |
 *
 */
function valueFromASTUntyped(valueNode, variables) {
  switch (valueNode.kind) {
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].NULL:
      return null;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INT:
      return parseInt(valueNode.value, 10);

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FLOAT:
      return parseFloat(valueNode.value);

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].STRING:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].BOOLEAN:
      return valueNode.value;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].LIST:
      return valueNode.values.map(function (node) {
        return valueFromASTUntyped(node, variables);
      });

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT:
      return Object(_jsutils_keyValMap_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(valueNode.fields, function (field) {
        return field.name.value;
      }, function (field) {
        return valueFromASTUntyped(field.value, variables);
      });

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].VARIABLE:
      return variables === null || variables === void 0 ? void 0 : variables[valueNode.name.value];
  } // Not reachable. All possible value nodes have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Unexpected value node: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(valueNode));
}


/***/ }),

/***/ "./node_modules/graphql/validation/ValidationContext.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/graphql/validation/ValidationContext.mjs ***!
  \***************************************************************/
/*! exports provided: ASTValidationContext, SDLValidationContext, ValidationContext */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASTValidationContext", function() { return ASTValidationContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SDLValidationContext", function() { return SDLValidationContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationContext", function() { return ValidationContext; });
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_visitor_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _utilities_TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/TypeInfo.mjs */ "./node_modules/graphql/utilities/TypeInfo.mjs");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }





/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
var ASTValidationContext = /*#__PURE__*/function () {
  function ASTValidationContext(ast, onError) {
    this._ast = ast;
    this._fragments = undefined;
    this._fragmentSpreads = new Map();
    this._recursivelyReferencedFragments = new Map();
    this._onError = onError;
  }

  var _proto = ASTValidationContext.prototype;

  _proto.reportError = function reportError(error) {
    this._onError(error);
  };

  _proto.getDocument = function getDocument() {
    return this._ast;
  };

  _proto.getFragment = function getFragment(name) {
    var fragments = this._fragments;

    if (!fragments) {
      this._fragments = fragments = this.getDocument().definitions.reduce(function (frags, statement) {
        if (statement.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].FRAGMENT_DEFINITION) {
          frags[statement.name.value] = statement;
        }

        return frags;
      }, Object.create(null));
    }

    return fragments[name];
  };

  _proto.getFragmentSpreads = function getFragmentSpreads(node) {
    var spreads = this._fragmentSpreads.get(node);

    if (!spreads) {
      spreads = [];
      var setsToVisit = [node];

      while (setsToVisit.length !== 0) {
        var set = setsToVisit.pop();

        for (var _i2 = 0, _set$selections2 = set.selections; _i2 < _set$selections2.length; _i2++) {
          var selection = _set$selections2[_i2];

          if (selection.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_0__["Kind"].FRAGMENT_SPREAD) {
            spreads.push(selection);
          } else if (selection.selectionSet) {
            setsToVisit.push(selection.selectionSet);
          }
        }
      }

      this._fragmentSpreads.set(node, spreads);
    }

    return spreads;
  };

  _proto.getRecursivelyReferencedFragments = function getRecursivelyReferencedFragments(operation) {
    var fragments = this._recursivelyReferencedFragments.get(operation);

    if (!fragments) {
      fragments = [];
      var collectedNames = Object.create(null);
      var nodesToVisit = [operation.selectionSet];

      while (nodesToVisit.length !== 0) {
        var node = nodesToVisit.pop();

        for (var _i4 = 0, _this$getFragmentSpre2 = this.getFragmentSpreads(node); _i4 < _this$getFragmentSpre2.length; _i4++) {
          var spread = _this$getFragmentSpre2[_i4];
          var fragName = spread.name.value;

          if (collectedNames[fragName] !== true) {
            collectedNames[fragName] = true;
            var fragment = this.getFragment(fragName);

            if (fragment) {
              fragments.push(fragment);
              nodesToVisit.push(fragment.selectionSet);
            }
          }
        }
      }

      this._recursivelyReferencedFragments.set(operation, fragments);
    }

    return fragments;
  };

  return ASTValidationContext;
}();
var SDLValidationContext = /*#__PURE__*/function (_ASTValidationContext) {
  _inheritsLoose(SDLValidationContext, _ASTValidationContext);

  var _super = _createSuper(SDLValidationContext);

  function SDLValidationContext(ast, schema, onError) {
    var _this;

    _this = _ASTValidationContext.call(this, ast, onError) || this;
    _this._schema = schema;
    return _this;
  }

  var _proto2 = SDLValidationContext.prototype;

  _proto2.getSchema = function getSchema() {
    return this._schema;
  };

  return SDLValidationContext;
}(ASTValidationContext);
var ValidationContext = /*#__PURE__*/function (_ASTValidationContext2) {
  _inheritsLoose(ValidationContext, _ASTValidationContext2);

  var _super2 = _createSuper(ValidationContext);

  function ValidationContext(schema, ast, typeInfo, onError) {
    var _this2;

    _this2 = _ASTValidationContext2.call(this, ast, onError) || this;
    _this2._schema = schema;
    _this2._typeInfo = typeInfo;
    _this2._variableUsages = new Map();
    _this2._recursiveVariableUsages = new Map();
    return _this2;
  }

  var _proto3 = ValidationContext.prototype;

  _proto3.getSchema = function getSchema() {
    return this._schema;
  };

  _proto3.getVariableUsages = function getVariableUsages(node) {
    var usages = this._variableUsages.get(node);

    if (!usages) {
      var newUsages = [];
      var typeInfo = new _utilities_TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_2__["TypeInfo"](this._schema);
      Object(_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_1__["visit"])(node, Object(_utilities_TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_2__["visitWithTypeInfo"])(typeInfo, {
        VariableDefinition: function VariableDefinition() {
          return false;
        },
        Variable: function Variable(variable) {
          newUsages.push({
            node: variable,
            type: typeInfo.getInputType(),
            defaultValue: typeInfo.getDefaultValue()
          });
        }
      }));
      usages = newUsages;

      this._variableUsages.set(node, usages);
    }

    return usages;
  };

  _proto3.getRecursiveVariableUsages = function getRecursiveVariableUsages(operation) {
    var usages = this._recursiveVariableUsages.get(operation);

    if (!usages) {
      usages = this.getVariableUsages(operation);

      for (var _i6 = 0, _this$getRecursivelyR2 = this.getRecursivelyReferencedFragments(operation); _i6 < _this$getRecursivelyR2.length; _i6++) {
        var frag = _this$getRecursivelyR2[_i6];
        usages = usages.concat(this.getVariableUsages(frag));
      }

      this._recursiveVariableUsages.set(operation, usages);
    }

    return usages;
  };

  _proto3.getType = function getType() {
    return this._typeInfo.getType();
  };

  _proto3.getParentType = function getParentType() {
    return this._typeInfo.getParentType();
  };

  _proto3.getInputType = function getInputType() {
    return this._typeInfo.getInputType();
  };

  _proto3.getParentInputType = function getParentInputType() {
    return this._typeInfo.getParentInputType();
  };

  _proto3.getFieldDef = function getFieldDef() {
    return this._typeInfo.getFieldDef();
  };

  _proto3.getDirective = function getDirective() {
    return this._typeInfo.getDirective();
  };

  _proto3.getArgument = function getArgument() {
    return this._typeInfo.getArgument();
  };

  return ValidationContext;
}(ASTValidationContext);


/***/ }),

/***/ "./node_modules/graphql/validation/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/graphql/validation/index.mjs ***!
  \***************************************************/
/*! exports provided: validate, ValidationContext, specifiedRules, ExecutableDefinitionsRule, FieldsOnCorrectTypeRule, FragmentsOnCompositeTypesRule, KnownArgumentNamesRule, KnownDirectivesRule, KnownFragmentNamesRule, KnownTypeNamesRule, LoneAnonymousOperationRule, NoFragmentCyclesRule, NoUndefinedVariablesRule, NoUnusedFragmentsRule, NoUnusedVariablesRule, OverlappingFieldsCanBeMergedRule, PossibleFragmentSpreadsRule, ProvidedRequiredArgumentsRule, ScalarLeafsRule, SingleFieldSubscriptionsRule, UniqueArgumentNamesRule, UniqueDirectivesPerLocationRule, UniqueFragmentNamesRule, UniqueInputFieldNamesRule, UniqueOperationNamesRule, UniqueVariableNamesRule, ValuesOfCorrectTypeRule, VariablesAreInputTypesRule, VariablesInAllowedPositionRule, LoneSchemaDefinitionRule, UniqueOperationTypesRule, UniqueTypeNamesRule, UniqueEnumValueNamesRule, UniqueFieldDefinitionNamesRule, UniqueDirectiveNamesRule, PossibleTypeExtensionsRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.mjs */ "./node_modules/graphql/validation/validate.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return _validate_mjs__WEBPACK_IMPORTED_MODULE_0__["validate"]; });

/* harmony import */ var _ValidationContext_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ValidationContext.mjs */ "./node_modules/graphql/validation/ValidationContext.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValidationContext", function() { return _ValidationContext_mjs__WEBPACK_IMPORTED_MODULE_1__["ValidationContext"]; });

/* harmony import */ var _specifiedRules_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specifiedRules.mjs */ "./node_modules/graphql/validation/specifiedRules.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "specifiedRules", function() { return _specifiedRules_mjs__WEBPACK_IMPORTED_MODULE_2__["specifiedRules"]; });

/* harmony import */ var _rules_ExecutableDefinitionsRule_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rules/ExecutableDefinitionsRule.mjs */ "./node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExecutableDefinitionsRule", function() { return _rules_ExecutableDefinitionsRule_mjs__WEBPACK_IMPORTED_MODULE_3__["ExecutableDefinitionsRule"]; });

/* harmony import */ var _rules_FieldsOnCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rules/FieldsOnCorrectTypeRule.mjs */ "./node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldsOnCorrectTypeRule", function() { return _rules_FieldsOnCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_4__["FieldsOnCorrectTypeRule"]; });

/* harmony import */ var _rules_FragmentsOnCompositeTypesRule_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rules/FragmentsOnCompositeTypesRule.mjs */ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FragmentsOnCompositeTypesRule", function() { return _rules_FragmentsOnCompositeTypesRule_mjs__WEBPACK_IMPORTED_MODULE_5__["FragmentsOnCompositeTypesRule"]; });

/* harmony import */ var _rules_KnownArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules/KnownArgumentNamesRule.mjs */ "./node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownArgumentNamesRule", function() { return _rules_KnownArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_6__["KnownArgumentNamesRule"]; });

/* harmony import */ var _rules_KnownDirectivesRule_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules/KnownDirectivesRule.mjs */ "./node_modules/graphql/validation/rules/KnownDirectivesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownDirectivesRule", function() { return _rules_KnownDirectivesRule_mjs__WEBPACK_IMPORTED_MODULE_7__["KnownDirectivesRule"]; });

/* harmony import */ var _rules_KnownFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules/KnownFragmentNamesRule.mjs */ "./node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownFragmentNamesRule", function() { return _rules_KnownFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_8__["KnownFragmentNamesRule"]; });

/* harmony import */ var _rules_KnownTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules/KnownTypeNamesRule.mjs */ "./node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KnownTypeNamesRule", function() { return _rules_KnownTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_9__["KnownTypeNamesRule"]; });

/* harmony import */ var _rules_LoneAnonymousOperationRule_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rules/LoneAnonymousOperationRule.mjs */ "./node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoneAnonymousOperationRule", function() { return _rules_LoneAnonymousOperationRule_mjs__WEBPACK_IMPORTED_MODULE_10__["LoneAnonymousOperationRule"]; });

/* harmony import */ var _rules_NoFragmentCyclesRule_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rules/NoFragmentCyclesRule.mjs */ "./node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoFragmentCyclesRule", function() { return _rules_NoFragmentCyclesRule_mjs__WEBPACK_IMPORTED_MODULE_11__["NoFragmentCyclesRule"]; });

/* harmony import */ var _rules_NoUndefinedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rules/NoUndefinedVariablesRule.mjs */ "./node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUndefinedVariablesRule", function() { return _rules_NoUndefinedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_12__["NoUndefinedVariablesRule"]; });

/* harmony import */ var _rules_NoUnusedFragmentsRule_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rules/NoUnusedFragmentsRule.mjs */ "./node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUnusedFragmentsRule", function() { return _rules_NoUnusedFragmentsRule_mjs__WEBPACK_IMPORTED_MODULE_13__["NoUnusedFragmentsRule"]; });

/* harmony import */ var _rules_NoUnusedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rules/NoUnusedVariablesRule.mjs */ "./node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoUnusedVariablesRule", function() { return _rules_NoUnusedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_14__["NoUnusedVariablesRule"]; });

/* harmony import */ var _rules_OverlappingFieldsCanBeMergedRule_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rules/OverlappingFieldsCanBeMergedRule.mjs */ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlappingFieldsCanBeMergedRule", function() { return _rules_OverlappingFieldsCanBeMergedRule_mjs__WEBPACK_IMPORTED_MODULE_15__["OverlappingFieldsCanBeMergedRule"]; });

/* harmony import */ var _rules_PossibleFragmentSpreadsRule_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rules/PossibleFragmentSpreadsRule.mjs */ "./node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PossibleFragmentSpreadsRule", function() { return _rules_PossibleFragmentSpreadsRule_mjs__WEBPACK_IMPORTED_MODULE_16__["PossibleFragmentSpreadsRule"]; });

/* harmony import */ var _rules_ProvidedRequiredArgumentsRule_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rules/ProvidedRequiredArgumentsRule.mjs */ "./node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProvidedRequiredArgumentsRule", function() { return _rules_ProvidedRequiredArgumentsRule_mjs__WEBPACK_IMPORTED_MODULE_17__["ProvidedRequiredArgumentsRule"]; });

/* harmony import */ var _rules_ScalarLeafsRule_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rules/ScalarLeafsRule.mjs */ "./node_modules/graphql/validation/rules/ScalarLeafsRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScalarLeafsRule", function() { return _rules_ScalarLeafsRule_mjs__WEBPACK_IMPORTED_MODULE_18__["ScalarLeafsRule"]; });

/* harmony import */ var _rules_SingleFieldSubscriptionsRule_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rules/SingleFieldSubscriptionsRule.mjs */ "./node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleFieldSubscriptionsRule", function() { return _rules_SingleFieldSubscriptionsRule_mjs__WEBPACK_IMPORTED_MODULE_19__["SingleFieldSubscriptionsRule"]; });

/* harmony import */ var _rules_UniqueArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rules/UniqueArgumentNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueArgumentNamesRule", function() { return _rules_UniqueArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_20__["UniqueArgumentNamesRule"]; });

/* harmony import */ var _rules_UniqueDirectivesPerLocationRule_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rules/UniqueDirectivesPerLocationRule.mjs */ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectivesPerLocationRule", function() { return _rules_UniqueDirectivesPerLocationRule_mjs__WEBPACK_IMPORTED_MODULE_21__["UniqueDirectivesPerLocationRule"]; });

/* harmony import */ var _rules_UniqueFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rules/UniqueFragmentNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueFragmentNamesRule", function() { return _rules_UniqueFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_22__["UniqueFragmentNamesRule"]; });

/* harmony import */ var _rules_UniqueInputFieldNamesRule_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./rules/UniqueInputFieldNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueInputFieldNamesRule", function() { return _rules_UniqueInputFieldNamesRule_mjs__WEBPACK_IMPORTED_MODULE_23__["UniqueInputFieldNamesRule"]; });

/* harmony import */ var _rules_UniqueOperationNamesRule_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rules/UniqueOperationNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationNamesRule", function() { return _rules_UniqueOperationNamesRule_mjs__WEBPACK_IMPORTED_MODULE_24__["UniqueOperationNamesRule"]; });

/* harmony import */ var _rules_UniqueVariableNamesRule_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rules/UniqueVariableNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueVariableNamesRule", function() { return _rules_UniqueVariableNamesRule_mjs__WEBPACK_IMPORTED_MODULE_25__["UniqueVariableNamesRule"]; });

/* harmony import */ var _rules_ValuesOfCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./rules/ValuesOfCorrectTypeRule.mjs */ "./node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValuesOfCorrectTypeRule", function() { return _rules_ValuesOfCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_26__["ValuesOfCorrectTypeRule"]; });

/* harmony import */ var _rules_VariablesAreInputTypesRule_mjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rules/VariablesAreInputTypesRule.mjs */ "./node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariablesAreInputTypesRule", function() { return _rules_VariablesAreInputTypesRule_mjs__WEBPACK_IMPORTED_MODULE_27__["VariablesAreInputTypesRule"]; });

/* harmony import */ var _rules_VariablesInAllowedPositionRule_mjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rules/VariablesInAllowedPositionRule.mjs */ "./node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VariablesInAllowedPositionRule", function() { return _rules_VariablesInAllowedPositionRule_mjs__WEBPACK_IMPORTED_MODULE_28__["VariablesInAllowedPositionRule"]; });

/* harmony import */ var _rules_LoneSchemaDefinitionRule_mjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rules/LoneSchemaDefinitionRule.mjs */ "./node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoneSchemaDefinitionRule", function() { return _rules_LoneSchemaDefinitionRule_mjs__WEBPACK_IMPORTED_MODULE_29__["LoneSchemaDefinitionRule"]; });

/* harmony import */ var _rules_UniqueOperationTypesRule_mjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./rules/UniqueOperationTypesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationTypesRule", function() { return _rules_UniqueOperationTypesRule_mjs__WEBPACK_IMPORTED_MODULE_30__["UniqueOperationTypesRule"]; });

/* harmony import */ var _rules_UniqueTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rules/UniqueTypeNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueTypeNamesRule", function() { return _rules_UniqueTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_31__["UniqueTypeNamesRule"]; });

/* harmony import */ var _rules_UniqueEnumValueNamesRule_mjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./rules/UniqueEnumValueNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueEnumValueNamesRule", function() { return _rules_UniqueEnumValueNamesRule_mjs__WEBPACK_IMPORTED_MODULE_32__["UniqueEnumValueNamesRule"]; });

/* harmony import */ var _rules_UniqueFieldDefinitionNamesRule_mjs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./rules/UniqueFieldDefinitionNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueFieldDefinitionNamesRule", function() { return _rules_UniqueFieldDefinitionNamesRule_mjs__WEBPACK_IMPORTED_MODULE_33__["UniqueFieldDefinitionNamesRule"]; });

/* harmony import */ var _rules_UniqueDirectiveNamesRule_mjs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./rules/UniqueDirectiveNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectiveNamesRule", function() { return _rules_UniqueDirectiveNamesRule_mjs__WEBPACK_IMPORTED_MODULE_34__["UniqueDirectiveNamesRule"]; });

/* harmony import */ var _rules_PossibleTypeExtensionsRule_mjs__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./rules/PossibleTypeExtensionsRule.mjs */ "./node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PossibleTypeExtensionsRule", function() { return _rules_PossibleTypeExtensionsRule_mjs__WEBPACK_IMPORTED_MODULE_35__["PossibleTypeExtensionsRule"]; });



// All validation rules in the GraphQL Specification.
 // Spec Section: "Executable Definitions"

 // Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"

 // Spec Section: "Fragments on Composite Types"

 // Spec Section: "Argument Names"

 // Spec Section: "Directives Are Defined"

 // Spec Section: "Fragment spread target defined"

 // Spec Section: "Fragment Spread Type Existence"

 // Spec Section: "Lone Anonymous Operation"

 // Spec Section: "Fragments must not form cycles"

 // Spec Section: "All Variable Used Defined"

 // Spec Section: "Fragments must be used"

 // Spec Section: "All Variables Used"

 // Spec Section: "Field Selection Merging"

 // Spec Section: "Fragment spread is possible"

 // Spec Section: "Argument Optionality"

 // Spec Section: "Leaf Field Selections"

 // Spec Section: "Subscriptions with Single Root Field"

 // Spec Section: "Argument Uniqueness"

 // Spec Section: "Directives Are Unique Per Location"

 // Spec Section: "Fragment Name Uniqueness"

 // Spec Section: "Input Object Field Uniqueness"

 // Spec Section: "Operation Name Uniqueness"

 // Spec Section: "Variable Uniqueness"

 // Spec Section: "Values Type Correctness"

 // Spec Section: "Variables are Input Types"

 // Spec Section: "All Variable Usages Are Allowed"

 // SDL-specific validation rules










/***/ }),

/***/ "./node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs ***!
  \*****************************************************************************/
/*! exports provided: ExecutableDefinitionsRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutableDefinitionsRule", function() { return ExecutableDefinitionsRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_predicates_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language/predicates.mjs */ "./node_modules/graphql/language/predicates.mjs");




/**
 * Executable definitions
 *
 * A GraphQL document is only valid for execution if all definitions are either
 * operation or fragment definitions.
 */
function ExecutableDefinitionsRule(context) {
  return {
    Document: function Document(node) {
      for (var _i2 = 0, _node$definitions2 = node.definitions; _i2 < _node$definitions2.length; _i2++) {
        var definition = _node$definitions2[_i2];

        if (!Object(_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_2__["isExecutableDefinitionNode"])(definition)) {
          var defName = definition.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_DEFINITION || definition.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_EXTENSION ? 'schema' : '"' + definition.name.value + '"';
          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("The ".concat(defName, " definition is not executable."), definition));
        }
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs ***!
  \***************************************************************************/
/*! exports provided: FieldsOnCorrectTypeRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldsOnCorrectTypeRule", function() { return FieldsOnCorrectTypeRule; });
/* harmony import */ var _polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfills/arrayFrom.mjs */ "./node_modules/graphql/polyfills/arrayFrom.mjs");
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");






/**
 * Fields on correct type
 *
 * A GraphQL document is only valid if all fields selected are defined by the
 * parent type, or are an allowed meta field such as __typename.
 */
function FieldsOnCorrectTypeRule(context) {
  return {
    Field: function Field(node) {
      var type = context.getParentType();

      if (type) {
        var fieldDef = context.getFieldDef();

        if (!fieldDef) {
          // This field doesn't exist, lets look for suggestions.
          var schema = context.getSchema();
          var fieldName = node.name.value; // First determine if there are any suggested types to condition on.

          var suggestion = Object(_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])('to use an inline fragment on', getSuggestedTypeNames(schema, type, fieldName)); // If there are no suggested types, then perhaps this was a typo?

          if (suggestion === '') {
            suggestion = Object(_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(getSuggestedFieldNames(type, fieldName));
          } // Report an error, including helpful suggestions.


          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__["GraphQLError"]("Cannot query field \"".concat(fieldName, "\" on type \"").concat(type.name, "\".") + suggestion, node));
        }
      }
    }
  };
}
/**
 * Go through all of the implementations of type, as well as the interfaces that
 * they implement. If any of those types include the provided field, suggest them,
 * sorted by how often the type is referenced.
 */

function getSuggestedTypeNames(schema, type, fieldName) {
  if (!Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isAbstractType"])(type)) {
    // Must be an Object type, which does not have possible fields.
    return [];
  }

  var suggestedTypes = new Set();
  var usageCount = Object.create(null);

  for (var _i2 = 0, _schema$getPossibleTy2 = schema.getPossibleTypes(type); _i2 < _schema$getPossibleTy2.length; _i2++) {
    var possibleType = _schema$getPossibleTy2[_i2];

    if (!possibleType.getFields()[fieldName]) {
      continue;
    } // This object type defines this field.


    suggestedTypes.add(possibleType);
    usageCount[possibleType.name] = 1;

    for (var _i4 = 0, _possibleType$getInte2 = possibleType.getInterfaces(); _i4 < _possibleType$getInte2.length; _i4++) {
      var _usageCount$possibleI;

      var possibleInterface = _possibleType$getInte2[_i4];

      if (!possibleInterface.getFields()[fieldName]) {
        continue;
      } // This interface type defines this field.


      suggestedTypes.add(possibleInterface);
      usageCount[possibleInterface.name] = ((_usageCount$possibleI = usageCount[possibleInterface.name]) !== null && _usageCount$possibleI !== void 0 ? _usageCount$possibleI : 0) + 1;
    }
  }

  return Object(_polyfills_arrayFrom_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(suggestedTypes).sort(function (typeA, typeB) {
    // Suggest both interface and object types based on how common they are.
    var usageCountDiff = usageCount[typeB.name] - usageCount[typeA.name];

    if (usageCountDiff !== 0) {
      return usageCountDiff;
    } // Suggest super types first followed by subtypes


    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isInterfaceType"])(typeA) && schema.isSubType(typeA, typeB)) {
      return -1;
    }

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isInterfaceType"])(typeB) && schema.isSubType(typeB, typeA)) {
      return 1;
    }

    return typeA.name.localeCompare(typeB.name);
  }).map(function (x) {
    return x.name;
  });
}
/**
 * For the field name provided, determine if there are any similar field names
 * that may be the result of a typo.
 */


function getSuggestedFieldNames(type, fieldName) {
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isObjectType"])(type) || Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_4__["isInterfaceType"])(type)) {
    var possibleFieldNames = Object.keys(type.getFields());
    return Object(_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(fieldName, possibleFieldNames);
  } // Otherwise, must be a Union type, which does not define fields.


  return [];
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs ***!
  \*********************************************************************************/
/*! exports provided: FragmentsOnCompositeTypesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FragmentsOnCompositeTypesRule", function() { return FragmentsOnCompositeTypesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");





/**
 * Fragments on composite type
 *
 * Fragments use a type condition to determine if they apply, since fragments
 * can only be spread into a composite type (object, interface, or union), the
 * type condition must also be a composite type.
 */
function FragmentsOnCompositeTypesRule(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var typeCondition = node.typeCondition;

      if (typeCondition) {
        var type = Object(_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_3__["typeFromAST"])(context.getSchema(), typeCondition);

        if (type && !Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(type)) {
          var typeStr = Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_1__["print"])(typeCondition);
          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Fragment cannot condition on non composite type \"".concat(typeStr, "\"."), typeCondition));
        }
      }
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var type = Object(_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_3__["typeFromAST"])(context.getSchema(), node.typeCondition);

      if (type && !Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(type)) {
        var typeStr = Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_1__["print"])(node.typeCondition);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Fragment \"".concat(node.name.value, "\" cannot condition on non composite type \"").concat(typeStr, "\"."), node.typeCondition));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs ***!
  \**************************************************************************/
/*! exports provided: KnownArgumentNamesRule, KnownArgumentNamesOnDirectivesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownArgumentNamesRule", function() { return KnownArgumentNamesRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownArgumentNamesOnDirectivesRule", function() { return KnownArgumentNamesOnDirectivesRule; });
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * Known argument names
 *
 * A GraphQL field is only valid if all supplied arguments are defined by
 * that field.
 */
function KnownArgumentNamesRule(context) {
  return _objectSpread({}, KnownArgumentNamesOnDirectivesRule(context), {
    Argument: function Argument(argNode) {
      var argDef = context.getArgument();
      var fieldDef = context.getFieldDef();
      var parentType = context.getParentType();

      if (!argDef && fieldDef && parentType) {
        var argName = argNode.name.value;
        var knownArgsNames = fieldDef.args.map(function (arg) {
          return arg.name;
        });
        var suggestions = Object(_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(argName, knownArgsNames);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"]("Unknown argument \"".concat(argName, "\" on field \"").concat(parentType.name, ".").concat(fieldDef.name, "\".") + Object(_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(suggestions), argNode));
      }
    }
  });
}
/**
 * @internal
 */

function KnownArgumentNamesOnDirectivesRule(context) {
  var directiveArgs = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives_mjs__WEBPACK_IMPORTED_MODULE_4__["specifiedDirectives"];

  for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
    var directive = definedDirectives[_i2];
    directiveArgs[directive.name] = directive.args.map(function (arg) {
      return arg.name;
    });
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
    var def = astDefinitions[_i4];

    if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].DIRECTIVE_DEFINITION) {
      var _def$arguments;

      /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */
      var argsNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
      directiveArgs[def.name.value] = argsNodes.map(function (arg) {
        return arg.name.value;
      });
    }
  }

  return {
    Directive: function Directive(directiveNode) {
      var directiveName = directiveNode.name.value;
      var knownArgs = directiveArgs[directiveName];

      if (directiveNode.arguments && knownArgs) {
        for (var _i6 = 0, _directiveNode$argume2 = directiveNode.arguments; _i6 < _directiveNode$argume2.length; _i6++) {
          var argNode = _directiveNode$argume2[_i6];
          var argName = argNode.name.value;

          if (knownArgs.indexOf(argName) === -1) {
            var suggestions = Object(_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(argName, knownArgs);
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"]("Unknown argument \"".concat(argName, "\" on directive \"@").concat(directiveName, "\".") + Object(_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(suggestions), argNode));
          }
        }
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/KnownDirectivesRule.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/KnownDirectivesRule.mjs ***!
  \***********************************************************************/
/*! exports provided: KnownDirectivesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownDirectivesRule", function() { return KnownDirectivesRule; });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/directiveLocation.mjs */ "./node_modules/graphql/language/directiveLocation.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");







/**
 * Known directives
 *
 * A GraphQL document is only valid if all `@directives` are known by the
 * schema and legally positioned.
 */
function KnownDirectivesRule(context) {
  var locationsMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives_mjs__WEBPACK_IMPORTED_MODULE_5__["specifiedDirectives"];

  for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
    var directive = definedDirectives[_i2];
    locationsMap[directive.name] = directive.locations;
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
    var def = astDefinitions[_i4];

    if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].DIRECTIVE_DEFINITION) {
      locationsMap[def.name.value] = def.locations.map(function (name) {
        return name.value;
      });
    }
  }

  return {
    Directive: function Directive(node, _key, _parent, _path, ancestors) {
      var name = node.name.value;
      var locations = locationsMap[name];

      if (!locations) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"]("Unknown directive \"@".concat(name, "\"."), node));
        return;
      }

      var candidateLocation = getDirectiveLocationForASTPath(ancestors);

      if (candidateLocation && locations.indexOf(candidateLocation) === -1) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"]("Directive \"@".concat(name, "\" may not be used on ").concat(candidateLocation, "."), node));
      }
    }
  };
}

function getDirectiveLocationForASTPath(ancestors) {
  var appliedTo = ancestors[ancestors.length - 1];

  /* istanbul ignore next */
  !Array.isArray(appliedTo) || Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(0);

  switch (appliedTo.kind) {
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].OPERATION_DEFINITION:
      return getDirectiveLocationForOperation(appliedTo.operation);

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FIELD:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].FIELD;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FRAGMENT_SPREAD:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].FRAGMENT_SPREAD;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INLINE_FRAGMENT:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].INLINE_FRAGMENT;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FRAGMENT_DEFINITION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].FRAGMENT_DEFINITION;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].VARIABLE_DEFINITION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].VARIABLE_DEFINITION;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCHEMA_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCHEMA_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].SCHEMA;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCALAR_TYPE_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].SCALAR_TYPE_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].SCALAR;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT_TYPE_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].OBJECT_TYPE_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].OBJECT;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].FIELD_DEFINITION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].FIELD_DEFINITION;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INTERFACE_TYPE_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INTERFACE_TYPE_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].INTERFACE;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].UNION_TYPE_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].UNION_TYPE_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].UNION;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_TYPE_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_TYPE_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].ENUM;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].ENUM_VALUE_DEFINITION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].ENUM_VALUE;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_OBJECT_TYPE_DEFINITION:
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_OBJECT_TYPE_EXTENSION:
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].INPUT_OBJECT;

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_VALUE_DEFINITION:
      {
        var parentNode = ancestors[ancestors.length - 3];
        return parentNode.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].INPUT_OBJECT_TYPE_DEFINITION ? _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].INPUT_FIELD_DEFINITION : _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].ARGUMENT_DEFINITION;
      }
  }
}

function getDirectiveLocationForOperation(operation) {
  switch (operation) {
    case 'query':
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].QUERY;

    case 'mutation':
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].MUTATION;

    case 'subscription':
      return _language_directiveLocation_mjs__WEBPACK_IMPORTED_MODULE_4__["DirectiveLocation"].SUBSCRIPTION;
  } // Not reachable. All possible types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Unexpected operation: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(operation));
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs":
/*!**************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs ***!
  \**************************************************************************/
/*! exports provided: KnownFragmentNamesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownFragmentNamesRule", function() { return KnownFragmentNamesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Known fragment names
 *
 * A GraphQL document is only valid if all `...Fragment` fragment spreads refer
 * to fragments defined in the same document.
 */
function KnownFragmentNamesRule(context) {
  return {
    FragmentSpread: function FragmentSpread(node) {
      var fragmentName = node.name.value;
      var fragment = context.getFragment(fragmentName);

      if (!fragment) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Unknown fragment \"".concat(fragmentName, "\"."), node.name));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs":
/*!**********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs ***!
  \**********************************************************************/
/*! exports provided: KnownTypeNamesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnownTypeNamesRule", function() { return KnownTypeNamesRule; });
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_predicates_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../language/predicates.mjs */ "./node_modules/graphql/language/predicates.mjs");
/* harmony import */ var _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../type/scalars.mjs */ "./node_modules/graphql/type/scalars.mjs");






/**
 * Known type names
 *
 * A GraphQL document is only valid if referenced types (specifically
 * variable definitions and fragment conditions) are defined by the type schema.
 */
function KnownTypeNamesRule(context) {
  var schema = context.getSchema();
  var existingTypesMap = schema ? schema.getTypeMap() : Object.create(null);
  var definedTypes = Object.create(null);

  for (var _i2 = 0, _context$getDocument$2 = context.getDocument().definitions; _i2 < _context$getDocument$2.length; _i2++) {
    var def = _context$getDocument$2[_i2];

    if (Object(_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_3__["isTypeDefinitionNode"])(def)) {
      definedTypes[def.name.value] = true;
    }
  }

  var typeNames = Object.keys(existingTypesMap).concat(Object.keys(definedTypes));
  return {
    NamedType: function NamedType(node, _1, parent, _2, ancestors) {
      var typeName = node.name.value;

      if (!existingTypesMap[typeName] && !definedTypes[typeName]) {
        var _ancestors$;

        var definitionNode = (_ancestors$ = ancestors[2]) !== null && _ancestors$ !== void 0 ? _ancestors$ : parent;
        var isSDL = definitionNode != null && isSDLNode(definitionNode);

        if (isSDL && isSpecifiedScalarName(typeName)) {
          return;
        }

        var suggestedTypes = Object(_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(typeName, isSDL ? specifiedScalarsNames.concat(typeNames) : typeNames);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"]("Unknown type \"".concat(typeName, "\".") + Object(_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(suggestedTypes), node));
      }
    }
  };
}
var specifiedScalarsNames = _type_scalars_mjs__WEBPACK_IMPORTED_MODULE_4__["specifiedScalarTypes"].map(function (type) {
  return type.name;
});

function isSpecifiedScalarName(typeName) {
  return specifiedScalarsNames.indexOf(typeName) !== -1;
}

function isSDLNode(value) {
  return !Array.isArray(value) && (Object(_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_3__["isTypeSystemDefinitionNode"])(value) || Object(_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_3__["isTypeSystemExtensionNode"])(value));
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs ***!
  \******************************************************************************/
/*! exports provided: LoneAnonymousOperationRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoneAnonymousOperationRule", function() { return LoneAnonymousOperationRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");



/**
 * Lone anonymous operation
 *
 * A GraphQL document is only valid if when it contains an anonymous operation
 * (the query short-hand) that it contains only that one operation definition.
 */
function LoneAnonymousOperationRule(context) {
  var operationCount = 0;
  return {
    Document: function Document(node) {
      operationCount = node.definitions.filter(function (definition) {
        return definition.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].OPERATION_DEFINITION;
      }).length;
    },
    OperationDefinition: function OperationDefinition(node) {
      if (!node.name && operationCount > 1) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('This anonymous operation must be the only defined operation.', node));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs ***!
  \****************************************************************************/
/*! exports provided: LoneSchemaDefinitionRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoneSchemaDefinitionRule", function() { return LoneSchemaDefinitionRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Lone Schema definition
 *
 * A GraphQL document is only valid if it contains only one schema definition.
 */
function LoneSchemaDefinitionRule(context) {
  var _ref, _ref2, _oldSchema$astNode;

  var oldSchema = context.getSchema();
  var alreadyDefined = (_ref = (_ref2 = (_oldSchema$astNode = oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.astNode) !== null && _oldSchema$astNode !== void 0 ? _oldSchema$astNode : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getQueryType()) !== null && _ref2 !== void 0 ? _ref2 : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getMutationType()) !== null && _ref !== void 0 ? _ref : oldSchema === null || oldSchema === void 0 ? void 0 : oldSchema.getSubscriptionType();
  var schemaDefinitionsCount = 0;
  return {
    SchemaDefinition: function SchemaDefinition(node) {
      if (alreadyDefined) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Cannot define a new schema within a schema extension.', node));
        return;
      }

      if (schemaDefinitionsCount > 0) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]('Must provide only one schema definition.', node));
      }

      ++schemaDefinitionsCount;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs ***!
  \************************************************************************/
/*! exports provided: NoFragmentCyclesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoFragmentCyclesRule", function() { return NoFragmentCyclesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");

function NoFragmentCyclesRule(context) {
  // Tracks already visited fragments to maintain O(N) and to ensure that cycles
  // are not redundantly reported.
  var visitedFrags = Object.create(null); // Array of AST nodes used to produce meaningful errors

  var spreadPath = []; // Position in the spread path

  var spreadPathIndexByName = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      detectCycleRecursive(node);
      return false;
    }
  }; // This does a straight-forward DFS to find cycles.
  // It does not terminate when a cycle was found but continues to explore
  // the graph to find all possible cycles.

  function detectCycleRecursive(fragment) {
    if (visitedFrags[fragment.name.value]) {
      return;
    }

    var fragmentName = fragment.name.value;
    visitedFrags[fragmentName] = true;
    var spreadNodes = context.getFragmentSpreads(fragment.selectionSet);

    if (spreadNodes.length === 0) {
      return;
    }

    spreadPathIndexByName[fragmentName] = spreadPath.length;

    for (var _i2 = 0; _i2 < spreadNodes.length; _i2++) {
      var spreadNode = spreadNodes[_i2];
      var spreadName = spreadNode.name.value;
      var cycleIndex = spreadPathIndexByName[spreadName];
      spreadPath.push(spreadNode);

      if (cycleIndex === undefined) {
        var spreadFragment = context.getFragment(spreadName);

        if (spreadFragment) {
          detectCycleRecursive(spreadFragment);
        }
      } else {
        var cyclePath = spreadPath.slice(cycleIndex);
        var viaPath = cyclePath.slice(0, -1).map(function (s) {
          return '"' + s.name.value + '"';
        }).join(', ');
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Cannot spread fragment \"".concat(spreadName, "\" within itself") + (viaPath !== '' ? " via ".concat(viaPath, ".") : '.'), cyclePath));
      }

      spreadPath.pop();
    }

    spreadPathIndexByName[fragmentName] = undefined;
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs ***!
  \****************************************************************************/
/*! exports provided: NoUndefinedVariablesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUndefinedVariablesRule", function() { return NoUndefinedVariablesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * No undefined variables
 *
 * A GraphQL operation is only valid if all variables encountered, both directly
 * and via fragment spreads, are defined by that operation.
 */
function NoUndefinedVariablesRule(context) {
  var variableNameDefined = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        variableNameDefined = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        for (var _i2 = 0; _i2 < usages.length; _i2++) {
          var _ref2 = usages[_i2];
          var node = _ref2.node;
          var varName = node.name.value;

          if (variableNameDefined[varName] !== true) {
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](operation.name ? "Variable \"$".concat(varName, "\" is not defined by operation \"").concat(operation.name.value, "\".") : "Variable \"$".concat(varName, "\" is not defined."), [node, operation]));
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      variableNameDefined[node.variable.name.value] = true;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs ***!
  \*************************************************************************/
/*! exports provided: NoUnusedFragmentsRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUnusedFragmentsRule", function() { return NoUnusedFragmentsRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * No unused fragments
 *
 * A GraphQL document is only valid if all fragment definitions are spread
 * within operations, or spread within other fragments spread within operations.
 */
function NoUnusedFragmentsRule(context) {
  var operationDefs = [];
  var fragmentDefs = [];
  return {
    OperationDefinition: function OperationDefinition(node) {
      operationDefs.push(node);
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      fragmentDefs.push(node);
      return false;
    },
    Document: {
      leave: function leave() {
        var fragmentNameUsed = Object.create(null);

        for (var _i2 = 0; _i2 < operationDefs.length; _i2++) {
          var operation = operationDefs[_i2];

          for (var _i4 = 0, _context$getRecursive2 = context.getRecursivelyReferencedFragments(operation); _i4 < _context$getRecursive2.length; _i4++) {
            var fragment = _context$getRecursive2[_i4];
            fragmentNameUsed[fragment.name.value] = true;
          }
        }

        for (var _i6 = 0; _i6 < fragmentDefs.length; _i6++) {
          var fragmentDef = fragmentDefs[_i6];
          var fragName = fragmentDef.name.value;

          if (fragmentNameUsed[fragName] !== true) {
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Fragment \"".concat(fragName, "\" is never used."), fragmentDef));
          }
        }
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs ***!
  \*************************************************************************/
/*! exports provided: NoUnusedVariablesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoUnusedVariablesRule", function() { return NoUnusedVariablesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * No unused variables
 *
 * A GraphQL operation is only valid if all variables defined by an operation
 * are used, either directly or within a spread fragment.
 */
function NoUnusedVariablesRule(context) {
  var variableDefs = [];
  return {
    OperationDefinition: {
      enter: function enter() {
        variableDefs = [];
      },
      leave: function leave(operation) {
        var variableNameUsed = Object.create(null);
        var usages = context.getRecursiveVariableUsages(operation);

        for (var _i2 = 0; _i2 < usages.length; _i2++) {
          var _ref2 = usages[_i2];
          var node = _ref2.node;
          variableNameUsed[node.name.value] = true;
        }

        for (var _i4 = 0, _variableDefs2 = variableDefs; _i4 < _variableDefs2.length; _i4++) {
          var variableDef = _variableDefs2[_i4];
          var variableName = variableDef.variable.name.value;

          if (variableNameUsed[variableName] !== true) {
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](operation.name ? "Variable \"$".concat(variableName, "\" is never used in operation \"").concat(operation.name.value, "\".") : "Variable \"$".concat(variableName, "\" is never used."), variableDef));
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(def) {
      variableDefs.push(def);
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs":
/*!************************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs ***!
  \************************************************************************************/
/*! exports provided: OverlappingFieldsCanBeMergedRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlappingFieldsCanBeMergedRule", function() { return OverlappingFieldsCanBeMergedRule; });
/* harmony import */ var _polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfills/find.mjs */ "./node_modules/graphql/polyfills/find.mjs");
/* harmony import */ var _polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../polyfills/objectEntries.mjs */ "./node_modules/graphql/polyfills/objectEntries.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");









function reasonMessage(reason) {
  if (Array.isArray(reason)) {
    return reason.map(function (_ref) {
      var responseName = _ref[0],
          subReason = _ref[1];
      return "subfields \"".concat(responseName, "\" conflict because ") + reasonMessage(subReason);
    }).join(' and ');
  }

  return reason;
}
/**
 * Overlapping fields can be merged
 *
 * A selection set is only valid if all fields (including spreading any
 * fragments) either correspond to distinct response names or can be merged
 * without ambiguity.
 */


function OverlappingFieldsCanBeMergedRule(context) {
  // A memoization for when two fragments are compared "between" each other for
  // conflicts. Two fragments may be compared many times, so memoizing this can
  // dramatically improve the performance of this validator.
  var comparedFragmentPairs = new PairSet(); // A cache for the "field map" and list of fragment names found in any given
  // selection set. Selection sets may be asked for this information multiple
  // times, so this improves the performance of this validator.

  var cachedFieldsAndFragmentNames = new Map();
  return {
    SelectionSet: function SelectionSet(selectionSet) {
      var conflicts = findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, context.getParentType(), selectionSet);

      for (var _i2 = 0; _i2 < conflicts.length; _i2++) {
        var _ref3 = conflicts[_i2];
        var _ref2$ = _ref3[0];
        var responseName = _ref2$[0];
        var reason = _ref2$[1];
        var fields1 = _ref3[1];
        var fields2 = _ref3[2];
        var reasonMsg = reasonMessage(reason);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_3__["GraphQLError"]("Fields \"".concat(responseName, "\" conflict because ").concat(reasonMsg, ". Use different aliases on the fields to fetch both if this was intentional."), fields1.concat(fields2)));
      }
    }
  };
}

/**
 * Algorithm:
 *
 * Conflicts occur when two fields exist in a query which will produce the same
 * response name, but represent differing values, thus creating a conflict.
 * The algorithm below finds all conflicts via making a series of comparisons
 * between fields. In order to compare as few fields as possible, this makes
 * a series of comparisons "within" sets of fields and "between" sets of fields.
 *
 * Given any selection set, a collection produces both a set of fields by
 * also including all inline fragments, as well as a list of fragments
 * referenced by fragment spreads.
 *
 * A) Each selection set represented in the document first compares "within" its
 * collected set of fields, finding any conflicts between every pair of
 * overlapping fields.
 * Note: This is the *only time* that a the fields "within" a set are compared
 * to each other. After this only fields "between" sets are compared.
 *
 * B) Also, if any fragment is referenced in a selection set, then a
 * comparison is made "between" the original set of fields and the
 * referenced fragment.
 *
 * C) Also, if multiple fragments are referenced, then comparisons
 * are made "between" each referenced fragment.
 *
 * D) When comparing "between" a set of fields and a referenced fragment, first
 * a comparison is made between each field in the original set of fields and
 * each field in the the referenced set of fields.
 *
 * E) Also, if any fragment is referenced in the referenced selection set,
 * then a comparison is made "between" the original set of fields and the
 * referenced fragment (recursively referring to step D).
 *
 * F) When comparing "between" two fragments, first a comparison is made between
 * each field in the first referenced set of fields and each field in the the
 * second referenced set of fields.
 *
 * G) Also, any fragments referenced by the first must be compared to the
 * second, and any fragments referenced by the second must be compared to the
 * first (recursively referring to step F).
 *
 * H) When comparing two fields, if both have selection sets, then a comparison
 * is made "between" both selection sets, first comparing the set of fields in
 * the first selection set with the set of fields in the second.
 *
 * I) Also, if any fragment is referenced in either selection set, then a
 * comparison is made "between" the other set of fields and the
 * referenced fragment.
 *
 * J) Also, if two fragments are referenced in both selection sets, then a
 * comparison is made "between" the two fragments.
 *
 */
// Find all conflicts found "within" a selection set, including those found
// via spreading in fragments. Called when visiting each SelectionSet in the
// GraphQL Document.
function findConflictsWithinSelectionSet(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentType, selectionSet) {
  var conflicts = [];

  var _getFieldsAndFragment = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet),
      fieldMap = _getFieldsAndFragment[0],
      fragmentNames = _getFieldsAndFragment[1]; // (A) Find find all conflicts "within" the fields of this selection set.
  // Note: this is the *only place* `collectConflictsWithin` is called.


  collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap);

  if (fragmentNames.length !== 0) {
    // (B) Then collect conflicts between these fields and those represented by
    // each spread fragment name found.
    for (var i = 0; i < fragmentNames.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fieldMap, fragmentNames[i]); // (C) Then compare this fragment with all other fragments found in this
      // selection set to collect conflicts between fragments spread together.
      // This compares each item in the list of fragment names to every other
      // item in that same list (except for itself).

      for (var j = i + 1; j < fragmentNames.length; j++) {
        collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, fragmentNames[i], fragmentNames[j]);
      }
    }
  }

  return conflicts;
} // Collect all conflicts found between a set of fields and a fragment reference
// including via spreading in any nested fragments.


function collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentName) {
  var fragment = context.getFragment(fragmentName);

  if (!fragment) {
    return;
  }

  var _getReferencedFieldsA = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment),
      fieldMap2 = _getReferencedFieldsA[0],
      fragmentNames2 = _getReferencedFieldsA[1]; // Do not compare a fragment's fieldMap to itself.


  if (fieldMap === fieldMap2) {
    return;
  } // (D) First collect any conflicts between the provided collection of fields
  // and the collection of fields represented by the given fragment.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fieldMap2); // (E) Then collect any conflicts between the provided collection of fields
  // and any fragment names found in the given fragment.

  for (var i = 0; i < fragmentNames2.length; i++) {
    collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap, fragmentNames2[i]);
  }
} // Collect all conflicts found between two fragments, including via spreading in
// any nested fragments.


function collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentName2) {
  // No need to compare a fragment to itself.
  if (fragmentName1 === fragmentName2) {
    return;
  } // Memoize so two fragments are not compared for conflicts more than once.


  if (comparedFragmentPairs.has(fragmentName1, fragmentName2, areMutuallyExclusive)) {
    return;
  }

  comparedFragmentPairs.add(fragmentName1, fragmentName2, areMutuallyExclusive);
  var fragment1 = context.getFragment(fragmentName1);
  var fragment2 = context.getFragment(fragmentName2);

  if (!fragment1 || !fragment2) {
    return;
  }

  var _getReferencedFieldsA2 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment1),
      fieldMap1 = _getReferencedFieldsA2[0],
      fragmentNames1 = _getReferencedFieldsA2[1];

  var _getReferencedFieldsA3 = getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment2),
      fieldMap2 = _getReferencedFieldsA3[0],
      fragmentNames2 = _getReferencedFieldsA3[1]; // (F) First, collect all conflicts between these two collections of fields
  // (not including any nested fragments).


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (G) Then collect conflicts between the first fragment and any nested
  // fragments spread in the second fragment.

  for (var j = 0; j < fragmentNames2.length; j++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentName1, fragmentNames2[j]);
  } // (G) Then collect conflicts between the second fragment and any nested
  // fragments spread in the first fragment.


  for (var i = 0; i < fragmentNames1.length; i++) {
    collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[i], fragmentName2);
  }
} // Find all conflicts found between two selection sets, including those found
// via spreading in fragments. Called when determining if conflicts exist
// between the sub-fields of two overlapping fields.


function findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, parentType1, selectionSet1, parentType2, selectionSet2) {
  var conflicts = [];

  var _getFieldsAndFragment2 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType1, selectionSet1),
      fieldMap1 = _getFieldsAndFragment2[0],
      fragmentNames1 = _getFieldsAndFragment2[1];

  var _getFieldsAndFragment3 = getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType2, selectionSet2),
      fieldMap2 = _getFieldsAndFragment3[0],
      fragmentNames2 = _getFieldsAndFragment3[1]; // (H) First, collect all conflicts between these two collections of field.


  collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fieldMap2); // (I) Then collect conflicts between the first collection of fields and
  // those referenced by each fragment name associated with the second.

  if (fragmentNames2.length !== 0) {
    for (var j = 0; j < fragmentNames2.length; j++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap1, fragmentNames2[j]);
    }
  } // (I) Then collect conflicts between the second collection of fields and
  // those referenced by each fragment name associated with the first.


  if (fragmentNames1.length !== 0) {
    for (var i = 0; i < fragmentNames1.length; i++) {
      collectConflictsBetweenFieldsAndFragment(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fieldMap2, fragmentNames1[i]);
    }
  } // (J) Also collect conflicts between any fragment names by the first and
  // fragment names by the second. This compares each item in the first set of
  // names to each item in the second set of names.


  for (var _i3 = 0; _i3 < fragmentNames1.length; _i3++) {
    for (var _j = 0; _j < fragmentNames2.length; _j++) {
      collectConflictsBetweenFragments(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, fragmentNames1[_i3], fragmentNames2[_j]);
    }
  }

  return conflicts;
} // Collect all Conflicts "within" one collection of fields.


function collectConflictsWithin(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, fieldMap) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For every response name, if there are multiple fields, they
  // must be compared to find a potential conflict.
  for (var _i5 = 0, _objectEntries2 = Object(_polyfills_objectEntries_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(fieldMap); _i5 < _objectEntries2.length; _i5++) {
    var _ref5 = _objectEntries2[_i5];
    var responseName = _ref5[0];
    var fields = _ref5[1];

    // This compares every field in the list to every other field in this list
    // (except to itself). If the list only has one item, nothing needs to
    // be compared.
    if (fields.length > 1) {
      for (var i = 0; i < fields.length; i++) {
        for (var j = i + 1; j < fields.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, false, // within one collection is never mutually exclusive
          responseName, fields[i], fields[j]);

          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  }
} // Collect all Conflicts between two collections of fields. This is similar to,
// but different from the `collectConflictsWithin` function above. This check
// assumes that `collectConflictsWithin` has already been called on each
// provided collection of fields. This is true because this validator traverses
// each individual selection set.


function collectConflictsBetween(context, conflicts, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, fieldMap1, fieldMap2) {
  // A field map is a keyed collection, where each key represents a response
  // name and the value at that key is a list of all fields which provide that
  // response name. For any response name which appears in both provided field
  // maps, each field from the first field map must be compared to every field
  // in the second field map to find potential conflicts.
  for (var _i7 = 0, _Object$keys2 = Object.keys(fieldMap1); _i7 < _Object$keys2.length; _i7++) {
    var responseName = _Object$keys2[_i7];
    var fields2 = fieldMap2[responseName];

    if (fields2) {
      var fields1 = fieldMap1[responseName];

      for (var i = 0; i < fields1.length; i++) {
        for (var j = 0; j < fields2.length; j++) {
          var conflict = findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, fields1[i], fields2[j]);

          if (conflict) {
            conflicts.push(conflict);
          }
        }
      }
    }
  }
} // Determines if there is a conflict between two particular fields, including
// comparing their sub-fields.


function findConflict(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, parentFieldsAreMutuallyExclusive, responseName, field1, field2) {
  var parentType1 = field1[0],
      node1 = field1[1],
      def1 = field1[2];
  var parentType2 = field2[0],
      node2 = field2[1],
      def2 = field2[2]; // If it is known that two fields could not possibly apply at the same
  // time, due to the parent types, then it is safe to permit them to diverge
  // in aliased field or arguments used as they will not present any ambiguity
  // by differing.
  // It is known that two parent types could never overlap if they are
  // different Object types. Interface or Union types might overlap - if not
  // in the current state of the schema, then perhaps in some future version,
  // thus may not safely diverge.

  var areMutuallyExclusive = parentFieldsAreMutuallyExclusive || parentType1 !== parentType2 && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isObjectType"])(parentType1) && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isObjectType"])(parentType2);

  if (!areMutuallyExclusive) {
    var _node1$arguments, _node2$arguments;

    // Two aliases must refer to the same field.
    var name1 = node1.name.value;
    var name2 = node2.name.value;

    if (name1 !== name2) {
      return [[responseName, "\"".concat(name1, "\" and \"").concat(name2, "\" are different fields")], [node1], [node2]];
    }
    /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */


    var args1 = (_node1$arguments = node1.arguments) !== null && _node1$arguments !== void 0 ? _node1$arguments : [];
    /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */

    var args2 = (_node2$arguments = node2.arguments) !== null && _node2$arguments !== void 0 ? _node2$arguments : []; // Two field calls must have the same arguments.

    if (!sameArguments(args1, args2)) {
      return [[responseName, 'they have differing arguments'], [node1], [node2]];
    }
  } // The return type for each field.


  var type1 = def1 === null || def1 === void 0 ? void 0 : def1.type;
  var type2 = def2 === null || def2 === void 0 ? void 0 : def2.type;

  if (type1 && type2 && doTypesConflict(type1, type2)) {
    return [[responseName, "they return conflicting types \"".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type1), "\" and \"").concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type2), "\"")], [node1], [node2]];
  } // Collect and compare sub-fields. Use the same "visited fragment names" list
  // for both collections so fields in a fragment reference are never
  // compared to themselves.


  var selectionSet1 = node1.selectionSet;
  var selectionSet2 = node2.selectionSet;

  if (selectionSet1 && selectionSet2) {
    var conflicts = findConflictsBetweenSubSelectionSets(context, cachedFieldsAndFragmentNames, comparedFragmentPairs, areMutuallyExclusive, Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["getNamedType"])(type1), selectionSet1, Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["getNamedType"])(type2), selectionSet2);
    return subfieldConflicts(conflicts, responseName, node1, node2);
  }
}

function sameArguments(arguments1, arguments2) {
  if (arguments1.length !== arguments2.length) {
    return false;
  }

  return arguments1.every(function (argument1) {
    var argument2 = Object(_polyfills_find_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments2, function (argument) {
      return argument.name.value === argument1.name.value;
    });

    if (!argument2) {
      return false;
    }

    return sameValue(argument1.value, argument2.value);
  });
}

function sameValue(value1, value2) {
  return Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__["print"])(value1) === Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_5__["print"])(value2);
} // Two types conflict if both types could not apply to a value simultaneously.
// Composite types are ignored as their individual field types will be compared
// later recursively. However List and Non-Null types must match.


function doTypesConflict(type1, type2) {
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isListType"])(type1)) {
    return Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isListType"])(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isListType"])(type2)) {
    return true;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(type1)) {
    return Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(type2) ? doTypesConflict(type1.ofType, type2.ofType) : true;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isNonNullType"])(type2)) {
    return true;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isLeafType"])(type1) || Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isLeafType"])(type2)) {
    return type1 !== type2;
  }

  return false;
} // Given a selection set, return the collection of fields (a mapping of response
// name to field nodes and definitions) as well as a list of fragment names
// referenced via fragment spreads.


function getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, parentType, selectionSet) {
  var cached = cachedFieldsAndFragmentNames.get(selectionSet);

  if (!cached) {
    var nodeAndDefs = Object.create(null);
    var fragmentNames = Object.create(null);

    _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames);

    cached = [nodeAndDefs, Object.keys(fragmentNames)];
    cachedFieldsAndFragmentNames.set(selectionSet, cached);
  }

  return cached;
} // Given a reference to a fragment, return the represented collection of fields
// as well as a list of nested fragment names referenced via fragment spreads.


function getReferencedFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragment) {
  // Short-circuit building a type from the node if possible.
  var cached = cachedFieldsAndFragmentNames.get(fragment.selectionSet);

  if (cached) {
    return cached;
  }

  var fragmentType = Object(_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_7__["typeFromAST"])(context.getSchema(), fragment.typeCondition);
  return getFieldsAndFragmentNames(context, cachedFieldsAndFragmentNames, fragmentType, fragment.selectionSet);
}

function _collectFieldsAndFragmentNames(context, parentType, selectionSet, nodeAndDefs, fragmentNames) {
  for (var _i9 = 0, _selectionSet$selecti2 = selectionSet.selections; _i9 < _selectionSet$selecti2.length; _i9++) {
    var selection = _selectionSet$selecti2[_i9];

    switch (selection.kind) {
      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].FIELD:
        {
          var fieldName = selection.name.value;
          var fieldDef = void 0;

          if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isObjectType"])(parentType) || Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isInterfaceType"])(parentType)) {
            fieldDef = parentType.getFields()[fieldName];
          }

          var responseName = selection.alias ? selection.alias.value : fieldName;

          if (!nodeAndDefs[responseName]) {
            nodeAndDefs[responseName] = [];
          }

          nodeAndDefs[responseName].push([parentType, selection, fieldDef]);
          break;
        }

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].FRAGMENT_SPREAD:
        fragmentNames[selection.name.value] = true;
        break;

      case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_4__["Kind"].INLINE_FRAGMENT:
        {
          var typeCondition = selection.typeCondition;
          var inlineFragmentType = typeCondition ? Object(_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_7__["typeFromAST"])(context.getSchema(), typeCondition) : parentType;

          _collectFieldsAndFragmentNames(context, inlineFragmentType, selection.selectionSet, nodeAndDefs, fragmentNames);

          break;
        }
    }
  }
} // Given a series of Conflicts which occurred between two sub-fields, generate
// a single Conflict.


function subfieldConflicts(conflicts, responseName, node1, node2) {
  if (conflicts.length > 0) {
    return [[responseName, conflicts.map(function (_ref6) {
      var reason = _ref6[0];
      return reason;
    })], conflicts.reduce(function (allFields, _ref7) {
      var fields1 = _ref7[1];
      return allFields.concat(fields1);
    }, [node1]), conflicts.reduce(function (allFields, _ref8) {
      var fields2 = _ref8[2];
      return allFields.concat(fields2);
    }, [node2])];
  }
}
/**
 * A way to keep track of pairs of things when the ordering of the pair does
 * not matter. We do this by maintaining a sort of double adjacency sets.
 */


var PairSet = /*#__PURE__*/function () {
  function PairSet() {
    this._data = Object.create(null);
  }

  var _proto = PairSet.prototype;

  _proto.has = function has(a, b, areMutuallyExclusive) {
    var first = this._data[a];
    var result = first && first[b];

    if (result === undefined) {
      return false;
    } // areMutuallyExclusive being false is a superset of being true,
    // hence if we want to know if this PairSet "has" these two with no
    // exclusivity, we have to ensure it was added as such.


    if (areMutuallyExclusive === false) {
      return result === false;
    }

    return true;
  };

  _proto.add = function add(a, b, areMutuallyExclusive) {
    _pairSetAdd(this._data, a, b, areMutuallyExclusive);

    _pairSetAdd(this._data, b, a, areMutuallyExclusive);
  };

  return PairSet;
}();

function _pairSetAdd(data, a, b, areMutuallyExclusive) {
  var map = data[a];

  if (!map) {
    map = Object.create(null);
    data[a] = map;
  }

  map[b] = areMutuallyExclusive;
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs":
/*!*******************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs ***!
  \*******************************************************************************/
/*! exports provided: PossibleFragmentSpreadsRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossibleFragmentSpreadsRule", function() { return PossibleFragmentSpreadsRule; });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/typeComparators.mjs */ "./node_modules/graphql/utilities/typeComparators.mjs");






/**
 * Possible fragment spread
 *
 * A fragment spread is only valid if the type condition could ever possibly
 * be true: if there is a non-empty intersection of the possible parent types,
 * and possible types which pass the type condition.
 */
function PossibleFragmentSpreadsRule(context) {
  return {
    InlineFragment: function InlineFragment(node) {
      var fragType = context.getType();
      var parentType = context.getParentType();

      if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(fragType) && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(parentType) && !Object(_utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_4__["doTypesOverlap"])(context.getSchema(), fragType, parentType)) {
        var parentTypeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(parentType);
        var fragTypeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(fragType);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Fragment cannot be spread here as objects of type \"".concat(parentTypeStr, "\" can never be of type \"").concat(fragTypeStr, "\"."), node));
      }
    },
    FragmentSpread: function FragmentSpread(node) {
      var fragName = node.name.value;
      var fragType = getFragmentType(context, fragName);
      var parentType = context.getParentType();

      if (fragType && parentType && !Object(_utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_4__["doTypesOverlap"])(context.getSchema(), fragType, parentType)) {
        var parentTypeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(parentType);
        var fragTypeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(fragType);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Fragment \"".concat(fragName, "\" cannot be spread here as objects of type \"").concat(parentTypeStr, "\" can never be of type \"").concat(fragTypeStr, "\"."), node));
      }
    }
  };
}

function getFragmentType(context, name) {
  var frag = context.getFragment(name);

  if (frag) {
    var type = Object(_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_3__["typeFromAST"])(context.getSchema(), frag.typeCondition);

    if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__["isCompositeType"])(type)) {
      return type;
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs ***!
  \******************************************************************************/
/*! exports provided: PossibleTypeExtensionsRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PossibleTypeExtensionsRule", function() { return PossibleTypeExtensionsRule; });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/invariant.mjs */ "./node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_predicates_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../language/predicates.mjs */ "./node_modules/graphql/language/predicates.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
var _defKindToExtKind;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










/**
 * Possible type extension
 *
 * A type extension is only valid if the type is defined and has the same kind.
 */
function PossibleTypeExtensionsRule(context) {
  var schema = context.getSchema();
  var definedTypes = Object.create(null);

  for (var _i2 = 0, _context$getDocument$2 = context.getDocument().definitions; _i2 < _context$getDocument$2.length; _i2++) {
    var def = _context$getDocument$2[_i2];

    if (Object(_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_6__["isTypeDefinitionNode"])(def)) {
      definedTypes[def.name.value] = def;
    }
  }

  return {
    ScalarTypeExtension: checkExtension,
    ObjectTypeExtension: checkExtension,
    InterfaceTypeExtension: checkExtension,
    UnionTypeExtension: checkExtension,
    EnumTypeExtension: checkExtension,
    InputObjectTypeExtension: checkExtension
  };

  function checkExtension(node) {
    var typeName = node.name.value;
    var defNode = definedTypes[typeName];
    var existingType = schema === null || schema === void 0 ? void 0 : schema.getType(typeName);
    var expectedKind;

    if (defNode) {
      expectedKind = defKindToExtKind[defNode.kind];
    } else if (existingType) {
      expectedKind = typeToExtKind(existingType);
    }

    if (expectedKind) {
      if (expectedKind !== node.kind) {
        var kindStr = extensionKindToTypeName(node.kind);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Cannot extend non-".concat(kindStr, " type \"").concat(typeName, "\"."), defNode ? [defNode, node] : node));
      }
    } else {
      var allTypeNames = Object.keys(definedTypes);

      if (schema) {
        allTypeNames = allTypeNames.concat(Object.keys(schema.getTypeMap()));
      }

      var suggestedTypes = Object(_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(typeName, allTypeNames);
      context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_4__["GraphQLError"]("Cannot extend type \"".concat(typeName, "\" because it is not defined.") + Object(_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(suggestedTypes), node.name));
    }
  }
}
var defKindToExtKind = (_defKindToExtKind = {}, _defineProperty(_defKindToExtKind, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].SCALAR_TYPE_DEFINITION, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].SCALAR_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].OBJECT_TYPE_DEFINITION, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].OBJECT_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].INTERFACE_TYPE_DEFINITION, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].INTERFACE_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].UNION_TYPE_DEFINITION, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].UNION_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].ENUM_TYPE_DEFINITION, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].ENUM_TYPE_EXTENSION), _defineProperty(_defKindToExtKind, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].INPUT_OBJECT_TYPE_DEFINITION, _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].INPUT_OBJECT_TYPE_EXTENSION), _defKindToExtKind);

function typeToExtKind(type) {
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isScalarType"])(type)) {
    return _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].SCALAR_TYPE_EXTENSION;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isObjectType"])(type)) {
    return _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].OBJECT_TYPE_EXTENSION;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInterfaceType"])(type)) {
    return _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].INTERFACE_TYPE_EXTENSION;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isUnionType"])(type)) {
    return _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].UNION_TYPE_EXTENSION;
  }

  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isEnumType"])(type)) {
    return _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].ENUM_TYPE_EXTENSION;
  }

  /* istanbul ignore else */
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInputObjectType"])(type)) {
    return _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].INPUT_OBJECT_TYPE_EXTENSION;
  } // Not reachable. All possible types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Unexpected type: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(type));
}

function extensionKindToTypeName(kind) {
  switch (kind) {
    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].SCALAR_TYPE_EXTENSION:
      return 'scalar';

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].OBJECT_TYPE_EXTENSION:
      return 'object';

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].INTERFACE_TYPE_EXTENSION:
      return 'interface';

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].UNION_TYPE_EXTENSION:
      return 'union';

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].ENUM_TYPE_EXTENSION:
      return 'enum';

    case _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_5__["Kind"].INPUT_OBJECT_TYPE_EXTENSION:
      return 'input object';
  } // Not reachable. All possible types have been considered.


  /* istanbul ignore next */
  Object(_jsutils_invariant_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(false, 'Unexpected kind: ' + Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(kind));
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs":
/*!*********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs ***!
  \*********************************************************************************/
/*! exports provided: ProvidedRequiredArgumentsRule, ProvidedRequiredArgumentsOnDirectivesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidedRequiredArgumentsRule", function() { return ProvidedRequiredArgumentsRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvidedRequiredArgumentsOnDirectivesRule", function() { return ProvidedRequiredArgumentsOnDirectivesRule; });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/**
 * Provided required arguments
 *
 * A field or directive is only valid if all required (non-null without a
 * default value) field arguments have been provided.
 */
function ProvidedRequiredArgumentsRule(context) {
  return _objectSpread({}, ProvidedRequiredArgumentsOnDirectivesRule(context), {
    Field: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(fieldNode) {
        var _fieldNode$arguments;

        var fieldDef = context.getFieldDef();

        if (!fieldDef) {
          return false;
        }
        /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */


        var argNodes = (_fieldNode$arguments = fieldNode.arguments) !== null && _fieldNode$arguments !== void 0 ? _fieldNode$arguments : [];
        var argNodeMap = Object(_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(argNodes, function (arg) {
          return arg.name.value;
        });

        for (var _i2 = 0, _fieldDef$args2 = fieldDef.args; _i2 < _fieldDef$args2.length; _i2++) {
          var argDef = _fieldDef$args2[_i2];
          var argNode = argNodeMap[argDef.name];

          if (!argNode && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isRequiredArgument"])(argDef)) {
            var argTypeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(argDef.type);
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"]("Field \"".concat(fieldDef.name, "\" argument \"").concat(argDef.name, "\" of type \"").concat(argTypeStr, "\" is required, but it was not provided."), fieldNode));
          }
        }
      }
    }
  });
}
/**
 * @internal
 */

function ProvidedRequiredArgumentsOnDirectivesRule(context) {
  var requiredArgsMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives_mjs__WEBPACK_IMPORTED_MODULE_5__["specifiedDirectives"];

  for (var _i4 = 0; _i4 < definedDirectives.length; _i4++) {
    var directive = definedDirectives[_i4];
    requiredArgsMap[directive.name] = Object(_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(directive.args.filter(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isRequiredArgument"]), function (arg) {
      return arg.name;
    });
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i6 = 0; _i6 < astDefinitions.length; _i6++) {
    var def = astDefinitions[_i6];

    if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].DIRECTIVE_DEFINITION) {
      var _def$arguments;

      /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */
      var argNodes = (_def$arguments = def.arguments) !== null && _def$arguments !== void 0 ? _def$arguments : [];
      requiredArgsMap[def.name.value] = Object(_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(argNodes.filter(isRequiredArgumentNode), function (arg) {
        return arg.name.value;
      });
    }
  }

  return {
    Directive: {
      // Validate on leave to allow for deeper errors to appear first.
      leave: function leave(directiveNode) {
        var directiveName = directiveNode.name.value;
        var requiredArgs = requiredArgsMap[directiveName];

        if (requiredArgs) {
          var _directiveNode$argume;

          /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */
          var _argNodes = (_directiveNode$argume = directiveNode.arguments) !== null && _directiveNode$argume !== void 0 ? _directiveNode$argume : [];

          var argNodeMap = Object(_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(_argNodes, function (arg) {
            return arg.name.value;
          });

          for (var _i8 = 0, _Object$keys2 = Object.keys(requiredArgs); _i8 < _Object$keys2.length; _i8++) {
            var argName = _Object$keys2[_i8];

            if (!argNodeMap[argName]) {
              var argType = requiredArgs[argName].type;
              var argTypeStr = Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_6__["isType"])(argType) ? Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(argType) : Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_4__["print"])(argType);
              context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_2__["GraphQLError"]("Directive \"@".concat(directiveName, "\" argument \"").concat(argName, "\" of type \"").concat(argTypeStr, "\" is required, but it was not provided."), directiveNode));
            }
          }
        }
      }
    }
  };
}

function isRequiredArgumentNode(arg) {
  return arg.type.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_3__["Kind"].NON_NULL_TYPE && arg.defaultValue == null;
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/ScalarLeafsRule.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/ScalarLeafsRule.mjs ***!
  \*******************************************************************/
/*! exports provided: ScalarLeafsRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScalarLeafsRule", function() { return ScalarLeafsRule; });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");




/**
 * Scalar leafs
 *
 * A GraphQL document is valid only if all leaf fields (fields without
 * sub selections) are of scalar or enum types.
 */
function ScalarLeafsRule(context) {
  return {
    Field: function Field(node) {
      var type = context.getType();
      var selectionSet = node.selectionSet;

      if (type) {
        if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__["isLeafType"])(Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__["getNamedType"])(type))) {
          if (selectionSet) {
            var fieldName = node.name.value;
            var typeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(type);
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Field \"".concat(fieldName, "\" must not have a selection since type \"").concat(typeStr, "\" has no subfields."), selectionSet));
          }
        } else if (!selectionSet) {
          var _fieldName = node.name.value;

          var _typeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(type);

          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Field \"".concat(_fieldName, "\" of type \"").concat(_typeStr, "\" must have a selection of subfields. Did you mean \"").concat(_fieldName, " { ... }\"?"), node));
        }
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs":
/*!********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs ***!
  \********************************************************************************/
/*! exports provided: SingleFieldSubscriptionsRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleFieldSubscriptionsRule", function() { return SingleFieldSubscriptionsRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Subscriptions must only include one field.
 *
 * A GraphQL subscription is valid only if it contains a single root field.
 */
function SingleFieldSubscriptionsRule(context) {
  return {
    OperationDefinition: function OperationDefinition(node) {
      if (node.operation === 'subscription') {
        if (node.selectionSet.selections.length !== 1) {
          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](node.name ? "Subscription \"".concat(node.name.value, "\" must select only one top level field.") : 'Anonymous Subscription must select only one top level field.', node.selectionSet.selections.slice(1)));
        }
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs ***!
  \***************************************************************************/
/*! exports provided: UniqueArgumentNamesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueArgumentNamesRule", function() { return UniqueArgumentNamesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique argument names
 *
 * A GraphQL field or directive is only valid if all supplied arguments are
 * uniquely named.
 */
function UniqueArgumentNamesRule(context) {
  var knownArgNames = Object.create(null);
  return {
    Field: function Field() {
      knownArgNames = Object.create(null);
    },
    Directive: function Directive() {
      knownArgNames = Object.create(null);
    },
    Argument: function Argument(node) {
      var argName = node.name.value;

      if (knownArgNames[argName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("There can be only one argument named \"".concat(argName, "\"."), [knownArgNames[argName], node.name]));
      } else {
        knownArgNames[argName] = node.name;
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs ***!
  \****************************************************************************/
/*! exports provided: UniqueDirectiveNamesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectiveNamesRule", function() { return UniqueDirectiveNamesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique directive names
 *
 * A GraphQL document is only valid if all defined directives have unique names.
 */
function UniqueDirectiveNamesRule(context) {
  var knownDirectiveNames = Object.create(null);
  var schema = context.getSchema();
  return {
    DirectiveDefinition: function DirectiveDefinition(node) {
      var directiveName = node.name.value;

      if (schema === null || schema === void 0 ? void 0 : schema.getDirective(directiveName)) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Directive \"@".concat(directiveName, "\" already exists in the schema. It cannot be redefined."), node.name));
        return;
      }

      if (knownDirectiveNames[directiveName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("There can be only one directive named \"@".concat(directiveName, "\"."), [knownDirectiveNames[directiveName], node.name]));
      } else {
        knownDirectiveNames[directiveName] = node.name;
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs":
/*!***********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs ***!
  \***********************************************************************************/
/*! exports provided: UniqueDirectivesPerLocationRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueDirectivesPerLocationRule", function() { return UniqueDirectivesPerLocationRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _language_predicates_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language/predicates.mjs */ "./node_modules/graphql/language/predicates.mjs");
/* harmony import */ var _type_directives_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type/directives.mjs */ "./node_modules/graphql/type/directives.mjs");





/**
 * Unique directive names per location
 *
 * A GraphQL document is only valid if all non-repeatable directives at
 * a given location are uniquely named.
 */
function UniqueDirectivesPerLocationRule(context) {
  var uniqueDirectiveMap = Object.create(null);
  var schema = context.getSchema();
  var definedDirectives = schema ? schema.getDirectives() : _type_directives_mjs__WEBPACK_IMPORTED_MODULE_3__["specifiedDirectives"];

  for (var _i2 = 0; _i2 < definedDirectives.length; _i2++) {
    var directive = definedDirectives[_i2];
    uniqueDirectiveMap[directive.name] = !directive.isRepeatable;
  }

  var astDefinitions = context.getDocument().definitions;

  for (var _i4 = 0; _i4 < astDefinitions.length; _i4++) {
    var def = astDefinitions[_i4];

    if (def.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].DIRECTIVE_DEFINITION) {
      uniqueDirectiveMap[def.name.value] = !def.repeatable;
    }
  }

  var schemaDirectives = Object.create(null);
  var typeDirectivesMap = Object.create(null);
  return {
    // Many different AST nodes may contain directives. Rather than listing
    // them all, just listen for entering any node, and check to see if it
    // defines any directives.
    enter: function enter(node) {
      if (node.directives == null) {
        return;
      }

      var seenDirectives;

      if (node.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_DEFINITION || node.kind === _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_1__["Kind"].SCHEMA_EXTENSION) {
        seenDirectives = schemaDirectives;
      } else if (Object(_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_2__["isTypeDefinitionNode"])(node) || Object(_language_predicates_mjs__WEBPACK_IMPORTED_MODULE_2__["isTypeExtensionNode"])(node)) {
        var typeName = node.name.value;
        seenDirectives = typeDirectivesMap[typeName];

        if (seenDirectives === undefined) {
          typeDirectivesMap[typeName] = seenDirectives = Object.create(null);
        }
      } else {
        seenDirectives = Object.create(null);
      }

      for (var _i6 = 0, _node$directives2 = node.directives; _i6 < _node$directives2.length; _i6++) {
        var _directive = _node$directives2[_i6];
        var directiveName = _directive.name.value;

        if (uniqueDirectiveMap[directiveName]) {
          if (seenDirectives[directiveName]) {
            context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("The directive \"@".concat(directiveName, "\" can only be used once at this location."), [seenDirectives[directiveName], _directive]));
          } else {
            seenDirectives[directiveName] = _directive;
          }
        }
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs ***!
  \****************************************************************************/
/*! exports provided: UniqueEnumValueNamesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueEnumValueNamesRule", function() { return UniqueEnumValueNamesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");



/**
 * Unique enum value names
 *
 * A GraphQL enum type is only valid if all its values are uniquely named.
 */
function UniqueEnumValueNamesRule(context) {
  var schema = context.getSchema();
  var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
  var knownValueNames = Object.create(null);
  return {
    EnumTypeDefinition: checkValueUniqueness,
    EnumTypeExtension: checkValueUniqueness
  };

  function checkValueUniqueness(node) {
    var _node$values;

    var typeName = node.name.value;

    if (!knownValueNames[typeName]) {
      knownValueNames[typeName] = Object.create(null);
    }
    /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */


    var valueNodes = (_node$values = node.values) !== null && _node$values !== void 0 ? _node$values : [];
    var valueNames = knownValueNames[typeName];

    for (var _i2 = 0; _i2 < valueNodes.length; _i2++) {
      var valueDef = valueNodes[_i2];
      var valueName = valueDef.name.value;
      var existingType = existingTypeMap[typeName];

      if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isEnumType"])(existingType) && existingType.getValue(valueName)) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Enum value \"".concat(typeName, ".").concat(valueName, "\" already exists in the schema. It cannot also be defined in this type extension."), valueDef.name));
      } else if (valueNames[valueName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Enum value \"".concat(typeName, ".").concat(valueName, "\" can only be defined once."), [valueNames[valueName], valueDef.name]));
      } else {
        valueNames[valueName] = valueDef.name;
      }
    }

    return false;
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs ***!
  \**********************************************************************************/
/*! exports provided: UniqueFieldDefinitionNamesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueFieldDefinitionNamesRule", function() { return UniqueFieldDefinitionNamesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");



/**
 * Unique field definition names
 *
 * A GraphQL complex type is only valid if all its fields are uniquely named.
 */
function UniqueFieldDefinitionNamesRule(context) {
  var schema = context.getSchema();
  var existingTypeMap = schema ? schema.getTypeMap() : Object.create(null);
  var knownFieldNames = Object.create(null);
  return {
    InputObjectTypeDefinition: checkFieldUniqueness,
    InputObjectTypeExtension: checkFieldUniqueness,
    InterfaceTypeDefinition: checkFieldUniqueness,
    InterfaceTypeExtension: checkFieldUniqueness,
    ObjectTypeDefinition: checkFieldUniqueness,
    ObjectTypeExtension: checkFieldUniqueness
  };

  function checkFieldUniqueness(node) {
    var _node$fields;

    var typeName = node.name.value;

    if (!knownFieldNames[typeName]) {
      knownFieldNames[typeName] = Object.create(null);
    }
    /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */


    var fieldNodes = (_node$fields = node.fields) !== null && _node$fields !== void 0 ? _node$fields : [];
    var fieldNames = knownFieldNames[typeName];

    for (var _i2 = 0; _i2 < fieldNodes.length; _i2++) {
      var fieldDef = fieldNodes[_i2];
      var fieldName = fieldDef.name.value;

      if (hasField(existingTypeMap[typeName], fieldName)) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Field \"".concat(typeName, ".").concat(fieldName, "\" already exists in the schema. It cannot also be defined in this type extension."), fieldDef.name));
      } else if (fieldNames[fieldName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Field \"".concat(typeName, ".").concat(fieldName, "\" can only be defined once."), [fieldNames[fieldName], fieldDef.name]));
      } else {
        fieldNames[fieldName] = fieldDef.name;
      }
    }

    return false;
  }
}

function hasField(type, fieldName) {
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isObjectType"])(type) || Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isInterfaceType"])(type) || Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_1__["isInputObjectType"])(type)) {
    return type.getFields()[fieldName];
  }

  return false;
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs ***!
  \***************************************************************************/
/*! exports provided: UniqueFragmentNamesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueFragmentNamesRule", function() { return UniqueFragmentNamesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique fragment names
 *
 * A GraphQL document is only valid if all defined fragments have unique names.
 */
function UniqueFragmentNamesRule(context) {
  var knownFragmentNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      return false;
    },
    FragmentDefinition: function FragmentDefinition(node) {
      var fragmentName = node.name.value;

      if (knownFragmentNames[fragmentName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("There can be only one fragment named \"".concat(fragmentName, "\"."), [knownFragmentNames[fragmentName], node.name]));
      } else {
        knownFragmentNames[fragmentName] = node.name;
      }

      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs":
/*!*****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs ***!
  \*****************************************************************************/
/*! exports provided: UniqueInputFieldNamesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueInputFieldNamesRule", function() { return UniqueInputFieldNamesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique input field names
 *
 * A GraphQL input object value is only valid if all supplied fields are
 * uniquely named.
 */
function UniqueInputFieldNamesRule(context) {
  var knownNameStack = [];
  var knownNames = Object.create(null);
  return {
    ObjectValue: {
      enter: function enter() {
        knownNameStack.push(knownNames);
        knownNames = Object.create(null);
      },
      leave: function leave() {
        knownNames = knownNameStack.pop();
      }
    },
    ObjectField: function ObjectField(node) {
      var fieldName = node.name.value;

      if (knownNames[fieldName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("There can be only one input field named \"".concat(fieldName, "\"."), [knownNames[fieldName], node.name]));
      } else {
        knownNames[fieldName] = node.name;
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs ***!
  \****************************************************************************/
/*! exports provided: UniqueOperationNamesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationNamesRule", function() { return UniqueOperationNamesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique operation names
 *
 * A GraphQL document is only valid if all defined operations have unique names.
 */
function UniqueOperationNamesRule(context) {
  var knownOperationNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition(node) {
      var operationName = node.name;

      if (operationName) {
        if (knownOperationNames[operationName.value]) {
          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("There can be only one operation named \"".concat(operationName.value, "\"."), [knownOperationNames[operationName.value], operationName]));
        } else {
          knownOperationNames[operationName.value] = operationName;
        }
      }

      return false;
    },
    FragmentDefinition: function FragmentDefinition() {
      return false;
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs ***!
  \****************************************************************************/
/*! exports provided: UniqueOperationTypesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueOperationTypesRule", function() { return UniqueOperationTypesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique operation types
 *
 * A GraphQL document is only valid if it has only one type per operation.
 */
function UniqueOperationTypesRule(context) {
  var schema = context.getSchema();
  var definedOperationTypes = Object.create(null);
  var existingOperationTypes = schema ? {
    query: schema.getQueryType(),
    mutation: schema.getMutationType(),
    subscription: schema.getSubscriptionType()
  } : {};
  return {
    SchemaDefinition: checkOperationTypes,
    SchemaExtension: checkOperationTypes
  };

  function checkOperationTypes(node) {
    var _node$operationTypes;

    /* istanbul ignore next (See https://github.com/graphql/graphql-js/issues/2203) */
    var operationTypesNodes = (_node$operationTypes = node.operationTypes) !== null && _node$operationTypes !== void 0 ? _node$operationTypes : [];

    for (var _i2 = 0; _i2 < operationTypesNodes.length; _i2++) {
      var operationType = operationTypesNodes[_i2];
      var operation = operationType.operation;
      var alreadyDefinedOperationType = definedOperationTypes[operation];

      if (existingOperationTypes[operation]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Type for ".concat(operation, " already defined in the schema. It cannot be redefined."), operationType));
      } else if (alreadyDefinedOperationType) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("There can be only one ".concat(operation, " type in schema."), [alreadyDefinedOperationType, operationType]));
      } else {
        definedOperationTypes[operation] = operationType;
      }
    }

    return false;
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs ***!
  \***********************************************************************/
/*! exports provided: UniqueTypeNamesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueTypeNamesRule", function() { return UniqueTypeNamesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique type names
 *
 * A GraphQL document is only valid if all defined types have unique names.
 */
function UniqueTypeNamesRule(context) {
  var knownTypeNames = Object.create(null);
  var schema = context.getSchema();
  return {
    ScalarTypeDefinition: checkTypeName,
    ObjectTypeDefinition: checkTypeName,
    InterfaceTypeDefinition: checkTypeName,
    UnionTypeDefinition: checkTypeName,
    EnumTypeDefinition: checkTypeName,
    InputObjectTypeDefinition: checkTypeName
  };

  function checkTypeName(node) {
    var typeName = node.name.value;

    if (schema === null || schema === void 0 ? void 0 : schema.getType(typeName)) {
      context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Type \"".concat(typeName, "\" already exists in the schema. It cannot also be defined in this type definition."), node.name));
      return;
    }

    if (knownTypeNames[typeName]) {
      context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("There can be only one type named \"".concat(typeName, "\"."), [knownTypeNames[typeName], node.name]));
    } else {
      knownTypeNames[typeName] = node.name;
    }

    return false;
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs ***!
  \***************************************************************************/
/*! exports provided: UniqueVariableNamesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueVariableNamesRule", function() { return UniqueVariableNamesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");


/**
 * Unique variable names
 *
 * A GraphQL operation is only valid if all its variables are uniquely named.
 */
function UniqueVariableNamesRule(context) {
  var knownVariableNames = Object.create(null);
  return {
    OperationDefinition: function OperationDefinition() {
      knownVariableNames = Object.create(null);
    },
    VariableDefinition: function VariableDefinition(node) {
      var variableName = node.variable.name.value;

      if (knownVariableNames[variableName]) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("There can be only one variable named \"$".concat(variableName, "\"."), [knownVariableNames[variableName], node.variable.name]));
      } else {
        knownVariableNames[variableName] = node.variable.name;
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs":
/*!***************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs ***!
  \***************************************************************************/
/*! exports provided: ValuesOfCorrectTypeRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesOfCorrectTypeRule", function() { return ValuesOfCorrectTypeRule; });
/* harmony import */ var _polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../polyfills/objectValues.mjs */ "./node_modules/graphql/polyfills/objectValues.mjs");
/* harmony import */ var _jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../jsutils/keyMap.mjs */ "./node_modules/graphql/jsutils/keyMap.mjs");
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../jsutils/didYouMean.mjs */ "./node_modules/graphql/jsutils/didYouMean.mjs");
/* harmony import */ var _jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../jsutils/suggestionList.mjs */ "./node_modules/graphql/jsutils/suggestionList.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");









/**
 * Value literals of correct type
 *
 * A GraphQL document is only valid if all value literals are of the type
 * expected at their position.
 */
function ValuesOfCorrectTypeRule(context) {
  return {
    ListValue: function ListValue(node) {
      // Note: TypeInfo will traverse into a list's item type, so look to the
      // parent input type to check if it is a list.
      var type = Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["getNullableType"])(context.getParentInputType());

      if (!Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isListType"])(type)) {
        isValidValueNode(context, node);
        return false; // Don't traverse further.
      }
    },
    ObjectValue: function ObjectValue(node) {
      var type = Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["getNamedType"])(context.getInputType());

      if (!Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInputObjectType"])(type)) {
        isValidValueNode(context, node);
        return false; // Don't traverse further.
      } // Ensure every required field exists.


      var fieldNodeMap = Object(_jsutils_keyMap_mjs__WEBPACK_IMPORTED_MODULE_1__["default"])(node.fields, function (field) {
        return field.name.value;
      });

      for (var _i2 = 0, _objectValues2 = Object(_polyfills_objectValues_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(type.getFields()); _i2 < _objectValues2.length; _i2++) {
        var fieldDef = _objectValues2[_i2];
        var fieldNode = fieldNodeMap[fieldDef.name];

        if (!fieldNode && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isRequiredInputField"])(fieldDef)) {
          var typeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(fieldDef.type);
          context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__["GraphQLError"]("Field \"".concat(type.name, ".").concat(fieldDef.name, "\" of required type \"").concat(typeStr, "\" was not provided."), node));
        }
      }
    },
    ObjectField: function ObjectField(node) {
      var parentType = Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["getNamedType"])(context.getParentInputType());
      var fieldType = context.getInputType();

      if (!fieldType && Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isInputObjectType"])(parentType)) {
        var suggestions = Object(_jsutils_suggestionList_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(node.name.value, Object.keys(parentType.getFields()));
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__["GraphQLError"]("Field \"".concat(node.name.value, "\" is not defined by type \"").concat(parentType.name, "\".") + Object(_jsutils_didYouMean_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(suggestions), node));
      }
    },
    NullValue: function NullValue(node) {
      var type = context.getInputType();

      if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isNonNullType"])(type)) {
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__["GraphQLError"]("Expected value of type \"".concat(Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(type), "\", found ").concat(Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_6__["print"])(node), "."), node));
      }
    },
    EnumValue: function EnumValue(node) {
      return isValidValueNode(context, node);
    },
    IntValue: function IntValue(node) {
      return isValidValueNode(context, node);
    },
    FloatValue: function FloatValue(node) {
      return isValidValueNode(context, node);
    },
    StringValue: function StringValue(node) {
      return isValidValueNode(context, node);
    },
    BooleanValue: function BooleanValue(node) {
      return isValidValueNode(context, node);
    }
  };
}
/**
 * Any value literal may be a valid representation of a Scalar, depending on
 * that scalar type.
 */

function isValidValueNode(context, node) {
  // Report any error at the full type expected by the location.
  var locationType = context.getInputType();

  if (!locationType) {
    return;
  }

  var type = Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["getNamedType"])(locationType);

  if (!Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_7__["isLeafType"])(type)) {
    var typeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(locationType);
    context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__["GraphQLError"]("Expected value of type \"".concat(typeStr, "\", found ").concat(Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_6__["print"])(node), "."), node));
    return;
  } // Scalars and Enums determine if a literal value is valid via parseLiteral(),
  // which may throw or return an invalid value to indicate failure.


  try {
    var parseResult = type.parseLiteral(node, undefined
    /* variables */
    );

    if (parseResult === undefined) {
      var _typeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(locationType);

      context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__["GraphQLError"]("Expected value of type \"".concat(_typeStr, "\", found ").concat(Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_6__["print"])(node), "."), node));
    }
  } catch (error) {
    var _typeStr2 = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_2__["default"])(locationType);

    if (error instanceof _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__["GraphQLError"]) {
      context.reportError(error);
    } else {
      context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_5__["GraphQLError"]("Expected value of type \"".concat(_typeStr2, "\", found ").concat(Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_6__["print"])(node), "; ") + error.message, node, undefined, undefined, undefined, error));
    }
  }
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs ***!
  \******************************************************************************/
/*! exports provided: VariablesAreInputTypesRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesAreInputTypesRule", function() { return VariablesAreInputTypesRule; });
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_printer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../language/printer.mjs */ "./node_modules/graphql/language/printer.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");





/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 */
function VariablesAreInputTypesRule(context) {
  return {
    VariableDefinition: function VariableDefinition(node) {
      var type = Object(_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_3__["typeFromAST"])(context.getSchema(), node.type);

      if (type && !Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_2__["isInputType"])(type)) {
        var variableName = node.variable.name.value;
        var typeName = Object(_language_printer_mjs__WEBPACK_IMPORTED_MODULE_1__["print"])(node.type);
        context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Variable \"$".concat(variableName, "\" cannot be non-input type \"").concat(typeName, "\"."), node.type));
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs":
/*!**********************************************************************************!*\
  !*** ./node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs ***!
  \**********************************************************************************/
/*! exports provided: VariablesInAllowedPositionRule */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariablesInAllowedPositionRule", function() { return VariablesInAllowedPositionRule; });
/* harmony import */ var _jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../jsutils/inspect.mjs */ "./node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../language/kinds.mjs */ "./node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../type/definition.mjs */ "./node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/typeFromAST.mjs */ "./node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/typeComparators.mjs */ "./node_modules/graphql/utilities/typeComparators.mjs");







/**
 * Variables passed to field arguments conform to type
 */
function VariablesInAllowedPositionRule(context) {
  var varDefMap = Object.create(null);
  return {
    OperationDefinition: {
      enter: function enter() {
        varDefMap = Object.create(null);
      },
      leave: function leave(operation) {
        var usages = context.getRecursiveVariableUsages(operation);

        for (var _i2 = 0; _i2 < usages.length; _i2++) {
          var _ref2 = usages[_i2];
          var node = _ref2.node;
          var type = _ref2.type;
          var defaultValue = _ref2.defaultValue;
          var varName = node.name.value;
          var varDef = varDefMap[varName];

          if (varDef && type) {
            // A var type is allowed if it is the same or more strict (e.g. is
            // a subtype of) than the expected type. It can be more strict if
            // the variable type is non-null when the expected type is nullable.
            // If both are list types, the variable item type can be more strict
            // than the expected item type (contravariant).
            var schema = context.getSchema();
            var varType = Object(_utilities_typeFromAST_mjs__WEBPACK_IMPORTED_MODULE_4__["typeFromAST"])(schema, varDef.type);

            if (varType && !allowedVariableUsage(schema, varType, varDef.defaultValue, type, defaultValue)) {
              var varTypeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(varType);
              var typeStr = Object(_jsutils_inspect_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(type);
              context.reportError(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]("Variable \"$".concat(varName, "\" of type \"").concat(varTypeStr, "\" used in position expecting type \"").concat(typeStr, "\"."), [varDef, node]));
            }
          }
        }
      }
    },
    VariableDefinition: function VariableDefinition(node) {
      varDefMap[node.variable.name.value] = node;
    }
  };
}
/**
 * Returns true if the variable is allowed in the location it was found,
 * which includes considering if default values exist for either the variable
 * or the location at which it is located.
 */

function allowedVariableUsage(schema, varType, varDefaultValue, locationType, locationDefaultValue) {
  if (Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__["isNonNullType"])(locationType) && !Object(_type_definition_mjs__WEBPACK_IMPORTED_MODULE_3__["isNonNullType"])(varType)) {
    var hasNonNullVariableDefaultValue = varDefaultValue != null && varDefaultValue.kind !== _language_kinds_mjs__WEBPACK_IMPORTED_MODULE_2__["Kind"].NULL;
    var hasLocationDefaultValue = locationDefaultValue !== undefined;

    if (!hasNonNullVariableDefaultValue && !hasLocationDefaultValue) {
      return false;
    }

    var nullableLocationType = locationType.ofType;
    return Object(_utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_5__["isTypeSubTypeOf"])(schema, varType, nullableLocationType);
  }

  return Object(_utilities_typeComparators_mjs__WEBPACK_IMPORTED_MODULE_5__["isTypeSubTypeOf"])(schema, varType, locationType);
}


/***/ }),

/***/ "./node_modules/graphql/validation/specifiedRules.mjs":
/*!************************************************************!*\
  !*** ./node_modules/graphql/validation/specifiedRules.mjs ***!
  \************************************************************/
/*! exports provided: specifiedRules, specifiedSDLRules */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedRules", function() { return specifiedRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "specifiedSDLRules", function() { return specifiedSDLRules; });
/* harmony import */ var _rules_ExecutableDefinitionsRule_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rules/ExecutableDefinitionsRule.mjs */ "./node_modules/graphql/validation/rules/ExecutableDefinitionsRule.mjs");
/* harmony import */ var _rules_UniqueOperationNamesRule_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rules/UniqueOperationNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueOperationNamesRule.mjs");
/* harmony import */ var _rules_LoneAnonymousOperationRule_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules/LoneAnonymousOperationRule.mjs */ "./node_modules/graphql/validation/rules/LoneAnonymousOperationRule.mjs");
/* harmony import */ var _rules_SingleFieldSubscriptionsRule_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rules/SingleFieldSubscriptionsRule.mjs */ "./node_modules/graphql/validation/rules/SingleFieldSubscriptionsRule.mjs");
/* harmony import */ var _rules_KnownTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rules/KnownTypeNamesRule.mjs */ "./node_modules/graphql/validation/rules/KnownTypeNamesRule.mjs");
/* harmony import */ var _rules_FragmentsOnCompositeTypesRule_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rules/FragmentsOnCompositeTypesRule.mjs */ "./node_modules/graphql/validation/rules/FragmentsOnCompositeTypesRule.mjs");
/* harmony import */ var _rules_VariablesAreInputTypesRule_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rules/VariablesAreInputTypesRule.mjs */ "./node_modules/graphql/validation/rules/VariablesAreInputTypesRule.mjs");
/* harmony import */ var _rules_ScalarLeafsRule_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rules/ScalarLeafsRule.mjs */ "./node_modules/graphql/validation/rules/ScalarLeafsRule.mjs");
/* harmony import */ var _rules_FieldsOnCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rules/FieldsOnCorrectTypeRule.mjs */ "./node_modules/graphql/validation/rules/FieldsOnCorrectTypeRule.mjs");
/* harmony import */ var _rules_UniqueFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rules/UniqueFragmentNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueFragmentNamesRule.mjs");
/* harmony import */ var _rules_KnownFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rules/KnownFragmentNamesRule.mjs */ "./node_modules/graphql/validation/rules/KnownFragmentNamesRule.mjs");
/* harmony import */ var _rules_NoUnusedFragmentsRule_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rules/NoUnusedFragmentsRule.mjs */ "./node_modules/graphql/validation/rules/NoUnusedFragmentsRule.mjs");
/* harmony import */ var _rules_PossibleFragmentSpreadsRule_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./rules/PossibleFragmentSpreadsRule.mjs */ "./node_modules/graphql/validation/rules/PossibleFragmentSpreadsRule.mjs");
/* harmony import */ var _rules_NoFragmentCyclesRule_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rules/NoFragmentCyclesRule.mjs */ "./node_modules/graphql/validation/rules/NoFragmentCyclesRule.mjs");
/* harmony import */ var _rules_UniqueVariableNamesRule_mjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rules/UniqueVariableNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueVariableNamesRule.mjs");
/* harmony import */ var _rules_NoUndefinedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rules/NoUndefinedVariablesRule.mjs */ "./node_modules/graphql/validation/rules/NoUndefinedVariablesRule.mjs");
/* harmony import */ var _rules_NoUnusedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./rules/NoUnusedVariablesRule.mjs */ "./node_modules/graphql/validation/rules/NoUnusedVariablesRule.mjs");
/* harmony import */ var _rules_KnownDirectivesRule_mjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./rules/KnownDirectivesRule.mjs */ "./node_modules/graphql/validation/rules/KnownDirectivesRule.mjs");
/* harmony import */ var _rules_UniqueDirectivesPerLocationRule_mjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rules/UniqueDirectivesPerLocationRule.mjs */ "./node_modules/graphql/validation/rules/UniqueDirectivesPerLocationRule.mjs");
/* harmony import */ var _rules_KnownArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rules/KnownArgumentNamesRule.mjs */ "./node_modules/graphql/validation/rules/KnownArgumentNamesRule.mjs");
/* harmony import */ var _rules_UniqueArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rules/UniqueArgumentNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueArgumentNamesRule.mjs");
/* harmony import */ var _rules_ValuesOfCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rules/ValuesOfCorrectTypeRule.mjs */ "./node_modules/graphql/validation/rules/ValuesOfCorrectTypeRule.mjs");
/* harmony import */ var _rules_ProvidedRequiredArgumentsRule_mjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./rules/ProvidedRequiredArgumentsRule.mjs */ "./node_modules/graphql/validation/rules/ProvidedRequiredArgumentsRule.mjs");
/* harmony import */ var _rules_VariablesInAllowedPositionRule_mjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./rules/VariablesInAllowedPositionRule.mjs */ "./node_modules/graphql/validation/rules/VariablesInAllowedPositionRule.mjs");
/* harmony import */ var _rules_OverlappingFieldsCanBeMergedRule_mjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./rules/OverlappingFieldsCanBeMergedRule.mjs */ "./node_modules/graphql/validation/rules/OverlappingFieldsCanBeMergedRule.mjs");
/* harmony import */ var _rules_UniqueInputFieldNamesRule_mjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rules/UniqueInputFieldNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueInputFieldNamesRule.mjs");
/* harmony import */ var _rules_LoneSchemaDefinitionRule_mjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./rules/LoneSchemaDefinitionRule.mjs */ "./node_modules/graphql/validation/rules/LoneSchemaDefinitionRule.mjs");
/* harmony import */ var _rules_UniqueOperationTypesRule_mjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./rules/UniqueOperationTypesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueOperationTypesRule.mjs");
/* harmony import */ var _rules_UniqueTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rules/UniqueTypeNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueTypeNamesRule.mjs");
/* harmony import */ var _rules_UniqueEnumValueNamesRule_mjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rules/UniqueEnumValueNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueEnumValueNamesRule.mjs");
/* harmony import */ var _rules_UniqueFieldDefinitionNamesRule_mjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./rules/UniqueFieldDefinitionNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueFieldDefinitionNamesRule.mjs");
/* harmony import */ var _rules_UniqueDirectiveNamesRule_mjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rules/UniqueDirectiveNamesRule.mjs */ "./node_modules/graphql/validation/rules/UniqueDirectiveNamesRule.mjs");
/* harmony import */ var _rules_PossibleTypeExtensionsRule_mjs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./rules/PossibleTypeExtensionsRule.mjs */ "./node_modules/graphql/validation/rules/PossibleTypeExtensionsRule.mjs");
// Spec Section: "Executable Definitions"
 // Spec Section: "Operation Name Uniqueness"

 // Spec Section: "Lone Anonymous Operation"

 // Spec Section: "Subscriptions with Single Root Field"

 // Spec Section: "Fragment Spread Type Existence"

 // Spec Section: "Fragments on Composite Types"

 // Spec Section: "Variables are Input Types"

 // Spec Section: "Leaf Field Selections"

 // Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"

 // Spec Section: "Fragment Name Uniqueness"

 // Spec Section: "Fragment spread target defined"

 // Spec Section: "Fragments must be used"

 // Spec Section: "Fragment spread is possible"

 // Spec Section: "Fragments must not form cycles"

 // Spec Section: "Variable Uniqueness"

 // Spec Section: "All Variable Used Defined"

 // Spec Section: "All Variables Used"

 // Spec Section: "Directives Are Defined"

 // Spec Section: "Directives Are Unique Per Location"

 // Spec Section: "Argument Names"

 // Spec Section: "Argument Uniqueness"

 // Spec Section: "Value Type Correctness"

 // Spec Section: "Argument Optionality"

 // Spec Section: "All Variable Usages Are Allowed"

 // Spec Section: "Field Selection Merging"

 // Spec Section: "Input Object Field Uniqueness"

 // SDL-specific validation rules








/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */

var specifiedRules = Object.freeze([_rules_ExecutableDefinitionsRule_mjs__WEBPACK_IMPORTED_MODULE_0__["ExecutableDefinitionsRule"], _rules_UniqueOperationNamesRule_mjs__WEBPACK_IMPORTED_MODULE_1__["UniqueOperationNamesRule"], _rules_LoneAnonymousOperationRule_mjs__WEBPACK_IMPORTED_MODULE_2__["LoneAnonymousOperationRule"], _rules_SingleFieldSubscriptionsRule_mjs__WEBPACK_IMPORTED_MODULE_3__["SingleFieldSubscriptionsRule"], _rules_KnownTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_4__["KnownTypeNamesRule"], _rules_FragmentsOnCompositeTypesRule_mjs__WEBPACK_IMPORTED_MODULE_5__["FragmentsOnCompositeTypesRule"], _rules_VariablesAreInputTypesRule_mjs__WEBPACK_IMPORTED_MODULE_6__["VariablesAreInputTypesRule"], _rules_ScalarLeafsRule_mjs__WEBPACK_IMPORTED_MODULE_7__["ScalarLeafsRule"], _rules_FieldsOnCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_8__["FieldsOnCorrectTypeRule"], _rules_UniqueFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_9__["UniqueFragmentNamesRule"], _rules_KnownFragmentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_10__["KnownFragmentNamesRule"], _rules_NoUnusedFragmentsRule_mjs__WEBPACK_IMPORTED_MODULE_11__["NoUnusedFragmentsRule"], _rules_PossibleFragmentSpreadsRule_mjs__WEBPACK_IMPORTED_MODULE_12__["PossibleFragmentSpreadsRule"], _rules_NoFragmentCyclesRule_mjs__WEBPACK_IMPORTED_MODULE_13__["NoFragmentCyclesRule"], _rules_UniqueVariableNamesRule_mjs__WEBPACK_IMPORTED_MODULE_14__["UniqueVariableNamesRule"], _rules_NoUndefinedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_15__["NoUndefinedVariablesRule"], _rules_NoUnusedVariablesRule_mjs__WEBPACK_IMPORTED_MODULE_16__["NoUnusedVariablesRule"], _rules_KnownDirectivesRule_mjs__WEBPACK_IMPORTED_MODULE_17__["KnownDirectivesRule"], _rules_UniqueDirectivesPerLocationRule_mjs__WEBPACK_IMPORTED_MODULE_18__["UniqueDirectivesPerLocationRule"], _rules_KnownArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_19__["KnownArgumentNamesRule"], _rules_UniqueArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_20__["UniqueArgumentNamesRule"], _rules_ValuesOfCorrectTypeRule_mjs__WEBPACK_IMPORTED_MODULE_21__["ValuesOfCorrectTypeRule"], _rules_ProvidedRequiredArgumentsRule_mjs__WEBPACK_IMPORTED_MODULE_22__["ProvidedRequiredArgumentsRule"], _rules_VariablesInAllowedPositionRule_mjs__WEBPACK_IMPORTED_MODULE_23__["VariablesInAllowedPositionRule"], _rules_OverlappingFieldsCanBeMergedRule_mjs__WEBPACK_IMPORTED_MODULE_24__["OverlappingFieldsCanBeMergedRule"], _rules_UniqueInputFieldNamesRule_mjs__WEBPACK_IMPORTED_MODULE_25__["UniqueInputFieldNamesRule"]]);
/**
 * @internal
 */

var specifiedSDLRules = Object.freeze([_rules_LoneSchemaDefinitionRule_mjs__WEBPACK_IMPORTED_MODULE_26__["LoneSchemaDefinitionRule"], _rules_UniqueOperationTypesRule_mjs__WEBPACK_IMPORTED_MODULE_27__["UniqueOperationTypesRule"], _rules_UniqueTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_28__["UniqueTypeNamesRule"], _rules_UniqueEnumValueNamesRule_mjs__WEBPACK_IMPORTED_MODULE_29__["UniqueEnumValueNamesRule"], _rules_UniqueFieldDefinitionNamesRule_mjs__WEBPACK_IMPORTED_MODULE_30__["UniqueFieldDefinitionNamesRule"], _rules_UniqueDirectiveNamesRule_mjs__WEBPACK_IMPORTED_MODULE_31__["UniqueDirectiveNamesRule"], _rules_KnownTypeNamesRule_mjs__WEBPACK_IMPORTED_MODULE_4__["KnownTypeNamesRule"], _rules_KnownDirectivesRule_mjs__WEBPACK_IMPORTED_MODULE_17__["KnownDirectivesRule"], _rules_UniqueDirectivesPerLocationRule_mjs__WEBPACK_IMPORTED_MODULE_18__["UniqueDirectivesPerLocationRule"], _rules_PossibleTypeExtensionsRule_mjs__WEBPACK_IMPORTED_MODULE_32__["PossibleTypeExtensionsRule"], _rules_KnownArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_19__["KnownArgumentNamesOnDirectivesRule"], _rules_UniqueArgumentNamesRule_mjs__WEBPACK_IMPORTED_MODULE_20__["UniqueArgumentNamesRule"], _rules_UniqueInputFieldNamesRule_mjs__WEBPACK_IMPORTED_MODULE_25__["UniqueInputFieldNamesRule"], _rules_ProvidedRequiredArgumentsRule_mjs__WEBPACK_IMPORTED_MODULE_22__["ProvidedRequiredArgumentsOnDirectivesRule"]]);


/***/ }),

/***/ "./node_modules/graphql/validation/validate.mjs":
/*!******************************************************!*\
  !*** ./node_modules/graphql/validation/validate.mjs ***!
  \******************************************************/
/*! exports provided: validate, validateSDL, assertValidSDL, assertValidSDLExtension */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validate", function() { return validate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSDL", function() { return validateSDL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidSDL", function() { return assertValidSDL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidSDLExtension", function() { return assertValidSDLExtension; });
/* harmony import */ var _jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert.mjs */ "./node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../error/GraphQLError.mjs */ "./node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/visitor.mjs */ "./node_modules/graphql/language/visitor.mjs");
/* harmony import */ var _type_validate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type/validate.mjs */ "./node_modules/graphql/type/validate.mjs");
/* harmony import */ var _utilities_TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/TypeInfo.mjs */ "./node_modules/graphql/utilities/TypeInfo.mjs");
/* harmony import */ var _specifiedRules_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./specifiedRules.mjs */ "./node_modules/graphql/validation/specifiedRules.mjs");
/* harmony import */ var _ValidationContext_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ValidationContext.mjs */ "./node_modules/graphql/validation/ValidationContext.mjs");







/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 *
 * Optionally a custom TypeInfo instance may be provided. If not provided, one
 * will be created from the provided schema.
 */

function validate(schema, documentAST) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _specifiedRules_mjs__WEBPACK_IMPORTED_MODULE_5__["specifiedRules"];
  var typeInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : new _utilities_TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_4__["TypeInfo"](schema);
  var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
    maxErrors: undefined
  };
  documentAST || Object(_jsutils_devAssert_mjs__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'Must provide document.'); // If the schema used for validation is invalid, throw an error.

  Object(_type_validate_mjs__WEBPACK_IMPORTED_MODULE_3__["assertValidSchema"])(schema);
  var abortObj = Object.freeze({});
  var errors = [];
  var context = new _ValidationContext_mjs__WEBPACK_IMPORTED_MODULE_6__["ValidationContext"](schema, documentAST, typeInfo, function (error) {
    if (options.maxErrors != null && errors.length >= options.maxErrors) {
      errors.push(new _error_GraphQLError_mjs__WEBPACK_IMPORTED_MODULE_1__["GraphQLError"]('Too many validation errors, error limit reached. Validation aborted.'));
      throw abortObj;
    }

    errors.push(error);
  }); // This uses a specialized visitor which runs multiple visitors in parallel,
  // while maintaining the visitor skip and break API.

  var visitor = Object(_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__["visitInParallel"])(rules.map(function (rule) {
    return rule(context);
  })); // Visit the whole document with each instance of all provided rules.

  try {
    Object(_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__["visit"])(documentAST, Object(_utilities_TypeInfo_mjs__WEBPACK_IMPORTED_MODULE_4__["visitWithTypeInfo"])(typeInfo, visitor));
  } catch (e) {
    if (e !== abortObj) {
      throw e;
    }
  }

  return errors;
}
/**
 * @internal
 */

function validateSDL(documentAST, schemaToExtend) {
  var rules = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _specifiedRules_mjs__WEBPACK_IMPORTED_MODULE_5__["specifiedSDLRules"];
  var errors = [];
  var context = new _ValidationContext_mjs__WEBPACK_IMPORTED_MODULE_6__["SDLValidationContext"](documentAST, schemaToExtend, function (error) {
    errors.push(error);
  });
  var visitors = rules.map(function (rule) {
    return rule(context);
  });
  Object(_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__["visit"])(documentAST, Object(_language_visitor_mjs__WEBPACK_IMPORTED_MODULE_2__["visitInParallel"])(visitors));
  return errors;
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

function assertValidSDL(documentAST) {
  var errors = validateSDL(documentAST);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

function assertValidSDLExtension(documentAST, schema) {
  var errors = validateSDL(documentAST, schema);

  if (errors.length !== 0) {
    throw new Error(errors.map(function (error) {
      return error.message;
    }).join('\n\n'));
  }
}


/***/ }),

/***/ "./node_modules/graphql/version.mjs":
/*!******************************************!*\
  !*** ./node_modules/graphql/version.mjs ***!
  \******************************************/
/*! exports provided: version, versionInfo */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "versionInfo", function() { return versionInfo; });
/**
 * Note: This file is autogenerated using "resources/gen-version.js" script and
 * automatically updated by "yarn version" command.
 */

/**
 * A string containing the version of the GraphQL.js library
 */
var version = '15.0.0';
/**
 * An object containing the components of the GraphQL.js version string
 */

var versionInfo = Object.freeze({
  major: 15,
  minor: 0,
  patch: 0,
  preReleaseTag: null
});


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/index.es.js");
/* harmony import */ var _styles_free_shipping_bar_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/free-shipping-bar.module.css */ "./pages/styles/free-shipping-bar.module.css");
/* harmony import */ var _styles_free_shipping_bar_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_free_shipping_bar_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var FreeShippingBar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FreeShippingBar, _React$Component);

  var _super = _createSuper(FreeShippingBar);

  function FreeShippingBar() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FreeShippingBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      bars: [{
        id: 1,
        name: 'My first shipping bar 1',
        active: 0
      }, {
        id: 2,
        name: 'My first shipping bar 2',
        active: 1
      }],
      templates: [{
        id: 1,
        name: 'My first shipping template 1',
        img: 'template1.png'
      }, {
        id: 2,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }, {
        id: 3,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }, {
        id: 4,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }, {
        id: 5,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }, {
        id: 6,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }],
      position_options: [{
        label: 'Top bar pushes down the rest of the page',
        value: 'top_push_v1'
      }, {
        label: 'Top bar pushes down the rest of the page (always visible while scrolling)',
        value: 'top_push_sticky_v1'
      }, {
        label: 'Top bar overlaps top of the page',
        value: 'top_cover_nonsticky'
      }, {
        label: ' Top bar overlaps top of the page (always visible while scrolling)',
        value: 'top_cover'
      }, {
        label: 'Bottom bar overlaps bottom of the page (always visible while scrolling)',
        value: 'bottom_cover'
      }, {
        label: 'Manual Placement – Allows manual insertion of the bar’s code into your theme.',
        value: 'inserted'
      }],
      name: 'My first free shipping bar',
      goal: '100',
      goal_two: '150',
      init_msg_start: 'Free shipping for orders over',
      init_msg_end: '',
      goal_msg: "Congratulations! You've got free shipping",
      progress_msg_start: 'Only',
      progress_msg_end: ' away from free shipping',
      link_opt: 0,
      link_url: 'https://apps.shopify.com/partners/me',
      link_new: 0,
      close_btn: 0,
      position: 'top_push_sticky_v1'
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSubmit", function () {
      _this.setState({
        name: _this.state.name,
        goal: _this.state.goal
      });

      console.log('submission', _this.state);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (field) {
      return function (value) {
        return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, value));
      };
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FreeShippingBar, [{
    key: "render",
    value: function render() {
      var _ref, _ref2, _ref3, _ref4, _ref5;

      var _this$state = this.state,
          name = _this$state.name,
          goal = _this$state.goal,
          goal_two = _this$state.goal_two,
          init_msg_start = _this$state.init_msg_start,
          init_msg_end = _this$state.init_msg_end,
          progress_msg_start = _this$state.progress_msg_start,
          progress_msg_end = _this$state.progress_msg_end,
          goal_msg = _this$state.goal_msg,
          link_opt = _this$state.link_opt,
          link_url = _this$state.link_url,
          link_new = _this$state.link_new,
          close_btn = _this$state.close_btn,
          position = _this$state.position;
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"].Section, {
        oneHalf: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Stack"].Item, {
        fill: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Heading"], null, "Free Shipping Bar (FSB) Dashboard")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        primary: true
      }, "Create New Bar"))), __jsx("div", {
        className: "Polaris-DataTable"
      }, __jsx("div", {
        className: "Polaris-DataTable__ScrollContainer"
      }, __jsx("table", {
        id: "bars",
        className: "Polaris-DataTable__Table"
      }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
        className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header"
      }, "Name"), __jsx("th", {
        className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header"
      }, "Actions"))), __jsx("tbody", null, this.renderDashboardTableData()))))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.handleSubmit
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"].Section, {
        oneThird: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        title: "Basic Template",
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["FormLayout"], null, __jsx("div", {
        className: "fsb_tp_container"
      }, __jsx("div", {
        className: "fsbStyles.fsb_tb_content",
        style: (_ref = {
          backgroundColor: "rgb(30, 30, 32)",
          color: "rgb(242, 202, 128)"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "backgroundColor", "rgb(30, 30, 32)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "color", "rgb(242, 202, 128)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "textAlign", "center"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "fontSize", "16px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "fontWeight", "normal"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "lineheight", "20px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "padding", "12px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, "fontFamily", "Helvetica"), _ref)
      }, "Bold and Clear")), __jsx("div", {
        className: "fsb_tp_container"
      }, __jsx("div", {
        className: "fsb_tb_content",
        style: (_ref2 = {
          backgroundColor: "rgb(30, 30, 32)",
          color: "rgb(242, 202, 128)"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref2, "backgroundColor", "rgb(30, 30, 32)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref2, "color", "rgb(242, 202, 128)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref2, "textAlign", "center"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref2, "fontSize", "16px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref2, "fontWeight", "normal"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref2, "lineheight", "20px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref2, "padding", "12px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref2, "fontFamily", "Helvetica"), _ref2)
      }, "Bold and Clear"))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"].Section, {
        oneThird: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        title: "Prenium Template",
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["FormLayout"], null, __jsx("div", {
        className: "fsb_tp_container"
      }, __jsx("div", {
        className: "fsbStyles.fsb_tb_content",
        style: (_ref3 = {
          backgroundColor: "rgb(30, 30, 32)",
          color: "rgb(242, 202, 128)"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref3, "backgroundColor", "rgb(30, 30, 32)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref3, "color", "rgb(242, 202, 128)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref3, "textAlign", "center"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref3, "fontSize", "16px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref3, "fontWeight", "normal"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref3, "lineheight", "20px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref3, "padding", "12px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref3, "fontFamily", "Helvetica"), _ref3)
      }, "Bold and Clear")), __jsx("div", {
        className: "fsb_tp_container"
      }, __jsx("div", {
        className: "fsb_tb_content",
        style: (_ref4 = {
          backgroundColor: "rgb(30, 30, 32)",
          color: "rgb(242, 202, 128)"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref4, "backgroundColor", "rgb(30, 30, 32)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref4, "color", "rgb(242, 202, 128)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref4, "textAlign", "center"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref4, "fontSize", "16px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref4, "fontWeight", "normal"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref4, "lineheight", "20px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref4, "padding", "12px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref4, "fontFamily", "Helvetica"), _ref4)
      }, "Bold and Clear")))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        title: "Preview",
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["FormLayout"], null, __jsx("div", {
        className: "fsb_tp_container"
      }, __jsx("div", {
        className: "fsb_tb_content",
        style: (_ref5 = {
          backgroundColor: "rgb(30, 30, 32)",
          color: "rgb(242, 202, 128)"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref5, "backgroundColor", "rgb(30, 30, 32)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref5, "color", "rgb(242, 202, 128)"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref5, "textAlign", "center"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref5, "fontSize", "16px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref5, "fontWeight", "normal"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref5, "lineheight", "20px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref5, "padding", "12px"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref5, "fontFamily", "Helvetica"), _ref5)
      }, "My first shipping bar1")))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        title: "Content Configuration",
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        value: name,
        onChange: this.handleChange('name'),
        label: "Name: ",
        type: "text",
        helpText: "For your own internal reference - only you can see it"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        value: goal,
        onChange: this.handleChange('goal'),
        label: "Free Shipping Goal: ",
        type: "number",
        helpText: "If no minimum order value is required, please set goal to 0"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        primary: true
      }, "Add Secondary Goal")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        value: goal_two,
        onChange: this.handleChange('goal_two'),
        label: "Free Shipping Secondary Goal: ",
        type: "number",
        helpText: "Secondary goal needs to be greater than the 1st free shipping goal"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        primary: true
      }, "Remove Secondary Goal")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        value: init_msg_start,
        onChange: this.handleChange('init_msg_start'),
        label: "Initial Message: ",
        type: "text",
        helpText: "Display when cart is empty"
      }), __jsx("div", {
        className: "fsb_msg_price"
      }, "$100"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        value: init_msg_end,
        onChange: this.handleChange('init_msg_end'),
        label: " ",
        type: "text"
      })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        value: progress_msg_start,
        onChange: this.handleChange('progress_msg_start'),
        label: "Progress Message: ",
        type: "text",
        helpText: "Displays when cart value is less than the goal"
      }), __jsx("div", {
        className: "fsb_msg_price"
      }, "$99"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        value: progress_msg_end,
        onChange: this.handleChange('progress_msg_end'),
        label: " ",
        type: "text"
      })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        value: goal_msg,
        onChange: this.handleChange('goal_msg'),
        label: "Goal Achieved Message:: ",
        type: "text",
        helpText: "Displays when cart value is greater than goal"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        label: "Add Link to the Bar (optional):",
        options: [{
          label: 'ON',
          value: 1
        }, {
          label: 'OFF',
          value: 0
        }],
        onChange: this.handleChange('link_opt'),
        value: link_opt,
        helpText: "The bar will be clickable after adding a link"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
        value: link_url,
        onChange: this.handleChange('link_url'),
        label: "Link URL:",
        type: "text",
        helpText: "This address will be visited after clicking the bar"
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
        label: "Open the link in a NEW tab when clicked",
        checked: link_new,
        onChange: this.handleChange('link_new')
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Select"], {
        label: "Include Close Button:",
        options: [{
          label: 'YES',
          value: 1
        }, {
          label: 'NO',
          value: 0
        }],
        onChange: this.handleChange('close_btn'),
        value: close_btn,
        helpText: "Places an \"x\" button on the bar so that users can close it manually"
      }), __jsx(ChoiceList, {
        title: "Select a Display Position:",
        choices: position_options,
        selected: position,
        onChange: position
      }))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Card"], {
        title: "Currency Configuration",
        sectioned: true
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["FormLayout"], null)))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Stack"], {
        distribution: "trailing"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        primary: true,
        submit: true
      }, "Save"))));
    }
  }, {
    key: "renderDashboardTableData",
    value: function renderDashboardTableData() {
      return this.state.bars.map(function (bar, index) {
        var id = bar.id,
            name = bar.name;
        return __jsx("tr", {
          className: "Polaris-DataTable__TableRow",
          key: id
        }, __jsx("td", {
          className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop"
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Badge"], {
          status: "success"
        }, "Active"), name)), __jsx("td", {
          className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop"
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], {
          primary: true
        }, "Edit"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], null, "Duplicate"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Button"], null, "Activate"))));
      });
    }
  }]);

  return FreeShippingBar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FreeShippingBar);

/***/ })

})
//# sourceMappingURL=index.js.b786cb768827de0ff64b.hot-update.js.map