---
pagename: Overview
categoryName: Bots & automation
subCategoryName: LiveIntent
indicator: messaging
subtitle: LiveIntent provides real-time intent identification to help businesses optimize
  operations and enable data-driven automation programs
level3: ''
permalink: ai-bots-automation-liveintent-overview.html
isTutorial: false
isNew: false

---

## Introduction

LivePerson's [Conversational AI](https://developers.liveperson.com/conversational-ai-platform-platform-overview.html) now includes a one-stop hub for discovering, [tracking, and maintaining](ai-bots-automation-liveintent-dashboard.html) intents in real-time.

<img class="fancyimage" style="width:750px" src="img/liveintent_dashboard-section-1.png">

LiveIntent leverages the [NLU engine](https://developers.liveperson.com/conversational-ai-platform-natural-language-understanding-nlu-engines.html) of your choice to analyze and track the performance of your intent libraries created in [Intent Builder](https://developers.liveperson.com/intent-builder-overview.html).

## Example Use Cases

### Business Analyst

#### Challenge

An Airline doesn’t have a real-time way to understand customer contacts by intent.

#### How LiveIntent Helps

The analyst uses LiveIntent to discover, define, and enable the following high impact intents

1. Customer doesn’t understand policy changes
2. Customer can't find their discount code
3. The discount code doesn’t work
4. Customer wants to cancel their account

#### Outcome

The analyst enables detailed real-time insight into the problem by defining intents

### Agent Manager

#### Challenge
There is influx in account cancellations related to the policy changes

#### How LiveIntent Helps

The Agent Manager uses the LiveIntent dashboard to explore conversations with the intent “Cancel my account.”

He discovers that some agents are successfully able to redirect the conversation and prevent cancelation by offering a concession. He uses this insight to develop a new policy

#### Outcome

The Agent Manager is able to quickly roll out a new training which results in a lower account cancellation rate

### Bot Builder

#### Challenge

The Bot Builder wants to use automation to help with influx of messages related to a policy change.

#### How LiveIntent Helps

The Bot Builder reviews the LiveIntent dashboard and notices that the “can’t find discount code” intent is, both, a high volume intent and is easily automatable.

She creates a bot in Conversation Builder for handling these requests and creates an intent-based routing rule in Maven that automatically directs customers to the bot.

#### Outcome

The company is able to greatly reduce the volume of agent conversations related to the policy change.

## Getting Started

To enable LiveIntent on your account, please contact your LivePerson account representative. 

### Starter Pack Quick Start

If you do **not** already have intents created in Intent Builder, and if you would like to **get up to speed quickly**, LiveIntent offers starter packs filled with common intents for various different business verticals. These starter packs leverage your historical transcript data to automatically create a model for your brand.

To get started with starter packs, please contact your account representative.

### Manual Setup

If you do **not** already have intents created in Intent Builder, but you'd like to set these up **manually**, [follow the steps in Intent Builder](https://developers.liveperson.com/intent-builder-overview.html) to create a domain, intents, [enable liveintent](https://developers.liveperson.com/intent-builder-overview.html#liveintent), and add training phrases.

If you have **intents in an external system**, you can [import](https://developers.liveperson.com/intent-builder-overview.html#adding-a-domain) those into Intent Builder to get started quickly.

If you have **intents in Intent Builder** already, [see here](https://developers.liveperson.com/intent-builder-overview.html#liveintent) for how to enable them in LiveIntent.

{: .notice}
Please see [this guide](https://knowledge.liveperson.com/ai-bots-automation-liveintent-liveintent-tips.html) for tips on using Intent Builder with LiveIntent

## Using LiveIntent

When you have intents and they are enabled for LiveIntent, you can view your data in the [LiveIntent dashboard](ai-bots-automation-liveintent-dashboard.html).
<!--
See [LiveIntent Best Practices](liveintent-best-practices.html) for some common usage flows and best practices.
-->
