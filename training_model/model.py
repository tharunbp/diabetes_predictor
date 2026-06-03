import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score,confusion_matrix
import pickle
df=pd.read_csv("diabetes.csv")
x=df.drop("Outcome",axis=1)
y=df['Outcome']
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2,random_state=25)
model=RandomForestClassifier(n_estimators=100,max_depth=3,random_state=20)
model.fit(x_train,y_train)
pred=model.predict(x_test)
print("Accuracy : %.2f"% (accuracy_score(y_test,pred)*100))
with open('model.pkl','wb') as f:
    pickle.dump(model,f)
print("Model saved Successfully")