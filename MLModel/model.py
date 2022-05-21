import pandas as pd
import numpy as np
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn import ensemble
import joblib

data=pd.read_csv('Train_Loan_Home.csv')#load Training data into a pandas dataframe 
print(data.head())
columnsX=data.columns[1:-1]# split the data columns into ColumnX
columnsY=data.columns[-1]#split the label columns into columnY
catCol=['Gender','Married','Education','Self_Employed','Property_Area','Dependents']#Categorical data columns label
numWithScalingCol=['ApplicantIncome','CoapplicantIncome','LoanAmount','Loan_Amount_Term']# numerical data with requireds reletive scaling columns label
numerCol=['Credit_History']#Numerical data column label 
##This step in the pipeline applies standard scaling and fills the missing value with the median of the column
numeric_transformer_scaling = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())])
##
##This step in the pipeline  fills the missing colum values with the value 99
numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='constant', fill_value=99))])
##
##This step in the pipeline fills missing values in the categorical feild with the value 'missing' and then applies one hot encoding to get a vector representation
categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))])
##

##Embbed all the transformation steps in a preprocessor  
preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer_scaling, numWithScalingCol),
        ('num2', numeric_transformer, numerCol),
        ('cat', categorical_transformer, catCol)])
##

##This is the where the actual work happens. Raw data is received and transformed using the preprocessor. Then a random forest classifier model is used to predict probability of getting a loan approved  
modelPipeline = Pipeline(steps=[('preprocessor', preprocessor),
                      ('classifier', ensemble.RandomForestClassifier())])
##
modelPipeline.fit(data[columnsX],data[columnsY])#Fitting the given  data into the model 
scores=modelPipeline.predict_proba(data[columnsX])[:,-1]#predicting the probability scores 
data2=pd.read_csv('Test_Loan_Home.csv')
scores=modelPipeline.predict_proba(data2[columnsX])[:,-1]#verifying model efficiency on testing data
scoreOutput={j:k for j,k in zip(data2['Loan_ID'],scores)}
joblib.dump(modelPipeline,'modelPipeline.pkl')#exporting the entire pipeline into a pickle file 


