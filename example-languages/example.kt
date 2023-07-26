package com.example.expo.language

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

class SettingsActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        fragmentManager.beginTransaction()
            .replace(android.R.id.content, SettingsFragment())
            .commit()
    }
}

private fun setUpPurchaseButtons(cipherNotInvalidated: Cipher, defaultCipher: Cipher) {
    val purchaseButton = findViewById<Button>(R.id.purchase_button)
    val purchaseButtonNotInvalidated = findViewById<Button>(R.id.purchase_button_not_invalidated)

    if (BiometricManager.from(application).canAuthenticate() == BiometricManager.BIOMETRIC_SUCCESS) {
        createKey(DEFAULT_KEY_NAME)
        createKey(KEY_NAME_NOT_INVALIDATED, false)

        purchaseButtonNotInvalidated.run {
            isEnabled = true
            setOnClickListener(PurchaseButtonClickListener(cipherNotInvalidated, KEY_NAME_NOT_INVALIDATED))
        }
        purchaseButton.run {
            isEnabled = true
            setOnClickListener(PurchaseButtonClickListener(defaultCipher, DEFAULT_KEY_NAME))
        }
    } else {
        showToast(getString(R.string.setup_lock_screen))
        purchaseButton.isEnabled = false
        purchaseButtonNotInvalidated.isEnabled = false
    }
}

private fun setupCiphers(): Pair<Cipher, Cipher> {
    val defaultCipher: Cipher
    val cipherNotInvalidated: Cipher
    try {
        val cipherString = "$KEY_ALGORITHM_AES/$BLOCK_MODE_CBC/$ENCRYPTION_PADDING_PKCS7"
        defaultCipher = Cipher.getInstance(cipherString)
        cipherNotInvalidated = Cipher.getInstance(cipherString)
    } catch (e: Exception) {
        when (e) {
            is NoSuchAlgorithmException,
            is NoSuchPaddingException ->
                throw RuntimeException("Failed to get an instance of Cipher", e)
            else -> throw e
        }
    }
    return Pair(defaultCipher, cipherNotInvalidated)
}

companion object {
    private const val ANDROID_KEY_STORE = "AndroidKeyStore"
}
