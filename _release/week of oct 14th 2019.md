---
pagename: Week of October 14th
categoryName: Getting started
subCategoryName: Web messaging
indicator: chat
subtitle: ''
level3: ''
permalink: release-notes-2019-october-week-of-october-14th.html
isTutorial: false
isNew: false
date: 2019-10-14
---
These release notes include new features arriving to LiveEngage during October 2019. Exact delivery dates may vary, and brands may therefore not have immediate access to all features on the date of publication.

**Please contact your LivePerson account team for the exact dates on which you will have access to the features.**

{: .important}  
The timing and scope of these features or functionalities remain at the sole discretion of LivePerson and are subject to change.

## Intent Analyzer

### Type: New functionality

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook Messenger</th>

<th>ABC</th>

<th>Line</th>

<th>Google RCS</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

<th>WeChat</th>

<th>Chat</th>

</tr>

</thead>

<tbody>

<tr>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>No</td>

</tr>

</tbody>

</table>

</div>

LivePerson’s Intent Analyzer uses AI to examine consumer conversations, identify intents in real-time, and deliver actionable insights for brands to quickly optimize messaging and automation operations.

### Key features of Intent Analyzer

* **Bots and human agents intent detection**
  Real-time intent recognition for both bots and human-handled conversations.
* **Unified platform**
  With direct integration to LivePerson’s LiveEngage, customers can use a unified tool for self-service intent building and analytics.
* **Self-service tools**
  Self-service tools like intent builder, Intent Analyzer dashboard that brands can use to build and analyze intents where data can be used to inform automations in Conversation Builder, routing in Maven AI and business decisions in real-time.
* **Holistic dashboard**
  The Intent Analyzer Dashboard helps contact center managers and business decision makers analyze and optimize messaging operations for improved customer interactions.
* **Implementation**
  Access to professional services (ETS) for starter packs and modeling.
* **Starter packs for common verticals**
  We’ve identified the top intents for FinServe, Telco, and E-commerce and we provide brand-specific training data for key high-impact intents. More to come!
* **API**
  Brands will have the ability to query Intent Analyzer classification data from public messaging interactions API.

### Key benefits for brands

**Real-time analytics**
Make smart business decisions backed by data and understand valuable consumer intents.

**Optimize operations intent by intent**
You can optimize operational processes and respond to customers with a strategic approach in real- time.

**Ease of use**
LivePerson Intent Analyzer has full integration with Maven AI and Conversation Builder that includes all the tools you need to create personalized customer journeys.

**Machine learning**
Be the first to harness the power of machine learning and start leading an intent-driven business to transform your brand.

**Data-driven automations**
Dynamically route your consumers to the right bot or human agent and refine dialogue flows with proven conversations to optimize bots.

For more information on Intent Analyzer and how to set up please [click here](https://knowledge.liveperson.com/ai-bots-automation-liveintent-overview.html)

### Screenshots

![](img/liveintent_dashboard-section-1.png)

## New Data Analytics Report for Agent Survey

### Type: new functionality

<div class="tablecontainer">

<table class="releasenotes">

<thead>

<tr class="categoryrow">

<th>Web Messaging</th>

<th>Mobile App Messaging</th>

<th>Twilio</th>

<th>Facebook Messenger</th>

<th>ABC</th>

<th>Line</th>

<th>Google RCS</th>

<th>Google My Business</th>

<th>WhatsApp Business</th>

<th>CM</th>

<th>WeChat</th>

<th>Chat</th>

</tr>

</thead>

<tbody>

<tr>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>Yes</td>

<td>No</td>

</tr>

</tbody>

</table>

</div>

**Available to all customers?** Only brands that have the agent survey enabled.

The Agent Survey Report provides brands who have enabled the survey to report on data at the survey, question and agent skill level. The report provides detailed insight into the following on a daily and monthly basis:

* Answer Distribution Survey Level
* Answer Distribution at the Agent Skill level
* Survey Level / Closure Rates and Reasons
* Question Level
* Question Level Agent Skill

**Metrics include:**

* Answer Counts & Ratios
* Closed Survey Counts and Rates

### How to request the new report:

Account managers are required to submit a FreshDesk request through the “Analytics and Insights” icon on the hub:

1. Brand requesting report should include Account ID
2. Include email address for each recipient or email distribution (preferred)

## Web experiences

### Type: Bug fix

**Available to all customers?** Yes

If the site setting ‘messaging.agent.photo.size’ was changed from the default 800px to a larger value, the consumer side would still downscale the image to 800px causing the image on the agent side to appear blurry.

This has now been fixed and consumer side will now take into consideration the value of ‘messaging.agent.photo.size’ so that the image is uploaded in the correct size.
