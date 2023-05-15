**[linkedin-private-api-expanded](../README.md)**

> [Globals](../globals.md) / ["src/scrollers/home-feed-scroller"](../modules/_src_scrollers_home_feed_scroller_.md) / HomeFeedScroller

# Class: HomeFeedScroller

## Hierarchy

* [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md)<[FeedPost](../interfaces/_src_entities_feed_post_entity_.feedpost.md)\>

  ↳ **HomeFeedScroller**

## Index

### Constructors

* [constructor](_src_scrollers_home_feed_scroller_.homefeedscroller.md#constructor)

### Properties

* [hitEndOfResults](_src_scrollers_home_feed_scroller_.homefeedscroller.md#hitendofresults)
* [limit](_src_scrollers_home_feed_scroller_.homefeedscroller.md#limit)
* [scrollNextCounter](_src_scrollers_home_feed_scroller_.homefeedscroller.md#scrollnextcounter)
* [skip](_src_scrollers_home_feed_scroller_.homefeedscroller.md#skip)
* [type](_src_scrollers_home_feed_scroller_.homefeedscroller.md#type)

### Methods

* [fetch](_src_scrollers_home_feed_scroller_.homefeedscroller.md#fetch)
* [restart](_src_scrollers_home_feed_scroller_.homefeedscroller.md#restart)
* [scrollBack](_src_scrollers_home_feed_scroller_.homefeedscroller.md#scrollback)
* [scrollNext](_src_scrollers_home_feed_scroller_.homefeedscroller.md#scrollnext)

## Constructors

### constructor

\+ **new HomeFeedScroller**(`__namedParameters`: { getHomeFeed: GetHomeFeed ; limit: number = 10; skip: number = 0; type: \"chronological\" \| \"relevance\"  }): [HomeFeedScroller](_src_scrollers_home_feed_scroller_.homefeedscroller.md)

*Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[constructor](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#constructor)*

*Defined in [src/scrollers/home-feed-scroller.ts:7](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/scrollers/home-feed-scroller.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { getHomeFeed: GetHomeFeed ; limit: number = 10; skip: number = 0; type: \"chronological\" \| \"relevance\"  } |

**Returns:** [HomeFeedScroller](_src_scrollers_home_feed_scroller_.homefeedscroller.md)

## Properties

### hitEndOfResults

•  **hitEndOfResults**: boolean = false

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[hitEndOfResults](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#hitendofresults)*

*Defined in [src/scrollers/skip-limit-scroller.ts:10](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/scrollers/skip-limit-scroller.ts#L10)*

___

### limit

•  **limit**: number

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[limit](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#limit)*

*Defined in [src/scrollers/skip-limit-scroller.ts:4](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/scrollers/skip-limit-scroller.ts#L4)*

___

### scrollNextCounter

•  **scrollNextCounter**: number = 0

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollNextCounter](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnextcounter)*

*Defined in [src/scrollers/skip-limit-scroller.ts:8](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/scrollers/skip-limit-scroller.ts#L8)*

___

### skip

•  **skip**: number

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[skip](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#skip)*

*Defined in [src/scrollers/skip-limit-scroller.ts:6](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/scrollers/skip-limit-scroller.ts#L6)*

___

### type

•  **type**: \"chronological\" \| \"relevance\"

*Defined in [src/scrollers/home-feed-scroller.ts:7](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/scrollers/home-feed-scroller.ts#L7)*

## Methods

### fetch

▸ **fetch**(): Promise<[FeedPost](../interfaces/_src_entities_feed_post_entity_.feedpost.md)[]\>

*Overrides [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[fetch](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#fetch)*

*Defined in [src/scrollers/home-feed-scroller.ts:15](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/scrollers/home-feed-scroller.ts#L15)*

**Returns:** Promise<[FeedPost](../interfaces/_src_entities_feed_post_entity_.feedpost.md)[]\>

___

### restart

▸ **restart**(): void

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[restart](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#restart)*

*Defined in [src/scrollers/skip-limit-scroller.ts:55](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/scrollers/skip-limit-scroller.ts#L55)*

**Returns:** void

___

### scrollBack

▸ **scrollBack**(): Promise<[FeedPost](../interfaces/_src_entities_feed_post_entity_.feedpost.md)[]\>

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollBack](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollback)*

*Defined in [src/scrollers/skip-limit-scroller.ts:36](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/scrollers/skip-limit-scroller.ts#L36)*

**Returns:** Promise<[FeedPost](../interfaces/_src_entities_feed_post_entity_.feedpost.md)[]\>

___

### scrollNext

▸ **scrollNext**(): Promise<[FeedPost](../interfaces/_src_entities_feed_post_entity_.feedpost.md)[]\>

*Inherited from [SkipLimitScroller](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md).[scrollNext](_src_scrollers_skip_limit_scroller_.skiplimitscroller.md#scrollnext)*

*Defined in [src/scrollers/skip-limit-scroller.ts:19](https://github.com/khanhtranngoccva/linkedin-private-api/blob/355192d/src/scrollers/skip-limit-scroller.ts#L19)*

**Returns:** Promise<[FeedPost](../interfaces/_src_entities_feed_post_entity_.feedpost.md)[]\>
