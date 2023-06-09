import joblib
from sklearn.naive_bayes import MultinomialNB
from sklearn.feature_extraction.text import CountVectorizer
import re
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
import nltk
from sklearn.model_selection import train_test_split
import pandas as pd

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

# Import NLTK and make sure the relevant libraries are downloaded

nltk.download("stopwords")
nltk.download("wordnet")

# Extract the titles
titles = data["title"].dropna()

# Convert all titles to lowercase
titles = titles.str.lower()

# Remove punctuation from titles, remove stopwords then tokenize

lemmatizer = WordNetLemmatizer()

# Create Tokenizer


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


# Generate features
vectorizer = CountVectorizer(
    tokenizer=tokenizer, max_df=0.8, token_pattern=None, ngram_range=(1, 1)
)

print("Training Model")

X_final_train = vectorizer.fit_transform(X_train)
X_final_test = vectorizer.transform(X_test)


# Fit model

nb = MultinomialNB()
nb.fit(X_final_train, y_train)


# Store models

joblib.dump(nb, "nb.pkl")
joblib.dump(vectorizer.vocabulary_, "vocabulary.pkl")

print(
    "Naive Bayes Model saved as nb.pkl\nCountVectorizer vocabulary saved as vocabulary.pkl"
)
