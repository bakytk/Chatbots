import pdb

from transformers import pipeline, Conversation
conversational_pipe = pipeline('conversational')

def get_response (question):

  conv = Conversation ()
  conv.add_user_input (question)
  pipe = conversational_pipe ([conv])
  responses = pipe.generated_responses
  
  return responses[-1]


"""
try:

  Questions = [ 'Let's go to a restaurant',
                'Do you know any cinema around?',
                'Any films related to AI and sci-fi?',
                'Is it rainy day today?',
                'How old are you?' ]

  for q in Questions[0]:
	  
    r = get_response (q)
    print (r)
  
except Exception as e:
  print (e)
"""
