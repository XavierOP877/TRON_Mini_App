from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Updater, CommandHandler, CallbackContext
import os
from dotenv import load_dotenv

def start(update: Update, context: CallbackContext) -> None:
    keyboard = [
        [InlineKeyboardButton("Open TRON Transfer App", url="YOUR_FRONTEND_URL")]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    update.message.reply_text('Click the button below to open the TRON transfer app:', reply_markup=reply_markup)

def main():
    updater = Updater(os.getenv('TELEGRAM_BOT_TOKEN'))
    updater.dispatcher.add_handler(CommandHandler("start", start))
    updater.start_polling()
    updater.idle()

if __name__ == '__main__':
    main()
