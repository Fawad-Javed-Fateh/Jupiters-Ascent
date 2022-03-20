import pandas as pd
import numpy as np
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn import ensemble
import joblib

data=pd.read_csv('Train_Loan_Home.csv')
print(data.head())
columnsX=data.columns[1:-1]
columnsY=data.columns[-1]
catCol=['Gender','Married','Education','Self_Employed','Property_Area','Dependents']
numWithScalingCol=['ApplicantIncome','CoapplicantIncome','LoanAmount','Loan_Amount_Term']
numerCol=['Credit_History']
numeric_transformer_scaling = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='median')),
    ('scaler', StandardScaler())])

numeric_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='constant', fill_value=99))])

categorical_transformer = Pipeline(steps=[
    ('imputer', SimpleImputer(strategy='constant', fill_value='missing')),
    ('onehot', OneHotEncoder(handle_unknown='ignore'))])


preprocessor = ColumnTransformer(
    transformers=[
        ('num', numeric_transformer_scaling, numWithScalingCol),
        ('num2', numeric_transformer, numerCol),
        ('cat', categorical_transformer, catCol)])


modelPipeline = Pipeline(steps=[('preprocessor', preprocessor),
                      ('classifier', ensemble.RandomForestClassifier())])

modelPipeline.fit(data[columnsX],data[columnsY])
scores=modelPipeline.predict_proba(data[columnsX])[:,-1]
data2=pd.read_csv('Test_Loan_Home.csv')
scores=modelPipeline.predict_proba(data2[columnsX])[:,-1]
scoreOutput={j:k for j,k in zip(data2['Loan_ID'],scores)}
joblib.dump(modelPipeline,'modelPipeline.pkl')


