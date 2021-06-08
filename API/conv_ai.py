import pdb
from transformers import pipeline, Conversation
conversational_pipeline = pipeline('conversational')

try:

  conv1_start = 'Let’s watch a movie tonight — any recommendations?'
  conv2_start = 'What’s your favorite book?'

  conv1 = Conversation(conv1_start)
  conv2 = Conversation(conv2_start)

  p1 = conversational_pipeline([conv1, conv2])
  print (p1)

  conv1_next = 'What is it about?'
  conv2_next = 'Cool, what is the genre of the book?'

  conv1.add_user_input(conv1_next)
  conv2.add_user_input(conv2_next)

  p1 = conversational_pipeline([conv1, conv2])
  print (p1)
  
except Exception as e:
	
  print (e)
