**[linkedin-private-api-expanded](../README.md)**

> [Globals](../globals.md) / ["src/repositories/feed.repository"](../modules/_src_repositories_feed_repository_.md) / FeedRepository

# Class: FeedRepository

## Hierarchy

* **FeedRepository**

## Index

### Constructors

* [constructor](_src_repositories_feed_repository_.feedrepository.md#constructor)

### Methods

* [getHome](_src_repositories_feed_repository_.feedrepository.md#gethome)

## Constructors

### constructor

\+ **new FeedRepository**(`__namedParameters`: { client: [Client](_src_core_client_.client.md)  }): [FeedRepository](_src_repositories_feed_repository_.feedrepository.md)

*Defined in [src/repositories/feed.repository.ts:61](https://github.com/khanhtranngoccva/linkedin-private-api/blob/17c022a/src/repositories/feed.repository.ts#L61)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { client: [Client](_src_core_client_.client.md)  } |

**Returns:** [FeedRepository](_src_repositories_feed_repository_.feedrepository.md)

## Methods

### getHome

▸ **getHome**(`__namedParameters`: { limit: number = 10; skip: number = 0; type: \"chronological\" \| \"relevance\" = "relevance" }): [HomeFeedScroller](_src_scrollers_home_feed_scroller_.homefeedscroller.md)

*Defined in [src/repositories/feed.repository.ts:67](https://github.com/khanhtranngoccva/linkedin-private-api/blob/17c022a/src/repositories/feed.repository.ts#L67)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { limit: number = 10; skip: number = 0; type: \"chronological\" \| \"relevance\" = "relevance" } |

**Returns:** [HomeFeedScroller](_src_scrollers_home_feed_scroller_.homefeedscroller.md)
