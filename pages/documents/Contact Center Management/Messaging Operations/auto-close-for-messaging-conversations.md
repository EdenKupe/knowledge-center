---
pagename: Auto close for messaging conversations
categoryName: Contact center management
subCategoryName: Messaging operations
indicator: both
subtitle: 'Manage expectations and keep consumers informed about expected wait times '
level3: ''
permalink: auto-close-for-messaging-conversations
isTutorial: false
date: 2019-01-17 12:28:55 +0200
published: false

---
To help agents manage their active connections list effectively, brands are able to configure conversations to automatically close after they have been inactive for a pre configured amount of time. Auto close provides a seamless experience for consumers; they will not receive an exit survey, nor see a separator within the conversation thread. 

For example, if a conversation has been idle for ten days, it can be automatically closed and moved to the closed conversations list. If the consumer sends a message after this time, it will be treated as a new incoming conversation.  

![](https://lh3.googleusercontent.com/vIXotKq28wRbTuN7bjNEiRTsAM41NlRt-TgLJS21Mk1g9l9e3SZjABFmNBy5MseaHvkGYyEPTVFp_hLj2zJItjTKfPaE8BxuruBUM1aO1NcVg_ZnjMk1LsRPJTzPdjWWR8Htij77 =309x268)

**Note:** 

* Brands can configure auto close for any time period between one hour and 90 days; the default setting is 90 days. 
* A conversation will only auto close if it is pending a consumer response; for conversations pending an agent response, auto close will not apply.
* By default a conversation where the agent has set a manual response time will not be auto closed. This logic can be disabled in the backend by your LivePerson account team.
* Auto close is scheduled to run at 25 minute intervals, meaning that inactive conversations will be automatically closed up to 25 minutes after their inactivity threshold was reached. For example, if the configured period of inactivity is 2 hours and a conversation was last active at 1pm, the conversation will be auto closed between 3 and 3:25pm.  
* Auto close is supported on web messaging and on mobile from SDK 2.1 and above. 

**How to configure auto close**

1. Click the **Night Vision** button at the top of the screen. 
2. Under _Response time_, click **Edit**.
3. The _Response time_ window opens. To configure auto close, adjust the configured time as required. Time units are available in minutes, hours and days. 
4. Click **Save**. 

## **Limitations**

1. **No ability to turn off auto close feature**: The messaging backend servers have a system protection mechanism that closes conversations after 90 days of inactivity in order to control the load on the server. Due to this, auto close is enabled for all accounts with a default value of 90 days which is also the maximum allowed configuration.
2. **SDK backward compatibility**: Elimination of the exit survey and close message on mobile app is supported only from SDK version 2.1 and above. Consumers messaging from an app implementing an older SDK will see the survey and a close message “Conversation resolved by you” (depending on SDK configuration) following auto close.  
     
   ![](https://docs.google.com/drawings/u/2/d/sNXohgrQMQ_i_R8UZquiE5w/image?w=351&h=304&rev=1&ac=1&parent=1Kg71PYrhfKfRP5R1pGLcdaHjsLxaYiAJUuhqlTxkEro =351x304)
3. **Auto close process frequency:** Inactive conversations should be automatically closed up to 25 minutes after their inactivity threshold was reached.  
   For example: 
   * Configured inactivity threshold is 2 hours.
   * Last activity recorded on a conversation was at 1pm .
   * The conversation will be auto closed some time between 3pm to 3:25pm.
4. **Joining as “reader” resets the inactivity “timer”:** The auto close "timer" is reset when an agent manager opens a conversation to view it in full screen or from the Open Connections list.
   * This is currently a technical limitation since the inactivity “timer” is reset with every metadata change of the conversation. An agent manager joining as a “reader” triggers a change in the conversation participant’s metadata.
   * There is a potential workaround:
     1. The "timer" is not reset when opening the transcript widget view from the All Connections list (see the screenshot below).

  
![](https://lh4.googleusercontent.com/BZsXjQBKvMGa_RIwLReGXBc0k-kyARjH2um2H26dnmfwqkcAv7FLotGimFxi3mDwf4jKcuBUKv3Isb63THJDvCz7jPWdo6pBLr_pPFhUgeebxdsom6Lzx-qvw_x6JzdeQ6BvGp9A =624x337)