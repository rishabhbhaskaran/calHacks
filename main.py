# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

mobilenet_v2 ="https://tfhub.dev/google/tf2-preview/mobilenet_v2/classification/4"
classifier_model = mobilenet_v2

import tensorflow as tf
import tensorflow_hub as hub
import PIL.Image as Image
import numpy as np
import matplotlib.pylab as plt
import pandas as pd

IMAGE_SHAPE = (224, 224)
classifier = tf.keras.Sequential([
    hub.KerasLayer(classifier_model, input_shape=IMAGE_SHAPE+(3,))
])

food = Image.open('food.jpg').resize(IMAGE_SHAPE)
food= np.array(food)/255.0

food_expended_dim = food[np.newaxis, ...]
result = classifier.predict(food_expended_dim)
predicted_class = tf.math.argmax(result[0], axis=-1)
labels_path = tf.keras.utils.get_file('ImageNetLabels.txt','https://storage.googleapis.com/download.tensorflow.org/data/ImageNetLabels.txt')
imagenet_labels = np.array(open(labels_path).read().splitlines())
predicted_class_name = imagenet_labels[predicted_class]

df=pd.read_csv('data.csv')
data=df.to_numpy()

for row in data:
    if row[1] == predicted_class_name:
        print(row[6])


