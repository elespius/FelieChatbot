export default {
  AUTHENTICATE: 'AUTHENTICATE',
  CLEAR_USER: 'LOGOUT',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SET_CURRENT_USER_AVAILABILITY: 'SET_CURRENT_USER_AVAILABILITY',
  SET_CURRENT_USER_UI_SETTINGS: 'SET_CURRENT_USER_UI_SETTINGS',
  SET_CURRENT_USER_UI_FLAGS: 'SET_CURRENT_USER_UI_FLAGS',

  // Chat List
  RECEIVE_CHAT_LIST: 'RECEIVE_CHAT_LIST',
  SET_ALL_CONVERSATION: 'SET_ALL_CONVERSATION',
  EMPTY_ALL_CONVERSATION: 'EMPTY_ALL_CONVERSATION',
  SET_CONV_TAB_META: 'SET_CONV_TAB_META',
  CLEAR_LIST_LOADING_STATUS: 'CLEAR_LIST_LOADING_STATUS',
  SET_LIST_LOADING_STATUS: 'SET_LIST_LOADING_STATUS',
  SET_ALL_MESSAGES_LOADED: 'SET_ALL_MESSAGES_LOADED',
  CLEAR_ALL_MESSAGES_LOADED: 'CLEAR_ALL_MESSAGES_LOADED',
  CHANGE_CHAT_STATUS_FILTER: 'CHANGE_CHAT_STATUS_FILTER',
  CHANGE_CHAT_SORT_FILTER: 'CHANGE_CHAT_SORT_FILTER',
  UPDATE_ASSIGNEE: 'UPDATE_ASSIGNEE',
  UPDATE_CONVERSATION_CONTACT: 'UPDATE_CONVERSATION_CONTACT',
  CLEAR_CONTACT_CONVERSATIONS: 'CLEAR_CONTACT_CONVERSATIONS',
  SET_CONVERSATION_FILTERS: 'SET_CONVERSATION_FILTERS',
  CLEAR_CONVERSATION_FILTERS: 'CLEAR_CONVERSATION_FILTERS',
  SET_CONVERSATION_LAST_SEEN: 'SET_CONVERSATION_LAST_SEEN',
  SET_LAST_MESSAGE_ID_IN_SYNC_CONVERSATION:
    'SET_LAST_MESSAGE_ID_FOR_SYNC_CONVERSATION',
  SET_DRAFT_MESSAGES: 'SET_DRAFT_MESSAGES',
  REMOVE_DRAFT_MESSAGES: 'REMOVE_DRAFT_MESSAGES',
  SET_REPLY_EDITOR_MODE: 'SET_REPLY_EDITOR_MODE',

  SET_CURRENT_CHAT_WINDOW: 'SET_CURRENT_CHAT_WINDOW',
  CLEAR_CURRENT_CHAT_WINDOW: 'CLEAR_CURRENT_CHAT_WINDOW',
  CLEAR_ALL_MESSAGES: 'CLEAR_ALL_MESSAGES',
  CHANGE_CONVERSATION_STATUS: 'CHANGE_CONVERSATION_STATUS',
  ADD_CONVERSATION: 'ADD_CONVERSATION',
  UPDATE_CONVERSATION: 'UPDATE_CONVERSATION',
  MUTE_CONVERSATION: 'MUTE_CONVERSATION',
  UNMUTE_CONVERSATION: 'UNMUTE_CONVERSATION',
  ASSIGN_AGENT: 'ASSIGN_AGENT',
  ASSIGN_TEAM: 'ASSIGN_TEAM',
  ASSIGN_PRIORITY: 'ASSIGN_PRIORITY',
  SET_CHAT_META: 'SET_CHAT_META',
  ADD_MESSAGE: 'ADD_MESSAGE',
  DELETE_MESSAGE: 'DELETE_MESSAGE',
  ADD_PENDING_MESSAGE: 'ADD_PENDING_MESSAGE',
  UPDATE_MESSAGE_UNREAD_COUNT: 'UPDATE_MESSAGE_UNREAD_COUNT',
  SET_PREVIOUS_CONVERSATIONS: 'SET_PREVIOUS_CONVERSATIONS',
  SET_ACTIVE_INBOX: 'SET_ACTIVE_INBOX',
  UPDATE_CONVERSATION_CUSTOM_ATTRIBUTES:
    'UPDATE_CONVERSATION_CUSTOM_ATTRIBUTES',
  UPDATE_CONVERSATION_LAST_ACTIVITY: 'UPDATE_CONVERSATION_LAST_ACTIVITY',
  SET_MISSING_MESSAGES: 'SET_MISSING_MESSAGES',

  SET_ALL_ATTACHMENTS: 'SET_ALL_ATTACHMENTS',
  ADD_CONVERSATION_ATTACHMENTS: 'ADD_CONVERSATION_ATTACHMENTS',
  DELETE_CONVERSATION_ATTACHMENTS: 'DELETE_CONVERSATION_ATTACHMENTS',

  SET_CONVERSATION_CAN_REPLY: 'SET_CONVERSATION_CAN_REPLY',

  // Inboxes
  SET_INBOXES_UI_FLAG: 'SET_INBOXES_UI_FLAG',
  SET_INBOXES: 'SET_INBOXES',
  SET_INBOX_ITEM: 'SET_INBOX_ITEM',
  ADD_INBOXES: 'ADD_INBOXES',
  EDIT_INBOXES: 'EDIT_INBOXES',
  DELETE_INBOXES: 'DELETE_INBOXES',

  // Agent
  SET_ACCOUNT_UI_FLAG: 'SET_ACCOUNT_UI_FLAG',
  SET_ACCOUNT_LIMITS: 'SET_ACCOUNT_LIMITS',
  SET_ACCOUNTS: 'SET_ACCOUNTS',
  ADD_ACCOUNT: 'ADD_ACCOUNT',
  EDIT_ACCOUNT: 'EDIT_ACCOUNT',
  DELETE_ACCOUNT: 'DELETE_AGENT',

  // Agent
  SET_AGENT_FETCHING_STATUS: 'SET_AGENT_FETCHING_STATUS',
  SET_AGENT_CREATING_STATUS: 'SET_AGENT_CREATING_STATUS',
  SET_AGENT_UPDATING_STATUS: 'SET_AGENT_UPDATING_STATUS',
  SET_AGENT_DELETING_STATUS: 'SET_AGENT_DELETING_STATUS',
  SET_AGENTS: 'SET_AGENTS',
  ADD_AGENT: 'ADD_AGENT',
  EDIT_AGENT: 'EDIT_AGENT',
  DELETE_AGENT: 'DELETE_AGENT',
  UPDATE_AGENTS_PRESENCE: 'UPDATE_AGENTS_PRESENCE',
  UPDATE_SINGLE_AGENT_PRESENCE: 'UPDATE_SINGLE_AGENT_PRESENCE',

  // Canned Response
  SET_CANNED_UI_FLAG: 'SET_CANNED_UI_FLAG',
  SET_CANNED: 'SET_CANNED',
  ADD_CANNED: 'ADD_CANNED',
  EDIT_CANNED: 'EDIT_CANNED',
  DELETE_CANNED: 'DELETE_CANNED',

  // Labels
  SET_LABEL_UI_FLAG: 'SET_LABEL_UI_FLAG',
  SET_LABELS: 'SET_LABELS',
  ADD_LABEL: 'ADD_LABEL',
  EDIT_LABEL: 'EDIT_LABEL',
  DELETE_LABEL: 'DELETE_LABEL',

  // Integrations
  SET_INTEGRATIONS_UI_FLAG: 'SET_INTEGRATIONS_UI_FLAG',
  SET_INTEGRATIONS: 'SET_INTEGRATIONS',
  ADD_INTEGRATION: 'ADD_INTEGRATION',
  DELETE_INTEGRATION: 'DELETE_INTEGRATION',
  ADD_INTEGRATION_HOOKS: 'ADD_INTEGRATION_HOOKS',
  DELETE_INTEGRATION_HOOKS: 'DELETE_INTEGRATION_HOOKS',

  // WebHook
  SET_WEBHOOK_UI_FLAG: 'SET_WEBHOOK_UI_FLAG',
  SET_WEBHOOK: 'SET_WEBHOOK',
  ADD_WEBHOOK: 'ADD_WEBHOOK',
  DELETE_WEBHOOK: 'DELETE_WEBHOOK',
  UPDATE_WEBHOOK: 'UPDATE_WEBHOOK',

  // Contacts
  SET_CONTACT_META: 'SET_CONTACT_META',
  SET_CONTACT_UI_FLAG: 'SET_CONTACT_UI_FLAG',
  SET_CONTACT_ITEM: 'SET_CONTACT_ITEM',
  SET_CONTACTS: 'SET_CONTACTS',
  CLEAR_CONTACTS: 'CLEAR_CONTACTS',
  EDIT_CONTACT: 'EDIT_CONTACT',
  DELETE_CONTACT: 'DELETE_CONTACT',
  UPDATE_CONTACTS_PRESENCE: 'UPDATE_CONTACTS_PRESENCE',
  SET_CONTACT_FILTERS: 'SET_CONTACT_FILTERS',
  CLEAR_CONTACT_FILTERS: 'CLEAR_CONTACT_FILTERS',

  // Products
  SET_PRODUCT_META: 'SET_PRODUCT_META',
  SET_PRODUCT_UI_FLAG: 'SET_PRODUCT_UI_FLAG',
  SET_PRODUCT_ITEM: 'SET_PRODUCT_ITEM',
  SET_PRODUCTS: 'SET_PRODUCTS',
  CLEAR_PRODUCTS: 'CLEAR_PRODUCTS',
  EDIT_PRODUCT: 'EDIT_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',

  // Notifications
  SET_NOTIFICATIONS_META: 'SET_NOTIFICATIONS_META',
  SET_NOTIFICATIONS_UNREAD_COUNT: 'SET_NOTIFICATIONS_UNREAD_COUNT',
  SET_NOTIFICATIONS_UI_FLAG: 'SET_NOTIFICATIONS_UI_FLAG',
  UPDATE_NOTIFICATION: 'UPDATE_NOTIFICATION',
  READ_NOTIFICATION: 'READ_NOTIFICATION',
  ADD_NOTIFICATION: 'ADD_NOTIFICATION',
  DELETE_NOTIFICATION: 'DELETE_NOTIFICATION',
  UPDATE_ALL_NOTIFICATIONS: 'UPDATE_ALL_NOTIFICATIONS',
  SET_NOTIFICATIONS_ITEM: 'SET_NOTIFICATIONS_ITEM',
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
  CLEAR_NOTIFICATIONS: 'CLEAR_NOTIFICATIONS',
  EDIT_NOTIFICATIONS: 'EDIT_NOTIFICATIONS',
  UPDATE_NOTIFICATIONS_PRESENCE: 'UPDATE_NOTIFICATIONS_PRESENCE',
  SET_ALL_NOTIFICATIONS_LOADED: 'SET_ALL_NOTIFICATIONS_LOADED',
  DELETE_READ_NOTIFICATIONS: 'DELETE_READ_NOTIFICATIONS',
  DELETE_ALL_NOTIFICATIONS: 'DELETE_ALL_NOTIFICATIONS',
  SNOOZE_NOTIFICATION: 'SNOOZE_NOTIFICATION',

  // Contact Conversation
  SET_CONTACT_CONVERSATIONS_UI_FLAG: 'SET_CONTACT_CONVERSATIONS_UI_FLAG',
  SET_CONTACT_CONVERSATIONS: 'SET_CONTACT_CONVERSATIONS',
  ADD_CONTACT_CONVERSATION: 'ADD_CONTACT_CONVERSATION',
  DELETE_CONTACT_CONVERSATION: 'DELETE_CONTACT_CONVERSATION',

  // Contact Label
  SET_CONTACT_LABELS_UI_FLAG: 'SET_CONTACT_LABELS_UI_FLAG',
  SET_CONTACT_LABELS: 'SET_CONTACT_LABELS',

  // Conversation Label
  SET_CONVERSATION_LABELS_UI_FLAG: 'SET_CONVERSATION_LABELS_UI_FLAG',
  SET_CONVERSATION_LABELS: 'SET_CONVERSATION_LABELS',
  SET_BULK_CONVERSATION_LABELS: 'SET_BULK_CONVERSATION_LABELS',

  // Reports
  SET_ACCOUNT_REPORTS: 'SET_ACCOUNT_REPORTS',
  SET_HEATMAP_DATA: 'SET_HEATMAP_DATA',
  TOGGLE_HEATMAP_LOADING: 'TOGGLE_HEATMAP_LOADING',
  SET_ACCOUNT_SUMMARY: 'SET_ACCOUNT_SUMMARY',
  SET_BOT_SUMMARY: 'SET_BOT_SUMMARY',
  TOGGLE_ACCOUNT_REPORT_LOADING: 'TOGGLE_ACCOUNT_REPORT_LOADING',
  SET_ACCOUNT_CONVERSATION_METRIC: 'SET_ACCOUNT_CONVERSATION_METRIC',
  TOGGLE_ACCOUNT_CONVERSATION_METRIC_LOADING:
    'TOGGLE_ACCOUNT_CONVERSATION_METRIC_LOADING',
  SET_AGENT_CONVERSATION_METRIC: 'SET_AGENT_CONVERSATION_METRIC',
  TOGGLE_AGENT_CONVERSATION_METRIC_LOADING:
    'TOGGLE_AGENT_CONVERSATION_METRIC_LOADING',
  SET_ACCOUNT_CONTACT_METRIC: 'SET_ACCOUNT_CONTACT_METRIC',
  TOGGLE_ACCOUNT_CONTACT_METRIC_LOADING:
    'TOGGLE_ACCOUNT_CONTACT_METRIC_LOADING',
  SET_AGENT_CONTACT_METRIC: 'SET_AGENT_CONTACT_METRIC',
  TOGGLE_AGENT_CONTACT_METRIC_LOADING: 'TOGGLE_AGENT_CONTACT_METRIC_LOADING',

  // Agent Dashboard
  SET_AGENT_DASHBOARD_CONVERSATION_METRIC:
    'SET_AGENT_DASHBOARD_CONVERSATION_METRIC',
  TOGGLE_AGENT_DASHBOARD_CONVERSATION_METRIC_LOADING:
    'TOGGLE_AGENT_DASHBOARD_CONVERSATION_METRIC_LOADING',
  SET_AGENT_DASHBOARD_CONTACT_METRIC: 'SET_AGENT_DASHBOARD_CONTACT_METRIC',
  TOGGLE_AGENT_DASHBOARD_CONTACT_METRIC_LOADING:
    'TOGGLE_AGENT_DASHBOARD_CONTACT_METRIC_LOADING',
  SET_AGENT_DASHBOARD_PLANNED_METRIC: 'SET_AGENT_DASHBOARD_PLANNED_METRIC',
  TOGGLE_AGENT_DASHBOARD_PLANNED_METRIC_LOADING:
    'TOGGLE_AGENT_DASHBOARD_PLANNED_METRIC_LOADING',
  SET_AGENT_DASHBOARD_CALENDAR_ITEMS: 'SET_AGENT_DASHBOARD_CALENDAR_ITEMS',
  TOGGLE_AGENT_DASHBOARD_CALENDAR_ITEMS_LOADING:
    'TOGGLE_AGENT_DASHBOARD_CALENDAR_ITEMS_LOADING',

  // Conversation Metadata
  SET_CONVERSATION_METADATA: 'SET_CONVERSATION_METADATA',

  // Conversation Page
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_CONVERSATION_END_REACHED: 'SET_CONVERSATION_END_REACHED',
  CLEAR_CONVERSATION_PAGE: 'CLEAR_CONVERSATION_PAGE',

  // Notification Settings
  SET_USER_NOTIFICATION_UI_FLAG: 'SET_USER_NOTIFICATION_UI_FLAG',
  SET_USER_NOTIFICATION: 'SET_USER_NOTIFICATION',

  // User Typing
  ADD_USER_TYPING_TO_CONVERSATION: 'ADD_USER_TYPING_TO_CONVERSATION',
  REMOVE_USER_TYPING_FROM_CONVERSATION: 'REMOVE_USER_TYPING_FROM_CONVERSATION',

  // Conversation Search
  SEARCH_CONVERSATIONS_SET: 'SEARCH_CONVERSATIONS_SET',
  SEARCH_CONVERSATIONS_SET_UI_FLAG: 'SEARCH_CONVERSATIONS_SET_UI_FLAG',

  // Campaigns
  SET_CAMPAIGN_UI_FLAG: 'SET_CAMPAIGN_UI_FLAG',
  SET_CAMPAIGNS: 'SET_CAMPAIGNS',
  ADD_CAMPAIGN: 'ADD_CAMPAIGN',
  EDIT_CAMPAIGN: 'EDIT_CAMPAIGN',
  DELETE_CAMPAIGN: 'DELETE_CAMPAIGN',

  // Contact notes
  SET_CONTACT_NOTES_UI_FLAG: 'SET_CONTACT_NOTES_UI_FLAG',
  SET_CONTACT_NOTES: 'SET_CONTACT_NOTES',
  ADD_CONTACT_NOTE: 'ADD_CONTACT_NOTE',
  EDIT_CONTACT_NOTE: 'EDIT_CONTACT_NOTE',
  DELETE_CONTACT_NOTE: 'DELETE_CONTACT_NOTE',

  // CSAT Responses
  SET_CSAT_RESPONSE_UI_FLAG: 'SET_CSAT_RESPONSE_UI_FLAG',
  SET_CSAT_RESPONSE: 'SET_CSAT_RESPONSE',
  SET_CSAT_RESPONSE_METRICS: 'SET_CSAT_RESPONSE_METRICS',

  // Stages
  SET_CUSTOM_ATTRIBUTE_UI_FLAG: 'SET_CUSTOM_ATTRIBUTE_UI_FLAG',
  SET_CUSTOM_ATTRIBUTE: 'SET_CUSTOM_ATTRIBUTE',
  ADD_CUSTOM_ATTRIBUTE: 'ADD_CUSTOM_ATTRIBUTE',
  EDIT_CUSTOM_ATTRIBUTE: 'EDIT_CUSTOM_ATTRIBUTE',
  DELETE_CUSTOM_ATTRIBUTE: 'DELETE_CUSTOM_ATTRIBUTE',

  // Custom Attributes
  SET_STAGE_UI_FLAG: 'SET_STAGE_UI_FLAG',
  SET_STAGE: 'SET_STAGE',
  ADD_STAGE: 'ADD_STAGE',
  EDIT_STAGE: 'EDIT_STAGE',
  DELETE_STAGE: 'DELETE_STAGE',

  // Automations
  SET_AUTOMATION_UI_FLAG: 'SET_AUTOMATION_UI_FLAG',
  SET_AUTOMATIONS: 'SET_AUTOMATIONS',
  ADD_AUTOMATION: 'ADD_AUTOMATION',
  EDIT_AUTOMATION: 'EDIT_AUTOMATION',
  DELETE_AUTOMATION: 'DELETE_AUTOMATION',

  // Custom Views
  SET_CUSTOM_VIEW_UI_FLAG: 'SET_CUSTOM_VIEW_UI_FLAG',
  SET_CUSTOM_VIEW: 'SET_CUSTOM_VIEW',
  ADD_CUSTOM_VIEW: 'ADD_CUSTOM_VIEW',
  UPDATE_CUSTOM_VIEW: 'UPDATE_CUSTOM_VIEW',
  DELETE_CUSTOM_VIEW: 'DELETE_CUSTOM_VIEW',

  // Bulk Actions
  SET_BULK_ACTIONS_FLAG: 'SET_BULK_ACTIONS_FLAG',

  // Dashboard Apps
  SET_DASHBOARD_APPS_UI_FLAG: 'SET_DASHBOARD_APPS_UI_FLAG',
  SET_DASHBOARD_APPS: 'SET_DASHBOARD_APPS',
  CREATE_DASHBOARD_APP: 'CREATE_DASHBOARD_APP',
  EDIT_DASHBOARD_APP: 'EDIT_DASHBOARD_APP',
  DELETE_DASHBOARD_APP: 'DELETE_DASHBOARD_APP',

  // Help center
  ADD_ARTICLE: 'ADD_ARTICLE',
  ADD_ARTICLE_ID: 'ADD_ARTICLE_ID',
  ADD_MANY_ARTICLES: 'ADD_MANY_ARTICLES',
  ADD_MANY_ARTICLES_ID: 'ADD_MANY_ARTICLES_ID',
  SET_ARTICLES_META: 'SET_ARTICLES_META',
  UPDATE_ARTICLE_FLAG: 'UPDATE_ARTICLE_FLAG',
  ADD_ARTICLE_FLAG: 'ADD_ARTICLE_FLAG',
  UPDATE_ARTICLE: 'UPDATE_ARTICLE',
  CLEAR_ARTICLES: 'CLEAR_ARTICLES',
  REMOVE_ARTICLE: 'REMOVE_ARTICLE',
  REMOVE_ARTICLE_ID: 'REMOVE_ARTICLE_ID',
  SET_UI_FLAG: 'SET_UI_FLAG',

  // Help Center -- Categories
  ADD_CATEGORY: 'ADD_CATEGORY',
  ADD_CATEGORY_ID: 'ADD_CATEGORY_ID',
  ADD_MANY_CATEGORIES: 'ADD_MANY_CATEGORIES',
  ADD_MANY_CATEGORIES_ID: 'ADD_MANY_CATEGORIES_ID',
  ADD_CATEGORY_FLAG: 'ADD_CATEGORY_FLAG',
  CLEAR_CATEGORIES: 'CLEAR_CATEGORIES',
  UPDATE_CATEGORY: 'UPDATE_CATEGORY',
  REMOVE_CATEGORY: 'REMOVE_CATEGORY',
  REMOVE_CATEGORY_ID: 'REMOVE_CATEGORY_ID',

  // Agent Bots
  SET_AGENT_BOT_UI_FLAG: 'SET_AGENT_BOT_UI_FLAG',
  SET_AGENT_BOTS: 'SET_AGENT_BOTS',
  ADD_AGENT_BOT: 'ADD_AGENT_BOT',
  EDIT_AGENT_BOT: 'EDIT_AGENT_BOT',
  DELETE_AGENT_BOT: 'DELETE_AGENT_BOT',
  SET_AGENT_BOT_INBOX: 'SET_AGENT_BOT_INBOX',

  // MACROS
  SET_MACROS_UI_FLAG: 'SET_MACROS_UI_FLAG',
  SET_MACROS: 'SET_MACROS',
  ADD_MACRO: 'ADD_MACRO',
  EDIT_MACRO: 'EDIT_MACRO',
  DELETE_MACRO: 'DELETE_MACRO',

  // Full Search
  FULL_SEARCH_SET: 'FULL_SEARCH_SET',
  CONTACT_SEARCH_SET: 'CONTACT_SEARCH_SET',
  CONTACT_SEARCH_SET_UI_FLAG: 'CONTACT_SEARCH_SET_UI_FLAG',
  CONVERSATION_SEARCH_SET: 'CONVERSATION_SEARCH_SET',
  CONVERSATION_SEARCH_SET_UI_FLAG: 'CONVERSATION_SEARCH_SET_UI_FLAG',
  MESSAGE_SEARCH_SET: 'MESSAGE_SEARCH_SET',
  MESSAGE_SEARCH_SET_UI_FLAG: 'MESSAGE_SEARCH_SET_UI_FLAG',
  FULL_SEARCH_SET_UI_FLAG: 'FULL_SEARCH_SET_UI_FLAG',
  SET_CONVERSATION_PARTICIPANTS_UI_FLAG:
    'SET_CONVERSATION_PARTICIPANTS_UI_FLAG',
  SET_CONVERSATION_PARTICIPANTS: 'SET_CONVERSATION_PARTICIPANTS',

  // Audit Logs
  SET_AUDIT_LOGS_UI_FLAG: 'SET_AUDIT_LOGS_UI_FLAG',
  SET_AUDIT_LOGS: 'SET_AUDIT_LOGS',
  SET_AUDIT_LOGS_META: 'SET_AUDIT_LOGS_META',

  // SLA
  SET_SLA_UI_FLAG: 'SET_SLA_UI_FLAG',
  SET_SLA: 'SET_SLA',
  ADD_SLA: 'ADD_SLA',
  EDIT_SLA: 'EDIT_SLA',
  DELETE_SLA: 'DELETE_SLA',

  // SLA Reports
  SET_SLA_REPORTS_UI_FLAG: 'SET_SLA_REPORTS_UI_FLAG',
  SET_SLA_REPORTS: 'SET_SLA_REPORTS',
  SET_SLA_REPORTS_METRICS: 'SET_SLA_REPORTS_METRICS',
  SET_SLA_REPORTS_META: 'SET_SLA_REPORTS_META',
};
