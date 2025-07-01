from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
from Crypto.Random import get_random_bytes

def generate_keys():
    key = RSA.generate(2048)
    private_key = key.export_key()
    public_key = key.publickey().export_key()
    return private_key, public_key

def encrypt_message(public_key, message):
    recipient_key = RSA.import_key(public_key)
    cipher_rsa = PKCS1_OAEP.new(recipient_key)
    encrypted_message = cipher_rsa.encrypt(message)
    return encrypted_message

def decrypt_message(private_key, encrypted_message):
    private_key = RSA.import_key(private_key)
    cipher_rsa = PKCS1_OAEP.new(private_key)
    decrypted_message = cipher_rsa.decrypt(encrypted_message)
    return decrypted_message

if __name__ == "__main__":
    private_key, public_key = generate_keys()
    message = b'This is a secret message'
    encrypted_message = encrypt_message(public_key, message)
    print("Encrypted Message:", encrypted_message)
    decrypted_message = decrypt_message(private_key, encrypted_message)
    print("Decrypted Message:", decrypted_message)