from gtts import gTTS
import os

text = "Hello my name is Anirudh"
tts = gTTS(text=text, lang='en')
tts.save("output.mp3")
os.system("start output.mp3") 