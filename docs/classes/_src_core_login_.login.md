**[linkedin-private-api-expanded](../README.md)**

> [Globals](../globals.md) / ["src/core/login"](../modules/_src_core_login_.md) / Login

# Class: Login

## Hierarchy

* **Login**

## Index

### Constructors

* [constructor](_src_core_login_.login.md#constructor)

### Methods

* [deserialize](_src_core_login_.login.md#deserialize)
* [serialize](_src_core_login_.login.md#serialize)
* [userCookie](_src_core_login_.login.md#usercookie)
* [userPass](_src_core_login_.login.md#userpass)

## Constructors

### constructor

\+ **new Login**(`__namedParameters`: { client: [Client](_src_core_client_.client.md)  }): [Login](_src_core_login_.login.md)

*Defined in [src/core/login.ts:22](https://github.com/khanhtranngoccva/linkedin-private-api/blob/a93f067/src/core/login.ts#L22)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { client: [Client](_src_core_client_.client.md)  } |

**Returns:** [Login](_src_core_login_.login.md)

## Methods

### deserialize

▸ **deserialize**(`data`: Record<string, string\>): void

*Defined in [src/core/login.ts:42](https://github.com/khanhtranngoccva/linkedin-private-api/blob/a93f067/src/core/login.ts#L42)*

#### Parameters:

Name | Type |
------ | ------ |
`data` | Record<string, string\> |

**Returns:** void

___

### serialize

▸ **serialize**(): Record<string, string\>

*Defined in [src/core/login.ts:38](https://github.com/khanhtranngoccva/linkedin-private-api/blob/a93f067/src/core/login.ts#L38)*

**Returns:** Record<string, string\>

___

### userCookie

▸ **userCookie**(`__namedParameters`: { cookies: { JSESSIONID: string ; li_at?: undefined \| string  } ; useCache: boolean = true; username: undefined \| string  }): Promise<[Client](_src_core_client_.client.md)\>

*Defined in [src/core/login.ts:123](https://github.com/khanhtranngoccva/linkedin-private-api/blob/a93f067/src/core/login.ts#L123)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { cookies: { JSESSIONID: string ; li_at?: undefined \| string  } ; useCache: boolean = true; username: undefined \| string  } |

**Returns:** Promise<[Client](_src_core_client_.client.md)\>

___

### userPass

▸ **userPass**(`__namedParameters`: { password: undefined \| string ; useCache: boolean = true; username: string  }): Promise<[Client](_src_core_client_.client.md)\>

*Defined in [src/core/login.ts:87](https://github.com/khanhtranngoccva/linkedin-private-api/blob/a93f067/src/core/login.ts#L87)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { password: undefined \| string ; useCache: boolean = true; username: string  } |

**Returns:** Promise<[Client](_src_core_client_.client.md)\>
