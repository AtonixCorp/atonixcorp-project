from qiskit import QuantumCircuit, Aer, execute
import numpy as np

def prepare_qubit(bit, basis):
    qc = QuantumCircuit(1, 1)
    if bit == 1:
        qc.x(0)
    if basis == 1:
        qc.h(0)
    return qc

def measure_qubit(qc, basis):
    if basis == 1:
        qc.h(0)
    qc.measure(0, 0)
    backend = Aer.get_backend('qasm_simulator')
    result = execute(qc, backend, shots=1).result()
    counts = result.get_counts()
    return int(list(counts.keys())[0])

def bb84_protocol(n):
    alice_bits = np.random.randint(2, size=n)
    alice_bases = np.random.randint(2, size=n)
    bob_bases = np.random.randint(2, size=n)
    alice_qubits = [prepare_qubit(alice_bits[i], alice_bases[i]) for i in range(n)]
    bob_results = [measure_qubit(alice_qubits[i], bob_bases[i]) for i in range(n)]
    key = [alice_bits[i] for i in range(n) if alice_bases[i] == bob_bases[i]]
    return key

if __name__ == "__main__":
    n = 100
    key = bb84_protocol(n)
    print("Generated Key:", key)