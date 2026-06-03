from flask import Flask,request,jsonify
import pickle
app=Flask(__name__)
model=pickle.load(open("model.pkl","rb"))
@app.route("/predict",methods=["POST"])
def predict():
    data=request.get_json()
    test_data=[[data["preg"],data["glucose"],data["bloodpressure"],data["skinthickness"],data["insulin"],data["bmi"],data["age"]]]
    result = model.predict(test_data)
    print(result)
    return jsonify({
        "prediction": float(result[0])
    })
    
if __name__ == "__main__":
    app.run(debug=True)
