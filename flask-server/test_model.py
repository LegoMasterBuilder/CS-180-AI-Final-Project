import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn import metrics
import re
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
import nltk
import joblib

data = pd.read_csv("kaggle_reddit-nsfw-classification-data.csv")

data.dropna(inplace=True)

# Sample data for faster runtimes
# data = data.sample(frac=1, random_state=42)

# Convert label to a numerical variable
data["label_num"] = data.is_nsfw.map({False: 0, True: 1})

# Split X and y into training and testing sets
X = data["title"]
y = data["label_num"]


X_train, X_test, y_train, y_test = train_test_split(
    X, y, random_state=42, train_size=0.7
)

nb = joblib.load("nb.pkl")
vocabulary = joblib.load("vocabulary.pkl")

# Recreate Vectorizer

lemmatizer = WordNetLemmatizer()


def tokenizer(text):
    # URL Removal
    text = re.sub(r"http\S+", "", text)
    # Punctuation Removal
    text = "".join([c for c in text if c.isalnum() or c == " "])
    # Tokenization
    tok_list = nltk.word_tokenize(text)
    # Stopword Removal
    tok_list = [
        word for word in tok_list if word not in stopwords.words("english")]
    # Lemmatization
    tok_list = [lemmatizer.lemmatize(word) for word in tok_list]
    return tok_list


vect = CountVectorizer(
    tokenizer=tokenizer, max_df=0.8, token_pattern=None, ngram_range=(1, 1)
)
vect.vocabulary_ = vocabulary


X_final_test = vect.transform(X_test)

y_pred = nb.predict(X_final_test)

# calculate accuracy of class predictions

acc_score = metrics.accuracy_score(y_test, y_pred)
classification_report = metrics.classification_report(y_test, y_pred)

print(f"Accuracy Score:\t{acc_score}\n")
print(f"Classification Report:\n{classification_report}")
