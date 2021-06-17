<template>
  <div>
      <Chat v-if="visible"
        :participants="participants"
        :myself="myself"
        :messages="messages"
        :chat-title="chatTitle"
        :placeholder="placeholder"
        :colors="colors"
        :border-style="borderStyle"
        :hide-close-button="hideCloseButton"
        :close-button-icon-size="closeButtonIconSize"
        :load-more-messages="toLoad.length > 0 ? loadMoreMessages : null"
        :async-mode="asyncMode"
        :scroll-bottom="scrollBottom"
        :display-header="true"
        :send-images="true"
        :profile-picture-config="profilePictureConfig"
        :timestamp-config="timestampConfig"
        :link-options="linkOptions"
        :accept-image-types="'.png, .jpeg'"
        @onMessageSubmit="onMessageSubmit"
        @onType="onType"
        @onClose="onClose"/>
   </div>
</template>

<script>
	
import { Chat } from 'vue-quick-chat'
import 'vue-quick-chat/dist/vue-quick-chat.css';


export default {
  components: {
    Chat
  },

  data() {
        return {
            visible: true,
            participants: [
                {
                    name: 'Chatbot', id: 1,
                    profilePicture: 'https://i.ibb.co/StbWmWZ/chatbots.jpg'
                }
            ],
            myself: {
                name: 'Visitor', id: 2,
                profilePicture: 'https://i.ibb.co/fXkS9xb/pers.webp'
            },
            
            messages: [
               //{
               //    content: 'received messages',
               //    myself: true,
               //    participantId: 2,
               //    timestamp: {year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123},
               //    type: 'text'
               //},
            ],
            chatTitle: 'Demo chat app',
            placeholder: 'Send your message',
            colors: {
                header: {
                    bg: '#d30303',
                    text: '#fff'
                },
                message: {
                    myself: {
                        bg: '#fff',
                        text: '#bdb8b8'
                    },
                    others: {
                        bg: '#fb4141',
                        text: '#fff'
                    },
                    messagesDisplay: {
                        bg: '#f7f3f3'
                    }
                },
                submitIcon: '#b91010',
            },
            borderStyle: {
                topLeft: "10px",
                topRight: "10px",
                bottomLeft: "10px",
                bottomRight: "10px",
            },
            hideCloseButton: false,
            submitIconSize: 25,
            closeButtonIconSize: "20px",
            asyncMode: false,
            toLoad: [
                {
                    content: "Hello, there! Let's have some chat",
                    myself: false,
                    participantId: 1,
                    timestamp: {year: 2021, month: 7, day: 16, hour: 19, minute: 10, second: 3, millisecond: 123},
                    uploaded: true,
                    viewed: true,
                    type: 'text'
                },
            ],
            scrollBottom: {
                messageSent: true,
                messageReceived: false
            },
            displayHeader:true,
            profilePictureConfig: {
                others: true,
                myself: true,
                styles: {
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%'
                }
            },
            timestampConfig: {   
                format: 'HH:mm',
                relative: false
            },
            // there are other options, you can check them here
            // https://soapbox.github.io/linkifyjs/docs/options.html
            linkOptions: {
                myself: {
                    className: 'myLinkClass',
                    events: {
                        click: function (e) {
                            alert('Link clicked!');
                        },
                        mouseover: function (e) {
                            alert('Link hovered!');
                        }
                    },
                    format: function (value, type) {
                        if (type === 'url' && value.length > 50) {
                            value = value.slice(0, 50) + '…';
                        }
                        return value;
                    }
                },
                others: {
                    className: 'othersLinkClass',
                    events: {
                        click: function (e) {
                            alert('Link clicked!');
                        },
                        mouseover: function (e) {
                            alert('Link hovered!');
                        }
                    },
                    format: function (value, type) {
                        if (type === 'url' && value.length > 50) {
                            value = value.slice(0, 50) + '…';
                        }
                        return value;
                    }
                }
            }
        }
    },

    methods: {
        onType: function (event) {
            //console.log(event)
        },

        loadMoreMessages(resolve) {
            setTimeout(() => {
                resolve(this.toLoad); //We end the loading state and add the messages
                //Make sure the loaded messages are also added to our local messages copy or they will be lost
                this.messages.unshift(...this.toLoad);
                this.toLoad = [];
            }, 1000);
        },

        onMessageSubmit: function (message) {

            /* 
             It's important to notice that even when your message wasn't send 
             yet to the server you have to add the message into the array
            */

            this.messages.push(message);

            let msg = Object.assign({}, message);
            console.log (msg)

            this.$axios.post('/message', message)
            .then(resp => { 

	            if (resp.data.success == true) {

	            	let dt = new Date();
	            	var sec = dt.getSeconds();
					var min = dt.getMinutes();
					var hr = dt.getHours();
					var milli = dt.getMilliseconds();
	            	let date = dt.getDate();
					let month = dt.getMonth()+1; // Be careful! January is 0, not 1
					let year = dt.getFullYear();

					let ts = {year: year, month: month, day: date, 
						hour: hr, minute: min, second: sec, millisecond: milli}

	                msg.content = resp.data.message;
	                msg.participantId = 1;
	                msg.timestamp = ts 

	                this.messages.push(msg);
            	}
            });

        },

        onClose() {
            this.visible = false;
        }

    }
}

</script>

<style scoped>

</style>
