
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model UserDetails
 * 
 */
export type UserDetails = $Result.DefaultSelection<Prisma.$UserDetailsPayload>
/**
 * Model ShowOnProfile
 * 
 */
export type ShowOnProfile = $Result.DefaultSelection<Prisma.$ShowOnProfilePayload>
/**
 * Model Prompts
 * 
 */
export type Prompts = $Result.DefaultSelection<Prisma.$PromptsPayload>
/**
 * Model Images
 * 
 */
export type Images = $Result.DefaultSelection<Prisma.$ImagesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userDetails`: Exposes CRUD operations for the **UserDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserDetails
    * const userDetails = await prisma.userDetails.findMany()
    * ```
    */
  get userDetails(): Prisma.UserDetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.showOnProfile`: Exposes CRUD operations for the **ShowOnProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShowOnProfiles
    * const showOnProfiles = await prisma.showOnProfile.findMany()
    * ```
    */
  get showOnProfile(): Prisma.ShowOnProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prompts`: Exposes CRUD operations for the **Prompts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prompts
    * const prompts = await prisma.prompts.findMany()
    * ```
    */
  get prompts(): Prisma.PromptsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.images`: Exposes CRUD operations for the **Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.ImagesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Match: 'Match',
    UserDetails: 'UserDetails',
    ShowOnProfile: 'ShowOnProfile',
    Prompts: 'Prompts',
    Images: 'Images'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "match" | "userDetails" | "showOnProfile" | "prompts" | "images"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      UserDetails: {
        payload: Prisma.$UserDetailsPayload<ExtArgs>
        fields: Prisma.UserDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserDetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserDetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          findFirst: {
            args: Prisma.UserDetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserDetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          findMany: {
            args: Prisma.UserDetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          create: {
            args: Prisma.UserDetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          createMany: {
            args: Prisma.UserDetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserDetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          delete: {
            args: Prisma.UserDetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          update: {
            args: Prisma.UserDetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          deleteMany: {
            args: Prisma.UserDetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserDetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserDetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>[]
          }
          upsert: {
            args: Prisma.UserDetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserDetailsPayload>
          }
          aggregate: {
            args: Prisma.UserDetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserDetails>
          }
          groupBy: {
            args: Prisma.UserDetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserDetailsCountArgs<ExtArgs>
            result: $Utils.Optional<UserDetailsCountAggregateOutputType> | number
          }
        }
      }
      ShowOnProfile: {
        payload: Prisma.$ShowOnProfilePayload<ExtArgs>
        fields: Prisma.ShowOnProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShowOnProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowOnProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShowOnProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowOnProfilePayload>
          }
          findFirst: {
            args: Prisma.ShowOnProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowOnProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShowOnProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowOnProfilePayload>
          }
          findMany: {
            args: Prisma.ShowOnProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowOnProfilePayload>[]
          }
          create: {
            args: Prisma.ShowOnProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowOnProfilePayload>
          }
          createMany: {
            args: Prisma.ShowOnProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShowOnProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowOnProfilePayload>[]
          }
          delete: {
            args: Prisma.ShowOnProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowOnProfilePayload>
          }
          update: {
            args: Prisma.ShowOnProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowOnProfilePayload>
          }
          deleteMany: {
            args: Prisma.ShowOnProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShowOnProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShowOnProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowOnProfilePayload>[]
          }
          upsert: {
            args: Prisma.ShowOnProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShowOnProfilePayload>
          }
          aggregate: {
            args: Prisma.ShowOnProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShowOnProfile>
          }
          groupBy: {
            args: Prisma.ShowOnProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShowOnProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShowOnProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ShowOnProfileCountAggregateOutputType> | number
          }
        }
      }
      Prompts: {
        payload: Prisma.$PromptsPayload<ExtArgs>
        fields: Prisma.PromptsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          findFirst: {
            args: Prisma.PromptsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          findMany: {
            args: Prisma.PromptsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>[]
          }
          create: {
            args: Prisma.PromptsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          createMany: {
            args: Prisma.PromptsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>[]
          }
          delete: {
            args: Prisma.PromptsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          update: {
            args: Prisma.PromptsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          deleteMany: {
            args: Prisma.PromptsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>[]
          }
          upsert: {
            args: Prisma.PromptsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptsPayload>
          }
          aggregate: {
            args: Prisma.PromptsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrompts>
          }
          groupBy: {
            args: Prisma.PromptsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptsCountArgs<ExtArgs>
            result: $Utils.Optional<PromptsCountAggregateOutputType> | number
          }
        }
      }
      Images: {
        payload: Prisma.$ImagesPayload<ExtArgs>
        fields: Prisma.ImagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findFirst: {
            args: Prisma.ImagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          findMany: {
            args: Prisma.ImagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          create: {
            args: Prisma.ImagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          createMany: {
            args: Prisma.ImagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          delete: {
            args: Prisma.ImagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          update: {
            args: Prisma.ImagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          deleteMany: {
            args: Prisma.ImagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>[]
          }
          upsert: {
            args: Prisma.ImagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagesPayload>
          }
          aggregate: {
            args: Prisma.ImagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImages>
          }
          groupBy: {
            args: Prisma.ImagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImagesCountArgs<ExtArgs>
            result: $Utils.Optional<ImagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    match?: MatchOmit
    userDetails?: UserDetailsOmit
    showOnProfile?: ShowOnProfileOmit
    prompts?: PromptsOmit
    images?: ImagesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userDetails: number
    Prompts: number
    Images: number
    matchesInitiated: number
    matchesReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | UserCountOutputTypeCountUserDetailsArgs
    Prompts?: boolean | UserCountOutputTypeCountPromptsArgs
    Images?: boolean | UserCountOutputTypeCountImagesArgs
    matchesInitiated?: boolean | UserCountOutputTypeCountMatchesInitiatedArgs
    matchesReceived?: boolean | UserCountOutputTypeCountMatchesReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDetailsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesInitiatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Count Type UserDetailsCountOutputType
   */

  export type UserDetailsCountOutputType = {
    showOnProfile: number
  }

  export type UserDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    showOnProfile?: boolean | UserDetailsCountOutputTypeCountShowOnProfileArgs
  }

  // Custom InputTypes
  /**
   * UserDetailsCountOutputType without action
   */
  export type UserDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetailsCountOutputType
     */
    select?: UserDetailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserDetailsCountOutputType without action
   */
  export type UserDetailsCountOutputTypeCountShowOnProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowOnProfileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    dob: Date | null
    createdAt: Date | null
    upadatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    password: string | null
    dob: Date | null
    createdAt: Date | null
    upadatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    password: number
    dob: number
    createdAt: number
    upadatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    dob?: true
    createdAt?: true
    upadatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    dob?: true
    createdAt?: true
    upadatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    password?: true
    dob?: true
    createdAt?: true
    upadatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstname: string
    lastname: string | null
    email: string
    password: string
    dob: Date
    createdAt: Date
    upadatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    dob?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
    userDetails?: boolean | User$userDetailsArgs<ExtArgs>
    Prompts?: boolean | User$PromptsArgs<ExtArgs>
    Images?: boolean | User$ImagesArgs<ExtArgs>
    matchesInitiated?: boolean | User$matchesInitiatedArgs<ExtArgs>
    matchesReceived?: boolean | User$matchesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    dob?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    dob?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    password?: boolean
    dob?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "password" | "dob" | "createdAt" | "upadatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userDetails?: boolean | User$userDetailsArgs<ExtArgs>
    Prompts?: boolean | User$PromptsArgs<ExtArgs>
    Images?: boolean | User$ImagesArgs<ExtArgs>
    matchesInitiated?: boolean | User$matchesInitiatedArgs<ExtArgs>
    matchesReceived?: boolean | User$matchesReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userDetails: Prisma.$UserDetailsPayload<ExtArgs>[]
      Prompts: Prisma.$PromptsPayload<ExtArgs>[]
      Images: Prisma.$ImagesPayload<ExtArgs>[]
      /**
       * *
       *    * no location field here
       *    * user_location will be stored separately
       *    * via raw SQL (../src/PostGIS.ts)
       */
      matchesInitiated: Prisma.$MatchPayload<ExtArgs>[]
      matchesReceived: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string
      lastname: string | null
      email: string
      password: string
      dob: Date
      createdAt: Date
      upadatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userDetails<T extends User$userDetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$userDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Prompts<T extends User$PromptsArgs<ExtArgs> = {}>(args?: Subset<T, User$PromptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Images<T extends User$ImagesArgs<ExtArgs> = {}>(args?: Subset<T, User$ImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesInitiated<T extends User$matchesInitiatedArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesInitiatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchesReceived<T extends User$matchesReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$matchesReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly dob: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly upadatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userDetails
   */
  export type User$userDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    where?: UserDetailsWhereInput
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    cursor?: UserDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * User.Prompts
   */
  export type User$PromptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompts
     */
    omit?: PromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptsInclude<ExtArgs> | null
    where?: PromptsWhereInput
    orderBy?: PromptsOrderByWithRelationInput | PromptsOrderByWithRelationInput[]
    cursor?: PromptsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptsScalarFieldEnum | PromptsScalarFieldEnum[]
  }

  /**
   * User.Images
   */
  export type User$ImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    cursor?: ImagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * User.matchesInitiated
   */
  export type User$matchesInitiatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.matchesReceived
   */
  export type User$matchesReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    userAId: string | null
    userBId: string | null
    active: boolean | null
    chat: boolean | null
    unMatchedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    userAId: string | null
    userBId: string | null
    active: boolean | null
    chat: boolean | null
    unMatchedBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    userAId: number
    userBId: number
    active: number
    chat: number
    unMatchedBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchMinAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    active?: true
    chat?: true
    unMatchedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    active?: true
    chat?: true
    unMatchedBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    userAId?: true
    userBId?: true
    active?: true
    chat?: true
    unMatchedBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    userAId: string
    userBId: string
    active: boolean
    chat: boolean
    unMatchedBy: string | null
    createdAt: Date
    updatedAt: Date
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    active?: boolean
    chat?: boolean
    unMatchedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    active?: boolean
    chat?: boolean
    unMatchedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    active?: boolean
    chat?: boolean
    unMatchedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    userAId?: boolean
    userBId?: boolean
    active?: boolean
    chat?: boolean
    unMatchedBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userAId" | "userBId" | "active" | "chat" | "unMatchedBy" | "createdAt" | "updatedAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userA?: boolean | UserDefaultArgs<ExtArgs>
    userB?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      /**
       * *
       *    * UserA => Who matched the user
       *    * UserB => User who matched by UserA
       */
      userA: Prisma.$UserPayload<ExtArgs>
      userB: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userAId: string
      userBId: string
      active: boolean
      chat: boolean
      unMatchedBy: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userA<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userB<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly userAId: FieldRef<"Match", 'String'>
    readonly userBId: FieldRef<"Match", 'String'>
    readonly active: FieldRef<"Match", 'Boolean'>
    readonly chat: FieldRef<"Match", 'Boolean'>
    readonly unMatchedBy: FieldRef<"Match", 'String'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly updatedAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model UserDetails
   */

  export type AggregateUserDetails = {
    _count: UserDetailsCountAggregateOutputType | null
    _min: UserDetailsMinAggregateOutputType | null
    _max: UserDetailsMaxAggregateOutputType | null
  }

  export type UserDetailsMinAggregateOutputType = {
    userId: string | null
    gender: $Enums.Gender | null
    datingGender: $Enums.Gender | null
    sexuality: string | null
    datingIntention: string | null
    relationshipType: string | null
    work: string | null
    jobTitle: string | null
    college: string | null
    highestDegree: string | null
    drink: boolean | null
    tobacco: boolean | null
    weed: boolean | null
    drugs: boolean | null
    createdAt: Date | null
    upadatedAt: Date | null
  }

  export type UserDetailsMaxAggregateOutputType = {
    userId: string | null
    gender: $Enums.Gender | null
    datingGender: $Enums.Gender | null
    sexuality: string | null
    datingIntention: string | null
    relationshipType: string | null
    work: string | null
    jobTitle: string | null
    college: string | null
    highestDegree: string | null
    drink: boolean | null
    tobacco: boolean | null
    weed: boolean | null
    drugs: boolean | null
    createdAt: Date | null
    upadatedAt: Date | null
  }

  export type UserDetailsCountAggregateOutputType = {
    userId: number
    gender: number
    datingGender: number
    sexuality: number
    datingIntention: number
    relationshipType: number
    work: number
    jobTitle: number
    college: number
    highestDegree: number
    drink: number
    tobacco: number
    weed: number
    drugs: number
    createdAt: number
    upadatedAt: number
    _all: number
  }


  export type UserDetailsMinAggregateInputType = {
    userId?: true
    gender?: true
    datingGender?: true
    sexuality?: true
    datingIntention?: true
    relationshipType?: true
    work?: true
    jobTitle?: true
    college?: true
    highestDegree?: true
    drink?: true
    tobacco?: true
    weed?: true
    drugs?: true
    createdAt?: true
    upadatedAt?: true
  }

  export type UserDetailsMaxAggregateInputType = {
    userId?: true
    gender?: true
    datingGender?: true
    sexuality?: true
    datingIntention?: true
    relationshipType?: true
    work?: true
    jobTitle?: true
    college?: true
    highestDegree?: true
    drink?: true
    tobacco?: true
    weed?: true
    drugs?: true
    createdAt?: true
    upadatedAt?: true
  }

  export type UserDetailsCountAggregateInputType = {
    userId?: true
    gender?: true
    datingGender?: true
    sexuality?: true
    datingIntention?: true
    relationshipType?: true
    work?: true
    jobTitle?: true
    college?: true
    highestDegree?: true
    drink?: true
    tobacco?: true
    weed?: true
    drugs?: true
    createdAt?: true
    upadatedAt?: true
    _all?: true
  }

  export type UserDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetails to aggregate.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserDetails
    **/
    _count?: true | UserDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserDetailsMaxAggregateInputType
  }

  export type GetUserDetailsAggregateType<T extends UserDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserDetails[P]>
      : GetScalarType<T[P], AggregateUserDetails[P]>
  }




  export type UserDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserDetailsWhereInput
    orderBy?: UserDetailsOrderByWithAggregationInput | UserDetailsOrderByWithAggregationInput[]
    by: UserDetailsScalarFieldEnum[] | UserDetailsScalarFieldEnum
    having?: UserDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserDetailsCountAggregateInputType | true
    _min?: UserDetailsMinAggregateInputType
    _max?: UserDetailsMaxAggregateInputType
  }

  export type UserDetailsGroupByOutputType = {
    userId: string
    gender: $Enums.Gender
    datingGender: $Enums.Gender
    sexuality: string | null
    datingIntention: string | null
    relationshipType: string | null
    work: string | null
    jobTitle: string | null
    college: string | null
    highestDegree: string | null
    drink: boolean | null
    tobacco: boolean | null
    weed: boolean | null
    drugs: boolean | null
    createdAt: Date
    upadatedAt: Date
    _count: UserDetailsCountAggregateOutputType | null
    _min: UserDetailsMinAggregateOutputType | null
    _max: UserDetailsMaxAggregateOutputType | null
  }

  type GetUserDetailsGroupByPayload<T extends UserDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], UserDetailsGroupByOutputType[P]>
        }
      >
    >


  export type UserDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    gender?: boolean
    datingGender?: boolean
    sexuality?: boolean
    datingIntention?: boolean
    relationshipType?: boolean
    work?: boolean
    jobTitle?: boolean
    college?: boolean
    highestDegree?: boolean
    drink?: boolean
    tobacco?: boolean
    weed?: boolean
    drugs?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    showOnProfile?: boolean | UserDetails$showOnProfileArgs<ExtArgs>
    _count?: boolean | UserDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    gender?: boolean
    datingGender?: boolean
    sexuality?: boolean
    datingIntention?: boolean
    relationshipType?: boolean
    work?: boolean
    jobTitle?: boolean
    college?: boolean
    highestDegree?: boolean
    drink?: boolean
    tobacco?: boolean
    weed?: boolean
    drugs?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    gender?: boolean
    datingGender?: boolean
    sexuality?: boolean
    datingIntention?: boolean
    relationshipType?: boolean
    work?: boolean
    jobTitle?: boolean
    college?: boolean
    highestDegree?: boolean
    drink?: boolean
    tobacco?: boolean
    weed?: boolean
    drugs?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userDetails"]>

  export type UserDetailsSelectScalar = {
    userId?: boolean
    gender?: boolean
    datingGender?: boolean
    sexuality?: boolean
    datingIntention?: boolean
    relationshipType?: boolean
    work?: boolean
    jobTitle?: boolean
    college?: boolean
    highestDegree?: boolean
    drink?: boolean
    tobacco?: boolean
    weed?: boolean
    drugs?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
  }

  export type UserDetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "gender" | "datingGender" | "sexuality" | "datingIntention" | "relationshipType" | "work" | "jobTitle" | "college" | "highestDegree" | "drink" | "tobacco" | "weed" | "drugs" | "createdAt" | "upadatedAt", ExtArgs["result"]["userDetails"]>
  export type UserDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    showOnProfile?: boolean | UserDetails$showOnProfileArgs<ExtArgs>
    _count?: boolean | UserDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserDetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserDetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserDetails"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      showOnProfile: Prisma.$ShowOnProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      gender: $Enums.Gender
      datingGender: $Enums.Gender
      sexuality: string | null
      datingIntention: string | null
      relationshipType: string | null
      work: string | null
      jobTitle: string | null
      college: string | null
      highestDegree: string | null
      drink: boolean | null
      tobacco: boolean | null
      weed: boolean | null
      drugs: boolean | null
      createdAt: Date
      upadatedAt: Date
    }, ExtArgs["result"]["userDetails"]>
    composites: {}
  }

  type UserDetailsGetPayload<S extends boolean | null | undefined | UserDetailsDefaultArgs> = $Result.GetResult<Prisma.$UserDetailsPayload, S>

  type UserDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserDetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserDetailsCountAggregateInputType | true
    }

  export interface UserDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserDetails'], meta: { name: 'UserDetails' } }
    /**
     * Find zero or one UserDetails that matches the filter.
     * @param {UserDetailsFindUniqueArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserDetailsFindUniqueArgs>(args: SelectSubset<T, UserDetailsFindUniqueArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserDetails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserDetailsFindUniqueOrThrowArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserDetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserDetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindFirstArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserDetailsFindFirstArgs>(args?: SelectSubset<T, UserDetailsFindFirstArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindFirstOrThrowArgs} args - Arguments to find a UserDetails
     * @example
     * // Get one UserDetails
     * const userDetails = await prisma.userDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserDetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserDetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserDetails
     * const userDetails = await prisma.userDetails.findMany()
     * 
     * // Get first 10 UserDetails
     * const userDetails = await prisma.userDetails.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userDetailsWithUserIdOnly = await prisma.userDetails.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserDetailsFindManyArgs>(args?: SelectSubset<T, UserDetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserDetails.
     * @param {UserDetailsCreateArgs} args - Arguments to create a UserDetails.
     * @example
     * // Create one UserDetails
     * const UserDetails = await prisma.userDetails.create({
     *   data: {
     *     // ... data to create a UserDetails
     *   }
     * })
     * 
     */
    create<T extends UserDetailsCreateArgs>(args: SelectSubset<T, UserDetailsCreateArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserDetails.
     * @param {UserDetailsCreateManyArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetails = await prisma.userDetails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserDetailsCreateManyArgs>(args?: SelectSubset<T, UserDetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserDetails and returns the data saved in the database.
     * @param {UserDetailsCreateManyAndReturnArgs} args - Arguments to create many UserDetails.
     * @example
     * // Create many UserDetails
     * const userDetails = await prisma.userDetails.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserDetails and only return the `userId`
     * const userDetailsWithUserIdOnly = await prisma.userDetails.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserDetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserDetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserDetails.
     * @param {UserDetailsDeleteArgs} args - Arguments to delete one UserDetails.
     * @example
     * // Delete one UserDetails
     * const UserDetails = await prisma.userDetails.delete({
     *   where: {
     *     // ... filter to delete one UserDetails
     *   }
     * })
     * 
     */
    delete<T extends UserDetailsDeleteArgs>(args: SelectSubset<T, UserDetailsDeleteArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserDetails.
     * @param {UserDetailsUpdateArgs} args - Arguments to update one UserDetails.
     * @example
     * // Update one UserDetails
     * const userDetails = await prisma.userDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserDetailsUpdateArgs>(args: SelectSubset<T, UserDetailsUpdateArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserDetails.
     * @param {UserDetailsDeleteManyArgs} args - Arguments to filter UserDetails to delete.
     * @example
     * // Delete a few UserDetails
     * const { count } = await prisma.userDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDetailsDeleteManyArgs>(args?: SelectSubset<T, UserDetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserDetails
     * const userDetails = await prisma.userDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserDetailsUpdateManyArgs>(args: SelectSubset<T, UserDetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserDetails and returns the data updated in the database.
     * @param {UserDetailsUpdateManyAndReturnArgs} args - Arguments to update many UserDetails.
     * @example
     * // Update many UserDetails
     * const userDetails = await prisma.userDetails.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserDetails and only return the `userId`
     * const userDetailsWithUserIdOnly = await prisma.userDetails.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserDetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserDetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserDetails.
     * @param {UserDetailsUpsertArgs} args - Arguments to update or create a UserDetails.
     * @example
     * // Update or create a UserDetails
     * const userDetails = await prisma.userDetails.upsert({
     *   create: {
     *     // ... data to create a UserDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserDetails we want to update
     *   }
     * })
     */
    upsert<T extends UserDetailsUpsertArgs>(args: SelectSubset<T, UserDetailsUpsertArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsCountArgs} args - Arguments to filter UserDetails to count.
     * @example
     * // Count the number of UserDetails
     * const count = await prisma.userDetails.count({
     *   where: {
     *     // ... the filter for the UserDetails we want to count
     *   }
     * })
    **/
    count<T extends UserDetailsCountArgs>(
      args?: Subset<T, UserDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserDetailsAggregateArgs>(args: Subset<T, UserDetailsAggregateArgs>): Prisma.PrismaPromise<GetUserDetailsAggregateType<T>>

    /**
     * Group by UserDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserDetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserDetailsGroupByArgs['orderBy'] }
        : { orderBy?: UserDetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserDetails model
   */
  readonly fields: UserDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    showOnProfile<T extends UserDetails$showOnProfileArgs<ExtArgs> = {}>(args?: Subset<T, UserDetails$showOnProfileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserDetails model
   */
  interface UserDetailsFieldRefs {
    readonly userId: FieldRef<"UserDetails", 'String'>
    readonly gender: FieldRef<"UserDetails", 'Gender'>
    readonly datingGender: FieldRef<"UserDetails", 'Gender'>
    readonly sexuality: FieldRef<"UserDetails", 'String'>
    readonly datingIntention: FieldRef<"UserDetails", 'String'>
    readonly relationshipType: FieldRef<"UserDetails", 'String'>
    readonly work: FieldRef<"UserDetails", 'String'>
    readonly jobTitle: FieldRef<"UserDetails", 'String'>
    readonly college: FieldRef<"UserDetails", 'String'>
    readonly highestDegree: FieldRef<"UserDetails", 'String'>
    readonly drink: FieldRef<"UserDetails", 'Boolean'>
    readonly tobacco: FieldRef<"UserDetails", 'Boolean'>
    readonly weed: FieldRef<"UserDetails", 'Boolean'>
    readonly drugs: FieldRef<"UserDetails", 'Boolean'>
    readonly createdAt: FieldRef<"UserDetails", 'DateTime'>
    readonly upadatedAt: FieldRef<"UserDetails", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserDetails findUnique
   */
  export type UserDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails findUniqueOrThrow
   */
  export type UserDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails findFirst
   */
  export type UserDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails findFirstOrThrow
   */
  export type UserDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserDetails.
     */
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails findMany
   */
  export type UserDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter, which UserDetails to fetch.
     */
    where?: UserDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserDetails to fetch.
     */
    orderBy?: UserDetailsOrderByWithRelationInput | UserDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserDetails.
     */
    cursor?: UserDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserDetails.
     */
    skip?: number
    distinct?: UserDetailsScalarFieldEnum | UserDetailsScalarFieldEnum[]
  }

  /**
   * UserDetails create
   */
  export type UserDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserDetails.
     */
    data: XOR<UserDetailsCreateInput, UserDetailsUncheckedCreateInput>
  }

  /**
   * UserDetails createMany
   */
  export type UserDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailsCreateManyInput | UserDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserDetails createManyAndReturn
   */
  export type UserDetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * The data used to create many UserDetails.
     */
    data: UserDetailsCreateManyInput | UserDetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDetails update
   */
  export type UserDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserDetails.
     */
    data: XOR<UserDetailsUpdateInput, UserDetailsUncheckedUpdateInput>
    /**
     * Choose, which UserDetails to update.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails updateMany
   */
  export type UserDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserDetails.
     */
    data: XOR<UserDetailsUpdateManyMutationInput, UserDetailsUncheckedUpdateManyInput>
    /**
     * Filter which UserDetails to update
     */
    where?: UserDetailsWhereInput
    /**
     * Limit how many UserDetails to update.
     */
    limit?: number
  }

  /**
   * UserDetails updateManyAndReturn
   */
  export type UserDetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * The data used to update UserDetails.
     */
    data: XOR<UserDetailsUpdateManyMutationInput, UserDetailsUncheckedUpdateManyInput>
    /**
     * Filter which UserDetails to update
     */
    where?: UserDetailsWhereInput
    /**
     * Limit how many UserDetails to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserDetails upsert
   */
  export type UserDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserDetails to update in case it exists.
     */
    where: UserDetailsWhereUniqueInput
    /**
     * In case the UserDetails found by the `where` argument doesn't exist, create a new UserDetails with this data.
     */
    create: XOR<UserDetailsCreateInput, UserDetailsUncheckedCreateInput>
    /**
     * In case the UserDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserDetailsUpdateInput, UserDetailsUncheckedUpdateInput>
  }

  /**
   * UserDetails delete
   */
  export type UserDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    /**
     * Filter which UserDetails to delete.
     */
    where: UserDetailsWhereUniqueInput
  }

  /**
   * UserDetails deleteMany
   */
  export type UserDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserDetails to delete
     */
    where?: UserDetailsWhereInput
    /**
     * Limit how many UserDetails to delete.
     */
    limit?: number
  }

  /**
   * UserDetails.showOnProfile
   */
  export type UserDetails$showOnProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowOnProfile
     */
    select?: ShowOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowOnProfile
     */
    omit?: ShowOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowOnProfileInclude<ExtArgs> | null
    where?: ShowOnProfileWhereInput
    orderBy?: ShowOnProfileOrderByWithRelationInput | ShowOnProfileOrderByWithRelationInput[]
    cursor?: ShowOnProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShowOnProfileScalarFieldEnum | ShowOnProfileScalarFieldEnum[]
  }

  /**
   * UserDetails without action
   */
  export type UserDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
  }


  /**
   * Model ShowOnProfile
   */

  export type AggregateShowOnProfile = {
    _count: ShowOnProfileCountAggregateOutputType | null
    _min: ShowOnProfileMinAggregateOutputType | null
    _max: ShowOnProfileMaxAggregateOutputType | null
  }

  export type ShowOnProfileMinAggregateOutputType = {
    userDetailsUserId: string | null
    gender: boolean | null
    datingGender: boolean | null
    sexuality: boolean | null
    datingIntention: boolean | null
    relationshipType: boolean | null
    work: boolean | null
    jobTitle: boolean | null
    college: boolean | null
    highestDegree: boolean | null
    drink: boolean | null
    tobacco: boolean | null
    weed: boolean | null
    drugs: boolean | null
  }

  export type ShowOnProfileMaxAggregateOutputType = {
    userDetailsUserId: string | null
    gender: boolean | null
    datingGender: boolean | null
    sexuality: boolean | null
    datingIntention: boolean | null
    relationshipType: boolean | null
    work: boolean | null
    jobTitle: boolean | null
    college: boolean | null
    highestDegree: boolean | null
    drink: boolean | null
    tobacco: boolean | null
    weed: boolean | null
    drugs: boolean | null
  }

  export type ShowOnProfileCountAggregateOutputType = {
    userDetailsUserId: number
    gender: number
    datingGender: number
    sexuality: number
    datingIntention: number
    relationshipType: number
    work: number
    jobTitle: number
    college: number
    highestDegree: number
    drink: number
    tobacco: number
    weed: number
    drugs: number
    _all: number
  }


  export type ShowOnProfileMinAggregateInputType = {
    userDetailsUserId?: true
    gender?: true
    datingGender?: true
    sexuality?: true
    datingIntention?: true
    relationshipType?: true
    work?: true
    jobTitle?: true
    college?: true
    highestDegree?: true
    drink?: true
    tobacco?: true
    weed?: true
    drugs?: true
  }

  export type ShowOnProfileMaxAggregateInputType = {
    userDetailsUserId?: true
    gender?: true
    datingGender?: true
    sexuality?: true
    datingIntention?: true
    relationshipType?: true
    work?: true
    jobTitle?: true
    college?: true
    highestDegree?: true
    drink?: true
    tobacco?: true
    weed?: true
    drugs?: true
  }

  export type ShowOnProfileCountAggregateInputType = {
    userDetailsUserId?: true
    gender?: true
    datingGender?: true
    sexuality?: true
    datingIntention?: true
    relationshipType?: true
    work?: true
    jobTitle?: true
    college?: true
    highestDegree?: true
    drink?: true
    tobacco?: true
    weed?: true
    drugs?: true
    _all?: true
  }

  export type ShowOnProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowOnProfile to aggregate.
     */
    where?: ShowOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowOnProfiles to fetch.
     */
    orderBy?: ShowOnProfileOrderByWithRelationInput | ShowOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShowOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShowOnProfiles
    **/
    _count?: true | ShowOnProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowOnProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowOnProfileMaxAggregateInputType
  }

  export type GetShowOnProfileAggregateType<T extends ShowOnProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateShowOnProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowOnProfile[P]>
      : GetScalarType<T[P], AggregateShowOnProfile[P]>
  }




  export type ShowOnProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShowOnProfileWhereInput
    orderBy?: ShowOnProfileOrderByWithAggregationInput | ShowOnProfileOrderByWithAggregationInput[]
    by: ShowOnProfileScalarFieldEnum[] | ShowOnProfileScalarFieldEnum
    having?: ShowOnProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowOnProfileCountAggregateInputType | true
    _min?: ShowOnProfileMinAggregateInputType
    _max?: ShowOnProfileMaxAggregateInputType
  }

  export type ShowOnProfileGroupByOutputType = {
    userDetailsUserId: string
    gender: boolean | null
    datingGender: boolean | null
    sexuality: boolean | null
    datingIntention: boolean | null
    relationshipType: boolean | null
    work: boolean | null
    jobTitle: boolean | null
    college: boolean | null
    highestDegree: boolean | null
    drink: boolean | null
    tobacco: boolean | null
    weed: boolean | null
    drugs: boolean | null
    _count: ShowOnProfileCountAggregateOutputType | null
    _min: ShowOnProfileMinAggregateOutputType | null
    _max: ShowOnProfileMaxAggregateOutputType | null
  }

  type GetShowOnProfileGroupByPayload<T extends ShowOnProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShowOnProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowOnProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowOnProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ShowOnProfileGroupByOutputType[P]>
        }
      >
    >


  export type ShowOnProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userDetailsUserId?: boolean
    gender?: boolean
    datingGender?: boolean
    sexuality?: boolean
    datingIntention?: boolean
    relationshipType?: boolean
    work?: boolean
    jobTitle?: boolean
    college?: boolean
    highestDegree?: boolean
    drink?: boolean
    tobacco?: boolean
    weed?: boolean
    drugs?: boolean
    UserDetails?: boolean | ShowOnProfile$UserDetailsArgs<ExtArgs>
  }, ExtArgs["result"]["showOnProfile"]>

  export type ShowOnProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userDetailsUserId?: boolean
    gender?: boolean
    datingGender?: boolean
    sexuality?: boolean
    datingIntention?: boolean
    relationshipType?: boolean
    work?: boolean
    jobTitle?: boolean
    college?: boolean
    highestDegree?: boolean
    drink?: boolean
    tobacco?: boolean
    weed?: boolean
    drugs?: boolean
    UserDetails?: boolean | ShowOnProfile$UserDetailsArgs<ExtArgs>
  }, ExtArgs["result"]["showOnProfile"]>

  export type ShowOnProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userDetailsUserId?: boolean
    gender?: boolean
    datingGender?: boolean
    sexuality?: boolean
    datingIntention?: boolean
    relationshipType?: boolean
    work?: boolean
    jobTitle?: boolean
    college?: boolean
    highestDegree?: boolean
    drink?: boolean
    tobacco?: boolean
    weed?: boolean
    drugs?: boolean
    UserDetails?: boolean | ShowOnProfile$UserDetailsArgs<ExtArgs>
  }, ExtArgs["result"]["showOnProfile"]>

  export type ShowOnProfileSelectScalar = {
    userDetailsUserId?: boolean
    gender?: boolean
    datingGender?: boolean
    sexuality?: boolean
    datingIntention?: boolean
    relationshipType?: boolean
    work?: boolean
    jobTitle?: boolean
    college?: boolean
    highestDegree?: boolean
    drink?: boolean
    tobacco?: boolean
    weed?: boolean
    drugs?: boolean
  }

  export type ShowOnProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userDetailsUserId" | "gender" | "datingGender" | "sexuality" | "datingIntention" | "relationshipType" | "work" | "jobTitle" | "college" | "highestDegree" | "drink" | "tobacco" | "weed" | "drugs", ExtArgs["result"]["showOnProfile"]>
  export type ShowOnProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserDetails?: boolean | ShowOnProfile$UserDetailsArgs<ExtArgs>
  }
  export type ShowOnProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserDetails?: boolean | ShowOnProfile$UserDetailsArgs<ExtArgs>
  }
  export type ShowOnProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserDetails?: boolean | ShowOnProfile$UserDetailsArgs<ExtArgs>
  }

  export type $ShowOnProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShowOnProfile"
    objects: {
      UserDetails: Prisma.$UserDetailsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      userDetailsUserId: string
      gender: boolean | null
      datingGender: boolean | null
      sexuality: boolean | null
      datingIntention: boolean | null
      relationshipType: boolean | null
      work: boolean | null
      jobTitle: boolean | null
      college: boolean | null
      highestDegree: boolean | null
      drink: boolean | null
      tobacco: boolean | null
      weed: boolean | null
      drugs: boolean | null
    }, ExtArgs["result"]["showOnProfile"]>
    composites: {}
  }

  type ShowOnProfileGetPayload<S extends boolean | null | undefined | ShowOnProfileDefaultArgs> = $Result.GetResult<Prisma.$ShowOnProfilePayload, S>

  type ShowOnProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShowOnProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShowOnProfileCountAggregateInputType | true
    }

  export interface ShowOnProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShowOnProfile'], meta: { name: 'ShowOnProfile' } }
    /**
     * Find zero or one ShowOnProfile that matches the filter.
     * @param {ShowOnProfileFindUniqueArgs} args - Arguments to find a ShowOnProfile
     * @example
     * // Get one ShowOnProfile
     * const showOnProfile = await prisma.showOnProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShowOnProfileFindUniqueArgs>(args: SelectSubset<T, ShowOnProfileFindUniqueArgs<ExtArgs>>): Prisma__ShowOnProfileClient<$Result.GetResult<Prisma.$ShowOnProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShowOnProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShowOnProfileFindUniqueOrThrowArgs} args - Arguments to find a ShowOnProfile
     * @example
     * // Get one ShowOnProfile
     * const showOnProfile = await prisma.showOnProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShowOnProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ShowOnProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShowOnProfileClient<$Result.GetResult<Prisma.$ShowOnProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowOnProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowOnProfileFindFirstArgs} args - Arguments to find a ShowOnProfile
     * @example
     * // Get one ShowOnProfile
     * const showOnProfile = await prisma.showOnProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShowOnProfileFindFirstArgs>(args?: SelectSubset<T, ShowOnProfileFindFirstArgs<ExtArgs>>): Prisma__ShowOnProfileClient<$Result.GetResult<Prisma.$ShowOnProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShowOnProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowOnProfileFindFirstOrThrowArgs} args - Arguments to find a ShowOnProfile
     * @example
     * // Get one ShowOnProfile
     * const showOnProfile = await prisma.showOnProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShowOnProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ShowOnProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShowOnProfileClient<$Result.GetResult<Prisma.$ShowOnProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShowOnProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowOnProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShowOnProfiles
     * const showOnProfiles = await prisma.showOnProfile.findMany()
     * 
     * // Get first 10 ShowOnProfiles
     * const showOnProfiles = await prisma.showOnProfile.findMany({ take: 10 })
     * 
     * // Only select the `userDetailsUserId`
     * const showOnProfileWithUserDetailsUserIdOnly = await prisma.showOnProfile.findMany({ select: { userDetailsUserId: true } })
     * 
     */
    findMany<T extends ShowOnProfileFindManyArgs>(args?: SelectSubset<T, ShowOnProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowOnProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShowOnProfile.
     * @param {ShowOnProfileCreateArgs} args - Arguments to create a ShowOnProfile.
     * @example
     * // Create one ShowOnProfile
     * const ShowOnProfile = await prisma.showOnProfile.create({
     *   data: {
     *     // ... data to create a ShowOnProfile
     *   }
     * })
     * 
     */
    create<T extends ShowOnProfileCreateArgs>(args: SelectSubset<T, ShowOnProfileCreateArgs<ExtArgs>>): Prisma__ShowOnProfileClient<$Result.GetResult<Prisma.$ShowOnProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShowOnProfiles.
     * @param {ShowOnProfileCreateManyArgs} args - Arguments to create many ShowOnProfiles.
     * @example
     * // Create many ShowOnProfiles
     * const showOnProfile = await prisma.showOnProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShowOnProfileCreateManyArgs>(args?: SelectSubset<T, ShowOnProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShowOnProfiles and returns the data saved in the database.
     * @param {ShowOnProfileCreateManyAndReturnArgs} args - Arguments to create many ShowOnProfiles.
     * @example
     * // Create many ShowOnProfiles
     * const showOnProfile = await prisma.showOnProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShowOnProfiles and only return the `userDetailsUserId`
     * const showOnProfileWithUserDetailsUserIdOnly = await prisma.showOnProfile.createManyAndReturn({
     *   select: { userDetailsUserId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShowOnProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ShowOnProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowOnProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShowOnProfile.
     * @param {ShowOnProfileDeleteArgs} args - Arguments to delete one ShowOnProfile.
     * @example
     * // Delete one ShowOnProfile
     * const ShowOnProfile = await prisma.showOnProfile.delete({
     *   where: {
     *     // ... filter to delete one ShowOnProfile
     *   }
     * })
     * 
     */
    delete<T extends ShowOnProfileDeleteArgs>(args: SelectSubset<T, ShowOnProfileDeleteArgs<ExtArgs>>): Prisma__ShowOnProfileClient<$Result.GetResult<Prisma.$ShowOnProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShowOnProfile.
     * @param {ShowOnProfileUpdateArgs} args - Arguments to update one ShowOnProfile.
     * @example
     * // Update one ShowOnProfile
     * const showOnProfile = await prisma.showOnProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShowOnProfileUpdateArgs>(args: SelectSubset<T, ShowOnProfileUpdateArgs<ExtArgs>>): Prisma__ShowOnProfileClient<$Result.GetResult<Prisma.$ShowOnProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShowOnProfiles.
     * @param {ShowOnProfileDeleteManyArgs} args - Arguments to filter ShowOnProfiles to delete.
     * @example
     * // Delete a few ShowOnProfiles
     * const { count } = await prisma.showOnProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShowOnProfileDeleteManyArgs>(args?: SelectSubset<T, ShowOnProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowOnProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShowOnProfiles
     * const showOnProfile = await prisma.showOnProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShowOnProfileUpdateManyArgs>(args: SelectSubset<T, ShowOnProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowOnProfiles and returns the data updated in the database.
     * @param {ShowOnProfileUpdateManyAndReturnArgs} args - Arguments to update many ShowOnProfiles.
     * @example
     * // Update many ShowOnProfiles
     * const showOnProfile = await prisma.showOnProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShowOnProfiles and only return the `userDetailsUserId`
     * const showOnProfileWithUserDetailsUserIdOnly = await prisma.showOnProfile.updateManyAndReturn({
     *   select: { userDetailsUserId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShowOnProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ShowOnProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShowOnProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShowOnProfile.
     * @param {ShowOnProfileUpsertArgs} args - Arguments to update or create a ShowOnProfile.
     * @example
     * // Update or create a ShowOnProfile
     * const showOnProfile = await prisma.showOnProfile.upsert({
     *   create: {
     *     // ... data to create a ShowOnProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShowOnProfile we want to update
     *   }
     * })
     */
    upsert<T extends ShowOnProfileUpsertArgs>(args: SelectSubset<T, ShowOnProfileUpsertArgs<ExtArgs>>): Prisma__ShowOnProfileClient<$Result.GetResult<Prisma.$ShowOnProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShowOnProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowOnProfileCountArgs} args - Arguments to filter ShowOnProfiles to count.
     * @example
     * // Count the number of ShowOnProfiles
     * const count = await prisma.showOnProfile.count({
     *   where: {
     *     // ... the filter for the ShowOnProfiles we want to count
     *   }
     * })
    **/
    count<T extends ShowOnProfileCountArgs>(
      args?: Subset<T, ShowOnProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowOnProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShowOnProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowOnProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowOnProfileAggregateArgs>(args: Subset<T, ShowOnProfileAggregateArgs>): Prisma.PrismaPromise<GetShowOnProfileAggregateType<T>>

    /**
     * Group by ShowOnProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowOnProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowOnProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowOnProfileGroupByArgs['orderBy'] }
        : { orderBy?: ShowOnProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowOnProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowOnProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShowOnProfile model
   */
  readonly fields: ShowOnProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShowOnProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShowOnProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserDetails<T extends ShowOnProfile$UserDetailsArgs<ExtArgs> = {}>(args?: Subset<T, ShowOnProfile$UserDetailsArgs<ExtArgs>>): Prisma__UserDetailsClient<$Result.GetResult<Prisma.$UserDetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ShowOnProfile model
   */
  interface ShowOnProfileFieldRefs {
    readonly userDetailsUserId: FieldRef<"ShowOnProfile", 'String'>
    readonly gender: FieldRef<"ShowOnProfile", 'Boolean'>
    readonly datingGender: FieldRef<"ShowOnProfile", 'Boolean'>
    readonly sexuality: FieldRef<"ShowOnProfile", 'Boolean'>
    readonly datingIntention: FieldRef<"ShowOnProfile", 'Boolean'>
    readonly relationshipType: FieldRef<"ShowOnProfile", 'Boolean'>
    readonly work: FieldRef<"ShowOnProfile", 'Boolean'>
    readonly jobTitle: FieldRef<"ShowOnProfile", 'Boolean'>
    readonly college: FieldRef<"ShowOnProfile", 'Boolean'>
    readonly highestDegree: FieldRef<"ShowOnProfile", 'Boolean'>
    readonly drink: FieldRef<"ShowOnProfile", 'Boolean'>
    readonly tobacco: FieldRef<"ShowOnProfile", 'Boolean'>
    readonly weed: FieldRef<"ShowOnProfile", 'Boolean'>
    readonly drugs: FieldRef<"ShowOnProfile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ShowOnProfile findUnique
   */
  export type ShowOnProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowOnProfile
     */
    select?: ShowOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowOnProfile
     */
    omit?: ShowOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which ShowOnProfile to fetch.
     */
    where: ShowOnProfileWhereUniqueInput
  }

  /**
   * ShowOnProfile findUniqueOrThrow
   */
  export type ShowOnProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowOnProfile
     */
    select?: ShowOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowOnProfile
     */
    omit?: ShowOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which ShowOnProfile to fetch.
     */
    where: ShowOnProfileWhereUniqueInput
  }

  /**
   * ShowOnProfile findFirst
   */
  export type ShowOnProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowOnProfile
     */
    select?: ShowOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowOnProfile
     */
    omit?: ShowOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which ShowOnProfile to fetch.
     */
    where?: ShowOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowOnProfiles to fetch.
     */
    orderBy?: ShowOnProfileOrderByWithRelationInput | ShowOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowOnProfiles.
     */
    cursor?: ShowOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowOnProfiles.
     */
    distinct?: ShowOnProfileScalarFieldEnum | ShowOnProfileScalarFieldEnum[]
  }

  /**
   * ShowOnProfile findFirstOrThrow
   */
  export type ShowOnProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowOnProfile
     */
    select?: ShowOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowOnProfile
     */
    omit?: ShowOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which ShowOnProfile to fetch.
     */
    where?: ShowOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowOnProfiles to fetch.
     */
    orderBy?: ShowOnProfileOrderByWithRelationInput | ShowOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowOnProfiles.
     */
    cursor?: ShowOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowOnProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowOnProfiles.
     */
    distinct?: ShowOnProfileScalarFieldEnum | ShowOnProfileScalarFieldEnum[]
  }

  /**
   * ShowOnProfile findMany
   */
  export type ShowOnProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowOnProfile
     */
    select?: ShowOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowOnProfile
     */
    omit?: ShowOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowOnProfileInclude<ExtArgs> | null
    /**
     * Filter, which ShowOnProfiles to fetch.
     */
    where?: ShowOnProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowOnProfiles to fetch.
     */
    orderBy?: ShowOnProfileOrderByWithRelationInput | ShowOnProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShowOnProfiles.
     */
    cursor?: ShowOnProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowOnProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowOnProfiles.
     */
    skip?: number
    distinct?: ShowOnProfileScalarFieldEnum | ShowOnProfileScalarFieldEnum[]
  }

  /**
   * ShowOnProfile create
   */
  export type ShowOnProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowOnProfile
     */
    select?: ShowOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowOnProfile
     */
    omit?: ShowOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowOnProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a ShowOnProfile.
     */
    data: XOR<ShowOnProfileCreateInput, ShowOnProfileUncheckedCreateInput>
  }

  /**
   * ShowOnProfile createMany
   */
  export type ShowOnProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShowOnProfiles.
     */
    data: ShowOnProfileCreateManyInput | ShowOnProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShowOnProfile createManyAndReturn
   */
  export type ShowOnProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowOnProfile
     */
    select?: ShowOnProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShowOnProfile
     */
    omit?: ShowOnProfileOmit<ExtArgs> | null
    /**
     * The data used to create many ShowOnProfiles.
     */
    data: ShowOnProfileCreateManyInput | ShowOnProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowOnProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShowOnProfile update
   */
  export type ShowOnProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowOnProfile
     */
    select?: ShowOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowOnProfile
     */
    omit?: ShowOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowOnProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a ShowOnProfile.
     */
    data: XOR<ShowOnProfileUpdateInput, ShowOnProfileUncheckedUpdateInput>
    /**
     * Choose, which ShowOnProfile to update.
     */
    where: ShowOnProfileWhereUniqueInput
  }

  /**
   * ShowOnProfile updateMany
   */
  export type ShowOnProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShowOnProfiles.
     */
    data: XOR<ShowOnProfileUpdateManyMutationInput, ShowOnProfileUncheckedUpdateManyInput>
    /**
     * Filter which ShowOnProfiles to update
     */
    where?: ShowOnProfileWhereInput
    /**
     * Limit how many ShowOnProfiles to update.
     */
    limit?: number
  }

  /**
   * ShowOnProfile updateManyAndReturn
   */
  export type ShowOnProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowOnProfile
     */
    select?: ShowOnProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShowOnProfile
     */
    omit?: ShowOnProfileOmit<ExtArgs> | null
    /**
     * The data used to update ShowOnProfiles.
     */
    data: XOR<ShowOnProfileUpdateManyMutationInput, ShowOnProfileUncheckedUpdateManyInput>
    /**
     * Filter which ShowOnProfiles to update
     */
    where?: ShowOnProfileWhereInput
    /**
     * Limit how many ShowOnProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowOnProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShowOnProfile upsert
   */
  export type ShowOnProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowOnProfile
     */
    select?: ShowOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowOnProfile
     */
    omit?: ShowOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowOnProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the ShowOnProfile to update in case it exists.
     */
    where: ShowOnProfileWhereUniqueInput
    /**
     * In case the ShowOnProfile found by the `where` argument doesn't exist, create a new ShowOnProfile with this data.
     */
    create: XOR<ShowOnProfileCreateInput, ShowOnProfileUncheckedCreateInput>
    /**
     * In case the ShowOnProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShowOnProfileUpdateInput, ShowOnProfileUncheckedUpdateInput>
  }

  /**
   * ShowOnProfile delete
   */
  export type ShowOnProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowOnProfile
     */
    select?: ShowOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowOnProfile
     */
    omit?: ShowOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowOnProfileInclude<ExtArgs> | null
    /**
     * Filter which ShowOnProfile to delete.
     */
    where: ShowOnProfileWhereUniqueInput
  }

  /**
   * ShowOnProfile deleteMany
   */
  export type ShowOnProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShowOnProfiles to delete
     */
    where?: ShowOnProfileWhereInput
    /**
     * Limit how many ShowOnProfiles to delete.
     */
    limit?: number
  }

  /**
   * ShowOnProfile.UserDetails
   */
  export type ShowOnProfile$UserDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserDetails
     */
    select?: UserDetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserDetails
     */
    omit?: UserDetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserDetailsInclude<ExtArgs> | null
    where?: UserDetailsWhereInput
  }

  /**
   * ShowOnProfile without action
   */
  export type ShowOnProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShowOnProfile
     */
    select?: ShowOnProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShowOnProfile
     */
    omit?: ShowOnProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShowOnProfileInclude<ExtArgs> | null
  }


  /**
   * Model Prompts
   */

  export type AggregatePrompts = {
    _count: PromptsCountAggregateOutputType | null
    _min: PromptsMinAggregateOutputType | null
    _max: PromptsMaxAggregateOutputType | null
  }

  export type PromptsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    desc: string | null
    createdAt: Date | null
    upadatedAt: Date | null
  }

  export type PromptsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    desc: string | null
    createdAt: Date | null
    upadatedAt: Date | null
  }

  export type PromptsCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    desc: number
    createdAt: number
    upadatedAt: number
    _all: number
  }


  export type PromptsMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    desc?: true
    createdAt?: true
    upadatedAt?: true
  }

  export type PromptsMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    desc?: true
    createdAt?: true
    upadatedAt?: true
  }

  export type PromptsCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    desc?: true
    createdAt?: true
    upadatedAt?: true
    _all?: true
  }

  export type PromptsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to aggregate.
     */
    where?: PromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptsOrderByWithRelationInput | PromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prompts
    **/
    _count?: true | PromptsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptsMaxAggregateInputType
  }

  export type GetPromptsAggregateType<T extends PromptsAggregateArgs> = {
        [P in keyof T & keyof AggregatePrompts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrompts[P]>
      : GetScalarType<T[P], AggregatePrompts[P]>
  }




  export type PromptsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptsWhereInput
    orderBy?: PromptsOrderByWithAggregationInput | PromptsOrderByWithAggregationInput[]
    by: PromptsScalarFieldEnum[] | PromptsScalarFieldEnum
    having?: PromptsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptsCountAggregateInputType | true
    _min?: PromptsMinAggregateInputType
    _max?: PromptsMaxAggregateInputType
  }

  export type PromptsGroupByOutputType = {
    id: string
    userId: string
    title: string
    desc: string
    createdAt: Date
    upadatedAt: Date
    _count: PromptsCountAggregateOutputType | null
    _min: PromptsMinAggregateOutputType | null
    _max: PromptsMaxAggregateOutputType | null
  }

  type GetPromptsGroupByPayload<T extends PromptsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptsGroupByOutputType[P]>
            : GetScalarType<T[P], PromptsGroupByOutputType[P]>
        }
      >
    >


  export type PromptsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    desc?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompts"]>

  export type PromptsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    desc?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompts"]>

  export type PromptsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    desc?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompts"]>

  export type PromptsSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    desc?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
  }

  export type PromptsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "desc" | "createdAt" | "upadatedAt", ExtArgs["result"]["prompts"]>
  export type PromptsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PromptsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PromptsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PromptsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prompts"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      desc: string
      createdAt: Date
      upadatedAt: Date
    }, ExtArgs["result"]["prompts"]>
    composites: {}
  }

  type PromptsGetPayload<S extends boolean | null | undefined | PromptsDefaultArgs> = $Result.GetResult<Prisma.$PromptsPayload, S>

  type PromptsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptsCountAggregateInputType | true
    }

  export interface PromptsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prompts'], meta: { name: 'Prompts' } }
    /**
     * Find zero or one Prompts that matches the filter.
     * @param {PromptsFindUniqueArgs} args - Arguments to find a Prompts
     * @example
     * // Get one Prompts
     * const prompts = await prisma.prompts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptsFindUniqueArgs>(args: SelectSubset<T, PromptsFindUniqueArgs<ExtArgs>>): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prompts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptsFindUniqueOrThrowArgs} args - Arguments to find a Prompts
     * @example
     * // Get one Prompts
     * const prompts = await prisma.prompts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptsFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsFindFirstArgs} args - Arguments to find a Prompts
     * @example
     * // Get one Prompts
     * const prompts = await prisma.prompts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptsFindFirstArgs>(args?: SelectSubset<T, PromptsFindFirstArgs<ExtArgs>>): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsFindFirstOrThrowArgs} args - Arguments to find a Prompts
     * @example
     * // Get one Prompts
     * const prompts = await prisma.prompts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptsFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prompts
     * const prompts = await prisma.prompts.findMany()
     * 
     * // Get first 10 Prompts
     * const prompts = await prisma.prompts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptsWithIdOnly = await prisma.prompts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptsFindManyArgs>(args?: SelectSubset<T, PromptsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prompts.
     * @param {PromptsCreateArgs} args - Arguments to create a Prompts.
     * @example
     * // Create one Prompts
     * const Prompts = await prisma.prompts.create({
     *   data: {
     *     // ... data to create a Prompts
     *   }
     * })
     * 
     */
    create<T extends PromptsCreateArgs>(args: SelectSubset<T, PromptsCreateArgs<ExtArgs>>): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prompts.
     * @param {PromptsCreateManyArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompts = await prisma.prompts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptsCreateManyArgs>(args?: SelectSubset<T, PromptsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prompts and returns the data saved in the database.
     * @param {PromptsCreateManyAndReturnArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompts = await prisma.prompts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prompts and only return the `id`
     * const promptsWithIdOnly = await prisma.prompts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptsCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prompts.
     * @param {PromptsDeleteArgs} args - Arguments to delete one Prompts.
     * @example
     * // Delete one Prompts
     * const Prompts = await prisma.prompts.delete({
     *   where: {
     *     // ... filter to delete one Prompts
     *   }
     * })
     * 
     */
    delete<T extends PromptsDeleteArgs>(args: SelectSubset<T, PromptsDeleteArgs<ExtArgs>>): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prompts.
     * @param {PromptsUpdateArgs} args - Arguments to update one Prompts.
     * @example
     * // Update one Prompts
     * const prompts = await prisma.prompts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptsUpdateArgs>(args: SelectSubset<T, PromptsUpdateArgs<ExtArgs>>): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prompts.
     * @param {PromptsDeleteManyArgs} args - Arguments to filter Prompts to delete.
     * @example
     * // Delete a few Prompts
     * const { count } = await prisma.prompts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptsDeleteManyArgs>(args?: SelectSubset<T, PromptsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prompts
     * const prompts = await prisma.prompts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptsUpdateManyArgs>(args: SelectSubset<T, PromptsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts and returns the data updated in the database.
     * @param {PromptsUpdateManyAndReturnArgs} args - Arguments to update many Prompts.
     * @example
     * // Update many Prompts
     * const prompts = await prisma.prompts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prompts and only return the `id`
     * const promptsWithIdOnly = await prisma.prompts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PromptsUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prompts.
     * @param {PromptsUpsertArgs} args - Arguments to update or create a Prompts.
     * @example
     * // Update or create a Prompts
     * const prompts = await prisma.prompts.upsert({
     *   create: {
     *     // ... data to create a Prompts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prompts we want to update
     *   }
     * })
     */
    upsert<T extends PromptsUpsertArgs>(args: SelectSubset<T, PromptsUpsertArgs<ExtArgs>>): Prisma__PromptsClient<$Result.GetResult<Prisma.$PromptsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsCountArgs} args - Arguments to filter Prompts to count.
     * @example
     * // Count the number of Prompts
     * const count = await prisma.prompts.count({
     *   where: {
     *     // ... the filter for the Prompts we want to count
     *   }
     * })
    **/
    count<T extends PromptsCountArgs>(
      args?: Subset<T, PromptsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PromptsAggregateArgs>(args: Subset<T, PromptsAggregateArgs>): Prisma.PrismaPromise<GetPromptsAggregateType<T>>

    /**
     * Group by Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PromptsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptsGroupByArgs['orderBy'] }
        : { orderBy?: PromptsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PromptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prompts model
   */
  readonly fields: PromptsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prompts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prompts model
   */
  interface PromptsFieldRefs {
    readonly id: FieldRef<"Prompts", 'String'>
    readonly userId: FieldRef<"Prompts", 'String'>
    readonly title: FieldRef<"Prompts", 'String'>
    readonly desc: FieldRef<"Prompts", 'String'>
    readonly createdAt: FieldRef<"Prompts", 'DateTime'>
    readonly upadatedAt: FieldRef<"Prompts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prompts findUnique
   */
  export type PromptsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompts
     */
    omit?: PromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where: PromptsWhereUniqueInput
  }

  /**
   * Prompts findUniqueOrThrow
   */
  export type PromptsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompts
     */
    omit?: PromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where: PromptsWhereUniqueInput
  }

  /**
   * Prompts findFirst
   */
  export type PromptsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompts
     */
    omit?: PromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptsOrderByWithRelationInput | PromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptsScalarFieldEnum | PromptsScalarFieldEnum[]
  }

  /**
   * Prompts findFirstOrThrow
   */
  export type PromptsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompts
     */
    omit?: PromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptsOrderByWithRelationInput | PromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptsScalarFieldEnum | PromptsScalarFieldEnum[]
  }

  /**
   * Prompts findMany
   */
  export type PromptsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompts
     */
    omit?: PromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptsOrderByWithRelationInput | PromptsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prompts.
     */
    cursor?: PromptsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    distinct?: PromptsScalarFieldEnum | PromptsScalarFieldEnum[]
  }

  /**
   * Prompts create
   */
  export type PromptsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompts
     */
    omit?: PromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * The data needed to create a Prompts.
     */
    data: XOR<PromptsCreateInput, PromptsUncheckedCreateInput>
  }

  /**
   * Prompts createMany
   */
  export type PromptsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prompts.
     */
    data: PromptsCreateManyInput | PromptsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prompts createManyAndReturn
   */
  export type PromptsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompts
     */
    omit?: PromptsOmit<ExtArgs> | null
    /**
     * The data used to create many Prompts.
     */
    data: PromptsCreateManyInput | PromptsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prompts update
   */
  export type PromptsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompts
     */
    omit?: PromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * The data needed to update a Prompts.
     */
    data: XOR<PromptsUpdateInput, PromptsUncheckedUpdateInput>
    /**
     * Choose, which Prompts to update.
     */
    where: PromptsWhereUniqueInput
  }

  /**
   * Prompts updateMany
   */
  export type PromptsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptsUpdateManyMutationInput, PromptsUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptsWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
  }

  /**
   * Prompts updateManyAndReturn
   */
  export type PromptsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompts
     */
    omit?: PromptsOmit<ExtArgs> | null
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptsUpdateManyMutationInput, PromptsUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptsWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prompts upsert
   */
  export type PromptsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompts
     */
    omit?: PromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * The filter to search for the Prompts to update in case it exists.
     */
    where: PromptsWhereUniqueInput
    /**
     * In case the Prompts found by the `where` argument doesn't exist, create a new Prompts with this data.
     */
    create: XOR<PromptsCreateInput, PromptsUncheckedCreateInput>
    /**
     * In case the Prompts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptsUpdateInput, PromptsUncheckedUpdateInput>
  }

  /**
   * Prompts delete
   */
  export type PromptsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompts
     */
    omit?: PromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptsInclude<ExtArgs> | null
    /**
     * Filter which Prompts to delete.
     */
    where: PromptsWhereUniqueInput
  }

  /**
   * Prompts deleteMany
   */
  export type PromptsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to delete
     */
    where?: PromptsWhereInput
    /**
     * Limit how many Prompts to delete.
     */
    limit?: number
  }

  /**
   * Prompts without action
   */
  export type PromptsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompts
     */
    select?: PromptsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompts
     */
    omit?: PromptsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptsInclude<ExtArgs> | null
  }


  /**
   * Model Images
   */

  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    imageUrl: string | null
    createdAt: Date | null
    upadatedAt: Date | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    imageUrl: string | null
    createdAt: Date | null
    upadatedAt: Date | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    userId: number
    imageUrl: number
    createdAt: number
    upadatedAt: number
    _all: number
  }


  export type ImagesMinAggregateInputType = {
    id?: true
    userId?: true
    imageUrl?: true
    createdAt?: true
    upadatedAt?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    userId?: true
    imageUrl?: true
    createdAt?: true
    upadatedAt?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    userId?: true
    imageUrl?: true
    createdAt?: true
    upadatedAt?: true
    _all?: true
  }

  export type ImagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to aggregate.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type ImagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImagesWhereInput
    orderBy?: ImagesOrderByWithAggregationInput | ImagesOrderByWithAggregationInput[]
    by: ImagesScalarFieldEnum[] | ImagesScalarFieldEnum
    having?: ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }

  export type ImagesGroupByOutputType = {
    id: string
    userId: string
    imageUrl: string
    createdAt: Date
    upadatedAt: Date
    _count: ImagesCountAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends ImagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type ImagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["images"]>

  export type ImagesSelectScalar = {
    id?: boolean
    userId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    upadatedAt?: boolean
  }

  export type ImagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "imageUrl" | "createdAt" | "upadatedAt", ExtArgs["result"]["images"]>
  export type ImagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ImagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ImagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ImagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Images"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      imageUrl: string
      createdAt: Date
      upadatedAt: Date
    }, ExtArgs["result"]["images"]>
    composites: {}
  }

  type ImagesGetPayload<S extends boolean | null | undefined | ImagesDefaultArgs> = $Result.GetResult<Prisma.$ImagesPayload, S>

  type ImagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImagesCountAggregateInputType | true
    }

  export interface ImagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Images'], meta: { name: 'Images' } }
    /**
     * Find zero or one Images that matches the filter.
     * @param {ImagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImagesFindUniqueArgs>(args: SelectSubset<T, ImagesFindUniqueArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImagesFindUniqueOrThrowArgs>(args: SelectSubset<T, ImagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImagesFindFirstArgs>(args?: SelectSubset<T, ImagesFindFirstArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImagesFindFirstOrThrowArgs>(args?: SelectSubset<T, ImagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImagesFindManyArgs>(args?: SelectSubset<T, ImagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Images.
     * @param {ImagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
     */
    create<T extends ImagesCreateArgs>(args: SelectSubset<T, ImagesCreateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImagesCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImagesCreateManyArgs>(args?: SelectSubset<T, ImagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImagesCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const images = await prisma.images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imagesWithIdOnly = await prisma.images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImagesCreateManyAndReturnArgs>(args?: SelectSubset<T, ImagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Images.
     * @param {ImagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
     */
    delete<T extends ImagesDeleteArgs>(args: SelectSubset<T, ImagesDeleteArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Images.
     * @param {ImagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImagesUpdateArgs>(args: SelectSubset<T, ImagesUpdateArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImagesDeleteManyArgs>(args?: SelectSubset<T, ImagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImagesUpdateManyArgs>(args: SelectSubset<T, ImagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImagesUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imagesWithIdOnly = await prisma.images.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImagesUpdateManyAndReturnArgs>(args: SelectSubset<T, ImagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Images.
     * @param {ImagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
     */
    upsert<T extends ImagesUpsertArgs>(args: SelectSubset<T, ImagesUpsertArgs<ExtArgs>>): Prisma__ImagesClient<$Result.GetResult<Prisma.$ImagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImagesCountArgs>(
      args?: Subset<T, ImagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): Prisma.PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Images model
   */
  readonly fields: ImagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Images model
   */
  interface ImagesFieldRefs {
    readonly id: FieldRef<"Images", 'String'>
    readonly userId: FieldRef<"Images", 'String'>
    readonly imageUrl: FieldRef<"Images", 'String'>
    readonly createdAt: FieldRef<"Images", 'DateTime'>
    readonly upadatedAt: FieldRef<"Images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Images findUnique
   */
  export type ImagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findUniqueOrThrow
   */
  export type ImagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findFirst
   */
  export type ImagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findFirstOrThrow
   */
  export type ImagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images findMany
   */
  export type ImagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImagesOrderByWithRelationInput | ImagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImagesScalarFieldEnum | ImagesScalarFieldEnum[]
  }

  /**
   * Images create
   */
  export type ImagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Images.
     */
    data: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
  }

  /**
   * Images createMany
   */
  export type ImagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Images createManyAndReturn
   */
  export type ImagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImagesCreateManyInput | ImagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Images update
   */
  export type ImagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Images.
     */
    data: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
    /**
     * Choose, which Images to update.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images updateMany
   */
  export type ImagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Images updateManyAndReturn
   */
  export type ImagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Images upsert
   */
  export type ImagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Images to update in case it exists.
     */
    where: ImagesWhereUniqueInput
    /**
     * In case the Images found by the `where` argument doesn't exist, create a new Images with this data.
     */
    create: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
    /**
     * In case the Images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
  }

  /**
   * Images delete
   */
  export type ImagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
    /**
     * Filter which Images to delete.
     */
    where: ImagesWhereUniqueInput
  }

  /**
   * Images deleteMany
   */
  export type ImagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImagesWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Images without action
   */
  export type ImagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Images
     */
    select?: ImagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Images
     */
    omit?: ImagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImagesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    password: 'password',
    dob: 'dob',
    createdAt: 'createdAt',
    upadatedAt: 'upadatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    userAId: 'userAId',
    userBId: 'userBId',
    active: 'active',
    chat: 'chat',
    unMatchedBy: 'unMatchedBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const UserDetailsScalarFieldEnum: {
    userId: 'userId',
    gender: 'gender',
    datingGender: 'datingGender',
    sexuality: 'sexuality',
    datingIntention: 'datingIntention',
    relationshipType: 'relationshipType',
    work: 'work',
    jobTitle: 'jobTitle',
    college: 'college',
    highestDegree: 'highestDegree',
    drink: 'drink',
    tobacco: 'tobacco',
    weed: 'weed',
    drugs: 'drugs',
    createdAt: 'createdAt',
    upadatedAt: 'upadatedAt'
  };

  export type UserDetailsScalarFieldEnum = (typeof UserDetailsScalarFieldEnum)[keyof typeof UserDetailsScalarFieldEnum]


  export const ShowOnProfileScalarFieldEnum: {
    userDetailsUserId: 'userDetailsUserId',
    gender: 'gender',
    datingGender: 'datingGender',
    sexuality: 'sexuality',
    datingIntention: 'datingIntention',
    relationshipType: 'relationshipType',
    work: 'work',
    jobTitle: 'jobTitle',
    college: 'college',
    highestDegree: 'highestDegree',
    drink: 'drink',
    tobacco: 'tobacco',
    weed: 'weed',
    drugs: 'drugs'
  };

  export type ShowOnProfileScalarFieldEnum = (typeof ShowOnProfileScalarFieldEnum)[keyof typeof ShowOnProfileScalarFieldEnum]


  export const PromptsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    desc: 'desc',
    createdAt: 'createdAt',
    upadatedAt: 'upadatedAt'
  };

  export type PromptsScalarFieldEnum = (typeof PromptsScalarFieldEnum)[keyof typeof PromptsScalarFieldEnum]


  export const ImagesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    upadatedAt: 'upadatedAt'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    dob?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    upadatedAt?: DateTimeFilter<"User"> | Date | string
    userDetails?: UserDetailsListRelationFilter
    Prompts?: PromptsListRelationFilter
    Images?: ImagesListRelationFilter
    matchesInitiated?: MatchListRelationFilter
    matchesReceived?: MatchListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
    userDetails?: UserDetailsOrderByRelationAggregateInput
    Prompts?: PromptsOrderByRelationAggregateInput
    Images?: ImagesOrderByRelationAggregateInput
    matchesInitiated?: MatchOrderByRelationAggregateInput
    matchesReceived?: MatchOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    dob?: DateTimeFilter<"User"> | Date | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    upadatedAt?: DateTimeFilter<"User"> | Date | string
    userDetails?: UserDetailsListRelationFilter
    Prompts?: PromptsListRelationFilter
    Images?: ImagesListRelationFilter
    matchesInitiated?: MatchListRelationFilter
    matchesReceived?: MatchListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    dob?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    upadatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    userAId?: StringFilter<"Match"> | string
    userBId?: StringFilter<"Match"> | string
    active?: BoolFilter<"Match"> | boolean
    chat?: BoolFilter<"Match"> | boolean
    unMatchedBy?: StringNullableFilter<"Match"> | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    userA?: XOR<UserScalarRelationFilter, UserWhereInput>
    userB?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    active?: SortOrder
    chat?: SortOrder
    unMatchedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userA?: UserOrderByWithRelationInput
    userB?: UserOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userAId_userBId?: MatchUserAIdUserBIdCompoundUniqueInput
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    userAId?: StringFilter<"Match"> | string
    userBId?: StringFilter<"Match"> | string
    active?: BoolFilter<"Match"> | boolean
    chat?: BoolFilter<"Match"> | boolean
    unMatchedBy?: StringNullableFilter<"Match"> | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
    userA?: XOR<UserScalarRelationFilter, UserWhereInput>
    userB?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userAId_userBId">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    active?: SortOrder
    chat?: SortOrder
    unMatchedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    userAId?: StringWithAggregatesFilter<"Match"> | string
    userBId?: StringWithAggregatesFilter<"Match"> | string
    active?: BoolWithAggregatesFilter<"Match"> | boolean
    chat?: BoolWithAggregatesFilter<"Match"> | boolean
    unMatchedBy?: StringNullableWithAggregatesFilter<"Match"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type UserDetailsWhereInput = {
    AND?: UserDetailsWhereInput | UserDetailsWhereInput[]
    OR?: UserDetailsWhereInput[]
    NOT?: UserDetailsWhereInput | UserDetailsWhereInput[]
    userId?: StringFilter<"UserDetails"> | string
    gender?: EnumGenderFilter<"UserDetails"> | $Enums.Gender
    datingGender?: EnumGenderFilter<"UserDetails"> | $Enums.Gender
    sexuality?: StringNullableFilter<"UserDetails"> | string | null
    datingIntention?: StringNullableFilter<"UserDetails"> | string | null
    relationshipType?: StringNullableFilter<"UserDetails"> | string | null
    work?: StringNullableFilter<"UserDetails"> | string | null
    jobTitle?: StringNullableFilter<"UserDetails"> | string | null
    college?: StringNullableFilter<"UserDetails"> | string | null
    highestDegree?: StringNullableFilter<"UserDetails"> | string | null
    drink?: BoolNullableFilter<"UserDetails"> | boolean | null
    tobacco?: BoolNullableFilter<"UserDetails"> | boolean | null
    weed?: BoolNullableFilter<"UserDetails"> | boolean | null
    drugs?: BoolNullableFilter<"UserDetails"> | boolean | null
    createdAt?: DateTimeFilter<"UserDetails"> | Date | string
    upadatedAt?: DateTimeFilter<"UserDetails"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    showOnProfile?: ShowOnProfileListRelationFilter
  }

  export type UserDetailsOrderByWithRelationInput = {
    userId?: SortOrder
    gender?: SortOrder
    datingGender?: SortOrder
    sexuality?: SortOrderInput | SortOrder
    datingIntention?: SortOrderInput | SortOrder
    relationshipType?: SortOrderInput | SortOrder
    work?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    college?: SortOrderInput | SortOrder
    highestDegree?: SortOrderInput | SortOrder
    drink?: SortOrderInput | SortOrder
    tobacco?: SortOrderInput | SortOrder
    weed?: SortOrderInput | SortOrder
    drugs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    showOnProfile?: ShowOnProfileOrderByRelationAggregateInput
  }

  export type UserDetailsWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserDetailsWhereInput | UserDetailsWhereInput[]
    OR?: UserDetailsWhereInput[]
    NOT?: UserDetailsWhereInput | UserDetailsWhereInput[]
    gender?: EnumGenderFilter<"UserDetails"> | $Enums.Gender
    datingGender?: EnumGenderFilter<"UserDetails"> | $Enums.Gender
    sexuality?: StringNullableFilter<"UserDetails"> | string | null
    datingIntention?: StringNullableFilter<"UserDetails"> | string | null
    relationshipType?: StringNullableFilter<"UserDetails"> | string | null
    work?: StringNullableFilter<"UserDetails"> | string | null
    jobTitle?: StringNullableFilter<"UserDetails"> | string | null
    college?: StringNullableFilter<"UserDetails"> | string | null
    highestDegree?: StringNullableFilter<"UserDetails"> | string | null
    drink?: BoolNullableFilter<"UserDetails"> | boolean | null
    tobacco?: BoolNullableFilter<"UserDetails"> | boolean | null
    weed?: BoolNullableFilter<"UserDetails"> | boolean | null
    drugs?: BoolNullableFilter<"UserDetails"> | boolean | null
    createdAt?: DateTimeFilter<"UserDetails"> | Date | string
    upadatedAt?: DateTimeFilter<"UserDetails"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    showOnProfile?: ShowOnProfileListRelationFilter
  }, "userId">

  export type UserDetailsOrderByWithAggregationInput = {
    userId?: SortOrder
    gender?: SortOrder
    datingGender?: SortOrder
    sexuality?: SortOrderInput | SortOrder
    datingIntention?: SortOrderInput | SortOrder
    relationshipType?: SortOrderInput | SortOrder
    work?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    college?: SortOrderInput | SortOrder
    highestDegree?: SortOrderInput | SortOrder
    drink?: SortOrderInput | SortOrder
    tobacco?: SortOrderInput | SortOrder
    weed?: SortOrderInput | SortOrder
    drugs?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
    _count?: UserDetailsCountOrderByAggregateInput
    _max?: UserDetailsMaxOrderByAggregateInput
    _min?: UserDetailsMinOrderByAggregateInput
  }

  export type UserDetailsScalarWhereWithAggregatesInput = {
    AND?: UserDetailsScalarWhereWithAggregatesInput | UserDetailsScalarWhereWithAggregatesInput[]
    OR?: UserDetailsScalarWhereWithAggregatesInput[]
    NOT?: UserDetailsScalarWhereWithAggregatesInput | UserDetailsScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserDetails"> | string
    gender?: EnumGenderWithAggregatesFilter<"UserDetails"> | $Enums.Gender
    datingGender?: EnumGenderWithAggregatesFilter<"UserDetails"> | $Enums.Gender
    sexuality?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    datingIntention?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    relationshipType?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    work?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    jobTitle?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    college?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    highestDegree?: StringNullableWithAggregatesFilter<"UserDetails"> | string | null
    drink?: BoolNullableWithAggregatesFilter<"UserDetails"> | boolean | null
    tobacco?: BoolNullableWithAggregatesFilter<"UserDetails"> | boolean | null
    weed?: BoolNullableWithAggregatesFilter<"UserDetails"> | boolean | null
    drugs?: BoolNullableWithAggregatesFilter<"UserDetails"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"UserDetails"> | Date | string
    upadatedAt?: DateTimeWithAggregatesFilter<"UserDetails"> | Date | string
  }

  export type ShowOnProfileWhereInput = {
    AND?: ShowOnProfileWhereInput | ShowOnProfileWhereInput[]
    OR?: ShowOnProfileWhereInput[]
    NOT?: ShowOnProfileWhereInput | ShowOnProfileWhereInput[]
    userDetailsUserId?: StringFilter<"ShowOnProfile"> | string
    gender?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    datingGender?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    sexuality?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    datingIntention?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    relationshipType?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    work?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    jobTitle?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    college?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    highestDegree?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    drink?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    tobacco?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    weed?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    drugs?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    UserDetails?: XOR<UserDetailsNullableScalarRelationFilter, UserDetailsWhereInput> | null
  }

  export type ShowOnProfileOrderByWithRelationInput = {
    userDetailsUserId?: SortOrder
    gender?: SortOrderInput | SortOrder
    datingGender?: SortOrderInput | SortOrder
    sexuality?: SortOrderInput | SortOrder
    datingIntention?: SortOrderInput | SortOrder
    relationshipType?: SortOrderInput | SortOrder
    work?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    college?: SortOrderInput | SortOrder
    highestDegree?: SortOrderInput | SortOrder
    drink?: SortOrderInput | SortOrder
    tobacco?: SortOrderInput | SortOrder
    weed?: SortOrderInput | SortOrder
    drugs?: SortOrderInput | SortOrder
    UserDetails?: UserDetailsOrderByWithRelationInput
  }

  export type ShowOnProfileWhereUniqueInput = Prisma.AtLeast<{
    userDetailsUserId?: string
    AND?: ShowOnProfileWhereInput | ShowOnProfileWhereInput[]
    OR?: ShowOnProfileWhereInput[]
    NOT?: ShowOnProfileWhereInput | ShowOnProfileWhereInput[]
    gender?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    datingGender?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    sexuality?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    datingIntention?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    relationshipType?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    work?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    jobTitle?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    college?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    highestDegree?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    drink?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    tobacco?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    weed?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    drugs?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    UserDetails?: XOR<UserDetailsNullableScalarRelationFilter, UserDetailsWhereInput> | null
  }, "userDetailsUserId">

  export type ShowOnProfileOrderByWithAggregationInput = {
    userDetailsUserId?: SortOrder
    gender?: SortOrderInput | SortOrder
    datingGender?: SortOrderInput | SortOrder
    sexuality?: SortOrderInput | SortOrder
    datingIntention?: SortOrderInput | SortOrder
    relationshipType?: SortOrderInput | SortOrder
    work?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    college?: SortOrderInput | SortOrder
    highestDegree?: SortOrderInput | SortOrder
    drink?: SortOrderInput | SortOrder
    tobacco?: SortOrderInput | SortOrder
    weed?: SortOrderInput | SortOrder
    drugs?: SortOrderInput | SortOrder
    _count?: ShowOnProfileCountOrderByAggregateInput
    _max?: ShowOnProfileMaxOrderByAggregateInput
    _min?: ShowOnProfileMinOrderByAggregateInput
  }

  export type ShowOnProfileScalarWhereWithAggregatesInput = {
    AND?: ShowOnProfileScalarWhereWithAggregatesInput | ShowOnProfileScalarWhereWithAggregatesInput[]
    OR?: ShowOnProfileScalarWhereWithAggregatesInput[]
    NOT?: ShowOnProfileScalarWhereWithAggregatesInput | ShowOnProfileScalarWhereWithAggregatesInput[]
    userDetailsUserId?: StringWithAggregatesFilter<"ShowOnProfile"> | string
    gender?: BoolNullableWithAggregatesFilter<"ShowOnProfile"> | boolean | null
    datingGender?: BoolNullableWithAggregatesFilter<"ShowOnProfile"> | boolean | null
    sexuality?: BoolNullableWithAggregatesFilter<"ShowOnProfile"> | boolean | null
    datingIntention?: BoolNullableWithAggregatesFilter<"ShowOnProfile"> | boolean | null
    relationshipType?: BoolNullableWithAggregatesFilter<"ShowOnProfile"> | boolean | null
    work?: BoolNullableWithAggregatesFilter<"ShowOnProfile"> | boolean | null
    jobTitle?: BoolNullableWithAggregatesFilter<"ShowOnProfile"> | boolean | null
    college?: BoolNullableWithAggregatesFilter<"ShowOnProfile"> | boolean | null
    highestDegree?: BoolNullableWithAggregatesFilter<"ShowOnProfile"> | boolean | null
    drink?: BoolNullableWithAggregatesFilter<"ShowOnProfile"> | boolean | null
    tobacco?: BoolNullableWithAggregatesFilter<"ShowOnProfile"> | boolean | null
    weed?: BoolNullableWithAggregatesFilter<"ShowOnProfile"> | boolean | null
    drugs?: BoolNullableWithAggregatesFilter<"ShowOnProfile"> | boolean | null
  }

  export type PromptsWhereInput = {
    AND?: PromptsWhereInput | PromptsWhereInput[]
    OR?: PromptsWhereInput[]
    NOT?: PromptsWhereInput | PromptsWhereInput[]
    id?: StringFilter<"Prompts"> | string
    userId?: StringFilter<"Prompts"> | string
    title?: StringFilter<"Prompts"> | string
    desc?: StringFilter<"Prompts"> | string
    createdAt?: DateTimeFilter<"Prompts"> | Date | string
    upadatedAt?: DateTimeFilter<"Prompts"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PromptsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PromptsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptsWhereInput | PromptsWhereInput[]
    OR?: PromptsWhereInput[]
    NOT?: PromptsWhereInput | PromptsWhereInput[]
    userId?: StringFilter<"Prompts"> | string
    title?: StringFilter<"Prompts"> | string
    desc?: StringFilter<"Prompts"> | string
    createdAt?: DateTimeFilter<"Prompts"> | Date | string
    upadatedAt?: DateTimeFilter<"Prompts"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PromptsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
    _count?: PromptsCountOrderByAggregateInput
    _max?: PromptsMaxOrderByAggregateInput
    _min?: PromptsMinOrderByAggregateInput
  }

  export type PromptsScalarWhereWithAggregatesInput = {
    AND?: PromptsScalarWhereWithAggregatesInput | PromptsScalarWhereWithAggregatesInput[]
    OR?: PromptsScalarWhereWithAggregatesInput[]
    NOT?: PromptsScalarWhereWithAggregatesInput | PromptsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prompts"> | string
    userId?: StringWithAggregatesFilter<"Prompts"> | string
    title?: StringWithAggregatesFilter<"Prompts"> | string
    desc?: StringWithAggregatesFilter<"Prompts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Prompts"> | Date | string
    upadatedAt?: DateTimeWithAggregatesFilter<"Prompts"> | Date | string
  }

  export type ImagesWhereInput = {
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    id?: StringFilter<"Images"> | string
    userId?: StringFilter<"Images"> | string
    imageUrl?: StringFilter<"Images"> | string
    createdAt?: DateTimeFilter<"Images"> | Date | string
    upadatedAt?: DateTimeFilter<"Images"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ImagesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ImagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImagesWhereInput | ImagesWhereInput[]
    OR?: ImagesWhereInput[]
    NOT?: ImagesWhereInput | ImagesWhereInput[]
    userId?: StringFilter<"Images"> | string
    imageUrl?: StringFilter<"Images"> | string
    createdAt?: DateTimeFilter<"Images"> | Date | string
    upadatedAt?: DateTimeFilter<"Images"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ImagesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
    _count?: ImagesCountOrderByAggregateInput
    _max?: ImagesMaxOrderByAggregateInput
    _min?: ImagesMinOrderByAggregateInput
  }

  export type ImagesScalarWhereWithAggregatesInput = {
    AND?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    OR?: ImagesScalarWhereWithAggregatesInput[]
    NOT?: ImagesScalarWhereWithAggregatesInput | ImagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Images"> | string
    userId?: StringWithAggregatesFilter<"Images"> | string
    imageUrl?: StringWithAggregatesFilter<"Images"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Images"> | Date | string
    upadatedAt?: DateTimeWithAggregatesFilter<"Images"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    dob: Date | string
    createdAt?: Date | string
    upadatedAt?: Date | string
    userDetails?: UserDetailsCreateNestedManyWithoutUserInput
    Prompts?: PromptsCreateNestedManyWithoutUserInput
    Images?: ImagesCreateNestedManyWithoutUserInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    dob: Date | string
    createdAt?: Date | string
    upadatedAt?: Date | string
    userDetails?: UserDetailsUncheckedCreateNestedManyWithoutUserInput
    Prompts?: PromptsUncheckedCreateNestedManyWithoutUserInput
    Images?: ImagesUncheckedCreateNestedManyWithoutUserInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserDetailsUpdateManyWithoutUserNestedInput
    Prompts?: PromptsUpdateManyWithoutUserNestedInput
    Images?: ImagesUpdateManyWithoutUserNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserDetailsUncheckedUpdateManyWithoutUserNestedInput
    Prompts?: PromptsUncheckedUpdateManyWithoutUserNestedInput
    Images?: ImagesUncheckedUpdateManyWithoutUserNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    dob: Date | string
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    active?: boolean
    chat?: boolean
    unMatchedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userA: UserCreateNestedOneWithoutMatchesInitiatedInput
    userB: UserCreateNestedOneWithoutMatchesReceivedInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    userAId: string
    userBId: string
    active?: boolean
    chat?: boolean
    unMatchedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chat?: BoolFieldUpdateOperationsInput | boolean
    unMatchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userA?: UserUpdateOneRequiredWithoutMatchesInitiatedNestedInput
    userB?: UserUpdateOneRequiredWithoutMatchesReceivedNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chat?: BoolFieldUpdateOperationsInput | boolean
    unMatchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyInput = {
    id?: string
    userAId: string
    userBId: string
    active?: boolean
    chat?: boolean
    unMatchedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chat?: BoolFieldUpdateOperationsInput | boolean
    unMatchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chat?: BoolFieldUpdateOperationsInput | boolean
    unMatchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDetailsCreateInput = {
    gender: $Enums.Gender
    datingGender: $Enums.Gender
    sexuality?: string | null
    datingIntention?: string | null
    relationshipType?: string | null
    work?: string | null
    jobTitle?: string | null
    college?: string | null
    highestDegree?: string | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
    createdAt?: Date | string
    upadatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserDetailsInput
    showOnProfile?: ShowOnProfileCreateNestedManyWithoutUserDetailsInput
  }

  export type UserDetailsUncheckedCreateInput = {
    userId: string
    gender: $Enums.Gender
    datingGender: $Enums.Gender
    sexuality?: string | null
    datingIntention?: string | null
    relationshipType?: string | null
    work?: string | null
    jobTitle?: string | null
    college?: string | null
    highestDegree?: string | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
    createdAt?: Date | string
    upadatedAt?: Date | string
    showOnProfile?: ShowOnProfileUncheckedCreateNestedManyWithoutUserDetailsInput
  }

  export type UserDetailsUpdateInput = {
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    datingGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    sexuality?: NullableStringFieldUpdateOperationsInput | string | null
    datingIntention?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipType?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    highestDegree?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserDetailsNestedInput
    showOnProfile?: ShowOnProfileUpdateManyWithoutUserDetailsNestedInput
  }

  export type UserDetailsUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    datingGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    sexuality?: NullableStringFieldUpdateOperationsInput | string | null
    datingIntention?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipType?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    highestDegree?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnProfile?: ShowOnProfileUncheckedUpdateManyWithoutUserDetailsNestedInput
  }

  export type UserDetailsCreateManyInput = {
    userId: string
    gender: $Enums.Gender
    datingGender: $Enums.Gender
    sexuality?: string | null
    datingIntention?: string | null
    relationshipType?: string | null
    work?: string | null
    jobTitle?: string | null
    college?: string | null
    highestDegree?: string | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type UserDetailsUpdateManyMutationInput = {
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    datingGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    sexuality?: NullableStringFieldUpdateOperationsInput | string | null
    datingIntention?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipType?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    highestDegree?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserDetailsUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    datingGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    sexuality?: NullableStringFieldUpdateOperationsInput | string | null
    datingIntention?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipType?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    highestDegree?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowOnProfileCreateInput = {
    gender?: boolean | null
    datingGender?: boolean | null
    sexuality?: boolean | null
    datingIntention?: boolean | null
    relationshipType?: boolean | null
    work?: boolean | null
    jobTitle?: boolean | null
    college?: boolean | null
    highestDegree?: boolean | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
    UserDetails?: UserDetailsCreateNestedOneWithoutShowOnProfileInput
  }

  export type ShowOnProfileUncheckedCreateInput = {
    userDetailsUserId: string
    gender?: boolean | null
    datingGender?: boolean | null
    sexuality?: boolean | null
    datingIntention?: boolean | null
    relationshipType?: boolean | null
    work?: boolean | null
    jobTitle?: boolean | null
    college?: boolean | null
    highestDegree?: boolean | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
  }

  export type ShowOnProfileUpdateInput = {
    gender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingGender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sexuality?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingIntention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    relationshipType?: NullableBoolFieldUpdateOperationsInput | boolean | null
    work?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobTitle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    college?: NullableBoolFieldUpdateOperationsInput | boolean | null
    highestDegree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    UserDetails?: UserDetailsUpdateOneWithoutShowOnProfileNestedInput
  }

  export type ShowOnProfileUncheckedUpdateInput = {
    userDetailsUserId?: StringFieldUpdateOperationsInput | string
    gender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingGender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sexuality?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingIntention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    relationshipType?: NullableBoolFieldUpdateOperationsInput | boolean | null
    work?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobTitle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    college?: NullableBoolFieldUpdateOperationsInput | boolean | null
    highestDegree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ShowOnProfileCreateManyInput = {
    userDetailsUserId: string
    gender?: boolean | null
    datingGender?: boolean | null
    sexuality?: boolean | null
    datingIntention?: boolean | null
    relationshipType?: boolean | null
    work?: boolean | null
    jobTitle?: boolean | null
    college?: boolean | null
    highestDegree?: boolean | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
  }

  export type ShowOnProfileUpdateManyMutationInput = {
    gender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingGender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sexuality?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingIntention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    relationshipType?: NullableBoolFieldUpdateOperationsInput | boolean | null
    work?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobTitle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    college?: NullableBoolFieldUpdateOperationsInput | boolean | null
    highestDegree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ShowOnProfileUncheckedUpdateManyInput = {
    userDetailsUserId?: StringFieldUpdateOperationsInput | string
    gender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingGender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sexuality?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingIntention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    relationshipType?: NullableBoolFieldUpdateOperationsInput | boolean | null
    work?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobTitle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    college?: NullableBoolFieldUpdateOperationsInput | boolean | null
    highestDegree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type PromptsCreateInput = {
    id?: string
    title: string
    desc: string
    createdAt?: Date | string
    upadatedAt?: Date | string
    user: UserCreateNestedOneWithoutPromptsInput
  }

  export type PromptsUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    desc: string
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type PromptsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPromptsNestedInput
  }

  export type PromptsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptsCreateManyInput = {
    id?: string
    userId: string
    title: string
    desc: string
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type PromptsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesCreateInput = {
    id?: string
    imageUrl: string
    createdAt?: Date | string
    upadatedAt?: Date | string
    user: UserCreateNestedOneWithoutImagesInput
  }

  export type ImagesUncheckedCreateInput = {
    id?: string
    userId: string
    imageUrl: string
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type ImagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesCreateManyInput = {
    id?: string
    userId: string
    imageUrl: string
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type ImagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserDetailsListRelationFilter = {
    every?: UserDetailsWhereInput
    some?: UserDetailsWhereInput
    none?: UserDetailsWhereInput
  }

  export type PromptsListRelationFilter = {
    every?: PromptsWhereInput
    some?: PromptsWhereInput
    none?: PromptsWhereInput
  }

  export type ImagesListRelationFilter = {
    every?: ImagesWhereInput
    some?: ImagesWhereInput
    none?: ImagesWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromptsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MatchUserAIdUserBIdCompoundUniqueInput = {
    userAId: string
    userBId: string
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    active?: SortOrder
    chat?: SortOrder
    unMatchedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    active?: SortOrder
    chat?: SortOrder
    unMatchedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    userAId?: SortOrder
    userBId?: SortOrder
    active?: SortOrder
    chat?: SortOrder
    unMatchedBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ShowOnProfileListRelationFilter = {
    every?: ShowOnProfileWhereInput
    some?: ShowOnProfileWhereInput
    none?: ShowOnProfileWhereInput
  }

  export type ShowOnProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserDetailsCountOrderByAggregateInput = {
    userId?: SortOrder
    gender?: SortOrder
    datingGender?: SortOrder
    sexuality?: SortOrder
    datingIntention?: SortOrder
    relationshipType?: SortOrder
    work?: SortOrder
    jobTitle?: SortOrder
    college?: SortOrder
    highestDegree?: SortOrder
    drink?: SortOrder
    tobacco?: SortOrder
    weed?: SortOrder
    drugs?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
  }

  export type UserDetailsMaxOrderByAggregateInput = {
    userId?: SortOrder
    gender?: SortOrder
    datingGender?: SortOrder
    sexuality?: SortOrder
    datingIntention?: SortOrder
    relationshipType?: SortOrder
    work?: SortOrder
    jobTitle?: SortOrder
    college?: SortOrder
    highestDegree?: SortOrder
    drink?: SortOrder
    tobacco?: SortOrder
    weed?: SortOrder
    drugs?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
  }

  export type UserDetailsMinOrderByAggregateInput = {
    userId?: SortOrder
    gender?: SortOrder
    datingGender?: SortOrder
    sexuality?: SortOrder
    datingIntention?: SortOrder
    relationshipType?: SortOrder
    work?: SortOrder
    jobTitle?: SortOrder
    college?: SortOrder
    highestDegree?: SortOrder
    drink?: SortOrder
    tobacco?: SortOrder
    weed?: SortOrder
    drugs?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserDetailsNullableScalarRelationFilter = {
    is?: UserDetailsWhereInput | null
    isNot?: UserDetailsWhereInput | null
  }

  export type ShowOnProfileCountOrderByAggregateInput = {
    userDetailsUserId?: SortOrder
    gender?: SortOrder
    datingGender?: SortOrder
    sexuality?: SortOrder
    datingIntention?: SortOrder
    relationshipType?: SortOrder
    work?: SortOrder
    jobTitle?: SortOrder
    college?: SortOrder
    highestDegree?: SortOrder
    drink?: SortOrder
    tobacco?: SortOrder
    weed?: SortOrder
    drugs?: SortOrder
  }

  export type ShowOnProfileMaxOrderByAggregateInput = {
    userDetailsUserId?: SortOrder
    gender?: SortOrder
    datingGender?: SortOrder
    sexuality?: SortOrder
    datingIntention?: SortOrder
    relationshipType?: SortOrder
    work?: SortOrder
    jobTitle?: SortOrder
    college?: SortOrder
    highestDegree?: SortOrder
    drink?: SortOrder
    tobacco?: SortOrder
    weed?: SortOrder
    drugs?: SortOrder
  }

  export type ShowOnProfileMinOrderByAggregateInput = {
    userDetailsUserId?: SortOrder
    gender?: SortOrder
    datingGender?: SortOrder
    sexuality?: SortOrder
    datingIntention?: SortOrder
    relationshipType?: SortOrder
    work?: SortOrder
    jobTitle?: SortOrder
    college?: SortOrder
    highestDegree?: SortOrder
    drink?: SortOrder
    tobacco?: SortOrder
    weed?: SortOrder
    drugs?: SortOrder
  }

  export type PromptsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
  }

  export type PromptsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
  }

  export type PromptsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
  }

  export type ImagesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    upadatedAt?: SortOrder
  }

  export type UserDetailsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput> | UserDetailsCreateWithoutUserInput[] | UserDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput | UserDetailsCreateOrConnectWithoutUserInput[]
    createMany?: UserDetailsCreateManyUserInputEnvelope
    connect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
  }

  export type PromptsCreateNestedManyWithoutUserInput = {
    create?: XOR<PromptsCreateWithoutUserInput, PromptsUncheckedCreateWithoutUserInput> | PromptsCreateWithoutUserInput[] | PromptsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptsCreateOrConnectWithoutUserInput | PromptsCreateOrConnectWithoutUserInput[]
    createMany?: PromptsCreateManyUserInputEnvelope
    connect?: PromptsWhereUniqueInput | PromptsWhereUniqueInput[]
  }

  export type ImagesCreateNestedManyWithoutUserInput = {
    create?: XOR<ImagesCreateWithoutUserInput, ImagesUncheckedCreateWithoutUserInput> | ImagesCreateWithoutUserInput[] | ImagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutUserInput | ImagesCreateOrConnectWithoutUserInput[]
    createMany?: ImagesCreateManyUserInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutUserAInput = {
    create?: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput> | MatchCreateWithoutUserAInput[] | MatchUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserAInput | MatchCreateOrConnectWithoutUserAInput[]
    createMany?: MatchCreateManyUserAInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutUserBInput = {
    create?: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput> | MatchCreateWithoutUserBInput[] | MatchUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserBInput | MatchCreateOrConnectWithoutUserBInput[]
    createMany?: MatchCreateManyUserBInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type UserDetailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput> | UserDetailsCreateWithoutUserInput[] | UserDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput | UserDetailsCreateOrConnectWithoutUserInput[]
    createMany?: UserDetailsCreateManyUserInputEnvelope
    connect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
  }

  export type PromptsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PromptsCreateWithoutUserInput, PromptsUncheckedCreateWithoutUserInput> | PromptsCreateWithoutUserInput[] | PromptsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptsCreateOrConnectWithoutUserInput | PromptsCreateOrConnectWithoutUserInput[]
    createMany?: PromptsCreateManyUserInputEnvelope
    connect?: PromptsWhereUniqueInput | PromptsWhereUniqueInput[]
  }

  export type ImagesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ImagesCreateWithoutUserInput, ImagesUncheckedCreateWithoutUserInput> | ImagesCreateWithoutUserInput[] | ImagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutUserInput | ImagesCreateOrConnectWithoutUserInput[]
    createMany?: ImagesCreateManyUserInputEnvelope
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutUserAInput = {
    create?: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput> | MatchCreateWithoutUserAInput[] | MatchUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserAInput | MatchCreateOrConnectWithoutUserAInput[]
    createMany?: MatchCreateManyUserAInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutUserBInput = {
    create?: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput> | MatchCreateWithoutUserBInput[] | MatchUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserBInput | MatchCreateOrConnectWithoutUserBInput[]
    createMany?: MatchCreateManyUserBInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserDetailsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput> | UserDetailsCreateWithoutUserInput[] | UserDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput | UserDetailsCreateOrConnectWithoutUserInput[]
    upsert?: UserDetailsUpsertWithWhereUniqueWithoutUserInput | UserDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDetailsCreateManyUserInputEnvelope
    set?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    disconnect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    delete?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    connect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    update?: UserDetailsUpdateWithWhereUniqueWithoutUserInput | UserDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDetailsUpdateManyWithWhereWithoutUserInput | UserDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDetailsScalarWhereInput | UserDetailsScalarWhereInput[]
  }

  export type PromptsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromptsCreateWithoutUserInput, PromptsUncheckedCreateWithoutUserInput> | PromptsCreateWithoutUserInput[] | PromptsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptsCreateOrConnectWithoutUserInput | PromptsCreateOrConnectWithoutUserInput[]
    upsert?: PromptsUpsertWithWhereUniqueWithoutUserInput | PromptsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromptsCreateManyUserInputEnvelope
    set?: PromptsWhereUniqueInput | PromptsWhereUniqueInput[]
    disconnect?: PromptsWhereUniqueInput | PromptsWhereUniqueInput[]
    delete?: PromptsWhereUniqueInput | PromptsWhereUniqueInput[]
    connect?: PromptsWhereUniqueInput | PromptsWhereUniqueInput[]
    update?: PromptsUpdateWithWhereUniqueWithoutUserInput | PromptsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromptsUpdateManyWithWhereWithoutUserInput | PromptsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromptsScalarWhereInput | PromptsScalarWhereInput[]
  }

  export type ImagesUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImagesCreateWithoutUserInput, ImagesUncheckedCreateWithoutUserInput> | ImagesCreateWithoutUserInput[] | ImagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutUserInput | ImagesCreateOrConnectWithoutUserInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutUserInput | ImagesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImagesCreateManyUserInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutUserInput | ImagesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutUserInput | ImagesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutUserANestedInput = {
    create?: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput> | MatchCreateWithoutUserAInput[] | MatchUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserAInput | MatchCreateOrConnectWithoutUserAInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserAInput | MatchUpsertWithWhereUniqueWithoutUserAInput[]
    createMany?: MatchCreateManyUserAInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserAInput | MatchUpdateWithWhereUniqueWithoutUserAInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserAInput | MatchUpdateManyWithWhereWithoutUserAInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutUserBNestedInput = {
    create?: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput> | MatchCreateWithoutUserBInput[] | MatchUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserBInput | MatchCreateOrConnectWithoutUserBInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserBInput | MatchUpsertWithWhereUniqueWithoutUserBInput[]
    createMany?: MatchCreateManyUserBInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserBInput | MatchUpdateWithWhereUniqueWithoutUserBInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserBInput | MatchUpdateManyWithWhereWithoutUserBInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type UserDetailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput> | UserDetailsCreateWithoutUserInput[] | UserDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserDetailsCreateOrConnectWithoutUserInput | UserDetailsCreateOrConnectWithoutUserInput[]
    upsert?: UserDetailsUpsertWithWhereUniqueWithoutUserInput | UserDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserDetailsCreateManyUserInputEnvelope
    set?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    disconnect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    delete?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    connect?: UserDetailsWhereUniqueInput | UserDetailsWhereUniqueInput[]
    update?: UserDetailsUpdateWithWhereUniqueWithoutUserInput | UserDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserDetailsUpdateManyWithWhereWithoutUserInput | UserDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserDetailsScalarWhereInput | UserDetailsScalarWhereInput[]
  }

  export type PromptsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PromptsCreateWithoutUserInput, PromptsUncheckedCreateWithoutUserInput> | PromptsCreateWithoutUserInput[] | PromptsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PromptsCreateOrConnectWithoutUserInput | PromptsCreateOrConnectWithoutUserInput[]
    upsert?: PromptsUpsertWithWhereUniqueWithoutUserInput | PromptsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PromptsCreateManyUserInputEnvelope
    set?: PromptsWhereUniqueInput | PromptsWhereUniqueInput[]
    disconnect?: PromptsWhereUniqueInput | PromptsWhereUniqueInput[]
    delete?: PromptsWhereUniqueInput | PromptsWhereUniqueInput[]
    connect?: PromptsWhereUniqueInput | PromptsWhereUniqueInput[]
    update?: PromptsUpdateWithWhereUniqueWithoutUserInput | PromptsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PromptsUpdateManyWithWhereWithoutUserInput | PromptsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PromptsScalarWhereInput | PromptsScalarWhereInput[]
  }

  export type ImagesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ImagesCreateWithoutUserInput, ImagesUncheckedCreateWithoutUserInput> | ImagesCreateWithoutUserInput[] | ImagesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ImagesCreateOrConnectWithoutUserInput | ImagesCreateOrConnectWithoutUserInput[]
    upsert?: ImagesUpsertWithWhereUniqueWithoutUserInput | ImagesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ImagesCreateManyUserInputEnvelope
    set?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    disconnect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    delete?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    connect?: ImagesWhereUniqueInput | ImagesWhereUniqueInput[]
    update?: ImagesUpdateWithWhereUniqueWithoutUserInput | ImagesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ImagesUpdateManyWithWhereWithoutUserInput | ImagesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutUserANestedInput = {
    create?: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput> | MatchCreateWithoutUserAInput[] | MatchUncheckedCreateWithoutUserAInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserAInput | MatchCreateOrConnectWithoutUserAInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserAInput | MatchUpsertWithWhereUniqueWithoutUserAInput[]
    createMany?: MatchCreateManyUserAInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserAInput | MatchUpdateWithWhereUniqueWithoutUserAInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserAInput | MatchUpdateManyWithWhereWithoutUserAInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutUserBNestedInput = {
    create?: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput> | MatchCreateWithoutUserBInput[] | MatchUncheckedCreateWithoutUserBInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutUserBInput | MatchCreateOrConnectWithoutUserBInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutUserBInput | MatchUpsertWithWhereUniqueWithoutUserBInput[]
    createMany?: MatchCreateManyUserBInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutUserBInput | MatchUpdateWithWhereUniqueWithoutUserBInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutUserBInput | MatchUpdateManyWithWhereWithoutUserBInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMatchesInitiatedInput = {
    create?: XOR<UserCreateWithoutMatchesInitiatedInput, UserUncheckedCreateWithoutMatchesInitiatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInitiatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchesReceivedInput = {
    create?: XOR<UserCreateWithoutMatchesReceivedInput, UserUncheckedCreateWithoutMatchesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutMatchesInitiatedNestedInput = {
    create?: XOR<UserCreateWithoutMatchesInitiatedInput, UserUncheckedCreateWithoutMatchesInitiatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesInitiatedInput
    upsert?: UserUpsertWithoutMatchesInitiatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesInitiatedInput, UserUpdateWithoutMatchesInitiatedInput>, UserUncheckedUpdateWithoutMatchesInitiatedInput>
  }

  export type UserUpdateOneRequiredWithoutMatchesReceivedNestedInput = {
    create?: XOR<UserCreateWithoutMatchesReceivedInput, UserUncheckedCreateWithoutMatchesReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchesReceivedInput
    upsert?: UserUpsertWithoutMatchesReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchesReceivedInput, UserUpdateWithoutMatchesReceivedInput>, UserUncheckedUpdateWithoutMatchesReceivedInput>
  }

  export type UserCreateNestedOneWithoutUserDetailsInput = {
    create?: XOR<UserCreateWithoutUserDetailsInput, UserUncheckedCreateWithoutUserDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type ShowOnProfileCreateNestedManyWithoutUserDetailsInput = {
    create?: XOR<ShowOnProfileCreateWithoutUserDetailsInput, ShowOnProfileUncheckedCreateWithoutUserDetailsInput> | ShowOnProfileCreateWithoutUserDetailsInput[] | ShowOnProfileUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: ShowOnProfileCreateOrConnectWithoutUserDetailsInput | ShowOnProfileCreateOrConnectWithoutUserDetailsInput[]
    createMany?: ShowOnProfileCreateManyUserDetailsInputEnvelope
    connect?: ShowOnProfileWhereUniqueInput | ShowOnProfileWhereUniqueInput[]
  }

  export type ShowOnProfileUncheckedCreateNestedManyWithoutUserDetailsInput = {
    create?: XOR<ShowOnProfileCreateWithoutUserDetailsInput, ShowOnProfileUncheckedCreateWithoutUserDetailsInput> | ShowOnProfileCreateWithoutUserDetailsInput[] | ShowOnProfileUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: ShowOnProfileCreateOrConnectWithoutUserDetailsInput | ShowOnProfileCreateOrConnectWithoutUserDetailsInput[]
    createMany?: ShowOnProfileCreateManyUserDetailsInputEnvelope
    connect?: ShowOnProfileWhereUniqueInput | ShowOnProfileWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneRequiredWithoutUserDetailsNestedInput = {
    create?: XOR<UserCreateWithoutUserDetailsInput, UserUncheckedCreateWithoutUserDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserDetailsInput
    upsert?: UserUpsertWithoutUserDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserDetailsInput, UserUpdateWithoutUserDetailsInput>, UserUncheckedUpdateWithoutUserDetailsInput>
  }

  export type ShowOnProfileUpdateManyWithoutUserDetailsNestedInput = {
    create?: XOR<ShowOnProfileCreateWithoutUserDetailsInput, ShowOnProfileUncheckedCreateWithoutUserDetailsInput> | ShowOnProfileCreateWithoutUserDetailsInput[] | ShowOnProfileUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: ShowOnProfileCreateOrConnectWithoutUserDetailsInput | ShowOnProfileCreateOrConnectWithoutUserDetailsInput[]
    upsert?: ShowOnProfileUpsertWithWhereUniqueWithoutUserDetailsInput | ShowOnProfileUpsertWithWhereUniqueWithoutUserDetailsInput[]
    createMany?: ShowOnProfileCreateManyUserDetailsInputEnvelope
    set?: ShowOnProfileWhereUniqueInput | ShowOnProfileWhereUniqueInput[]
    disconnect?: ShowOnProfileWhereUniqueInput | ShowOnProfileWhereUniqueInput[]
    delete?: ShowOnProfileWhereUniqueInput | ShowOnProfileWhereUniqueInput[]
    connect?: ShowOnProfileWhereUniqueInput | ShowOnProfileWhereUniqueInput[]
    update?: ShowOnProfileUpdateWithWhereUniqueWithoutUserDetailsInput | ShowOnProfileUpdateWithWhereUniqueWithoutUserDetailsInput[]
    updateMany?: ShowOnProfileUpdateManyWithWhereWithoutUserDetailsInput | ShowOnProfileUpdateManyWithWhereWithoutUserDetailsInput[]
    deleteMany?: ShowOnProfileScalarWhereInput | ShowOnProfileScalarWhereInput[]
  }

  export type ShowOnProfileUncheckedUpdateManyWithoutUserDetailsNestedInput = {
    create?: XOR<ShowOnProfileCreateWithoutUserDetailsInput, ShowOnProfileUncheckedCreateWithoutUserDetailsInput> | ShowOnProfileCreateWithoutUserDetailsInput[] | ShowOnProfileUncheckedCreateWithoutUserDetailsInput[]
    connectOrCreate?: ShowOnProfileCreateOrConnectWithoutUserDetailsInput | ShowOnProfileCreateOrConnectWithoutUserDetailsInput[]
    upsert?: ShowOnProfileUpsertWithWhereUniqueWithoutUserDetailsInput | ShowOnProfileUpsertWithWhereUniqueWithoutUserDetailsInput[]
    createMany?: ShowOnProfileCreateManyUserDetailsInputEnvelope
    set?: ShowOnProfileWhereUniqueInput | ShowOnProfileWhereUniqueInput[]
    disconnect?: ShowOnProfileWhereUniqueInput | ShowOnProfileWhereUniqueInput[]
    delete?: ShowOnProfileWhereUniqueInput | ShowOnProfileWhereUniqueInput[]
    connect?: ShowOnProfileWhereUniqueInput | ShowOnProfileWhereUniqueInput[]
    update?: ShowOnProfileUpdateWithWhereUniqueWithoutUserDetailsInput | ShowOnProfileUpdateWithWhereUniqueWithoutUserDetailsInput[]
    updateMany?: ShowOnProfileUpdateManyWithWhereWithoutUserDetailsInput | ShowOnProfileUpdateManyWithWhereWithoutUserDetailsInput[]
    deleteMany?: ShowOnProfileScalarWhereInput | ShowOnProfileScalarWhereInput[]
  }

  export type UserDetailsCreateNestedOneWithoutShowOnProfileInput = {
    create?: XOR<UserDetailsCreateWithoutShowOnProfileInput, UserDetailsUncheckedCreateWithoutShowOnProfileInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutShowOnProfileInput
    connect?: UserDetailsWhereUniqueInput
  }

  export type UserDetailsUpdateOneWithoutShowOnProfileNestedInput = {
    create?: XOR<UserDetailsCreateWithoutShowOnProfileInput, UserDetailsUncheckedCreateWithoutShowOnProfileInput>
    connectOrCreate?: UserDetailsCreateOrConnectWithoutShowOnProfileInput
    upsert?: UserDetailsUpsertWithoutShowOnProfileInput
    disconnect?: UserDetailsWhereInput | boolean
    delete?: UserDetailsWhereInput | boolean
    connect?: UserDetailsWhereUniqueInput
    update?: XOR<XOR<UserDetailsUpdateToOneWithWhereWithoutShowOnProfileInput, UserDetailsUpdateWithoutShowOnProfileInput>, UserDetailsUncheckedUpdateWithoutShowOnProfileInput>
  }

  export type UserCreateNestedOneWithoutPromptsInput = {
    create?: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromptsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPromptsNestedInput = {
    create?: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPromptsInput
    upsert?: UserUpsertWithoutPromptsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPromptsInput, UserUpdateWithoutPromptsInput>, UserUncheckedUpdateWithoutPromptsInput>
  }

  export type UserCreateNestedOneWithoutImagesInput = {
    create?: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImagesInput
    upsert?: UserUpsertWithoutImagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImagesInput, UserUpdateWithoutImagesInput>, UserUncheckedUpdateWithoutImagesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type UserDetailsCreateWithoutUserInput = {
    gender: $Enums.Gender
    datingGender: $Enums.Gender
    sexuality?: string | null
    datingIntention?: string | null
    relationshipType?: string | null
    work?: string | null
    jobTitle?: string | null
    college?: string | null
    highestDegree?: string | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
    createdAt?: Date | string
    upadatedAt?: Date | string
    showOnProfile?: ShowOnProfileCreateNestedManyWithoutUserDetailsInput
  }

  export type UserDetailsUncheckedCreateWithoutUserInput = {
    gender: $Enums.Gender
    datingGender: $Enums.Gender
    sexuality?: string | null
    datingIntention?: string | null
    relationshipType?: string | null
    work?: string | null
    jobTitle?: string | null
    college?: string | null
    highestDegree?: string | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
    createdAt?: Date | string
    upadatedAt?: Date | string
    showOnProfile?: ShowOnProfileUncheckedCreateNestedManyWithoutUserDetailsInput
  }

  export type UserDetailsCreateOrConnectWithoutUserInput = {
    where: UserDetailsWhereUniqueInput
    create: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
  }

  export type UserDetailsCreateManyUserInputEnvelope = {
    data: UserDetailsCreateManyUserInput | UserDetailsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PromptsCreateWithoutUserInput = {
    id?: string
    title: string
    desc: string
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type PromptsUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    desc: string
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type PromptsCreateOrConnectWithoutUserInput = {
    where: PromptsWhereUniqueInput
    create: XOR<PromptsCreateWithoutUserInput, PromptsUncheckedCreateWithoutUserInput>
  }

  export type PromptsCreateManyUserInputEnvelope = {
    data: PromptsCreateManyUserInput | PromptsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ImagesCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type ImagesUncheckedCreateWithoutUserInput = {
    id?: string
    imageUrl: string
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type ImagesCreateOrConnectWithoutUserInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutUserInput, ImagesUncheckedCreateWithoutUserInput>
  }

  export type ImagesCreateManyUserInputEnvelope = {
    data: ImagesCreateManyUserInput | ImagesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutUserAInput = {
    id?: string
    active?: boolean
    chat?: boolean
    unMatchedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userB: UserCreateNestedOneWithoutMatchesReceivedInput
  }

  export type MatchUncheckedCreateWithoutUserAInput = {
    id?: string
    userBId: string
    active?: boolean
    chat?: boolean
    unMatchedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutUserAInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput>
  }

  export type MatchCreateManyUserAInputEnvelope = {
    data: MatchCreateManyUserAInput | MatchCreateManyUserAInput[]
    skipDuplicates?: boolean
  }

  export type MatchCreateWithoutUserBInput = {
    id?: string
    active?: boolean
    chat?: boolean
    unMatchedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userA: UserCreateNestedOneWithoutMatchesInitiatedInput
  }

  export type MatchUncheckedCreateWithoutUserBInput = {
    id?: string
    userAId: string
    active?: boolean
    chat?: boolean
    unMatchedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutUserBInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput>
  }

  export type MatchCreateManyUserBInputEnvelope = {
    data: MatchCreateManyUserBInput | MatchCreateManyUserBInput[]
    skipDuplicates?: boolean
  }

  export type UserDetailsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserDetailsWhereUniqueInput
    update: XOR<UserDetailsUpdateWithoutUserInput, UserDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<UserDetailsCreateWithoutUserInput, UserDetailsUncheckedCreateWithoutUserInput>
  }

  export type UserDetailsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserDetailsWhereUniqueInput
    data: XOR<UserDetailsUpdateWithoutUserInput, UserDetailsUncheckedUpdateWithoutUserInput>
  }

  export type UserDetailsUpdateManyWithWhereWithoutUserInput = {
    where: UserDetailsScalarWhereInput
    data: XOR<UserDetailsUpdateManyMutationInput, UserDetailsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserDetailsScalarWhereInput = {
    AND?: UserDetailsScalarWhereInput | UserDetailsScalarWhereInput[]
    OR?: UserDetailsScalarWhereInput[]
    NOT?: UserDetailsScalarWhereInput | UserDetailsScalarWhereInput[]
    userId?: StringFilter<"UserDetails"> | string
    gender?: EnumGenderFilter<"UserDetails"> | $Enums.Gender
    datingGender?: EnumGenderFilter<"UserDetails"> | $Enums.Gender
    sexuality?: StringNullableFilter<"UserDetails"> | string | null
    datingIntention?: StringNullableFilter<"UserDetails"> | string | null
    relationshipType?: StringNullableFilter<"UserDetails"> | string | null
    work?: StringNullableFilter<"UserDetails"> | string | null
    jobTitle?: StringNullableFilter<"UserDetails"> | string | null
    college?: StringNullableFilter<"UserDetails"> | string | null
    highestDegree?: StringNullableFilter<"UserDetails"> | string | null
    drink?: BoolNullableFilter<"UserDetails"> | boolean | null
    tobacco?: BoolNullableFilter<"UserDetails"> | boolean | null
    weed?: BoolNullableFilter<"UserDetails"> | boolean | null
    drugs?: BoolNullableFilter<"UserDetails"> | boolean | null
    createdAt?: DateTimeFilter<"UserDetails"> | Date | string
    upadatedAt?: DateTimeFilter<"UserDetails"> | Date | string
  }

  export type PromptsUpsertWithWhereUniqueWithoutUserInput = {
    where: PromptsWhereUniqueInput
    update: XOR<PromptsUpdateWithoutUserInput, PromptsUncheckedUpdateWithoutUserInput>
    create: XOR<PromptsCreateWithoutUserInput, PromptsUncheckedCreateWithoutUserInput>
  }

  export type PromptsUpdateWithWhereUniqueWithoutUserInput = {
    where: PromptsWhereUniqueInput
    data: XOR<PromptsUpdateWithoutUserInput, PromptsUncheckedUpdateWithoutUserInput>
  }

  export type PromptsUpdateManyWithWhereWithoutUserInput = {
    where: PromptsScalarWhereInput
    data: XOR<PromptsUpdateManyMutationInput, PromptsUncheckedUpdateManyWithoutUserInput>
  }

  export type PromptsScalarWhereInput = {
    AND?: PromptsScalarWhereInput | PromptsScalarWhereInput[]
    OR?: PromptsScalarWhereInput[]
    NOT?: PromptsScalarWhereInput | PromptsScalarWhereInput[]
    id?: StringFilter<"Prompts"> | string
    userId?: StringFilter<"Prompts"> | string
    title?: StringFilter<"Prompts"> | string
    desc?: StringFilter<"Prompts"> | string
    createdAt?: DateTimeFilter<"Prompts"> | Date | string
    upadatedAt?: DateTimeFilter<"Prompts"> | Date | string
  }

  export type ImagesUpsertWithWhereUniqueWithoutUserInput = {
    where: ImagesWhereUniqueInput
    update: XOR<ImagesUpdateWithoutUserInput, ImagesUncheckedUpdateWithoutUserInput>
    create: XOR<ImagesCreateWithoutUserInput, ImagesUncheckedCreateWithoutUserInput>
  }

  export type ImagesUpdateWithWhereUniqueWithoutUserInput = {
    where: ImagesWhereUniqueInput
    data: XOR<ImagesUpdateWithoutUserInput, ImagesUncheckedUpdateWithoutUserInput>
  }

  export type ImagesUpdateManyWithWhereWithoutUserInput = {
    where: ImagesScalarWhereInput
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyWithoutUserInput>
  }

  export type ImagesScalarWhereInput = {
    AND?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    OR?: ImagesScalarWhereInput[]
    NOT?: ImagesScalarWhereInput | ImagesScalarWhereInput[]
    id?: StringFilter<"Images"> | string
    userId?: StringFilter<"Images"> | string
    imageUrl?: StringFilter<"Images"> | string
    createdAt?: DateTimeFilter<"Images"> | Date | string
    upadatedAt?: DateTimeFilter<"Images"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutUserAInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutUserAInput, MatchUncheckedUpdateWithoutUserAInput>
    create: XOR<MatchCreateWithoutUserAInput, MatchUncheckedCreateWithoutUserAInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutUserAInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutUserAInput, MatchUncheckedUpdateWithoutUserAInput>
  }

  export type MatchUpdateManyWithWhereWithoutUserAInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutUserAInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    userAId?: StringFilter<"Match"> | string
    userBId?: StringFilter<"Match"> | string
    active?: BoolFilter<"Match"> | boolean
    chat?: BoolFilter<"Match"> | boolean
    unMatchedBy?: StringNullableFilter<"Match"> | string | null
    createdAt?: DateTimeFilter<"Match"> | Date | string
    updatedAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutUserBInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutUserBInput, MatchUncheckedUpdateWithoutUserBInput>
    create: XOR<MatchCreateWithoutUserBInput, MatchUncheckedCreateWithoutUserBInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutUserBInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutUserBInput, MatchUncheckedUpdateWithoutUserBInput>
  }

  export type MatchUpdateManyWithWhereWithoutUserBInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutUserBInput>
  }

  export type UserCreateWithoutMatchesInitiatedInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    dob: Date | string
    createdAt?: Date | string
    upadatedAt?: Date | string
    userDetails?: UserDetailsCreateNestedManyWithoutUserInput
    Prompts?: PromptsCreateNestedManyWithoutUserInput
    Images?: ImagesCreateNestedManyWithoutUserInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
  }

  export type UserUncheckedCreateWithoutMatchesInitiatedInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    dob: Date | string
    createdAt?: Date | string
    upadatedAt?: Date | string
    userDetails?: UserDetailsUncheckedCreateNestedManyWithoutUserInput
    Prompts?: PromptsUncheckedCreateNestedManyWithoutUserInput
    Images?: ImagesUncheckedCreateNestedManyWithoutUserInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
  }

  export type UserCreateOrConnectWithoutMatchesInitiatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesInitiatedInput, UserUncheckedCreateWithoutMatchesInitiatedInput>
  }

  export type UserCreateWithoutMatchesReceivedInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    dob: Date | string
    createdAt?: Date | string
    upadatedAt?: Date | string
    userDetails?: UserDetailsCreateNestedManyWithoutUserInput
    Prompts?: PromptsCreateNestedManyWithoutUserInput
    Images?: ImagesCreateNestedManyWithoutUserInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
  }

  export type UserUncheckedCreateWithoutMatchesReceivedInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    dob: Date | string
    createdAt?: Date | string
    upadatedAt?: Date | string
    userDetails?: UserDetailsUncheckedCreateNestedManyWithoutUserInput
    Prompts?: PromptsUncheckedCreateNestedManyWithoutUserInput
    Images?: ImagesUncheckedCreateNestedManyWithoutUserInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
  }

  export type UserCreateOrConnectWithoutMatchesReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchesReceivedInput, UserUncheckedCreateWithoutMatchesReceivedInput>
  }

  export type UserUpsertWithoutMatchesInitiatedInput = {
    update: XOR<UserUpdateWithoutMatchesInitiatedInput, UserUncheckedUpdateWithoutMatchesInitiatedInput>
    create: XOR<UserCreateWithoutMatchesInitiatedInput, UserUncheckedCreateWithoutMatchesInitiatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesInitiatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesInitiatedInput, UserUncheckedUpdateWithoutMatchesInitiatedInput>
  }

  export type UserUpdateWithoutMatchesInitiatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserDetailsUpdateManyWithoutUserNestedInput
    Prompts?: PromptsUpdateManyWithoutUserNestedInput
    Images?: ImagesUpdateManyWithoutUserNestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesInitiatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserDetailsUncheckedUpdateManyWithoutUserNestedInput
    Prompts?: PromptsUncheckedUpdateManyWithoutUserNestedInput
    Images?: ImagesUncheckedUpdateManyWithoutUserNestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
  }

  export type UserUpsertWithoutMatchesReceivedInput = {
    update: XOR<UserUpdateWithoutMatchesReceivedInput, UserUncheckedUpdateWithoutMatchesReceivedInput>
    create: XOR<UserCreateWithoutMatchesReceivedInput, UserUncheckedCreateWithoutMatchesReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchesReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchesReceivedInput, UserUncheckedUpdateWithoutMatchesReceivedInput>
  }

  export type UserUpdateWithoutMatchesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserDetailsUpdateManyWithoutUserNestedInput
    Prompts?: PromptsUpdateManyWithoutUserNestedInput
    Images?: ImagesUpdateManyWithoutUserNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
  }

  export type UserUncheckedUpdateWithoutMatchesReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserDetailsUncheckedUpdateManyWithoutUserNestedInput
    Prompts?: PromptsUncheckedUpdateManyWithoutUserNestedInput
    Images?: ImagesUncheckedUpdateManyWithoutUserNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
  }

  export type UserCreateWithoutUserDetailsInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    dob: Date | string
    createdAt?: Date | string
    upadatedAt?: Date | string
    Prompts?: PromptsCreateNestedManyWithoutUserInput
    Images?: ImagesCreateNestedManyWithoutUserInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
  }

  export type UserUncheckedCreateWithoutUserDetailsInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    dob: Date | string
    createdAt?: Date | string
    upadatedAt?: Date | string
    Prompts?: PromptsUncheckedCreateNestedManyWithoutUserInput
    Images?: ImagesUncheckedCreateNestedManyWithoutUserInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
  }

  export type UserCreateOrConnectWithoutUserDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserDetailsInput, UserUncheckedCreateWithoutUserDetailsInput>
  }

  export type ShowOnProfileCreateWithoutUserDetailsInput = {
    gender?: boolean | null
    datingGender?: boolean | null
    sexuality?: boolean | null
    datingIntention?: boolean | null
    relationshipType?: boolean | null
    work?: boolean | null
    jobTitle?: boolean | null
    college?: boolean | null
    highestDegree?: boolean | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
  }

  export type ShowOnProfileUncheckedCreateWithoutUserDetailsInput = {
    gender?: boolean | null
    datingGender?: boolean | null
    sexuality?: boolean | null
    datingIntention?: boolean | null
    relationshipType?: boolean | null
    work?: boolean | null
    jobTitle?: boolean | null
    college?: boolean | null
    highestDegree?: boolean | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
  }

  export type ShowOnProfileCreateOrConnectWithoutUserDetailsInput = {
    where: ShowOnProfileWhereUniqueInput
    create: XOR<ShowOnProfileCreateWithoutUserDetailsInput, ShowOnProfileUncheckedCreateWithoutUserDetailsInput>
  }

  export type ShowOnProfileCreateManyUserDetailsInputEnvelope = {
    data: ShowOnProfileCreateManyUserDetailsInput | ShowOnProfileCreateManyUserDetailsInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserDetailsInput = {
    update: XOR<UserUpdateWithoutUserDetailsInput, UserUncheckedUpdateWithoutUserDetailsInput>
    create: XOR<UserCreateWithoutUserDetailsInput, UserUncheckedCreateWithoutUserDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserDetailsInput, UserUncheckedUpdateWithoutUserDetailsInput>
  }

  export type UserUpdateWithoutUserDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Prompts?: PromptsUpdateManyWithoutUserNestedInput
    Images?: ImagesUpdateManyWithoutUserNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
  }

  export type UserUncheckedUpdateWithoutUserDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Prompts?: PromptsUncheckedUpdateManyWithoutUserNestedInput
    Images?: ImagesUncheckedUpdateManyWithoutUserNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
  }

  export type ShowOnProfileUpsertWithWhereUniqueWithoutUserDetailsInput = {
    where: ShowOnProfileWhereUniqueInput
    update: XOR<ShowOnProfileUpdateWithoutUserDetailsInput, ShowOnProfileUncheckedUpdateWithoutUserDetailsInput>
    create: XOR<ShowOnProfileCreateWithoutUserDetailsInput, ShowOnProfileUncheckedCreateWithoutUserDetailsInput>
  }

  export type ShowOnProfileUpdateWithWhereUniqueWithoutUserDetailsInput = {
    where: ShowOnProfileWhereUniqueInput
    data: XOR<ShowOnProfileUpdateWithoutUserDetailsInput, ShowOnProfileUncheckedUpdateWithoutUserDetailsInput>
  }

  export type ShowOnProfileUpdateManyWithWhereWithoutUserDetailsInput = {
    where: ShowOnProfileScalarWhereInput
    data: XOR<ShowOnProfileUpdateManyMutationInput, ShowOnProfileUncheckedUpdateManyWithoutUserDetailsInput>
  }

  export type ShowOnProfileScalarWhereInput = {
    AND?: ShowOnProfileScalarWhereInput | ShowOnProfileScalarWhereInput[]
    OR?: ShowOnProfileScalarWhereInput[]
    NOT?: ShowOnProfileScalarWhereInput | ShowOnProfileScalarWhereInput[]
    userDetailsUserId?: StringFilter<"ShowOnProfile"> | string
    gender?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    datingGender?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    sexuality?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    datingIntention?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    relationshipType?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    work?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    jobTitle?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    college?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    highestDegree?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    drink?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    tobacco?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    weed?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
    drugs?: BoolNullableFilter<"ShowOnProfile"> | boolean | null
  }

  export type UserDetailsCreateWithoutShowOnProfileInput = {
    gender: $Enums.Gender
    datingGender: $Enums.Gender
    sexuality?: string | null
    datingIntention?: string | null
    relationshipType?: string | null
    work?: string | null
    jobTitle?: string | null
    college?: string | null
    highestDegree?: string | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
    createdAt?: Date | string
    upadatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserDetailsInput
  }

  export type UserDetailsUncheckedCreateWithoutShowOnProfileInput = {
    userId: string
    gender: $Enums.Gender
    datingGender: $Enums.Gender
    sexuality?: string | null
    datingIntention?: string | null
    relationshipType?: string | null
    work?: string | null
    jobTitle?: string | null
    college?: string | null
    highestDegree?: string | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type UserDetailsCreateOrConnectWithoutShowOnProfileInput = {
    where: UserDetailsWhereUniqueInput
    create: XOR<UserDetailsCreateWithoutShowOnProfileInput, UserDetailsUncheckedCreateWithoutShowOnProfileInput>
  }

  export type UserDetailsUpsertWithoutShowOnProfileInput = {
    update: XOR<UserDetailsUpdateWithoutShowOnProfileInput, UserDetailsUncheckedUpdateWithoutShowOnProfileInput>
    create: XOR<UserDetailsCreateWithoutShowOnProfileInput, UserDetailsUncheckedCreateWithoutShowOnProfileInput>
    where?: UserDetailsWhereInput
  }

  export type UserDetailsUpdateToOneWithWhereWithoutShowOnProfileInput = {
    where?: UserDetailsWhereInput
    data: XOR<UserDetailsUpdateWithoutShowOnProfileInput, UserDetailsUncheckedUpdateWithoutShowOnProfileInput>
  }

  export type UserDetailsUpdateWithoutShowOnProfileInput = {
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    datingGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    sexuality?: NullableStringFieldUpdateOperationsInput | string | null
    datingIntention?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipType?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    highestDegree?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserDetailsNestedInput
  }

  export type UserDetailsUncheckedUpdateWithoutShowOnProfileInput = {
    userId?: StringFieldUpdateOperationsInput | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    datingGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    sexuality?: NullableStringFieldUpdateOperationsInput | string | null
    datingIntention?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipType?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    highestDegree?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPromptsInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    dob: Date | string
    createdAt?: Date | string
    upadatedAt?: Date | string
    userDetails?: UserDetailsCreateNestedManyWithoutUserInput
    Images?: ImagesCreateNestedManyWithoutUserInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
  }

  export type UserUncheckedCreateWithoutPromptsInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    dob: Date | string
    createdAt?: Date | string
    upadatedAt?: Date | string
    userDetails?: UserDetailsUncheckedCreateNestedManyWithoutUserInput
    Images?: ImagesUncheckedCreateNestedManyWithoutUserInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
  }

  export type UserCreateOrConnectWithoutPromptsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
  }

  export type UserUpsertWithoutPromptsInput = {
    update: XOR<UserUpdateWithoutPromptsInput, UserUncheckedUpdateWithoutPromptsInput>
    create: XOR<UserCreateWithoutPromptsInput, UserUncheckedCreateWithoutPromptsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPromptsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPromptsInput, UserUncheckedUpdateWithoutPromptsInput>
  }

  export type UserUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserDetailsUpdateManyWithoutUserNestedInput
    Images?: ImagesUpdateManyWithoutUserNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
  }

  export type UserUncheckedUpdateWithoutPromptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserDetailsUncheckedUpdateManyWithoutUserNestedInput
    Images?: ImagesUncheckedUpdateManyWithoutUserNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
  }

  export type UserCreateWithoutImagesInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    dob: Date | string
    createdAt?: Date | string
    upadatedAt?: Date | string
    userDetails?: UserDetailsCreateNestedManyWithoutUserInput
    Prompts?: PromptsCreateNestedManyWithoutUserInput
    matchesInitiated?: MatchCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchCreateNestedManyWithoutUserBInput
  }

  export type UserUncheckedCreateWithoutImagesInput = {
    id?: string
    firstname: string
    lastname?: string | null
    email: string
    password: string
    dob: Date | string
    createdAt?: Date | string
    upadatedAt?: Date | string
    userDetails?: UserDetailsUncheckedCreateNestedManyWithoutUserInput
    Prompts?: PromptsUncheckedCreateNestedManyWithoutUserInput
    matchesInitiated?: MatchUncheckedCreateNestedManyWithoutUserAInput
    matchesReceived?: MatchUncheckedCreateNestedManyWithoutUserBInput
  }

  export type UserCreateOrConnectWithoutImagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
  }

  export type UserUpsertWithoutImagesInput = {
    update: XOR<UserUpdateWithoutImagesInput, UserUncheckedUpdateWithoutImagesInput>
    create: XOR<UserCreateWithoutImagesInput, UserUncheckedCreateWithoutImagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImagesInput, UserUncheckedUpdateWithoutImagesInput>
  }

  export type UserUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserDetailsUpdateManyWithoutUserNestedInput
    Prompts?: PromptsUpdateManyWithoutUserNestedInput
    matchesInitiated?: MatchUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUpdateManyWithoutUserBNestedInput
  }

  export type UserUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userDetails?: UserDetailsUncheckedUpdateManyWithoutUserNestedInput
    Prompts?: PromptsUncheckedUpdateManyWithoutUserNestedInput
    matchesInitiated?: MatchUncheckedUpdateManyWithoutUserANestedInput
    matchesReceived?: MatchUncheckedUpdateManyWithoutUserBNestedInput
  }

  export type UserDetailsCreateManyUserInput = {
    gender: $Enums.Gender
    datingGender: $Enums.Gender
    sexuality?: string | null
    datingIntention?: string | null
    relationshipType?: string | null
    work?: string | null
    jobTitle?: string | null
    college?: string | null
    highestDegree?: string | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type PromptsCreateManyUserInput = {
    id?: string
    title: string
    desc: string
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type ImagesCreateManyUserInput = {
    id?: string
    imageUrl: string
    createdAt?: Date | string
    upadatedAt?: Date | string
  }

  export type MatchCreateManyUserAInput = {
    id?: string
    userBId: string
    active?: boolean
    chat?: boolean
    unMatchedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchCreateManyUserBInput = {
    id?: string
    userAId: string
    active?: boolean
    chat?: boolean
    unMatchedBy?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserDetailsUpdateWithoutUserInput = {
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    datingGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    sexuality?: NullableStringFieldUpdateOperationsInput | string | null
    datingIntention?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipType?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    highestDegree?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnProfile?: ShowOnProfileUpdateManyWithoutUserDetailsNestedInput
  }

  export type UserDetailsUncheckedUpdateWithoutUserInput = {
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    datingGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    sexuality?: NullableStringFieldUpdateOperationsInput | string | null
    datingIntention?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipType?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    highestDegree?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    showOnProfile?: ShowOnProfileUncheckedUpdateManyWithoutUserDetailsNestedInput
  }

  export type UserDetailsUncheckedUpdateManyWithoutUserInput = {
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    datingGender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    sexuality?: NullableStringFieldUpdateOperationsInput | string | null
    datingIntention?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipType?: NullableStringFieldUpdateOperationsInput | string | null
    work?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    college?: NullableStringFieldUpdateOperationsInput | string | null
    highestDegree?: NullableStringFieldUpdateOperationsInput | string | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    upadatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutUserAInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chat?: BoolFieldUpdateOperationsInput | boolean
    unMatchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userB?: UserUpdateOneRequiredWithoutMatchesReceivedNestedInput
  }

  export type MatchUncheckedUpdateWithoutUserAInput = {
    id?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chat?: BoolFieldUpdateOperationsInput | boolean
    unMatchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutUserAInput = {
    id?: StringFieldUpdateOperationsInput | string
    userBId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chat?: BoolFieldUpdateOperationsInput | boolean
    unMatchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpdateWithoutUserBInput = {
    id?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chat?: BoolFieldUpdateOperationsInput | boolean
    unMatchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userA?: UserUpdateOneRequiredWithoutMatchesInitiatedNestedInput
  }

  export type MatchUncheckedUpdateWithoutUserBInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chat?: BoolFieldUpdateOperationsInput | boolean
    unMatchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutUserBInput = {
    id?: StringFieldUpdateOperationsInput | string
    userAId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    chat?: BoolFieldUpdateOperationsInput | boolean
    unMatchedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowOnProfileCreateManyUserDetailsInput = {
    gender?: boolean | null
    datingGender?: boolean | null
    sexuality?: boolean | null
    datingIntention?: boolean | null
    relationshipType?: boolean | null
    work?: boolean | null
    jobTitle?: boolean | null
    college?: boolean | null
    highestDegree?: boolean | null
    drink?: boolean | null
    tobacco?: boolean | null
    weed?: boolean | null
    drugs?: boolean | null
  }

  export type ShowOnProfileUpdateWithoutUserDetailsInput = {
    gender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingGender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sexuality?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingIntention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    relationshipType?: NullableBoolFieldUpdateOperationsInput | boolean | null
    work?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobTitle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    college?: NullableBoolFieldUpdateOperationsInput | boolean | null
    highestDegree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ShowOnProfileUncheckedUpdateWithoutUserDetailsInput = {
    gender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingGender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sexuality?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingIntention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    relationshipType?: NullableBoolFieldUpdateOperationsInput | boolean | null
    work?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobTitle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    college?: NullableBoolFieldUpdateOperationsInput | boolean | null
    highestDegree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ShowOnProfileUncheckedUpdateManyWithoutUserDetailsInput = {
    gender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingGender?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sexuality?: NullableBoolFieldUpdateOperationsInput | boolean | null
    datingIntention?: NullableBoolFieldUpdateOperationsInput | boolean | null
    relationshipType?: NullableBoolFieldUpdateOperationsInput | boolean | null
    work?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jobTitle?: NullableBoolFieldUpdateOperationsInput | boolean | null
    college?: NullableBoolFieldUpdateOperationsInput | boolean | null
    highestDegree?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drink?: NullableBoolFieldUpdateOperationsInput | boolean | null
    tobacco?: NullableBoolFieldUpdateOperationsInput | boolean | null
    weed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    drugs?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}