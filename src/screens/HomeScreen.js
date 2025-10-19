import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../constants';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MoniMoni</Text>
        <Text style={styles.headerSubtitle}>Your digital payment identity</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Welcome!</Text>
          <Text style={styles.welcomeText}>
            Share your bank accounts, payment links, and billing information all in one place.
          </Text>
        </View>

        {/* Main options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionCard}>
            <Text style={styles.optionIcon}>🏦</Text>
            <Text style={styles.optionTitle}>Add Bank</Text>
            <Text style={styles.optionSubtitle}>Account</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <Text style={styles.optionIcon}>💳</Text>
            <Text style={styles.optionTitle}>Payment</Text>
            <Text style={styles.optionSubtitle}>Link</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <Text style={styles.optionIcon}>📄</Text>
            <Text style={styles.optionTitle}>Billing</Text>
            <Text style={styles.optionSubtitle}>Information</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <Text style={styles.optionIcon}>📲</Text>
            <Text style={styles.optionTitle}>Share</Text>
            <Text style={styles.optionSubtitle}>QR or Link</Text>
          </TouchableOpacity>
        </View>

        {/* Additional info */}
        <View style={styles.infoCard}>
          <Text style={styles.infoText}>
            Share your payment information safely and quickly with anyone you need.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.white,
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcomeCard: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionCard: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 20,
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  optionIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    textAlign: 'center',
  },
  optionSubtitle: {
    fontSize: 12,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 5,
  },
  infoCard: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center',
    lineHeight: 20,
  },
});
