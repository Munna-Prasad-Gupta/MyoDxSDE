# import pandas as pd
# from sklearn.ensemble import RandomForestClassifier
# from sklearn.model_selection import train_test_split
# from sklearn.preprocessing import LabelEncoder
# import joblib
# import numpy as np
# import sklearn
# import numpy
# import pandas
# import joblib

# print("\n📦 Package Versions:")
# print(f"scikit-learn: {sklearn.__version__}")
# print(f"numpy: {numpy.__version__}")
# print(f"pandas: {pandas.__version__}")
# print(f"joblib: {joblib.__version__}")

# # Load and clean dataset
# df = pd.read_csv("D:/mdProject/mdProject/server/model-wrapper/new_features_md.csv")
# df.columns = df.columns.str.strip()

# # Rename target column for easier access (optional but cleaner)
# df.rename(columns={'Diagnosis (MD Yes/No)': 'Diagnosis'}, inplace=True)

# # Encode target labels
# label_encoder = LabelEncoder()
# df['Diagnosis'] = label_encoder.fit_transform(df['Diagnosis'])  # Yes/No → 1/0

# # Split features and target
# X = df.drop('Diagnosis', axis=1)
# y = df['Diagnosis']

# # Encode categorical features (like Sex, Ethnicity, etc.)
# X = pd.get_dummies(X)

# # Split data
# X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# # Train model

# print("Model trained on the following columns:")
# for col in X.columns:
#     print(col)

# model = RandomForestClassifier(n_estimators=100, random_state=42)
# model.fit(X_train, y_train)

# # Save model and metadata
# joblib.dump((model, label_encoder, X.columns.tolist()), "D:/mdProject/mdProject/server/model-wrapper/diagnosis_model.pkl")

# import joblib
# import pandas as pd

# def predict_input(user_input_dict):
#     """
#     Predicts the diagnosis (Yes/No) given a full feature input dictionary.

#     Parameters:
#         user_input_dict (dict): Dictionary with all input feature values matching training features.

#     Returns:
#         str: Predicted label ("Yes" or "No")
#     """
#     # Load model, label encoder, and feature list
#     model, label_encoder, feature_names = joblib.load("D:/mdProject/mdProject/server/model-wrapper/diagnosis_model.pkl")

#     # Convert input to DataFrame
#     input_df = pd.DataFrame([user_input_dict])

#     # Ensure all required columns are present (add missing with 0)
#     for col in feature_names:
#         if col not in input_df.columns:
#             input_df[col] = 0
#     input_df = input_df[feature_names]  # Ensure correct order

#     # Predict
#     prediction = model.predict(input_df)[0]
#     label = label_encoder.inverse_transform([prediction])[0]

#     print(f"Prediction for input: {label}")
#     return label
# # Example full input (ensure it matches trained features)
# input_data = {
#     'Age': 30,
#     'Age of Onset': 15,
#     'Muscle Strength': 4,
#     'Functional Mobility Score': 3,
#     'Fatigue Levels': 2,
#     'Pain Levels': 1,
#     'CK Levels (U/L)': 1200,
#     'Dystrophin Expression (%)': 25,
#     'Myoglobin Levels': 60,
#     'NT-proBNP': 80,
#     'FVC (%)': 75,
#     'Ejection Fraction (%)': 60,
#     'Fat Infiltration Percentage': 20,
#     'Peak Expiratory Flow Rate (PEFR)': 400,
#     '6MWT Distance (m)': 350,
#     'Gait Speed (m/s)': 1.1,
#     'Cognitive Function': 4,
#     'Quality of Life (QoL) Scores': 3,
#     'Sex_Female': 0, 'Sex_Male': 1,
#     'Ethnicity_African American': 0, 'Ethnicity_Asian': 1, 'Ethnicity_Caucasian': 0, 'Ethnicity_Hispanic': 0, 'Ethnicity_Other': 0,
#     'Family History_No': 0, 'Family History_Yes': 1,
#     'Inheritance Pattern_Autosomal Dominant': 0, 'Inheritance Pattern_Autosomal Recessive': 0, 'Inheritance Pattern_X-Linked': 1,
#     'Gait Abnormalities_Mild': 0, 'Gait Abnormalities_Moderate': 1, 'Gait Abnormalities_Normal': 0, 'Gait Abnormalities_Severe': 0,
#     'Contractures_No': 0, 'Contractures_Yes': 1,
#     'Reflexes_Hyperreflexia': 0, 'Reflexes_Hyporeflexia': 0, 'Reflexes_Normal': 1,
#     'Muscle Tone_Flaccid': 0, 'Muscle Tone_Normal': 1, 'Muscle Tone_Spastic': 0,
#     'Genetic Test Results_Negative': 0, 'Genetic Test Results_Positive': 1,
#     'Muscle Biopsy_Negative': 0, 'Muscle Biopsy_Positive': 1,
#     'EMG Results_Abnormal': 1, 'EMG Results_Normal': 0,
#     'Respiratory Support Required_No': 1, 'Respiratory Support Required_Yes': 0,
#     'Physical Activity_Active': 0, 'Physical Activity_Moderate': 1, 'Physical Activity_Sedentary': 0,
#     'Dietary Habits_Balanced': 1, 'Dietary Habits_High-Protein': 0, 'Dietary Habits_Vegetarian': 0,
#     'Exposure to Toxins_No': 1, 'Exposure to Toxins_Yes': 0
# }

# # Predict
# predict_input(input_data)




import joblib
import pandas as pd


def predict_input(user_input_dict):
    """
    Predicts the diagnosis (Yes/No), diagnosis score, and risk percentage.
    
    Parameters:
        user_input_dict (dict): Dictionary with all input feature values matching training features.
    
    Returns:
        dict: Contains predicted diagnosis label ("Yes" or "No"), diagnosis score, and risk percentage.
    """
    # Load model, label encoder, and feature list
    model, label_encoder, feature_names = joblib.load("D:/mdProject/mdProject/server/model-wrapper/diagnosis_model.pkl")

    # Convert input to DataFrame
    input_df = pd.DataFrame([user_input_dict])

    # Ensure all required columns are present (add missing with 0)
    for col in feature_names:
        if col not in input_df.columns:
            input_df[col] = 0
    input_df = input_df[feature_names]  # Ensure correct order

    # Predict the class (0 or 1)
    prediction = model.predict(input_df)[0]

    # Get probability for both classes (Yes and No)
    prob = model.predict_proba(input_df)[0]

    # Get the predicted label from the encoder (Yes/No)
    label = label_encoder.inverse_transform([prediction])[0]

    # Calculate risk percentage for the predicted class
    risk_percentage = prob[1] * 100 if label == 'Yes' else prob[0] * 100

    # Calculate diagnosis score, which would be the raw probability for the predicted class
    diagnosis_score = prob[1] if label == 'Yes' else prob[0]

    # Return prediction, diagnosis score, and risk percentage
    result = {
        "Prediction": label,  # Yes or No
        "Diagnosis Score": round(diagnosis_score, 2),  # Raw probability for prediction
        "Risk Percentage": round(risk_percentage, 2)  # Probability as percentage
    }

    print(f"Prediction: {label}, Diagnosis Score: {round(diagnosis_score, 2)}, Risk Percentage: {round(risk_percentage, 2)}%")
    
    return result

# Example input data (ensure it matches your model’s expected features)
input_data = {
    'Age': 30,
    'Age of Onset': 15,
    'Muscle Strength': 4,
    'Functional Mobility Score': 3,
    'Fatigue Levels': 2,
    'Pain Levels': 1,
    'CK Levels (U/L)': 1200,
    'Dystrophin Expression (%)': 25,
    'Myoglobin Levels': 60,
    'NT-proBNP': 80,
    'FVC (%)': 75,
    'Ejection Fraction (%)': 60,
    'Fat Infiltration Percentage': 20,
    'Peak Expiratory Flow Rate (PEFR)': 400,
    '6MWT Distance (m)': 350,
    'Gait Speed (m/s)': 1.1,
    'Cognitive Function': 4,
    'Quality of Life (QoL) Scores': 3,
    'Sex_Female': 0, 'Sex_Male': 1,
    'Ethnicity_African American': 0, 'Ethnicity_Asian': 1, 'Ethnicity_Caucasian': 0, 'Ethnicity_Hispanic': 0, 'Ethnicity_Other': 0,
    'Family History_No': 0, 'Family History_Yes': 1,
    'Inheritance Pattern_Autosomal Dominant': 0, 'Inheritance Pattern_Autosomal Recessive': 0, 'Inheritance Pattern_X-Linked': 1,
    'Gait Abnormalities_Mild': 0, 'Gait Abnormalities_Moderate': 1, 'Gait Abnormalities_Normal': 0, 'Gait Abnormalities_Severe': 0,
    'Contractures_No': 0, 'Contractures_Yes': 1,
    'Reflexes_Hyperreflexia': 0, 'Reflexes_Hyporeflexia': 0, 'Reflexes_Normal': 1,
    'Muscle Tone_Flaccid': 0, 'Muscle Tone_Normal': 1, 'Muscle Tone_Spastic': 0,
    'Genetic Test Results_Negative': 0, 'Genetic Test Results_Positive': 1,
    'Muscle Biopsy_Negative': 0, 'Muscle Biopsy_Positive': 1,
    'EMG Results_Abnormal': 1, 'EMG Results_Normal': 0,
    'Respiratory Support Required_No': 1, 'Respiratory Support Required_Yes': 0,
    'Physical Activity_Active': 0, 'Physical Activity_Moderate': 1, 'Physical Activity_Sedentary': 0,
    'Dietary Habits_Balanced': 1, 'Dietary Habits_High-Protein': 0, 'Dietary Habits_Vegetarian': 0,
    'Exposure to Toxins_No': 1, 'Exposure to Toxins_Yes': 0
}

# Predict
prediction = predict_input(input_data)
