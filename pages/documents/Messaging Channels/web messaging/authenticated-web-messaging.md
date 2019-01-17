---
pagename: Authenticated web messaging
categoryName: Messaging channels
subCategoryName: Web messaging
indicator: messaging
subtitle: ''
level3: ''
permalink: messaging-channels-web-messaging-authenticated-web-messaging.html
isTutorial: false
date: 2019-01-17 13:31:46 +0200
published: false

---
The following document guides you through creating authenticated web messaging.  To complete your web messaging program, you may also use:

* Getting started with web messaging
* Adding web messaging to your website

## **Why use authentication?**

Authenticated Customer Information increases the security of the communication as the customer’s identity is verified. It also increases the efficiency of agents and ensures that each consumer receives a personalized service. Finally, it enables brands to expand the types of services they offer to consumers during conversations, for example:

* **Making purchases easier for existing consumers:** Once the consumer has logged into the brand's website, LiveEngage automatically brings the consumer's PII to the Agent Workspace, including the account number, package details, billing history, and other relevant account info. The conversation can immediately proceed to the new purchase, without the consumer having to identify themselves or make explanations about their account. The agent can manage the inquiry quickly as they don’t have to open another application to get the information they need.
* **Facilitating billing and payment conversations**: Once the consumer has logged into the brand’s website and started a conversation with an agent, the agent can quickly identify the most cost-effective way for the consumer to pay, according to the PII exposed during the authenticated chat.

Authenticated web messaging can be offered to consumers are authenticated on your website, and their information and conversations are available across channels.

Authenticated messaging provides the following benefits:

* Always-on, continuous messaging experience for logged-in website visitors
* Ability to continue a conversation un-interrupted between mobile app messaging and web messaging. This also enable proactive push notifications on a users phone for new incoming messages (using mobile app messaging push)
* Conversation history remains, providing consumers easy access to previous conversations and content
* Strong authentication services enable secure and protected conversations for sensitive topics
* Fully accessible window in compliance with WCAG 2.0 AA Standard

Watch how web messaging can be seamless across web and mobile using authenticated web messaging:

[https://vimeo.com/253109875/b4b118ece0](https://vimeo.com/253109875/b4b118ece0 "https://vimeo.com/253109875/b4b118ece0")

### **Authenticated Web Messaging flow:**

Before a messaging conversation can be offered, a customer must authenticate.

* Consumer logs in and receives message button
* Previous conversations will automatically display if applicable

![](https://lh6.googleusercontent.com/nFaM1QuxWZx-3KFvMiLawn9_gYNFM6Q_avqaB7CHhALTDva4P_tae8LNF0W8-wY9LO_LVIfDVHfCSroSCmq5Iyo_r4DKHxlSXi9hSsL6H3_czJrcqTY_oF-DqXRpymXArlQHG8Ah =536x305)

Agent engages consumer in a messaging window, displaying history from previous conversations. For conversations that are continuing, or in the case that the agent pro-actively sends a message, a new message indication will display.

With messaging statuses such as ‘read’ and ‘time to respond’, agents and visitors know at a glance where the conversation stands.

Agents can see consumer details such as which device they are using and details about the campaign that initiated the conversation.

LiveEngage enables agents and consumers to ‘end’ a conversation when the issue at hand is resolved. All closed conversations will remain as a connection and can be resumed either by the agent or the consumer.

Agents can use this tool to strengthen and build the connection to the consumers they engaged with.

## **Develop your hosted authentication flow**

The authentication flow is the process by which the user is authenticated against your backend in order to start a continuous conversation. Authentication allows LivePerson to retrieve additional background visitor information such as active conversations, history with the brand, unread messages, etc.

Authentication integration has several flows:

* Issuing visitor token - For this process, the brand’s website needs to connect to the Authentication backend and request a valid token.
* Token validation - The validation of the token against the brand’s authentication service.
* Token expiration and renewal.

Additional documentation about authenticated interactions with OAuth 2.0 is available [here](https://developers.liveperson.com/guides-authentication-introduction.html#resultOverlayRecordTemplate).

## **Configure Authentication Flow**

The following parameters are defined in the your LivePerson account:

* Implicit or Code Flow (additional information can be found in the How It Works section in the [Authenticated Interactions document](https://developers.liveperson.com/guides-authentication-howitworks.html))
* OAuth 2.0 Authentication Endpoint (when a separate browser window is used)
* OAuth 2.0 Token Endpoint (when Code Flow is used)
* OAuth 2.0 JWT Public Key
* OAuth 2.0 Client ID
* OAuth 2.0 Client Secret (when Code Flow is used)
* JS method name and context (when LiveEngage embedded window is used in Web)

In order to define the OAuth 2.0 authentication on your account, complete the following steps:

1. In LiveEngage, select **Campaigns**.
2. In the footnote, select **Data sources**.

![](https://lh4.googleusercontent.com/AY1fIfhyuv3Z-U3dXuqzI_lJz0xud61CXQkn7fFAQSHM5SjJgFnJ6fC7zE7I06T-XP4Fe1S5bJMzY3jIvEZA53ZHFzQEyJ9WX3D9EzW5Y_1DPI1DiRayCfhRySD8UkqJ9-rgWllF =624x64)

{:start="3"}

1. Next to the authentication server, click **Configure**.  The Authentication Server page is displayed.

![](https://lh4.googleusercontent.com/xlSSFhJ3GKF2ThpwdKymgAvEgw86lxORrZcVHJU7qxTTBh1lGfxyq5MTt9ZSTS3u51VjSGvdmjL8-ZN6iE-MD2Vy9G0hPlIFrO41Nb62Qk3QF3FxDC9JjPbKKehJ4pMpnWUzMP7y =624x303)

{:start="4"}

1. From the dropdown menu, select your preferred authentication method, and complete the required fields![](https://lh3.googleusercontent.com/WepqNzhluwq_EylD-EIvJOr3t14CeeOL4FRIaCOMXQ-as1A-lfxdhnUdsyBQDwJ4v6KigyPY8y685ldCHxIzocepjiO1gULK3RkGErvhnHv1FOo6YCC-qzuh3X2lNd5vh7PyJ7ma =624x304)

Additional information regarding authentication configuration on LivePerson is available [here](https://developers.liveperson.com/guides-authentication-introduction.html).

## **Configure the Customer Identity**

In order to enable targeting for messaging engagements (authenticated and unauthenticated web messaging), the identity of the consumer must be passed to the API using the identities array and _identity_ function. The information in this array should match the values assigned to the user when they authenticate on your site. It is not used for visitor authentication, but as a trigger for LivePerson monitoring services to start targeting and sending relevant engagements and/or notifications to the visitor.

Example:

    lpTag.identities=[];
    
    lpTag.identities.push(identityFn);
    
    function identityFn(callback) {
    
    callback({
    
    iss: “ replace with issuer ”,
    
    acr: “loa1”,
    
    sub: “ replace with customerID ”
    
    });
    
    }

By attributing the conversation to the customer’s identity, new incoming messages will be delivered and displayed as a minimized window with new message notifications.

Once the visitor has received a notification on an ongoing conversation, or has clicked on a messaging engagement, the authentication process will start according to the authentication flow defined during configuration.

It is important to note that we will no longer be relying on the ctmrinfo.customerID engagement attribute to indicate whether the user is authenticated or not, it will be used just as a regular engagement attribute. LE monitoring services will be using this new function to identify if the user is authenticated on each page, and is no longer session-based as it was previously.

For more information regarding the Monitoring API, please refer to the [Monitoring API section on the developers community](https://developers.liveperson.com/rt-interactions-monitoring-overview.html).

## **Authenticated engagement window**

The engagement window can be created and customized like all other messaging windows in LivePerson.

In addition, there additional options for authenticated windows.

### **Clearing history (consumer side)**

For authenticated conversations, consumers have the option to ‘clear history’ in their window settings.

This option allows the user to clear the link between this device and the conversation on the LiveEngage platform, which means that the conversation is removed, and cannot be retrieved or resumed (AKA removing continuity).

Clicking “Clear history” will also end the conversation.

The next conversation will be considered as a new visitor.

### **Counter badge and sound**

Upon receiving a new message, if the engagement window is in the minimized state, a counter badge will be shown with the number of new messages. In addition, for every new message a short sound is played (as on chat). When maximizing the chat, the unread messages counter badge disappears and the window is scrolled to the bottom to show the new messages.

### **Separate browser window flow**

Web messaging behaves similarly to mobile app messaging, except for the fact that it runs on a browser.

Web messaging can be displayed in an embedded window or opened in a separate browser window to interact with the visitor. When the LiveEngage embedded window is set to separate browser mode, the authentication must take place using a page redirect flow.

### **Authentication in an Embedded Window vs. Separate Browser Window**

#### Embedded Window

When in **embedded mode**, the window is hosted on the brand's website. JavaScript API code is used to get the **authorization code** that identifies the visitor and continues its messaging engagement without any interruption or required action from the visitor's side.

#### Separate Browser Window

**Separate browser window** mode is configured in LiveEngage Engagement studio. When the engagement appears in a separate browser window, authentication cannot be performed "behind the scenes". Action is required from the visitor for the following two reasons:

* As the engagement window opens immediately after it is clicked, there is not enough time to access an asynchronous JavaScript API simultaneously.
* The separate browser window is hosted by LivePerson (not the brand’s website), therefore it does not have access to JavaScript code.

To configure authentication in a separate browser window, proceed as follows:

1. Upon clicking on an engagement that is configured to open in a separate browser window, the window will remain open as it redirects the visitor to the brand’s configured login page (Authentication Endpoint).

![](https://lh5.googleusercontent.com/GCXo_sMNjzQo8SjdN9SA0GDPMIN45zmoazeZCDoWbey0JfnPr6-SS80TDZSh_9eJes5ArWO1C3DO_CxGqziMmGYcgJ44aix_8XOGFi7PThOaNxBLZnr-GszmsRd-9q0yGrDAB_Xn =186x297)

{:start="2"}

1. Once the visitor is logged in and successfully authenticated, they are redirected to the conversation window with the provided authentication code.

   ![](https://lh3.googleusercontent.com/jFsW5Whbgbu152n_WHk6A0Bf6yqgr4gjKIgRBFUUEl1hF6uNcp4nRg8LioTIs5usIbbH4m17a9ELqwFogvjEYVpUVqfl97LhGr7R_b0Lsv4mF2VDBcVpdoOLwf2Lk_8hJr3ttbe- =190x305)

{:start="3"}
2\. Once authentication expires, a message that prompts the visitor to log in appears, redirecting the visitor back to the login page.![](https://lh5.googleusercontent.com/qLaNu8JSlJVImfokLG53MrZKSIW2kEJOxZR0Jgn6Ng9sFuId0lOJuxHGBYKSiB6ayg5XK_37W21K8exylwPaHn_NsTuhm7hGctlJVTQoi7DJeuvlZrZ-amuniGRqVF_moUzxSuZc =211x346)

### **How does separate browser window login work?**

On the brand's website URL, there is a **"redirect_uri"** parameter which contains the **Authentication Endpoint** of the website. If the **redirect_uri** parameter was provided, execution of the visitor's authentication process starts by redirecting the visitor to **login page** (in an external window).

Once the **login page** receives authentication, the authentication code is integrated and the page is redirected back to the separate browser window (the URL exists in the URL "redirect_uri" parameter).

Code sample:

| --- |
|   var urlParams = getUrlParams(window.location.search);window.location.href = urlParams.redirect_uri + "&" + urlParams.response_type + "=" + authCode; |

### **Configuring the login page redirect**

The login page is configurable with the following URL Parameters:

* response_type - code/token. (The login page redirects with the response_type parameter)
* client_id - As defined in LE
* redirect_uri - The URL for redirect.

The brand needs to register the redirect URL as a valid URL.

Example:

    https://www.brand.com/authorize/?client_id=123123&response_type=token&redirect_uri=https%3A%2F%2Fliveperson%2Enet&nonce=[visitorId]

Once authenticated, the brand uses the **application/x-www-form-urlencoded** format.

Example of code flow response:

    | --- |
    |   HTTP/1.1 302 Found  Location: https://client.example.org/cb?    code=Qcb0Orv1zh30vL1MPRsbm-diHiMwcLyZvn1arpZv-Jxf_11jnpEX3Tgfvk |

Example of implicit flow response:

    | --- |
    |   HTTP/1.1 302 Found  Location: https://client.example.org/cb#    id_token=eyJraWQiOiIxZTlnZGs3IiwiYWxnIjoiUlMyNTYifQ.ewogImlz    cyI6ICJodHRwOi8vc2VydmVyLmV4YW1wbGUuY29tIiwKICJzdWIiOiAiMjQ4    ........    4XB1CKKumZvCedgHHF3IAK4dVEDSUoGlH9z4pP_eWYNXvqQOjGs-rDaQzUHl    6cQQWNiDpWOl_lxXjQEvQ |

{: .important}
**Important:** ignore unrecognized response parameters.

#### Error Responses

**QueryParams**

Required:

| --- | --- | --- |
| Parameter | Description | Type / Value |
| error | Error code | Invalid_request, invalid_client, invalid_grant, unauthorized_client, unsupported_grant_type, invalid_scope |

Optional:

| --- | --- | --- |
| Parameter | Description | Type / Value |
| error _description | Description of the error | text |
| error_uri | Error URL with additional info | URL |

#### Error Definitions

| --- | --- |
| Error | Description |
| invalid_request | The request is missing a required parameter, includes an unsupported parameter value (other than grant type), repeats a parameter, includes multiple credentials, utilizes more than one mechanism for authenticating the client, or is otherwise malformed. |
| invalid_client | Client authentication failed (e.g., unknown client, no client authentication included, or unsupported authentication method). The authorization server MAY return an HTTP 401 (Unauthorized) status code to indicate which HTTP authentication schemes are supported. If the client attempted to authenticate via the "Authorization" request header field, the authorization server MUST respond with an HTTP 401 (Unauthorized) status code and include the "WWW-Authenticate" response header field matching the authentication scheme used by the client. |
| invalid_grant | The provided authorization grant (e.g., authorization code, resource owner credentials) or refresh token is invalid, expired, revoked, does not match the redirection URI used in the authorization request, or was issued to another client. |
| unauthorized_client | The authenticated client is not authorized to use this authorization grant type. |
| unsupported_grant_type | The authorization grant type is not supported by the authorization server. |
| invalid_scope | The requested scope is invalid, unknown, malformed, or exceeds the scope granted by the resource owner. |

## **Showing Unauthenticated Engagement Attributes in the Agent Workspace**

Engagement attributes (EAs) passed by the brand can include important information that the agent should consider in real time, while engaging with customers. This feature will display unauthenticated EAs passed in a conversation within the Agent Workspace.

Any EAs passed 12 hours before a conversation has started, and 12 hours after a conversation has ended, will be attributed to the conversation.

EAs will be presented in the Agent Workspace in several areas:

1. Consumer Info widget - each EA will be presented in its own section, much like for chat conversations today. They will be available in both Open Connections & All Connections, as well as in Engagement History widget.
2. All Connections - users will be able to search unauthenticated EAs in the All Connections table, as part of the EAs search.

In order to enable, turn on the **_le.agent.messaging.sdes_** site setting.

## **Limitations and Tips**

1. If the brand sends the “customerId” engagement attribute (part of the ctmrinfo), LiveEngage will consider them to be an authenticated user. Therefore, unauthenticated engagements will not be shown.
2. If a user crosses between authenticated and unauthenticated pages within a single session, in some cases the wrong engagements may be displayed. This might cause the the user to click the wrong engagement and receive an error message saying “You are no longer logged in.”
3. If the agent resumes the conversation when the consumer returns to the page, then the user will see the normal engagement for a new conversation rather than the minimized version of the window, which indicates that there are unread messages.
4. If a separate browser window is required (e.g. if the browser blocks 3rd party cookies), when the user returns to the brand’s website and there is an open conversation, LE will attempt to open the previous conversation in a separate window, which will be blocked by the browser.
5. If the JWT expires or if the consumer cleared their history, the agent will not be made aware and will still be able to answer or resume the conversation.
6. When the user has an open authenticated conversation and then moves to an unauthenticated page, an error message will be shown, indicating to the user that the conversation can be resumed on the authenticated page.  
   When the unauth page replaces the auth page (navigation on the same tab), the error message will show until the user clicks on “X”. When the user navigates back to the authenticated page, the window will show in the minimized mode.  
   When the unauthenticated page is opened in a new tab (the authenticated page still lives in the previous tab), the error message will show on all unauthenticated pages, even if the user clicks on “X” to dismiss the error. The window on the authenticated tab will remain intact.
7. In rare cases, users can simultaneously open authenticated and unauthenticated conversations in the same browser, one in the embedded window, while the other is in a separate browser window.

## **Authenticated alongside unauthenticated in your account**

You may wish to have both authenticated as well as unauthenticated web messaging on your account.

This feature allows web messaging users to transition seamlessly between authenticated and unauthenticated pages. This allows brands to service more use cases for web messaging.

With the new Identity function, LiveEngage Monitoring Services will decide on each page what engagements or conversations should be served to that page, as opposed to the previous way, which was per session. This new function allows brands to notify LiveEngage on each page if the user is authenticated or not regardless of the authentication status of the session.

Guidelines:

* Engagements should show only if the conversation can start. If the engagement requires authentication, it will show only on authenticated pages.
* Only one conversation can be displayed on each page, either authenticated or unauthenticated.
* Open conversations should continue when the consumer navigates to other pages of the same brand. Authenticated conversations will continue only on authenticated pages, while unauthenticated conversations will continue through both page types, and will not be associated with the logged in user.
* When the consumer returns (after a defined period of time) to the brand page, and there’s an open conversation, the consumer should get a minimized version of the window. If the user has both authenticated and unauthenticated conversations open on that device and both can be resumed, the authenticated conversation will take priority. In that case, the consumer will be able to return to the unauthenticated conversation once the authenticated conversation ends, or the user logs out.

To configure this feature, please contact your LivePerson Representative.