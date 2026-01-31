'use client';

import { useEffect, useState } from 'react';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

/**
 * DEBUG COMPONENT
 * Use this to verify what's actually in Firestore
 * 
 * Add this to any page temporarily to debug
 */
export default function FirestoreDebugger() {
  const [allScreens, setAllScreens] = useState<any[]>([]);
  const [specificScreen, setSpecificScreen] = useState<any>(null);
  const [testSlug, setTestSlug] = useState('georgia');
  const [loading, setLoading] = useState(false);

  const fetchAllScreens = async () => {
    setLoading(true);
    try {
      const screensSnapshot = await getDocs(collection(db, 'screens'));
      const screens = screensSnapshot.docs.map(doc => ({
        documentId: doc.id,
        ...doc.data()
      }));
      setAllScreens(screens);
      console.log('All screens:', screens);
    } catch (error) {
      console.error('Error fetching all screens:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSpecificScreen = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, 'screens', testSlug);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = {
          documentId: docSnap.id,
          ...docSnap.data()
        };
        setSpecificScreen(data);
        console.log(`Screen '${testSlug}':`, data);
      } else {
        setSpecificScreen({ error: `Document 'screens/${testSlug}' does not exist` });
        console.log(`Document 'screens/${testSlug}' does not exist`);
      }
    } catch (error) {
      console.error('Error fetching specific screen:', error);
      setSpecificScreen({ error: String(error) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      padding: '40px', 
      background: '#1a1a1a', 
      color: '#fff', 
      minHeight: '100vh',
      fontFamily: 'monospace',
      fontSize: '14px'
    }}>
      <h1 style={{ marginBottom: '20px', color: '#4ade80' }}>🔍 Firestore Debugger</h1>
      
      <div style={{ marginBottom: '40px', padding: '20px', background: '#2a2a2a', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '16px', color: '#fbbf24' }}>Test 1: Fetch All Screens</h2>
        <button
          onClick={fetchAllScreens}
          disabled={loading}
          style={{
            padding: '12px 24px',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold'
          }}
        >
          {loading ? 'Loading...' : 'Fetch All Screens'}
        </button>
        
        {allScreens.length > 0 && (
          <div style={{ marginTop: '20px' }}>
            <p style={{ color: '#4ade80', marginBottom: '10px' }}>
              ✅ Found {allScreens.length} screen(s) in Firestore
            </p>
            <pre style={{ 
              background: '#1a1a1a', 
              padding: '16px', 
              borderRadius: '6px', 
              overflow: 'auto',
              maxHeight: '400px'
            }}>
              {JSON.stringify(allScreens, null, 2)}
            </pre>
          </div>
        )}
      </div>

      <div style={{ padding: '20px', background: '#2a2a2a', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '16px', color: '#fbbf24' }}>Test 2: Fetch Specific Screen by Slug</h2>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
          <input
            type="text"
            value={testSlug}
            onChange={(e) => setTestSlug(e.target.value)}
            placeholder="Enter slug (e.g., georgia)"
            style={{
              padding: '12px',
              background: '#1a1a1a',
              color: 'white',
              border: '1px solid #444',
              borderRadius: '6px',
              flex: 1
            }}
          />
          <button
            onClick={fetchSpecificScreen}
            disabled={loading}
            style={{
              padding: '12px 24px',
              background: '#8b5cf6',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: loading ? 'not-allowed' : 'pointer',
              fontWeight: 'bold'
            }}
          >
            {loading ? 'Loading...' : 'Fetch Screen'}
          </button>
        </div>
        
        {specificScreen && (
          <div style={{ marginTop: '20px' }}>
            {specificScreen.error ? (
              <p style={{ color: '#ef4444' }}>❌ {specificScreen.error}</p>
            ) : (
              <>
                <p style={{ color: '#4ade80', marginBottom: '10px' }}>
                  ✅ Found: screens/{specificScreen.documentId}
                </p>
                <pre style={{ 
                  background: '#1a1a1a', 
                  padding: '16px', 
                  borderRadius: '6px', 
                  overflow: 'auto',
                  maxHeight: '400px'
                }}>
                  {JSON.stringify(specificScreen, null, 2)}
                </pre>
              </>
            )}
          </div>
        )}
      </div>

      <div style={{ 
        marginTop: '40px', 
        padding: '20px', 
        background: '#2a2a2a', 
        borderRadius: '8px' 
      }}>
        <h2 style={{ marginBottom: '12px', color: '#fbbf24' }}>Expected Structure:</h2>
        <pre style={{ 
          background: '#1a1a1a', 
          padding: '16px', 
          borderRadius: '6px',
          color: '#94a3b8' 
        }}>
{`Firestore Structure:
screens/
  ├── georgia/              ← Document ID = slug
  │   ├── name: "Georgia"
  │   ├── slug: "georgia"
  │   ├── flag: "🇬🇪"
  │   ├── overview: {...}
  │   ├── stats: {...}
  │   └── ... (all other fields)
  ├── russia/
  └── philippines/

User App Should Fetch:
const docRef = doc(db, 'screens', 'georgia');
const docSnap = await getDoc(docRef);`}
        </pre>
      </div>
    </div>
  );
}