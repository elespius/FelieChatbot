export const mockAssignableAgents = [
  {
    id: 1,
    account_id: 1,
    availability_status: 'online',
    auto_offline: true,
    confirmed: true,
    email: 'john@doe.com',
    available_name: 'John Doe',
    name: 'John Doe',
    role: 'administrator',
    thumbnail: '',
  },
];

export const mockCurrentChat = {
  meta: {
    sender: {
      additional_attributes: {},
      availability_status: 'offline',
      email: null,
      id: 212,
      name: 'Chatwoot',
      phone_number: null,
      identifier: null,
      thumbnail: '',
      custom_attributes: {},
      last_activity_at: 1723553344,
      created_at: 1722588710,
    },
    channel: 'Channel::WebWidget',
    assignee: {
      id: 1,
      account_id: 1,
      availability_status: 'online',
      auto_offline: true,
      confirmed: true,
      email: 'john@doe.com',
      available_name: 'John Doe',
      name: 'John Doe',
      role: 'administrator',
      thumbnail: '',
    },
    hmac_verified: false,
  },
  id: 138,
  messages: [
    {
      id: 3348,
      content: 'Hello, how can I assist you today?',
      account_id: 1,
      inbox_id: 1,
      conversation_id: 138,
      message_type: 1,
      created_at: 1724398739,
      updated_at: '2024-08-23T07:38:59.763Z',
      private: false,
      status: 'sent',
      source_id: null,
      content_type: 'text',
      content_attributes: {},
      sender_type: 'User',
      sender_id: 1,
      external_source_ids: {},
      additional_attributes: {},
      processed_message_content: 'Hello, how can I assist you today?',
      sentiment: {},
      conversation: {
        assignee_id: 1,
        unread_count: 0,
        last_activity_at: 1724398739,
        contact_inbox: {
          source_id: '5e57317d-053b-4a72-8292-a25b9f29c401',
        },
      },
      sender: {
        id: 1,
        name: 'John Doe',
        available_name: 'John Doe',
        avatar_url: '',
        type: 'user',
        availability_status: 'online',
        thumbnail: '',
      },
    },
  ],
  account_id: 1,
  uuid: '69dd6922-2f0c-4317-8796-bbeb3679cead',
  additional_attributes: {
    browser: {
      device_name: 'Unknown',
      browser_name: 'Chrome',
      platform_name: 'macOS',
      browser_version: '127.0.0.0',
      platform_version: '10.15.7',
    },
    referer: 'http://chatwoot.com/widget_tests?dark_mode=auto',
    initiated_at: {
      timestamp: 'Fri Aug 02 2024 15:21:18 GMT+0530 (India Standard Time)',
    },
    browser_language: 'en',
  },
  agent_last_seen_at: 1724400730,
  assignee_last_seen_at: 1724400686,
  can_reply: true,
  contact_last_seen_at: 1723553351,
  custom_attributes: {},
  inbox_id: 1,
  labels: ['billing'],
  muted: false,
  snoozed_until: null,
  status: 'open',
  created_at: 1722592278,
  timestamp: 1724398739,
  first_reply_created_at: 1722592316,
  unread_count: 0,
  last_non_activity_message: {},
  last_activity_at: 1724398739,
  priority: null,
  waiting_since: 0,
  sla_policy_id: 10,
  applied_sla: {
    id: 143,
    sla_id: 10,
    sla_status: 'missed',
    created_at: 1722592279,
    updated_at: 1722874214,
    sla_description: '',
    sla_name: 'Hacker SLA',
    sla_first_response_time_threshold: 600,
    sla_next_response_time_threshold: 240,
    sla_only_during_business_hours: false,
    sla_resolution_time_threshold: 259200,
  },
  sla_events: [
    {
      id: 270,
      event_type: 'nrt',
      meta: {
        message_id: 2743,
      },
      updated_at: 1722592819,
      created_at: 1722592819,
    },
    {
      id: 275,
      event_type: 'rt',
      meta: {},
      updated_at: 1722852322,
      created_at: 1722852322,
    },
  ],
  allMessagesLoaded: false,
  dataFetched: true,
};

export const mockTeamsList = [
  {
    id: 5,
    name: 'design',
    description: 'design team',
    allow_auto_assign: true,
    account_id: 1,
    is_member: false,
  },
];

export const mockActiveLabels = [
  {
    id: 16,
    title: 'billing',
    description: '',
    color: '#D8EA19',
    show_on_sidebar: true,
  },
];

export const mockInactiveLabels = [
  {
    id: 2,
    title: 'Feature Request',
    description: '',
    color: '#D8EA19',
    show_on_sidebar: true,
  },
];
