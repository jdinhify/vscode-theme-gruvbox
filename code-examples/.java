package globals;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;

import org.apache.commons.codec.binary.Base64;

import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.Signature;
import java.security.SignatureException;
import java.security.cert.Certificate;
import java.security.cert.CertificateEncodingException;
import java.security.cert.CertificateFactory;
import java.security.cert.X509Certificate;


import java.lang.Thread;

public class Resources {

//  ------- PORTS ------------
	public static final int REGISTRY_PORT = 1099;

//  ------- OTHER ------------
	public static final String CA_DIGEST = "SHA-256";

//  ------- CERTIFICATES ------------

	public static Certificate readCertificateFile(String certificateFilePath) throws Exception {
		FileInputStream fis;

		try { fis = new FileInputStream(certificateFilePath); }
		catch (FileNotFoundException e) {
			System.err.println(ERROR_MSG("Certificate File not found: " + certificateFilePath));
			return null;
		}
		BufferedInputStream bis = new BufferedInputStream(fis);
		CertificateFactory cf = CertificateFactory.getInstance("X.509");

		if (bis.available() > 0) { return cf.generateCertificate(bis); }
		bis.close();
		fis.close();
		return null;
	}

	public static boolean verifySignedCertificate(Certificate certificate, PublicKey caPublicKey) {
		try { certificate.verify(caPublicKey); }
		catch (Exception e) {
			return false;
		}
		return true;
	}

	public static String convertToPemCertificate(X509Certificate certificate) {
		Base64 encoder = new Base64(64, "\n".getBytes());
		String cert_begin = "-----BEGIN CERTIFICATE-----\n";
		String end_cert = "-----END CERTIFICATE-----\n";

		byte[] derCert = null;
		try {
			derCert = certificate.getEncoded();
		} catch (CertificateEncodingException e) {
			System.err.println(WARNING_MSG("Error in certificate conversion :" + e.getMessage()));
			return null;
		}
		String pemCertPre = new String(encoder.encode(derCert));
		String pemCert = cert_begin + pemCertPre + end_cert;
		return pemCert;
	}

//  -----------------------------------


//  ------- SIGNATURES ------------

	public static byte[] makeDigitalSignature(byte[] bytes, PrivateKey privateKey) throws Exception {
		Signature sig = Signature.getInstance("SHA1WithRSA");
		sig.initSign(privateKey);
		sig.update(bytes);
		byte[] signature = sig.sign();
		return signature;
	}

	public static boolean verifyDigitalSignature(byte[] cipherDigest, byte[] bytes, PublicKey publicKey) throws Exception {
		Signature sig = Signature.getInstance("SHA1WithRSA");
		sig.initVerify(publicKey);
		sig.update(bytes);
		try {
			return sig.verify(cipherDigest);
		} catch (SignatureException se) {
			System.err.println(WARNING_MSG("Invalid Signature :" + se.getMessage()));
			return false;
		}
	}

}
