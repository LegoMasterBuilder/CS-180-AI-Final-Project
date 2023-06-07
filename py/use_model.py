import joblib

nb = joblib.load("nb.pkl")
vocabulary = joblib.load("vocabulary.pkl")

# Recreate Vectorizer
import re
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

lemmatizer = WordNetLemmatizer()


def tokenizer(text):
    # URL Removal
    text = re.sub(r"http\S+", "", text)
    # Punctuation Removal
    text = "".join([c for c in text if c.isalnum() or c == " "])
    # Tokenization
    tok_list = nltk.word_tokenize(text)
    # Stopword Removal
    tok_list = [word for word in tok_list if word not in stopwords.words("english")]
    # Lemmatization
    tok_list = [lemmatizer.lemmatize(word) for word in tok_list]
    return tok_list


from sklearn.feature_extraction.text import CountVectorizer

vect = CountVectorizer(
    tokenizer=tokenizer, max_df=0.8, token_pattern=None, ngram_range=(1, 1)
)
vect.vocabulary_ = vocabulary

def predict(x: list):
    x_final = vect.transform(x)
    prediction = nb.predict(x_final)
    return prediction

if __name__ == "__main__":
    import sys

    # x = [sys.argv[1:]]
    x = sys.argv[1:]
    print(predict(x))
