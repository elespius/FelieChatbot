class BaseListener
  include Singleton

  def extract_conversation_and_account(event)
    conversation = event.data[:conversation]
    [conversation, conversation.account]
  end

  def extract_notification_and_account(event)
    notification = event.data[:notification]
    [notification, notification.account]
  end

  def extract_message_and_account(event)
    message = event.data[:message]
    [message, message.account]
  end

  def extract_contact_and_account(event)
    contact = event.data[:contact]
    [contact, contact.account]
  end

  def extract_changed_attributes(event)
    changed_attributes = event.data[:changed_attributes]
    changed_attributes.map{ |k,v| { k => { previous_value: v[0], current_value: v[1] } } }
    changed_attributes
  end
end
