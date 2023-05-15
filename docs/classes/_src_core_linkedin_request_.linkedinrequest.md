**[linkedin-private-api-expanded](../README.md)**

> [Globals](../globals.md) / ["src/core/linkedin-request"](../modules/_src_core_linkedin_request_.md) / LinkedInRequest

# Class: LinkedInRequest

## Hierarchy

* [Request](_src_core_request_.request.md)

  ↳ **LinkedInRequest**

## Index

### Constructors

* [constructor](_src_core_linkedin_request_.linkedinrequest.md#constructor)

### Properties

* [auth](_src_core_linkedin_request_.linkedinrequest.md#auth)
* [conversation](_src_core_linkedin_request_.linkedinrequest.md#conversation)
* [feed](_src_core_linkedin_request_.linkedinrequest.md#feed)
* [invitation](_src_core_linkedin_request_.linkedinrequest.md#invitation)
* [message](_src_core_linkedin_request_.linkedinrequest.md#message)
* [profile](_src_core_linkedin_request_.linkedinrequest.md#profile)
* [request](_src_core_linkedin_request_.linkedinrequest.md#request)
* [search](_src_core_linkedin_request_.linkedinrequest.md#search)

### Methods

* [get](_src_core_linkedin_request_.linkedinrequest.md#get)
* [post](_src_core_linkedin_request_.linkedinrequest.md#post)
* [setHeaders](_src_core_linkedin_request_.linkedinrequest.md#setheaders)

## Constructors

### constructor

\+ **new LinkedInRequest**(`__namedParameters?`: { proxy: undefined \| AxiosProxyConfig  }): [LinkedInRequest](_src_core_linkedin_request_.linkedinrequest.md)

*Inherited from [Request](_src_core_request_.request.md).[constructor](_src_core_request_.request.md#constructor)*

*Defined in [src/core/request.ts:17](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/request.ts#L17)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`__namedParameters` | { proxy: undefined \| AxiosProxyConfig  } | {} |

**Returns:** [LinkedInRequest](_src_core_linkedin_request_.linkedinrequest.md)

## Properties

### auth

•  **auth**: AuthRequest = new AuthRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:21](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/linkedin-request.ts#L21)*

___

### conversation

•  **conversation**: ConversationRequest = new ConversationRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:11](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/linkedin-request.ts#L11)*

___

### feed

•  **feed**: FeedRequest = new FeedRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:23](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/linkedin-request.ts#L23)*

___

### invitation

•  **invitation**: InvitationRequest = new InvitationRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:13](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/linkedin-request.ts#L13)*

___

### message

•  **message**: MessageRequest = new MessageRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:15](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/linkedin-request.ts#L15)*

___

### profile

•  **profile**: ProfileRequest = new ProfileRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:17](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/linkedin-request.ts#L17)*

___

### request

•  **request**: AxiosInstance

*Inherited from [Request](_src_core_request_.request.md).[request](_src_core_request_.request.md#request)*

*Defined in [src/core/request.ts:17](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/request.ts#L17)*

___

### search

•  **search**: SearchRequest = new SearchRequest({ request: this })

*Defined in [src/core/linkedin-request.ts:19](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/linkedin-request.ts#L19)*

## Methods

### get

▸ **get**<T\>(`url`: string, `reqConfig?`: ConfigNonFullResponse): Promise<T\>

*Inherited from [Request](_src_core_request_.request.md).[get](_src_core_request_.request.md#get)*

*Defined in [src/core/request.ts:31](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/request.ts#L31)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |
`reqConfig?` | ConfigNonFullResponse |

**Returns:** Promise<T\>

▸ **get**<T\>(`url`: string, `reqConfig?`: ConfigFullResponse): Promise<AxiosResponse<T\>\>

*Inherited from [Request](_src_core_request_.request.md).[get](_src_core_request_.request.md#get)*

*Defined in [src/core/request.ts:32](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/request.ts#L32)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |
`reqConfig?` | ConfigFullResponse |

**Returns:** Promise<AxiosResponse<T\>\>

___

### post

▸ **post**<T\>(`url`: string, `data`: string \| Record<string, unknown\>, `reqConfig?`: ConfigNonFullResponse): Promise<T\>

*Inherited from [Request](_src_core_request_.request.md).[post](_src_core_request_.request.md#post)*

*Defined in [src/core/request.ts:39](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/request.ts#L39)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |
`data` | string \| Record<string, unknown\> |
`reqConfig?` | ConfigNonFullResponse |

**Returns:** Promise<T\>

▸ **post**<T\>(`url`: string, `data`: string \| Record<string, unknown\>, `reqConfig?`: ConfigFullResponse): Promise<AxiosResponse<T\>\>

*Inherited from [Request](_src_core_request_.request.md).[post](_src_core_request_.request.md#post)*

*Defined in [src/core/request.ts:40](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/request.ts#L40)*

#### Type parameters:

Name |
------ |
`T` |

#### Parameters:

Name | Type |
------ | ------ |
`url` | string |
`data` | string \| Record<string, unknown\> |
`reqConfig?` | ConfigFullResponse |

**Returns:** Promise<AxiosResponse<T\>\>

___

### setHeaders

▸ **setHeaders**(`headers`: Record<string, string\>): void

*Inherited from [Request](_src_core_request_.request.md).[setHeaders](_src_core_request_.request.md#setheaders)*

*Defined in [src/core/request.ts:27](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/core/request.ts#L27)*

#### Parameters:

Name | Type |
------ | ------ |
`headers` | Record<string, string\> |

**Returns:** void
