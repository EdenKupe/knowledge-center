---
pagename: Shift scheduler configuration guide
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: messaging
subtitle: Define agents working hours and set consumer expectations for response time
  during a messaging conversation
level3: ''
permalink: " contact-center-management-messaging-operations-shift-scheduler-configuration-guide.html"
isTutorial: false
date: 2019-01-20 11:26:50 +0200

---
## Introduction

LivePerson enables you to define your account’s working hours, in order to set the most accurate expected response time for your consumers during a messaging conversation.

You may define your account’s working hours in two ways:

1. **Manual definition (default)** - whenever your contact center starts a shift, manually set the Shift Scheduler to “Online.” Whenever your contact center is closed, manually set the shift scheduler to “Off hours.”
2. **Automatic Scheduler** - define your workdays per day of the week as well as special occasions ahead of time.

You may choose from each of the methods above according to your brand’s needs.

## Terminology

* **SLA** = Service Level Agreement. The response time configured within LiveEngage to handle messaging conversations for either all conversations (default), urgent conversations, or first time consumers. The SLA can be set per the account level (default) or be overridden per skill.
    
  ![](https://lh5.googleusercontent.com/2qqa1WprsW6eniUHGPg3QFrI9-QGAYZe6iyklE6MWPTcT019bfapAlW169DJV2TG8mK22eSwFo-AQKMikf5SfLsLipq1saF7RPcAiw7oc7OX8cOMConfCbxTXu2FTvjuXtf8qgyR =327x183)
* **TTR** = Time To Response. This time is set according to the current shift status (online/off hours). If the shift is currently active, the TTR equals 0. If the shift is currently inactive, the TTR equals the time until the next shift will start.
* **ETTR** = Expected Time To Response. The expected response time when the consumer will be answered by an agent. The ETTR is displayed to consumers during a messaging conversation via the automatic messages mechanism.  
  ETTR = TTR + SLA.

  **For example:**
* If the default SLA is 1 hour and the account is currently on an active shift, the ETTR = SLA = 1 hour.
* If the default SLA is 1 hour and the account is currently offline, and the next shift will begin in 12 hours from now, the ETTR = 12 + 1 = 13 hours.

## Manual working hours

1. Click the downward arrow next to the user name and click "Shift Scheduler"  
   ![](https://lh4.googleusercontent.com/JvQYkDpnn4lnXlKepOF_aiJaUTiqKY3TZJ3o8CwXZ41fOBX2AAOjhSXA0Y1URT2ZyLg4nYwBaYdfQiMji7UXtT4w8sgFBcqcjHdULLr32B_Du5Gkim86057PIWa9CQc9Q154i1Fx =233x329)

2\. The Account Shift Scheduler screen will now be displayed. Choose the “Manual” option.

3\. Define your current shift status:

1. Choose “Online” when your connection center is active.
   * Consumers will get auto messages with expected time to response equal to the conversation SLA.
2. Choose “Off hours” when your connection center is inactive.
   * Define the next shift start date
   * Define the next shift start time
   * Consumers will get auto messages with expected time to response equal to the time until next shift time + the conversation SLA.
   * LiveEngage will automatically set to “Online” again on the next shift date and time.
3. Save the page.

## Automatic Scheduler ![](https://lh6.googleusercontent.com/62w3K8t07_dp-tU11r7ZjC8Ou2zaNqWu2WzGquq_2mSjqxAFBeA1KWY0WUdHQfiwi8GF36kBlu_8dIVWEduHgw9QBVCqDbo6WNvxRq-VieMRNd5ETJg7a2z01J7lNYL1v4EwQJ1W =602x119)

The configuration of scheduled [Workdays](https://developers.liveperson.com/workdays-api-overview.html) allows you to set hours of operation for specific days of the week and assign them as the account's default settings or for each individual skill, which overrides the default settings. During the specified hours of operation, consumers will receive working hours **auto messages** and the **expected time to response message** for the skill as defined in the account. Outside of the specified hours of operation, consumers will receive off hours auto messages and the expected time to response including the time until the next shift begins.

The expected time to respond is also available for the agent, so it is clear to him when the consumer is expecting his reply.

The configuration of [Special Occasions](https://developers.liveperson.com/account-configuration-special-occasions-overview.html) allows you to set specific dates in which there is an exception to the hours of operation defined by the Workdays API or through the LiveEngage UI, for example, working hours during public holidays. The expected behavior on the visitor side as far as automatic messages and time to response is exactly the same as Workdays.  
**Note**: Special occasions do not modify hours of operation defined by Workdays, but instead override them.

**To view limitations, clarifications and best practices for working hours management, refer to this** [**document**](https://s3-eu-west-1.amazonaws.com/ce-sr/CA/Working+hours+management+API+%2B+UI+-+Limitations%2C+Clarifications+%26+Best+Practices.pdf)**.**

## Configuration

**(Needed for both API + UI)**

1. Configure [Automatic Messages](https://liveengage.liveperson.net/a/new/?connectionOpenArticle=automatic-messages) on your account:
   * To enable Automatic Messages on your LiveEngage account, please contact your LivePerson account team.
2. Mobile App (SDK) customers:
   * Use SDK versions 2.8 or higher.
   * The TTR toaster is no longer supported, even if it’s still enabled. Therefore, it is recommended to turn the TTR toaster message off.
3. In case you are using the “[off hours by number of logged in agents](https://s3-eu-west-1.amazonaws.com/ce-sr/Release+Notes/2018/May+2018+Part+2.pdf)” feature - it is recommended to disable it. The working hours feature is the permanent solution to the use case this workaround was intended for.  
   Contact your account team to disable it.
4. Customize [Automatic Messages](https://liveengage.liveperson.net/a/new/?connectionOpenArticle=automatic-messages) on your account.
   * Disable the “Off hours message mid conversation” on your LiveEngage account. Currently this message is not supported together with the working hours feature.  
     Resolution date: October 31, 2018.

![](https://lh4.googleusercontent.com/RzULpYi1fr82BJBXpG1WG9QL1tVixasyJ91nFimwyz_CFm2wUjUbOOMmk_87T-t5q4hz-84JVzdtx3BjTnYfVkfbwd6gIxDzjjaJHn8PetJ3qh2W9dG22fj_APQXGiRbmC3xsPRc =518x249)

## Workdays and Special Occasions within LiveEngage

### Accessing the Schedule/Special Occasion libraries

Scheduling items or Special occasion items can be created through the Schedule or Special Occasion libraries within LiveEngage. You may access the library in 2 ways:

### Via the Account Shift Scheduler page:

4\. Click the downward arrow next to the user name and click "Shift Scheduler."

5\. The Account Shift Scheduler screen will now be displayed. Choose the “Automatic Scheduler” option.

6\. Under the “Define shift status configuration,” click the “Set days and hours” button in order to access the Schedule library, or click the “Set special occasions” button to access the Special Occasion library:

### Via the Skills page:

1. Go to the Skills tab, and from the skills list select the desired skill. Click the skill in order to edit it.
2. Scroll down to the “Working hours” section.
3. Under the “Working days and hours” section, choose the “Custom settings” radio button.  
   Click the “Set days and hours” button in order to access the Schedule library (see image)
4. Under the “Special occasions” section, choose the “Custom settings” radio button. Click the “Set special occasions” button to access the Special Occasion library:

![](https://lh6.googleusercontent.com/xRxuBmPXOP7jFWmXXAp8x-ACGL14Ai-IIRmVWfxw0ZuZ4qHhn2Imre-4YlOa_Dns8iVdX1j-HZ-kdYh0jTtMA2f4-YAZ9mamkW359JtcXldxKiMQr9GBpgysQKVDl_PvgKgLZMiX =602x357)

The Schedule library / Special Occasions library will now be displayed on your LiveEngage screen:

![](https://lh5.googleusercontent.com/VDjD1rn5xqJWuEzwaszYnMmlX-BhbPqIhQ5ZvoudxHFzbBqJdFwaW7rDmZyM0wifGRIN0fBL2DEMx-AILagWDkh5dMrbPBDvYH-yj7yx09h-BZSU6Qu1Ef-pcKplYIkaxP9saSRx =602x275)

### Creating a new workday item

1. [Access the Scheduling library](https://docs.google.com/document/d/1dvHvTsVpGLMN0Q4r2PE4ANYKGDPcVDoF_0Nal9BNRpg/edit#heading=h.6ay2hihmcz4s) on your LiveEngage account.
2. Click “Add new”
3. Fill in the Schedule item name, description (optional) and timezone
4. Define the hours of operation for each day of the week.

. ![](https://lh4.googleusercontent.com/vOmG19IedtOWP7pzs95fkdwJIQlIBC3zmh-Kmk0TRnCrQdTttFodp7u97SLX6nN22zUTrB4iKaY9LBwVYQ8JO73AAeTDbuzcVtZlLsliKaRnUChH4tNhChSdy43kGJfg_bPnx6NC =542x424)

You may choose between:

* **All hours (default)** - this day will be considered as active from 12:00 am until 11:59 pm.
* **Custom** - manually type the activation hours of the day. The input must be in the following format: “HH:MM am/pm” and in 5 minute intervals only.

The only exception is 11:59 pm, which can also be defined in order to define a shift that lasts until midnight.

* **Off** - this day will be considered inactive from 12:00 am until 11:59 pm.

1. Defining multiple shifts per day.

You may also define multiple shifts per single day of the week. Simply click the “+Add” button in order to split the day’s activation hours and add the shifts hours.

1. Save the page.
2. The new scheduling item will now appear in the schedule library.

### **Creating a new special occasion item**

8\. [Access the Special Occasion library](https://docs.google.com/document/d/1dvHvTsVpGLMN0Q4r2PE4ANYKGDPcVDoF_0Nal9BNRpg/edit#heading=h.6ay2hihmcz4s) on your LiveEngage account.

9\. Click “Add new”

10\. Fill in the Special Occasion item name, description (optional) and timezone

11\. In order to add new occasions to the list, click the “Add line” button

12\. A new occasion line will be added to the table. Fill in the occasion name, timeframe, shift status, and shift time

13\. For the shift status, you may choose between:

* **Off (default)** - this occasion will be considered inactive from 12:00 am until 11:59 pm, in its defined timeframe.
* **All hours** - this occasion will be considered active from 12:00 am until 11:59 pm, in its defined timeframe.
* **Custom** - manually type the activation hours of the day. The input must be in the following format: “HH:MM am/pm” and in 5 minute intervals only.

The only exception is 11:59 pm, which can also be defined for a shift that lasts until midnight.

14\. Defining multiple shifts per occasion:

You may also define multiple shifts per occasion. Simply hover the occasion line, then click the “+Add” button in order to split the occasion activation hours, and add the shifts hours.

15\. Save the page.

16\. The new special occasion item will now appear in the special occasion library.

### Assigning workdays/special occasions per account

1. [Access the Schedule/Special occasions library via the account Shift Scheduler page](https://docs.google.com/document/d/1dvHvTsVpGLMN0Q4r2PE4ANYKGDPcVDoF_0Nal9BNRpg/edit#heading=h.ya1ndg5bkttd)
2. Choose the item which you would like to assign as your account default.  
   The item will be marked with an orange border.
3. Click “Done”:
4. The Account Shift scheduler page will be displayed, and a summary of the Schedule/Special Occasion item details will be presented on the screen for you to review.
5. Click “Save” in order to save your Account Shift Scheduler changes.

### Assigning workdays/special occasions per skill

1. [Access the Schedule/Special occasion library via the account Skills page](https://docs.google.com/document/d/1dvHvTsVpGLMN0Q4r2PE4ANYKGDPcVDoF_0Nal9BNRpg/edit#heading=h.w1eb73h8y3cy)
2. Choose the item which you would like to assign as your account default.  
   The item will be marked with an orange border.
3. Click “Done”:
4. The Skill page will be displayed, and a summary of the Schedule/Special Occasion item details will be presented on the screen for you to review.
5. Click “Save” in order to save the skill with it’s new working hours changes.

![](https://lh6.googleusercontent.com/TowZDsgLXnwPow9-BqVMEGha-WX3Ms2AyUhnHRu-qJ-i7I4VYF0qTB-aH5vUsSCCdzLEWUYUVPEFE3hVGVNroUEczsR5hXidV_AJ3AG7biL8nsU1Sv6eUBMi5nL6IAc0OAPohpNB =536x598)

## Workdays and Special Occasions using the APIs

### Creating a new workday item

See [Workdays API -> Create Workdays Object](https://developers.liveperson.com/account-configuration-workdays-create.html) on the developers community.

### Creating a new special occasion item

See [Special Occasion API -> Create Special Occasion Object](https://developers.liveperson.com/account-configuration-special-occasions-create.html) on the developers community.

### Assigning workdays/special occasions per account

The **“isDefault”** field determines whether a workdays object is the default for the entire account. Only one object can be set as the default for each account.

{: .notice}
if you create a new workdays object with an isDefault key set to true when there's already a special occasions object set as default for the account, LivePerson validation will set the new object created as the default. Refer to [Update workdays  ](https://developers.liveperson.com/account-configuration-workdays-create.html)

### Assigning workdays/special occasions per skill

In order to assign a workdays item to a specific skill you should use the [Skills API](https://developers.liveperson.com/overview.html), and assign a **workingHoursId** or **specialOccasionId** field to the skill.

Refer to [Skills API - Appendix](https://developers.liveperson.com/administration-skills-appendix.html) for additional details.

## API Permissions

In order to generate App Keys to access the API, follow the following steps:

1. Log in to your LiveEngage account.
2. Go to Campaigns → Campaign Footnote → Data sources
3. Go to API tab → Add new API key
4. Under Administration, choose the Working Hours API  
   Then, simply choose the permission needed out of:

![](https://lh4.googleusercontent.com/gLOUpqj0NlHmQ79TnQA1qZD2w2gFAmJTYHfPcW9jaNQ8wApfSRyWPujQVXLPr_oNZazDxWUc_o2JaB_cUxOXk3RH3BV9k-4batbIDBjterO3_9adV4JOmTmzcxdAkMTwnBaTFXCl =602x193)

* **Read** - to access (read) all Workdays or Special Occasions defined on your account.
* **Write** - to create/edit/delete Workdays or Special Occasions defined on your account.
* **Edit skill working hours** - to create/update/delete skill’s Workdays or Special Occasions field.  
  ![](https://lh6.googleusercontent.com/-C6eI5I9z7Djwb_5CmnGsMy9EeqD1QMcSlLV5tf1H73jwl5F3TqQqkPA3vJJE_LWXNOPS-edl-_05S-lV-TE6B4mf56JNqwgbNxpWIaZVSsHFxyYxDHhFF5a19TGITjrHbrdtwau =511x485)

5\. Click Save. The Authentication details will now be displayed. Use it in order to access the API.

For additional info on creating API keys - [LiveEngage APIs and SDKs](https://liveengage.liveperson.net/a/new/?connectionOpenArticle=get-started-LE-APIs) documentation.

## Profiles and permissions

### Permission: Configure skill workdays and special occasions

* New permission has been added to Administrator and Agent Manager roles: “Configure skill workdays and special occasions”
* Permission default states:
  * ON by default for Administrators
  * OFF by default for Agent Managers
* Users with this permission set to “Off” will not be able to edit any skills’ workdays nor special occasions.
* The following profile configurations are incorrect and not supported:
  * Administrator:
    * Set the “Skill administration” permission as OFF but keeping the “Configure skill workdays and special occasions” permission ON
  * Agent manager:
    * Set the “Edit skill” permission as OFF but keeping the “Configure skill workdays and special occasions” permission ON

### Permission: Configure account Shift Scheduler

* The existing permission “Configure Shift Status” has been renamed to “Configure account Shift Scheduler”
* This permission is available both for Administrator and Agent Manager, and set to ON by default.
* Users with this permission enabled will be able to edit the account Workdays as well as Special Occasions.

![](https://lh5.googleusercontent.com/h_1KnSuwLl2rtXokLx97u-trvYJQ45eXKMqZEztbXpeIvH_-tFK_Wa13_8_ix_Hec_6kmqm7OOq6uL-c0FaVi1ZbwYQBW1ExTwttDEQJ6ENkuJn9ChiAh75pxrDA0_pfn1hRz-uD =602x293)