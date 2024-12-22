<template>
  <div id="app">
    <button @click="copyAdult" class="copy-button adult-button">Adult</button>
    <button @click="copyMom" class="copy-button mom-button">Mom</button>
    <button @click="copyDad" class="copy-button dad-button">Dad</button>
    <button @click="copyParents" class="copy-button parents-button">
      Parents
    </button>
    <button @click="copyGuardian" class="copy-button guardian-button">
      Guardian
    </button>
  </div>
</template>


<script>
export default {
  data() {
    return {
      adultText:
        "The patient is given and understands strict follow up and return instruction, patient agrees and wishes to be discharged.",
      momText:
        "The mom is given and understands strict follow up and return instruction, mom agrees and wishes to be discharged.",
      dadText:
        "The dad is given and understands strict follow up and return instruction, dad agrees and wishes to be discharged.",
      parentsText:
        "The parents are given and understand strict follow up and return instruction, the parents agree and wish to be discharged.",
      guardianText:
        "The guardian is given and understands strict follow up and return instruction, guardian agrees and wishes to be discharged.",
    };
  },
  methods: {
    copyAdult() {
      navigator.clipboard
        .writeText(this.adultText)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    },
    copyMom() {
      navigator.clipboard
        .writeText(this.momText)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    },
    copyDad() {
      navigator.clipboard
        .writeText(this.dadText)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    },
    copyParents() {
      navigator.clipboard
        .writeText(this.parentsText)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    },
    copyGuardian() {
      navigator.clipboard
        .writeText(this.guardianText)
        .then(() => {
          console.log("Text copied to clipboard");
        })
        .catch((err) => {
          console.error("Could not copy text: ", err);
        });
    },
  },
};
</script>


<style scoped>
.copy-button {
  color: #fff; /* White text */
  padding: 15px 30px; /* Large padding for size */
  font-size: 18px; /* Larger font size */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


.adult-button {
  background-color: #ffd700; /* Golden yellow color */
}


.adult-button:hover {
  background-color: #a18a3d; /* Slightly darker yellow on hover */
}


.mom-button {
  background-color: #ff69b4; /* Pink color */
}


.mom-button:hover {
  background-color: #c71585; /* Slightly darker pink on hover */
}


.dad-button {
  background-color: #1e90ff; /* Blue color */
}


.dad-button:hover {
  background-color: #1c86ee; /* Slightly darker blue on hover */
}


.parents-button {
  background-color: #800080; /* Purple color */
}


.parents-button:hover {
  background-color: #4b0082; /* Slightly darker purple on hover */
}


.guardian-button {
  background-color: #808080; /* Gray color */
}


.guardian-button:hover {
  background-color: #696969; /* Slightly darker gray on hover */
}


.text-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  box-sizing: border-box;
}
</style>






