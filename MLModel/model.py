import pandas as  pd
from keras.models import Sequential
from keras.layers import Dense
from keras.wrappers.scikit_learn import KerasClassifier
from sklearn.model_selection import cross_val_score
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import StratifiedKFold
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline

dataframe=pd.read_csv("sonar.all-data",header=None)
print(dataframe.head())
dataset=dataframe.values
X=dataset[:,0:60].astype(float)
Y=dataset[:,60]